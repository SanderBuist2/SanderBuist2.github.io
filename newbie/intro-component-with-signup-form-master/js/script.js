const errormessages = [
  "First name cannot be empty",
  "Last name cannot be empty",
  "Looks like this is not an email",
  "Password cannot be empty",
];

const inputfields = document.getElementsByClassName("inputfield");
const errorSigns = document.getElementsByClassName("error");
const subscribingbutton = document.getElementById("button");

const isValidEmail = (email) => {
  const atLocation = email.indexOf("@");
  if (atLocation > 0) {
    const domain = email.substring(atLocation + 1);
    if (domain.indexOf(".") > 0 && domain.indexOf(".") < domain.length - 1) {
      return true;
    }
  }
  return false;
};

const removeError = (index) => {
  errorSigns[index].classList.remove("errorshow");
  inputfields[index].classList.remove("inputfielderror");
  if (inputfields[index].nextSibling?.nodeName == "P") {
    console.log("removing error");
    inputfields[index].nextSibling?.remove();
  }
};

const addError = (index) => {
  errorSigns[index].classList.add("errorshow");
  inputfields[index].classList.add("inputfielderror");

  if (inputfields[index].nextSibling?.nodeName != "P") {
    const pItem = document.createElement("p");
    pItem.innerHTML = errormessages[index];
    pItem.classList.add("errormessage");
    inputfields[index].insertAdjacentElement("afterend", pItem);
  }
};

subscribingbutton?.addEventListener("click", () => {
  const information = [];
  let allcorrect = true;
  for (let i = 0; i < inputfields.length; i++) {
    if (i == 2 && isValidEmail(inputfields[i].value)) {
      information[i] = inputfields[i].value;
      removeError(i);
    } else if (inputfields[i].value && i != 2) {
      removeError(i);
      information[i] = inputfields[i].value;
    } else {
      addError(i);
      allcorrect = false;
    }
  }
  if (allcorrect) {
    alert(
      `Thank ${information[0]} ${information[1]} for subscribing. More information will be sent to ${information[2]}`
    );
    for (let i = 0; i < inputfields.length; i++) {
      inputfields[i].value = "";
    }
  }
});
