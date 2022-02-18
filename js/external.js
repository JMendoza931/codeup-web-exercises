"use strict";

// console.log("Hello from external JavaScript");
//
// alert("Welcome to my Website!")
// var userChoice = prompt("what is your favorite color?");
// alert("Surprise! " + userChoice + " is my favorite color too!");
//
var littleMermaid = Number (prompt("How many days did you borrow The Little Mermaid?"));
var brotherBear = Number (prompt("How many days did you borrow Brother Bear?"));
var hercules = Number (prompt("How many days did you borrow Hercules?"));
var grandTotal = (littleMermaid + brotherBear + hercules) * 3;
var total = Number (alert(" Total $" + grandTotal ));
//
//
//
// var classFull = false;
// var scheduleConflict = false;
// var canEnroll = !classFull && !scheduleConflict;
// alert("It is " + canEnroll + " that you can enroll in this class");
//
// var googlePaysPerHr = Number(prompt("How much does Google pay you per hour?"));
// var amazonPaysPerHr = Number(prompt("How much does Amazon pay you per Hour?" ));
// var facebookPaysPerHr = Number(prompt("How much does Facebook pay you? "));
// var hrsWorkedForGoogle = Number(prompt("How many hours did you work for Google?"));
// var hrsWorkedForAmazon = Number(prompt("How many hours did you work for Amazon?"));
// var hrsWorkedForFacebook = Number(prompt("How many hours did you work for Faceboook?"));
// var payUpMan = (googlePaysPerHr * hrsWorkedForGoogle) + (amazonPaysPerHr * hrsWorkedForAmazon) + (facebookPaysPerHr * hrsWorkedForFacebook);
// var payCheckChaChing = Number(alert("You will be paid $" +payUpMan));

var numberOfProducts = Number (prompt("How many items are you buying today?"));
var premiumMemberStatus = prompt("Are you a premium member?");
var canCheckout = numberOfProducts >=2 && premiumMemberStatus;
var cannotCheckOut = (numberOfProducts <2 && !premiumMemberStatus) prompt("you need to have a minimum of 2 items in the cart or become a premium member to receive this offer.");
var checkOut =