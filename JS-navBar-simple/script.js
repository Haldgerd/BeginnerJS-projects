const toggleMenu = document.querySelector(".nav__icon");
const linkContainer = document.querySelector(".nav__base");
const navBar = document.querySelector(".nav__bar");

toggleMenu.addEventListener("click", () => {
  linkContainer.classList.toggle("responsive");
  navBar.classList.toggle("no-shadow");
});