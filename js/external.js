"use strict";

console.log("Hello from external JavaScript");
//
// alert("Welcome to my Website!")
// var userChoice = prompt("what is your favorite color?");
// alert("Surprise! " + userChoice + " is my favorite color too!");

// var littleMermaid = Number (prompt("How many days did you borrow The Little Mermaid?"));
// var brotherBear = Number (prompt("How many days did you borrow Brother Bear?"));
// var hercules = Number (prompt("How many days did you borrow Hercules?"));
// var grandTotal = (littleMermaid + brotherBear + hercules) * 3;
// var total = Number (confirm(" Total $" + grandTotal ));

// var googlePaysPerHour = Number(prompt("dollars"));

var classFull = false;
var scheduleConflict = false;
var canEnroll = !classFull && !scheduleConflict
alert("It is " + canEnroll + " that you can enroll in this class")