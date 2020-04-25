const cardButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const cansel = document.querySelector("#cansel");

function test() {
  const addToCart = document.querySelector("#modal-body");

  addToCart.innerHTML = "";

  const info = JSON.parse(localStorage.getItem("info"));

  for (let i = 0; i < info.length; i++) {
    const link = document.createElement("div");
    const pink = document.createElement("span");
    const zink = document.createElement("strong");
    const buttonCount = document.createElement("div");
    const buttonSubtraction = document.createElement("button");
    const buttonAddition = document.createElement("button");
    const foodCount = document.createElement("span");

    link.className = "food-row";
    link.id = "food-row";

    pink.className = "food-name";
    pink.id = `food-name-${i}`;
    pink.innerHTML = info[i].text;

    zink.className = "food-price";
    zink.id = "food-price";
    let priceNumber = info[i].price;
    priceNumber = +priceNumber.substring(0, priceNumber.length - 1);
    let countNumber = +info[i].count;
    let total = priceNumber * countNumber;
    zink.innerHTML = total;

    buttonCount.className = "food-counter";
    buttonCount.id = "foodCounter";

    buttonCount.innerHTML = `<button class="counter-button" onclick="subtraction(${i})">-</button>
    <span class="counter">${countNumber}</span>
    <button class="counter-button" onclick="addition(${i})">+</button>
    <button class="food_row_delete" id="foodRowDelete${i}" onclick="rowDelete(${i})">x</button>`;

    link.appendChild(pink);
    link.appendChild(zink);
    link.appendChild(buttonCount);

    addToCart.appendChild(link);
  }
}
function rowDelete(index) {
  let info = JSON.parse(localStorage.getItem("info"));
  const foodText = document.querySelector(`#food-name-${index}`).textContent;
  const infoTexts = info.map((object) => object.text);
  const foodTextIndex = infoTexts.indexOf(foodText);
  info.splice(foodTextIndex,1) ;
  
  localStorage.setItem("info", JSON.stringify(info));
  test();



};

function addition(index) {
  const info = JSON.parse(localStorage.getItem("info"));
  const foodText = document.querySelector(`#food-name-${index}`).textContent;
  const infoTexts = info.map((object) => object.text);
  const foodTextIndex = infoTexts.indexOf(foodText);
  info[foodTextIndex].count++;
  localStorage.setItem("info", JSON.stringify(info));
  test();
};
function subtraction(index) {
  const info = JSON.parse(localStorage.getItem("info"));
  const foodText = document.querySelector(`#food-name-${index}`).textContent;
  const infoTexts = info.map((object) => object.text);
  const foodTextIndex = infoTexts.indexOf(foodText);
  info[foodTextIndex].count--;
  if (info[foodTextIndex].count == 0 ) rowDelete(index);

  else {
  localStorage.setItem("info", JSON.stringify(info));
  test();
}
}

function addButtonCard(index) {
  let price = document.querySelector(`#price-${index}`).textContent;
  let text = document.querySelector(`#ingredients-${index}`).textContent;
  let count = 1;

  let info = JSON.parse(localStorage.getItem("info")) || [];
  const infoTexts = info.map((object) => object.text);
  const textIndex = infoTexts.indexOf(text);

  if (textIndex === -1) {
    info.push({ price, text, count: 1 });
  } else {
    info[textIndex].count++;
  }

  localStorage.setItem("info", JSON.stringify(info));

  test();
}

cardButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);
cansel.addEventListener("click", toggleModal);
function toggleModal() {
  modal.classList.toggle("is-open");
}

window.onload = test();
new WOW().init();
