const cardButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const cansel = document.querySelector("#cansel");

cardButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
cansel.addEventListener('click', toggleModal);
function toggleModal() {
    modal.classList.toggle("is-open");
}

new WOW().init();