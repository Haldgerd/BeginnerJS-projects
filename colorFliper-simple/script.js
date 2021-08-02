// hard coding the colors.

// const colorArray = ["green", "blue", "teal", "yellow", "purple", "orange"];
const mainElement = document.getElementsByClassName('container')[0];
const buttonClick = document.getElementsByClassName('change--bg')[0];

function changeColor() {
  // creating colors as rbg values
  let redColor = Math.floor(Math.random() * 256);
  let greenColor = Math.floor(Math.random() * 256);
  let blueColor = Math.floor(Math.random() * 256) ;

  mainElement.style.backgroundColor = "rgb(" + redColor +"," + greenColor + "," + blueColor +")";

  // using hardcoded color selection
  // let randomColor = Math.floor(Math.random() * array.length);
  // mainElement.style.backgroundColor = colorArray[randomColor]
};

//alternative way of adding an even listener not supported by IE8 and lower
// document.getElementById("demo").addEventListener("click", myFunction);

buttonClick.onclick = function() {
  changeColor();
};



