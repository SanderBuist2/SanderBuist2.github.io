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

frontendio.forEach((item) => {
  const divItem = document.createElement("div");
  const element = document.createElement(item.type);
  element.setAttribute("href", item.href);
  element.innerHTML = item.title;
  item.class.forEach((cl) => {
    element.classList.add(cl);
  });
  const button = addLinkButton();
  button.appendChild(element);
  divItem.appendChild(button);
  const logo = logoelement(logos[0], item.challengelink);
  divItem.appendChild(logo);
  divItem.classList.add("challenges");
  frondendmentorio.appendChild(divItem);
});
