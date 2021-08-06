const toggleMenu = document.querySelector(".menu__button");
const sidebar = document.querySelector("aside");
const closeButton = document.querySelector(".menu__close");

toggleMenu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("open");
})

