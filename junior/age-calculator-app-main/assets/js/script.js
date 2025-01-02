const form = document.querySelector(`#dateInput`);
const errorLabels = document.getElementsByClassName("errormessage");
const inputFields = document.getElementsByClassName("inputField");
const dateLabels = document.getElementsByClassName("dateLabels");
const yearsLabel = document.getElementById("years");
const daysLabel = document.getElementById("days");
const monthsLabel = document.getElementById("months");
const arrowButton = document.getElementById("arrow");

const addErrorLabel = (element) => {
  element.classList.add("errorLabel");
};

const removeErrorLabel = (element) => {
  element.classList.remove("errorLabel");
};

const addHide = (element) => {
  element.classList.add("hide");
};

const removeHide = (element) => {
  element.classList.remove("hide");
};

const addRedBorder = (element) => {
  element.classList.add("redBorder");
};

const removeRedBorder = (element) => {
  element.classList.remove("redBorder");
};

const addError = (index, message) => {
  removeHide(errorLabels[index]);
  addRedBorder(inputFields[index]);
  addErrorLabel(dateLabels[index]);
  errorLabels[index].innerHTML = message;
};

const resetWarnings = () => {
  for (let i = 0; i < errorLabels.length; i++) {
    addHide(errorLabels[i]);
    removeRedBorder(inputFields[i]);
    removeErrorLabel(dateLabels[i]);
    errorLabels[i].innerHTML = "error";
  }
  yearsLabel.innerHTML = "--";
  monthsLabel.innerHTML = "--";
  daysLabel.innerHTML = "--";
};

const setTimeAlive = (years, months, days) => {
  yearsLabel.innerHTML = years;
  monthsLabel.innerHTML = months;
  daysLabel.innerHTML = days;
};

const handleSubmit = () => {
  resetWarnings();
  const inputs = [];
  let validInput = true;
  let validDate = true;
  const today = new Date();
  for (let i = 0; i < inputFields.length; i++) {
    inputs.push(parseInt(inputFields[i].value));
    if (!inputs[i]) {
      addError(i, "this field is required");
      validInput = false;
    }
  }

  if (validInput) {
    if (!(inputs[0] > 0 && inputs[0] < 32)) {
      addError(0, "Must be a valid day");
      validDate = false;
    }
    if (!(inputs[1] > 0 && inputs[1] < 12)) {
      addError(1, "Must be a valid Month");
      validDate = false;
    }
    if (inputs[2] > today.getFullYear()) {
      addError(2, "Must be in the past");
      validDate = false;
    }
  }

  if (validDate) {
    const birthday = new Date(inputs[2], inputs[1] - 1, inputs[0]);
    if (
      birthday.getFullYear() == inputs[2] &&
      birthday.getMonth() == inputs[1] - 1 &&
      birthday.getDate() == inputs[0]
    ) {
      let years = today.getFullYear() - birthday.getFullYear();
      let months = today.getMonth() - birthday.getMonth();
      let days = today.getDate() - birthday.getDate();
      if (months < 0) {
        years--;
        months = 12 + months;
      }
      if (days < 0) {
        months--;
        days = 31 + days;
      }
      setTimeAlive(years, months, days);
    } else {
      addError(0, "must be a valid date");
      addError(1, "");
      addError(2, "");
    }
    console.log(birthday);
  }

  console.log(today.getFullYear());
  console.log(inputs);

  //form.reset();
};

arrowButton?.addEventListener("click", handleSubmit);

//form.addEventListener(`submit`, handleSubmit);
