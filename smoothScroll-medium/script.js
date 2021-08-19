const hamburgerButton = document.querySelector(".hamburger__menu");
const navigationContainer = document.querySelector(".nav__container");
const navigationLinks = document.querySelector(".nav__container__links");
const yearDisplay = document.querySelector(".current__year");

// setting current year dynamically
let currentYear = new Date ();
yearDisplay.textContent = currentYear.getFullYear();



hamburgerButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("nav__links--active");
  // navigationContainer.style.backgroundColor = `hsl(${157}, ${48}%, ${43}%)`;
});