const calculateButton = document.getElementById("calculateButton");
const amount = document.getElementById("amount");
const term = document.getElementById("term");
const type = document.getElementsByName("Mortgage");
const rate = document.getElementById("rate");
const emptyResult = document.getElementById("emptyResult");
const calculatedResults = document.getElementById("calculatedResults");
const monthlyRepayment = document.getElementById("monthlyRepayment");
const totalRepayment = document.getElementById("totalRepayment");
const clearButton = document.getElementById("clearButton");
const amountrequired = document.getElementById("amountrequired");
const termrequired = document.getElementById("termrequired");
const raterequired = document.getElementById("raterequired");
const typerequired = document.getElementById("typerequired");

const formatNumberWithCommas = (x) => {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
};

const addHide = (element, hide) => {
  if (hide) {
    element.classList.add("hide");
  } else element.classList.remove("hide");
};

const addError = (element, error) => {
  if (error) {
    element.classList.add("inputerror");
  } else element.classList.remove("inputerror");
};

const clearWarnings = () => {
  addHide(emptyResult);
  addHide(calculatedResults, true);
  addHide(amountrequired, true);
  addHide(termrequired, true);
  addHide(raterequired, true);
  addHide(typerequired, true);

  addError(amount);
  addError(term);
  addError(rate);
};

calculateButton?.addEventListener("click", () => {
  let morgageAmount = parseFloat(amount?.childNodes[1].value);
  let morgageTerm = parseFloat(term?.childNodes[1].value);
  let morgageRate = parseFloat(rate?.childNodes[1].value);
  let morgageType = "";
  for (let i = 0; i < type.length; i++) {
    if (type[i].checked) {
      morgageType = type[i].value;
    }
  }
  clearWarnings();

  if (morgageAmount && morgageTerm && morgageRate && morgageType) {
    amountrequired?.classList.add("hide");
    if (morgageType == "Repayment") {
      const monthly = calculateRepayment(
        morgageAmount,
        morgageTerm,
        morgageRate
      );
      monthlyRepayment.innerHTML = `£ ${formatNumberWithCommas(
        monthly.toFixed(2)
      )}`;
      totalRepayment.innerHTML = `£ ${formatNumberWithCommas(
        (monthly * morgageTerm * 12).toFixed(2)
      )}`;
    } else if (morgageType == "Interest") {
      const monthly = calculateInterest(
        morgageAmount,
        morgageTerm,
        morgageRate
      );
      monthlyRepayment.innerHTML = `£ ${formatNumberWithCommas(
        monthly.toFixed(2)
      )}`;
      totalRepayment.innerHTML = `£ ${formatNumberWithCommas(
        (monthly * morgageTerm * 12).toFixed(2)
      )}`;
    } else {
      console.log("unknown morgage Type");
    }
    addHide(emptyResult, true);
    addHide(calculatedResults);
    console.log("good values");
  } else {
    console.log(!morgageAmount);
    if (!morgageAmount) {
      addHide(amountrequired, false);
      addError(amount, true);
    }
    if (!morgageTerm) {
      addHide(termrequired, false);
      addError(term, true);
    }
    if (!morgageRate) {
      addHide(raterequired, false);
      addError(rate, true);
    }
    if (!morgageType) addHide(typerequired, false);
  }
});

clearButton?.addEventListener("click", () => {
  clearWarnings();
  amount.childNodes[1].value = "";
  term.childNodes[1].value = "";
  rate.childNodes[1].value = "";
  for (let i = 0; i < type.length; i++) {
    if (type[i].checked) {
      type[i].checked = false;
    }
  }
});

const calculateRepayment = (morgageAmount, morgageTerm, morgageRate) => {
  const rate = morgageRate / 100;
  const term = morgageTerm * 12;

  return ((rate / 12) * morgageAmount) / (1 - (1 + rate / 12) ** -term);
};

const calculateInterest = (morgageAmount, morgageTerm, morgageRate) => {
  const rate = morgageRate / 100;
  return (morgageAmount * rate) / 12;
};
