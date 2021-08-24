// *********** VARIABLES ******** //
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
let editElement = "";
let editFlag = false;
let editID = "";


//******* ALERT SIGN *******/
function alertSign(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert--${action}`);
  
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert--${action}`);
  }, 2000);
}

// after writing in a value (into input field), revert to initial setup - showing placeholder text.
// ***** AUTOMATICALY CLEAR THE INPUT FIELD ******
function setToDefault() {
  inputField.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "add";

}

//***** CREATE A GROCERY ITEM TO BE ADDED TO THE LIST ******/
function createElement(value) {
  // let each item have a specific id if new value is submit.
  let itemID = new Date().getTime().toString();
  const articleElement = document.createElement
  ("article");
  articleElement.classList.add(".grocery__item");

  // creates individual articles containing each value passed into input area. Assigns a unique attribute aka. dataset to each item - we used time in ms at each item creation. 
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
  
  alertSign("Item added!", "green");
  groceryConatainer
  .classList.add("grocery__container--visible");

  // add to local storage function

  //set to default
  setToDefault();

  // delete and edit button activated as they are dynmaically created
  const innerDeleteBtn = articleElement.querySelector(".grocery__item__btn--delete");
  const editBtn = articleElement.querySelector(".grocery__item__btn--edit");

  innerDeleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  // append article to grocery list area
  list.appendChild(articleElement);
}

//*******  DELETE ITEM  **********/
function deleteItem (e) {
  const itemToBeDeleted= e.currentTarget.parentElement.parentElement;
  //terget the unique id
  const elementUniqueID = itemToBeDeleted.dataset.id;
  //console.log(itemToBeDeleted);
  list.removeChild(itemToBeDeleted);
  alertSign("Item removed!", "red");
  setToDefault();
    
  if (list.children.length === 0) {
    groceryConatainer.classList.remove("grocery__container--visible");
  }
  // remove from local storage

}  

//****** EDIT ITEM  **********//
function editItem (e) {
  // setting edit value
  const itemToBeEdited = e.currentTarget.parentElement.parentElement; 

  editElement = itemToBeEdited.querySelector("h2");
  // placing value into input field
  inputField.value = editElement.innerHTML;
  console.log(editElement);
  editFlag = true;
  editId = itemToBeEdited.dataset.id;

  //change text inside submit button to edit
  submitBtn.textContent = "edit"; 
}

// create a local storage - pass values to storage
// ********** ADD TO LOCAL STORAGE ******
function addToStorage(id, value){
  console.log("nothing here yet");
}

// ******* REMOVE FROM LOCAL STORAGE ******
function removeFromLocalStorage(id){
  console.log("empty");
}

// ********* EDIT LOCAL STORAGE ********* //
function editLocalStorage(id, editedValue) {
  console.log("empty");
}


//****** DELETE ALL ITEMS IN A GROCERY LIST ******
function clearItems(){
  const groceryItems = document.querySelectorAll(".grocery__item");

  if (groceryItems.length > 0) {
    groceryItems.forEach(item => {
      list.removeChild(item);
    });
  } 
  
  alertSign("List was cleared", "red");
  groceryConatainer.classList.remove("grocery__container--visible");

  // remove items from local storage
  //localStorage.removeItem("list");
  setToDefault();
}

//******* MAIN FUNCTIONALITY LOGIC - calls all other functions *******
function addItem(e) {
  e.preventDefault(); // prevent from POST submitting e.g send nowhere.

  const value = inputField.value.toLowerCase(); //.value returns the value assigned into input field by user or "" if there's no input.
  //console.log(value);

  // change the alert text when adding a value
  if (value && !editFlag) {
    createElement(value);

  } else if (value !== "" && editFlag) {
    console.log("editing");
    //new function to edit the current article where item was edited?
    console.log(editElement);
    editElement.innerHTML = value;
    console.log(editElement);
    alertSign("Item sucessfuly edited!", "green");
    // edit item in local storage
    //editLocalStorage(editID, editElement);
    setToDefault();

  } else {
     alertSign("No item was added!", "red")
  }
}


// ****** MAIN APP FUNCTIONALLITY *******

//submit form event listener
formContainer.addEventListener("submit", addItem);

//listen for clear button onclick event
deleteAll.addEventListener("click", clearItems);


