const video = document.querySelector("video");
const gamePad = document.querySelector(".icon__container");
const buttons = document.querySelectorAll("button");
const playButton = document.querySelector(".overlay__btn--play");
const pauseButton = document.querySelector(".overlay__btn--pause");
const audioBtn = document.querySelector(".audio__button");
const audioIcon = document.querySelector(".fa-volume-mute");

video.muted = true;

// on button press pause or play, move icon div to it's designated place.
buttons.forEach(element => {
  //console.log(element);
  element.addEventListener("click", (btn) => {
    console.log(btn.currentTarget);
    if (element === audioBtn) {
      video.muted = !video.muted; // toggle mute/unmute audio
      audioIcon.classList.toggle("fa-volume-up");
    } else if (element === pauseButton) {
      //console.log("got here!");
      gamePad.classList.add("icon--move");
      video.pause();
    } else {
      gamePad.classList.remove("icon--move");
      video.play();
    }
  });
})

