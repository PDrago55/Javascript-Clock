const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setInterval(setClock, 1000);

setClock();
//STOPWATCH

let seconds = 0;
let minutes = 0;
let hours = 0;
let miliseconds = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let displayMiliseconds = 0;
//define vriable to hold setInterval function

let interval = null;
let status = "stopped";
//when to increment next value

function stopWatch() {
  miliseconds++;
  if (miliseconds / 100 === 1) {
    miliseconds = 0;
    seconds++;
  }
  //logic to increment next value
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (miliseconds < 10) {
    displayMiliseconds = "0" + miliseconds.toString();
  } else {
    displayMiliseconds = miliseconds;
  }
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }
  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }
  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  document.getElementById("display").innerHTML =
    displayHours +
    ":" +
    displayMinutes +
    ":" +
    displaySeconds +
    ":" +
    displayMiliseconds;
}

function startStop() {
  if (status === "stopped") {
    //start stop watch
    interval = window.setInterval(stopWatch, 10);
    document.getElementById("startStop").innerHTML = "Stop";
    status = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
  }
}

function toReset() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
}
