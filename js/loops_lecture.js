'use strict';
//////////////////////////////////////////////// WHILE LOOP
// var slices = 4
// while (slices > 0){
//     console.log("i'll have a slice!");
//     slices = slices -1;
//     console.log("now there's " + slices + "left");
// }
// console.log("no more pizza")

//
// var counter = 0;
// while (counter <= 100){
//     console.log(counter);
//     counter++;
// }
// var counter = 100;
// while(counter >= 0){
//     console.log(counter)
//     counter--;
// }

// var counter = 1;
// var number = 5;
// while (number < 200){
//     number = number * 2;
//     console.log(number);
// }

// var counter = 1;
// var number = 2
// while(number <= 70000){
//     // counter = counter +1
//     console.log(number);
//     number = number * 2;
// }

///////////////////////////////////////////////// DO WHILE
//
// var number = Math.floor(Math.random() *6) +1
// var guess;
// do {
//     guess = parseInt(prompt("enter a number between 1 and 6"));
// } while (guess !== number);
//
//
// alert("your guess of " + guess + " matches the number " + number + "!");
//
//
//
//
//
//
// var iceCreamSales = Math.floor(Math.random() *50) + 50;
// var iceCreamSold = Math.floor(Math.random() *5) +1;
//
// do {
//     console.log(iceCreamSales + " sold")
//     iceCreamSales = iceCreamSales - iceCreamSold
// }   while( iceCreamSales >= 0)
//
// console.log('sorry i cant sell that many i only have ' +  iceCreamSold)
//

//////////////////////////////////////////////////////// for loops

// var count = 100;
// while (count >= 0){
//     console.log(count);
//     count = count -1;
// }

// for (var count = 100; count >=0; count = count -1) {
//     console.log(count)
// }
// variable called i for iterator

// for( var i = 0; i >=100 ; i++){
//     console.log(i);
// }
/////variable////condition///increment
// for (var i = 100; i >= 0; i--){
//     console.log(i);
// }
//
//
// function helpME(input) {
//     return input + input
// }
// console.log(helpME(3))

// var num1 = Number(prompt("enter a number"))
// var num2 = Number(prompt("enter a number"))
//
// function whyME(hate,fate) {
//     var dubs = hate * 2;
//     var dubs2 = fate * 2;
//     return dubs + dubs2
// }
//
// alert(whyME(num1,num2))

function urSquare(input) {
    for (var i = 1; i <= 10; i++) {
        var result = input * input
        return console.log(result)
    }
}

    console.log(urSquare(4))

function legnthstr(str) {
    return str.length;
}

function helloLength(str1, str2) {
    return str1.length + str2.length
}

function evenOdd(num) {
    if (num % 2 === 0){
        return "even";
    } else {
        return "odd"
    }
}

// ================================= WARM UP
// Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// the array contains only string elements.
//     Examples...
// removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]

// var theresNoPlaceLikeHome = ['abc', 'ab', 'cat', 'bay',]


function removeBs (theresNoPlaceLikeHome) {
    var theresNoPlaceLikeHome = ['abc', 'ab', 'cat', 'bay',]

    console.log(theresNoPlaceLikeHome)




}