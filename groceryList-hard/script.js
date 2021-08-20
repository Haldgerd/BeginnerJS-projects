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



// functions
function addItem(e) {
 e.preventDefault();
  const value = inputField.value; //.value returns the value assigned into input field.
  //console.log(value);

  // change the alert text when adding a value
  if (value && !editFlag) {
    alert.textContent = "Item added!"
    if (alert.classList.contains("alert--red")){
      alert.classList.remove("alert--red");
    }
    alert.classList.add("alert--green");

    // let each item have a specific id if new value is submit.
    let itemID = new Date().getTime().toString();
    console.log(itemID);
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    if (alert.classList.contains("alert--green")) {
      alert.classList.remove("alert--green");
    }
    alert.textContent = "No item was added!"
    alert.classList.add("alert--red");
  }
}



// event listeners

//submit form event listener
formContainer.addEventListener("submit", addItem);


