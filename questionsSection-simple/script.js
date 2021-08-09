const hiddenAnwser = document.querySelectorAll(".hidden");
const buttonIcon = document.querySelectorAll("i");
const displayAnwserBtn = document.querySelectorAll("button");

//console.log(displayAnwserBtn);

// MY SOLUTION - upon button click opens corresponding container and changes corresponding button icon.

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


// function closeAllOtherContainers(index) {
//   hiddenAnwser.forEach(element => {
//     if (element[index] !== hiddenAnwser[index]) {
//       element.classList.remove("visible");
//     }
// });


for (let i = 0; i < displayAnwserBtn.length; i++) {
  openCorrespondingContainer(i);
}


// BETTER SOLUTION using for each and finding to which section it belongs using DOM- parentElement method

// displayAnwserBtn.forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("visible");
//   });
// });