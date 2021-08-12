const text = [
  "Retro 80's firebird arcade hells on fire Ferries Ghostbusters Tokyo. Terminator plays Bladerunner D&D friends coca cola BMX riders on the storm Tears for fears on 95 floppy Jobs plays Invaders. Chips console Commodore64 with freinds looking at Jaws.",
  "Play pause mouse keyboard and gamepad. Silly colors tupe hair latex pantns riding with E.T. All the kids Stranger things doing War games rewind it play it reformated it cassette with VHS running to the summer vacations listen Trevor something snythwave music sick rides. Day off Indiana Jones plays boardgames Japan neon lights little tings 80's era. Bright lipstick superhero Batman. Mom kitchen homemade comics movies Gremlins Predator spaceship windows.",
  "Gunship robots tehnology boom Karate Kid on Crow console Shout no school computer MAC Apple Science Math Palading and Barbarian dice game Sony nintendo Gates tofu teriyaki video games PAC-MAN Invaders Alley Car Prince of Persia eat pizza."
]

const input = document.querySelector("input");
const btn = document.querySelector("button");
const loremDisplay = document.querySelector(".lorem__display");
let startingNumber = 0;

btn.addEventListener("click", () => {
  // beace i didn't pass label and input inside form element (mistake and TBD) I don't need to use 'submit' event or preventDefault function to prevent the event listener it's default behaviour - string shown for split second.
  let inputValue = parseInt(input.value);

  console.log(inputValue);
  console.log(typeof inputValue);

  if (isNaN(inputValue)) {
    startingNumber = Math.floor(Math.random() * text.length);
    loremDisplay.textContent = text[startingNumber];
  } else if (inputValue === 1) {
    startingNumber = 0;
    loremDisplay.textContent = text[startingNumber];
  } else {
    let num = 0;
    let paragraphs = "";
    while (num < inputValue) {
      //console.log(num);
      let randomNumber = Math.floor(Math.random() * text.length);
      paragraphs += text[randomNumber];  // works but doesn't add breaks between paragraphs TBD!
      num++;
    }
    loremDisplay.textContent = paragraphs;
  }
});

