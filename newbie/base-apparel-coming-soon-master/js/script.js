const button = document.getElementById("button");
const emailinput = document.getElementById("emailinput");
const errorMark = document.getElementById("error");
const errormessage = document.getElementById("errormessage");

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

button.addEventListener("click", () => {
  const email = emailinput.value;
  if (isValidEmail(email)) {
    errorMark.classList.remove("notValid");
    errormessage.classList.remove("errormessageShow");
    alert(`Thanks. You will keep being informed at ${email}`);
  } else {
    errormessage.classList.add("errormessageShow");
    errorMark.classList.add("notValid");
  }
});
