// const displayAnwserBtn = document.querySelector("button");
const hiddenAnwser = document.querySelectorAll(".hidden");
const buttonIcon = document.querySelectorAll("i");
const displayAnwserBtn = document.querySelectorAll("button");

console.log(displayAnwserBtn);

// upon button click opens corresponding container and changes corresponding button icon.
function openCorrespondingContainer(index)  {
  displayAnwserBtn[index].addEventListener("click", () => {
    if (hiddenAnwser[index].classList.contains("visible")) { 
      buttonIcon[index].classList.remove("fa-minus-square");
      buttonIcon[index].classList.add("fa-plus-square");
    } else {
      buttonIcon[index].classList.remove("fa-plus-square");
      buttonIcon[index].classList.add("fa-minus-square");
      }

    hiddenAnwser[index].classList.toggle("visible");
  });
}


// function closeAllOtherContainers() {

// }


for (let i = 0; i < displayAnwserBtn.length; i++) {
  openCorrespondingContainer(i);
}


// displayAnwserBtn.forEach(addEventListener("click", () => {
//   hiddenAnwser.classList.toggle("visible");
// }));