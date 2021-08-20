const hamburgerButton = document.querySelector(".hamburger__menu");
const navigationContainer = document.querySelector(".nav__container");
const navigationLinks = document.querySelector(".nav__container__links");
const links = document.querySelectorAll(".nav__container__link");
const yearDisplay = document.querySelector(".current__year");
const bouncingPointer = document.querySelector(".landing__pointer");
const navBar = document.querySelector(".nav__container");

// setting current year dynamically
let currentYear = new Date ();
yearDisplay.textContent = currentYear.getFullYear();


// setting a dynamic menu height(links container)
hamburgerButton.addEventListener("click", () => {
  // navigationLinks.classList.toggle("nav__links--active");
  // navigationContainer.style.backgroundColor = `hsl(${157}, ${48}%, ${43}%)`;
  const containerHeight = navigationLinks.getBoundingClientRect();//returns position of the element relative to viewport and it's dimensions -height, width.
  //console.log(containerHeight);

  let totalHeight = 10;
  links.forEach(link => {
    totalHeight += link.getBoundingClientRect().height;
  });

  if (containerHeight.height === 0) {
    navigationLinks.style.height = `${totalHeight}px`
  } else {
    navigationLinks.style.height = 0;
  }
});

//fixed navbar on scroll, changing it's color
window.addEventListener("scroll", () => {
  // pageYOffset returns a integer value in px, value represents in lay terms - how much have we scrolled already.
  if (window.pageYOffset > navigationContainer.getBoundingClientRect().height) {
    navigationContainer.classList.add("nav--scroll");
  } else {
    navigationContainer.classList.remove("nav--scroll");
  }

  if (window.pageYOffset > 500) {
    bouncingPointer.classList.add("landing__pointer--show");
  } else {
    bouncingPointer.classList.remove("landing__pointer--show");
  }
});


//making smooth scroll land exactly at the beginning of the section title we want to navigate to.
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevent default scroll behaviour
    // navigate to specific spot
    //get the id value
    const id = e.currentTarget.getAttribute("href").slice(1);
    // slice extracts a part of a string without modifying original string. IN our case we take the string starting from index 1.
    console.log(id);
    const section = document.getElementById(id);
    let elementTopPosition = section.offsetTop;
    console.log(elementTopPosition);
    //offset top returns the position of the element relative to viewport (from top of viewport).
    
    window.scrollTo({
      left: 0,
      // substract the height of navbar from elements top position, to scroll to the exact position of specific section.
      top: `${elementTopPosition - navBar.getBoundingClientRect().height}`,
    });
    navigationLinks.style.height = 0;
  });
});
// 