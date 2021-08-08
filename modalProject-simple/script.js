const openModalBtn = document.querySelector(".modal__button");
const modalOverlay = document.querySelector(".modal__overlay");
const modalClose = document.querySelector(".modal__close");


openModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("modal__overlay--visible");
});

modalClose.addEventListener("click", () => {
  console.log("hello");
  modalOverlay.classList.remove("modal__overlay--visible");
});