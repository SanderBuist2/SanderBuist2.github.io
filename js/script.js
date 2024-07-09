const frondendmentorio = document.getElementById("frondendmentorio");

const logoelement = (logo, link) => {
  const imgItem = document.createElement("img");
  imgItem.setAttribute("src", logo.img);
  imgItem.classList.add(logo.class);
  const divItem = document.createElement("div");
  divItem.classList.add("smalllogo");
  const aItem = document.createElement("a");
  if (link) {
    aItem.setAttribute("href", link);
  } else {
    aItem.setAttribute("href", logo.href);
  }
  aItem.appendChild(imgItem);
  divItem.appendChild(aItem);
  return divItem;
};

const addLinkButton = (type = "button") => {
  const button = document.createElement("div");
  button.classList.add(type);
  return button;
};

const addItem = (parent, difficulty, item) => {
  let childexists = false;
  for (let i = 0; i < parent.childNodes.length; i++) {
    if (parent.childNodes[i].getAttribute("id") == difficulty) {
      childexists = true;
      parent.childNodes[i].appendChild(item);
    }
  }
  if (!childexists) {
    const divItem = document.createElement("div");
    divItem.setAttribute("id", difficulty);
    const H2Item = document.createElement("h2");
    H2Item.innerHTML = difficulty;
    H2Item.classList.add("difficultyHeader");
    divItem.appendChild(H2Item);
    divItem.appendChild(item);
    divItem.classList.add("challengescollection");
    parent.appendChild(divItem);
    console.log("it doesn't exist");
  }
};

frontendio.forEach((item) => {
  const divItem = document.createElement("div");
  const element = document.createElement(item.type);
  const link =
    item.href.slice(0, 2) + item.difficulty + "/" + item.href.slice(2);
  console.log(link);
  element.setAttribute("href", link);

  item.class.forEach((cl) => {
    element.classList.add(cl);
  });
  const button = addLinkButton();
  button.innerHTML = item.title;
  element.appendChild(button);
  divItem.appendChild(element);
  const logo = logoelement(logos[0], item.challengelink);
  divItem.appendChild(logo);
  divItem.classList.add("challenges");
  addItem(frondendmentorio, item.difficulty, divItem);
});
