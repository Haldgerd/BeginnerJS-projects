const counterDisplay = document.querySelector(".counter");
const buttonDecrease = document.querySelector(".decrease");
const buttonReset = document.querySelector(".reset");
const buttonIncrease =  document.querySelector(".increase");
let counterTrack = 0;


buttonIncrease.addEventListener("click", function() {
  counterTrack++;
  counterDisplay.textContent = counterTrack; 
  if (counterTrack < 0) {
    counterDisplay.style.color = "red";
 } else {
   counterDisplay.style.color = "green";
 }
});

buttonReset.addEventListener("click", function() {
  counterTrack = 0;
  counterDisplay.textContent = counterTrack;
  counterDisplay.style.color = "black";
});

buttonDecrease.addEventListener("click", function() {
  counterTrack--;
  counterDisplay.textContent = counterTrack; 
  if (counterTrack < 0) {
     counterDisplay.style.color = "red";
  }
});
