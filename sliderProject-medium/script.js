const sliders = document.querySelectorAll(".slider");
const prevButton = document.querySelector(".slider__btn--prev");
const nextButton = document.querySelector(".slider__btn--next");
let counter = 0;

sliders.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

prevButton.classList.add("hidden");

console.log(sliders.length);

function transformSliders () {
  sliders.forEach(slider => {
    slider.style.transform = `translateX(-${counter * 100}%)`;
  });
}


nextButton.addEventListener("click", () => {   
  if (counter < sliders.length -1) { 
    counter++;
    transformSliders();
    prevButton.classList.remove("hidden");

    if (counter === sliders.length - 1) {
      nextButton.classList.add("hidden");
    }
    console.log(counter);
  };
});


prevButton.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    transformSliders();
    nextButton.classList.remove("hidden");

    if (counter === 0) {
      prevButton.classList.add("hidden");
    }

    console.log(counter);
  }
});    