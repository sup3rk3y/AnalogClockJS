const HOUR = document.querySelector("#hour");
const MINUTES = document.querySelector("#minute");
const SECONDS = document.querySelector("#second");


var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

// Get the real time
let hourPos = ((hr * 360) / 12) + (((min * 360) / 60) / 12);
let minPos = ((min * 360) / 60) + (((sec * 360) / 60) / 60);
let secPos = (sec * 360) / 60;

function spinClockHands() {

  hourPos = hourPos + (30 / 3600);
  minPos = minPos + (1 / 60) * (360 / 60); // 1/60 in 60 seconds
  secPos = secPos + (360 / 60); // 360 degrees in 60 seconds

  document.getElementById("today").innerHTML = day + "/" + month + "/" + year;

  // Aplly Degrees
  HOUR.style.transform = "rotate(" + hourPos + "deg)";
  MINUTES.style.transform = "rotate(" + minPos + "deg)";
  SECONDS.style.transform = "rotate(" + secPos + "deg)";

}

// Spin the hands every real second
var interval = setInterval(spinClockHands, 1000);
