const summarybutton = document.getElementById("summarybutton");

const addImg = (item) => {
  const imgItem = document.createElement("img");
  imgItem.setAttribute("src", item.icon);
  imgItem.classList.add("icon");
  return imgItem;
};

const addDesription = (item) => {
  const pItem = document.createElement("p");
  pItem.innerHTML = item.category;
  pItem.classList.add("summaryDescription");
  return pItem;
};

const addScore = (item) => {
  const pItem = document.createElement("p");
  pItem.innerHTML = item.score;
  pItem.classList.add("score");
  return pItem;
};

const addLeftItem = (item) => {
  const divItem = document.createElement("div");
  divItem.appendChild(addImg(item));
  divItem.appendChild(addDesription(item));
  divItem.classList.add("leftsummary");
  return divItem;
};

const insertSummary = (Data) => {
  Data.forEach((item) => {
    const divItem = document.createElement("div");
    divItem.classList.add("summerysegment");
    divItem.classList.add(item.category);
    divItem.appendChild(addLeftItem(item));
    divItem.appendChild(addScore(item));
    summarybutton.before(divItem);
  });
};

async function displayData() {
  let result = await getData();
  insertSummary(result);
}

displayData();
