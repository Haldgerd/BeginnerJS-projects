let count = 0;
let savedValue = 0;
let display = document.getElementsByClassName('count-eng')[0]

console.log(document.getElementsByClassName('count-eng'));

function increment() {
  // count ++;
  display.innerText = ++count; //increment then assign.

  // when acquiring elements by Class Name an array of elements is created. In this case accessing a particular element with said class name requires [] and a number of element. Ex. [0], [1] so first or second item in created array. If using getELementsByClassName in conjunction with innerText console log returns undefined.
  console.log("increment");
}


function save() {
  savedValue = display.innerText;
  console.log(savedValue); 
}

