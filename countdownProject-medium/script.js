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
const countdownData = document.querySelectorAll
(".data");

let futureDate = new Date(2021,7,20,18,30,0);
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
  let differenceInTime = futureTime - (new Date().getTime());
  console.log(differenceInTime);

  // days remaining
  let daysRemaining = Math.floor(differenceInTime / oneDay);
  let hoursRemaining = Math.floor((differenceInTime % oneDay) / oneHour);
  let minutesRemaining = Math.floor((differenceInTime % oneHour) / oneMinute);
  let secondsRemaining = Math.floor((differenceInTime % oneMinute) / 1000);
  const values =  [daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining];

  function formatTimeDisplay (time) {
    if (time < 10) {
      return (time = `0${time}`);
    } 
    return time;
  }


  // set values in data
  countdownData.forEach((data, index) => {
    data.textContent = formatTimeDisplay(values[index]);
  });
}


// giveaway content display
giveawayAnnouncment.textContent = `Giveaway ends on, ${day} ${numberedDay} ${month} ${year} at ${hour}:${minutes}`;

calculateRemainingTime();

