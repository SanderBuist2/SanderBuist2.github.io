const awnsers = [
  "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
];
const awnsered = [true, false, false, false];

const questions = document.getElementsByClassName("question");
const awnsersdivs = document.getElementsByClassName("awnser");

const toggleawnser = (question) => {
  questions[question].childNodes[3].classList.toggle("plusminus");
  if (awnsered[question]) {
    awnsersdivs[question].innerHTML = "";
    awnsered[question] = !awnsered[question];
  } else {
    awnsersdivs[question].innerHTML = awnsers[question];
    awnsered[question] = !awnsered[question];
  }
};

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    toggleawnser(i);
  });
  questions[i].addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
      toggleawnser(i);
      console.log("enter is pressed");
    }
  });
}
