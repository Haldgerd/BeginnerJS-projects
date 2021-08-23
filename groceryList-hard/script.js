// variables
const alert = document.querySelector(".header__alert");
const submitBtn = document.querySelector(".form__button--submit");
const editBtn = document.querySelector(".grocery__item__btn--edit");
const removeBtn = document.querySelector(".grocery__item__btn--delete");
const deleteAll = document.querySelector(".grocery__btn--delete");
const groceryConatainer = document.querySelector(".grocery__container");
const list = document.querySelector(".grocery__list");
const formContainer = document.querySelector(".form__container");
const inputField = document.querySelector(".form__text--input");

// edit options
let editElement;
let editFlag = false;
let editID = "";

// MAIN function
function addItem(e) {
  e.preventDefault(); // prevent from POST submitting e.g send nowhere.

  const value = inputField.value.toLowerCase(); //.value returns the value assigned into input field by user or "" if there's no input.
  //console.log(value);

  // change the alert text when adding a value
  if (value && !editFlag) {
    createElement(value);

  } else if (value && editFlag) {
    console.log("editing");
  } else {
     alertSign("No item was added!", "red")
  }
}

//alert function
function alertSign(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert--${action}`);
  
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert--${action}`);
  }, 3000);
}

// creates individual articles containg each value passed into input area.
function createElement(value) {
  // let each item have a specific id if new value is submit.
  let itemID = new Date().getTime().toString();
  const articleElement = document.createElement
  ("article");
  articleElement.classList.add(".grocery__item");

  //add specific id to element
  const attr = document.createAttribute("data-id");
  attr.value = itemID;
  articleElement.setAttributeNode(attr);

  articleElement.innerHTML = `
  <h2 class="grocery__item__title">${value}</h2>
    <div class="grocery__button__container">
      <button type="button" class="grocery__item__btn grocery__item__btn--edit"><i class="fas fa-edit"></i>
      </button>
      <button
        type="button"
        class="grocery__item__btn grocery__item__btn--delete"
       ><i class="fas fa-trash"></i>
      </button>
    </div>`

  // append article to grocery list area
  list.appendChild(articleElement);
  alertSign("Item added!", "green");
  groceryConatainer
  .classList.add("grocery__container--visible");

  // add to local storage function

  //set to default

}


function addToStorage(id, value){
  console.log("nothing here yet");
}


// after writing in a value (into input field), revert to initial setup - showing placeholder text.
function setToDefault() {
  inputField.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "add";

}

//clear full list function 
function clearList(){
  console.log("empty");
}


// main app functionallity event listeners

//submit form event listener
formContainer.addEventListener("submit", addItem);


