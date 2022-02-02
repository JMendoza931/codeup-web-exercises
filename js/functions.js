"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 * takes in one string
 * returns a string saying hello
 */

function sayHello(name) {
    return "hello " + name ;
}
console.log(sayHello("jose"))

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 *takes in a string for an arguement
 *
 * console.log 'helloMessage' to check your work
 */

function sayHello(name) {
    return
}
var helloMessage = sayHello("Jose Mendoza")
console.log(helloMessage)

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myNAme = "Jose A. Mendoza"
console.log(sayHello(myNAme))



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(num1) {
    return num1 === 2
}
console.log(isTwo(2), true);
console.log(isTwo(random), false);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip1(tip, bill) {
    return tip * bill
}
// console.log(calculateTip(0.50, 100), 50)
// console.log(calculateTip(0.10, 150), 15)
// console.log(calculateTip(0.25, 100), 25)

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


    var tipping = Number(prompt("what is your bill total?"));
    var percent = Number(prompt("what percentage do you want to tip? (Please use proper decimal placement)")) / 100;
    alert("Your tip amount will be $" + calculateTip1 (tipping.toFixed(4), percent));
// !!!add / 100 to convert tipping amount also add .toFixed(2) to make look more like money!!!
//!!! figure out how to make toFixed work correctly!!!





/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(price,discount ) {
    var offer = price * discount;
    return price - offer;
}
console.log(applyDiscount(100, 20   ))
// !!! do user input
//!!! return price - (price * discount);