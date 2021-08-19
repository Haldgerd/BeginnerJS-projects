const hamburgerButton = document.querySelector(".hamburger__menu");
const navigationContainer = document.querySelector(".nav__container");
const navigationLinks = document.querySelector(".nav__container__links");

hamburgerButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("nav__links--active");
  // navigationContainer.style.backgroundColor = `hsl(${157}, ${48}%, ${43}%)`;
});