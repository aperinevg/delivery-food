const cardButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const cansel = document.querySelector("#cansel");

let a;


let info = [];
info.push({
price: document.querySelector("#card-price-bold").textContent,
text:document.querySelector("#ingredients").textContent
});

console.log (info[0]);

// window.onload = test ();
function test() {
  const addToCart = document.querySelector("#modal-body");
  const link = document.createElement("div");
  
  link.className = "food-row";
  link.id = "food-row";
  


for ( i=0; i<=info.length; i++) {
  const pink = document.createElement("span");
  pink.className = "food-name";
  pink.id = "food-name";
  pink.innerHTML = localStorage.getItem(info[i]);
  // i++;
  const zink = document.createElement("strong");
  zink.className = "food-price";
  zink.id = "food-price";
  let c = JSON.parse(localStorage.getItem(info[i]));
  zink.innerHTML = c;
  link.appendChild(pink);
  link.appendChild(zink);
}







  // const pink = document.createElement("span");
  // pink.className = "food-name";
  // pink.id = "food-name";
  // pink.innerHTML = localStorage.getItem('text');
  
  // const zink = document.createElement("strong");
  // zink.className = "food-price";
  // zink.id = "food-price";
  // let c = JSON.parse(localStorage.getItem(info));
  // zink.innerHTML = c;
  
  // link.appendChild(pink);
  // link.appendChild(zink);
  
  addToCart.appendChild(link);
  }
  
  function addButtonCard() {
 
   
  let price = document.querySelector("#card-price-bold").textContent;
  let text = document.querySelector("#ingredients").textContent;
  

  
  localStorage.setItem('price', JSON.stringify(info));
  localStorage.setItem('text', JSON.stringify(info));
  
  test();
  }


cardButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);
cansel.addEventListener("click", toggleModal);
function toggleModal() {
  modal.classList.toggle("is-open");
}

new WOW().init();
