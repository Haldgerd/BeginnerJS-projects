const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const countdownContainer = document.querySelector(".countdown__content");
const giveawayAnnouncment = document.querySelector(".header__content");
const countdownHeadings = document.querySelectorAll
(".data");

let futureDate = new Date(2021,7,26,18,30,0);
console.log(futureDate);
//console.log(countdownHeadings);
let year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
let numberedDay = futureDate.getDate();
console.log(numberedDay);
let day = weekdays[futureDate.getDay()];
console.log(day);
let hour = futureDate.getHours()
let minutes = futureDate.getMinutes();


// future time in ms
function calculateRemainingTime() {
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let futureTime = futureDate.getTime();
  console.log(futureTime);
  let differenceInTime = futureTime - new Date().getTime();
  console.log(differenceInTime);



  
}


// giveaway content display
giveawayAnnouncment.textContent = `Giveaway ends on, ${day} ${numberedDay} ${month} ${year} at ${hour}:${minutes}`;



