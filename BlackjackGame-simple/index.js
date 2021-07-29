// variable initialization

let displayCardOne = document.getElementsByClassName('cardOne')[0];
let displayCardTwo = document.getElementsByClassName('cardTwo')[0];
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
  displayCardTwo.innerHTML = "";
  displayCardOne.innerHTML = "";
 
  console.log(document.getElementsByClassName('newCard'));

  for (let i in document.getElementsByClassName('newCard')) {
    document.getElementsByClassName('newCard')[i].remove();
  }

  console.log(document.getElementsByClassName('newCard'))

  document.getElementsByClassName('sum')[0].innerHTML = "Sum: "; //inital valueMath.floor((Math.random() * 12) + 1);
  cast.innerHTML = "Play again! Press start game.";
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
  displayCardOne.innerHTML = cardONe;
  displayCardTwo.innerHTML = cardTwo; 
  array.push(cardONe, cardTwo);
}
  
function addCard() {    
    console.log("dealing a new card");
    let newCard = Math.floor((Math.random() * 12) + 1);

    const newAdd = document.createElement('span');
    newAdd.classList.add('newCard');
    const node = document.createTextNode(" " + newCard);
    newAdd.appendChild(node);
    cardDisplay.appendChild(newAdd);

    array.push(newCard);
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