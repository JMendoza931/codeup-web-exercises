"use strict";

// alert('Hello, World!');

// var userChoice = confirm('are you sure you want to leave?');
// console.log(userChoice);
//
// if(userChoice) {
//     alert('wise choice!');
// } else {
//     alert('boooo! good bye!');
// }





var currentSpeed = Number (prompt("how fast are you driving?"));
console.log(currentSpeed)
var plannedSpeedIncrease = Number (prompt("how much faster do you want to go?"));
var newSpeed = currentSpeed + plannedSpeedIncrease;
console.log('your planned speed is ' + newSpeed);

var distanceLeft = Number(prompt("How Many miles are you from your destination?"))

var timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
var timePlannedSpeed = (distanceLeft/newSpeed) * 60;
var timeGain = (timeAtCurrentSpeed - timePlannedSpeed);
console.log("if you drive at " + newSpeed + " mph, you will arrive " + timeGain + " minutes sooner.")