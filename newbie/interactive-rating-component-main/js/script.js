const marks = document.getElementsByClassName("mark");
const submit = document.getElementById("submit");
const ranking = document.getElementById("ranking");
const resultcard = document.getElementById("result");
const querycard = document.getElementById("query");
let result = -1;

for (let i = 0; i < marks.length; i++) {
  marks[i].addEventListener("click", () => {
    if (result > -1) {
      marks[result].classList.toggle("selected");
    }
    marks[i].classList.toggle("selected");
    result = i;
  });
}

submit?.addEventListener("click", () => {
  if (result < 0) {
    alert("please chose one");
  } else {
    ranking.innerHTML = `You selected ${result + 1} out of 5`;
    resultcard?.classList.toggle("hidden");
    querycard?.classList.toggle("hidden");
  }
});
