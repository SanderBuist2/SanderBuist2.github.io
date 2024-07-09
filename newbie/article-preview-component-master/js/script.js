const arrow = document.getElementById("arrow");
const share = document.getElementById("share");
const cardsharefooter = document.getElementById("cardfootershare");

share.addEventListener("click", () => {
  arrow.classList.toggle("shareactive");
  share.classList.toggle("shareactive");
  cardsharefooter.classList.toggle("sharetop");
});
