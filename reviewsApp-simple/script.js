// local data storage

const reviewsArray = [
  {
    id: 1,
    name: "John Cullard",
    profession: "ux designer",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7e%2Fbc%2Fc4%2F7ebcc4d2b3f3902ca710436d6f12bfa2.jpg&f=1&nofb=1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt doloribus qui harum laudantium! Natus perferendis iust modi architecto corporis! Lorem ipsum dolor sit amet consectetur,dipisicing elit. Dolor, sequi?"
  },
  {
    id: 2,
    name: "Sarah James",
    profession: "front-end developer",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0c%2Fd9%2F54%2F0cd954c126838a796041732758a1fd45.jpg&f=1&nofb=1",
    description: 
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt doloribus qui harum laudantium! Natus perferendis iusto modi architecto corporis! Lorem ipsum dolor sit amet consectetur, dipisicing elit. Dolor, sequi?"
  },
  {
    id: 3,
    name: "Rick Mortens",
    profession: "senior back-end developer",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2F43b68328255717.563721828387f.jpg&f=1&nofb=1",
    description: 
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt doloribus qui harum laudantium! Natus perferendis iusto modi architecto corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sequi?"
  }
];

// variable assigment section
const reviewName = document.querySelector(".review__name");
const reviewImg = document.querySelector("img");
// console.log(document.querySelector("img").src);
const reviewProfession = document.querySelector(".review__profession");
const reviewDescription = document.querySelector(".review__description");

const buttonSelection = document.querySelectorAll(".btn");  // selects all buttons and creates an array.
let startingItem = 0;

//console.log(buttonSelection);


// show person info based on item number
function showPerson (person) {
  const item = reviewsArray[person];
  reviewImg.src = item.image;
  reviewName.textContent = item.name;
  reviewProfession.textContent = item.profession;
  reviewDescription.textContent = item.description;
}


// load initial item  on HTML load
window.addEventListener("DOMContentLoaded", function () {
  showPerson(startingItem); // when DOM is loaded do what's inside the function.
});


buttonSelection.forEach(element => element.addEventListener("click", function(btn) {
  let selectedButton = btn.currentTarget.classList;
  
  if (selectedButton.contains("btn__next")) {
    startingItem++;
    if (startingItem > reviewsArray.length -1) {
    startingItem = 0;
  }
  } else if (selectedButton.contains("btn__previous")) {
    startingItem--;
    if (startingItem < 0) {
      startingItem = reviewsArray.length -1;
    }
  } else if (selectedButton.contains("btn__random")) {
    let randomNum = Math.floor(Math.random() * reviewsArray.length);
    startingItem = randomNum;
  }
  showPerson(startingItem);
}));
 

