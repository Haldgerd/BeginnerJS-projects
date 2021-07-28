// variable initialization

let displayCardOne = document.getElementsByClassName('cardOne')[0];
let displayCardTwo = document.getElementsByClassName('cardTwo')[0];
const stringArr = ["Try again!", "Better luck next time!", "Very close but not there.", "Don't give up!"]; //use math.random with arr.length to chose a random item in array.  Math.random() * arr.length;


// app functionallity

displayCardOne.innerHTML = "";
displayCardTwo.innerHTML =  "";
document.getElementsByClassName('sum')[0].innerHTML = "Sum: "; //inital value


function start() {
  function sum() {
  return cardONe + cardTwo;
  }
  
  let cardONe = Math.floor((Math.random() * 12) + 1);
  let cardTwo = Math.floor((Math.random() * 12) + 1);
  let sumOfCards = sum();

  displayCardOne.innerHTML = cardONe;
  displayCardTwo.innerHTML = cardTwo;
  document.getElementsByClassName('sum')[0].innerHTML = "Sum: " + sumOfCards;

  if (sumOfCards < 21) {
    document.getElementsByClassName('casting')[0].innerHTML = "Would you like to draw another card?";
  } else if (sumOfCards === 21) {
    document.getElementsByClassName('casting')[0].innerHTML = "You've got blackjack!";
  } else {
    document.getElementsByClassName('casting')[0].innerHTML = "You're out of the game!";
  }
}

