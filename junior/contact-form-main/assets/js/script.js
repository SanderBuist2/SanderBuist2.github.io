const form = document.querySelector(`#contactForm`);
const errorLabels = document.getElementsByClassName("required");
const requiredField = document.getElementsByClassName("requiredField");
const invalidEmail = document.getElementsByClassName("invalidemail");
const succesMessage = document.getElementById("succesMessage");
const labels = [
  "firstName",
  "lastName",
  "email",
  "queryType",
  "message",
  "consent",
];

succesMessage?.addEventListener("click", () => {
  succesMessage.classList.add("hide");
});

const addHide = (element) => {
  element.classList.add("hide");
};

const addRedBorder = (element) => {
  element.classList.add("redBorder");
};

const removeRedBorder = (element) => {
  element.classList.remove("redBorder");
};

const handleSubmit = (event) => {
  for (let i = 0; i < errorLabels.length; i++) {
    errorLabels[i].classList.remove("hide");
    addRedBorder(requiredField[i]);
  }
  invalidEmail[0].classList.add("hide");
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  let correctFields = 0;
  formData.forEach((value, key) => {
    const index = labels.indexOf(key);
    if (index >= 0)
      if (value) {
        correctFields++;
        addHide(errorLabels[index]);
        removeRedBorder(requiredField[index]);
        if (index == 2 && !validateEmail(value)) {
          correctFields--;
          addRedBorder(requiredField[index]);
          invalidEmail[0].classList.remove("hide");
        }
      }
  });
  if (correctFields == 6) {
    succesMessage?.classList.remove("hide");
    form.reset();
  }
};

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

form.addEventListener(`submit`, handleSubmit);
