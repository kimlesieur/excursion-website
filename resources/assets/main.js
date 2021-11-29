//Automatic Year in copyright
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//Countdown for launch of App

const countDownDate = new Date("Mar 01, 2022 12:00:00");

let myFunc = setInterval(() => {
let timeleft = countDownDate - new Date().getTime();
//document.getElementById("ms").innerHTML = timeleft + "ms";
let jours = Math.floor(timeleft / (1000*60*60*24));
document.getElementById("jours").innerHTML = jours + " days";
let heures = Math.floor((timeleft % (1000*60*60*24))/(1000*60*60));
document.getElementById("heures").innerHTML = heures + " hours";
let min = Math.floor ((timeleft %(1000*60*60))/(1000*60));
document.getElementById("min").innerHTML = min + " minutes";
let sec = Math.floor((timeleft%(1000*60)/1000));
document.getElementById("sec").innerHTML = sec + " seconds";
}, 1000); 


