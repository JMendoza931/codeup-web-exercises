"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     if (color === 'blue') {
//         return 'Blue is the color of the sky';
//     } else if (color === "red") {
//         return 'Red is my favorite color!';
//     } else if (color === 'orange') {
//         return 'Oranges are yummy!';
//     } else {
//         return 'I dont know anything about that color'
//     }
// }
// console.log(analyzeColor(""))


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// function analyzeColor(color) {
//     if (color === 'blue') {
//         return 'Blue is the color of the sky';
//     } else if (color === 'red') {
//         return 'Red is my favorite color!';
//     } else if (color === 'orange') {
//         return 'Oranges are yummy!';
//     }  else if (color === 'indigo') {
//         return "Indigo is a weird name for a color.";
//     } else {
//         return 'I dont know anything about that color';
//     }
// }
// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// var analyzeColor = randomColor
//
// switch(analyzeColor) {
//     case 'red':
//         alert('Red is my favorite color!');
//         break;
//     case 'blue':
//         alert('Blue is the color of the sky');
//         break;
//     case 'orange':
//         alert('Oranges are yummy!')
//         break;
//     case 'indigo':
//         alert("Indigo is a weird name for a color.")
//         break;
//     default:
//         alert('I dont know anything about ' + randomColor)
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userChoice = prompt('what is your favorite color?')
// var analyzeColor = userChoice
//
// switch(analyzeColor) {
//     case 'red':
//         alert('Red is my favorite color!');
//         break;
//     case 'blue':
//         alert('Blue is the color of the sky');
//         break;
//     case 'orange':
//         alert('Oranges are yummy!')
//         break;
//     case 'indigo':
//         alert("Indigo is a weird name for a color.")
//         break;
//     default:
//         alert('I dont know anything about ' + userChoice)
// }

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// student testing purposes
//var randomNumber = Math.floor((Math.random() * 6) + 1);
//
// function calculateTotal(luckyNum, billAmount) {
//
//     if (luckyNum == '1') {
//         return  ;
//     } else if (luckyNum == '2') {
//         return 'Congrats you win ' + 25 + '% off your next purchase!';
//     } else if (luckyNum == '3') {
//         return 'Congrats you win ' + 35 + '% off your next purchase!';
//     } else if (luckyNum == '4') {
//         return 'Congrats you win ' + 50 + '% off your next purchase!';
//     } else if (luckyNum == '5') {
//         return 'Congrats you win everything for free!';
//     } else if (luckyNum == '0') {
//         return "Sorry you are not a Winner";
//     }
// }
// alert(calculateTotal(2, 50))


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var billTotal = Number(prompt("what is your bill total?"))
var billAfterTotal = calculateTotal(luckyNum, billAmount)






function calculateTotal(luckyNum, billAmount) {
    if (luckyNum == '1') {
        return 'Congrats you got ' + luckyNum + 'you win ' + 10 + '% off your purchase today! your purchase before discount was $' + billAmount + '. Your new total is $' + billAfterTotal +'.';
    } else if (luckyNum == '2') {
        return 'Congrats you win ' + 20 + '% off your next purchase!';
    } else if (luckyNum == '3') {
        return 'Congrats you win ' + 30 + '% off your next purchase!';
    } else if (luckyNum == '4') {
        return 'Congrats you win ' + 40 + '% off your next purchase!';
    } else if (luckyNum == '5') {
        return 'Congrats you win everything for free!';
    } else {
        return "Sorry you are not a Winner";
    }
}
var finalMessage = alert('Congrats you got ' + luckyNum + 'you win ' + 10 + '% off your purchase today! your purchase before discount was $' + billAmount + '. Your new total is $' + billAfterTotal +'.');

alert(calculateTotal(billTotal))



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var enterNumber = Number(confirm('do you want to enter a number?'))

if (enterNumber) {
    // do the number things
    // get user input and store in a variable called numInput
    var numInput = Number(prompt('please enter a number'))
    // validate the user input

    // if valid number
    if (typeof numInput === 'number' && !isNaN(numInput)) {
        // alert if even/odd
        alert('Number is even');
        else {
            alert('number is odd')
        }

        alert(numInput + 100)
        alert()

    } else {
        alert('Incorrect data type')
    }
        // alert num + 100 message


    //else alert incorrect data type
}

!isNaN()












