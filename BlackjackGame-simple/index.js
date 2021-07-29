// variable initialization

let wager = document.getElementsByClassName('betWager')[0];
let cast = document.getElementsByClassName('casting')[0];
let cardDisplay = document.getElementsByClassName('cards')[0];
let cardONe = Math.floor((Math.random() * 12) + 1);
let cardTwo = Math.floor((Math.random() * 12) + 1);
let array = [];


// app functionallity

function setInitial() {
  array = [];
  console.log(array);
  console.log(cardDisplay);
  cardDisplay.innerHTML = "Cards: ";
 
 
  document.getElementsByClassName('sum')[0].innerHTML = "Sum: "; //inital valueMath.floor((Math.random() * 12) + 1);
  cast.innerHTML = "Play again! Press start game.";
  dealCards();
}


function sum() {
  let total = 0;
  for (let i in array) {
    total += array[i];
    console.log(array);
    console.log(i);
  }
  return total;
}


function dealCards() {
  cardONe = Math.floor((Math.random() * 12) + 1);
  cardTwo = Math.floor((Math.random() * 12) + 1);
  array.push(cardONe, cardTwo);
  for (let i in array) {
    cardDisplay.innerHTML += " " + array[i];
  }
}
  
function addCard() {    
    console.log("dealing a new card");
    let newCard = Math.floor((Math.random() * 12) + 1);

    // A way to create a new element in DOM.
    // const newAdd = document.createElement('span');
    // newAdd.classList.add('newCard');
    // const node = document.createTextNode(" " + newCard);
    // newAdd.appendChild(node);
    // cardDisplay.appendChild(newAdd);

    array.push(newCard);
    cardDisplay.innerHTML += " " + newCard;
    start();
  }

function start() {
  let sumOfCards = sum();

  document.getElementsByClassName('sum')[0].innerHTML = "Sum: " + sumOfCards;
  
  if (sumOfCards < 21) {
    cast.innerHTML = "Would you like to draw another card?";
  } else if (sumOfCards === 21) {
    cast.innerHTML = "You've got blackjack!";
    console.log(wager.innerHTML);
    setTimeout(setInitial, 4000);
  } else {
    cast.innerHTML = "You're out of the game!";
    setTimeout(setInitial, 4000);

  }
}


dealCards();