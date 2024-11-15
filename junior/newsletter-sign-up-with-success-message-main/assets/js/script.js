const form = document.querySelector(`#subscribeForm`);
const subscribButton = document.getElementById("subscribe");
const dismissButton = document.getElementById("dismiss");
const errorText = document.getElementById("errorText");
const inputField = document.getElementById("email");
const subscribedEmail = document.getElementById("subscribedEmail");
const thanks = document.getElementById("thanks");

const addHide = (element) => {
  element.classList.add("hide");
};

const removeHide = (element) => {
  element.classList.remove("hide");
};

const handleSucces = (email) => {
  addHide(form);
  removeHide(thanks);
  form.reset();
  subscribedEmail.innerHTML = email;
};

const handleError = (message) => {
  errorText.innerHTML = message;
  inputField.classList.add("errorField");
  if (!message) inputField.classList.remove("errorField");
};

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    if (key == "email")
      if (value) {
        if (validateEmail(value)) {
          handleSucces(value);
        } else handleError("Valid email required");
      } else handleError("This field is required");
  });
};

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

form.addEventListener(`submit`, handleSubmit);

dismissButton?.addEventListener("click", () => {
  removeHide(form);
  addHide(thanks);
  handleError("");
});
