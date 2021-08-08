const displayAnwserBtn = document.querySelector("button");
const hiddenAnwser = document.querySelector(".hidden");

displayAnwserBtn.addEventListener("click", () => {
  console.log("im here");
  hiddenAnwser.classList.toggle("visible");
});

