"use strict";


//
// var groceryList = ['bread', 'eggs', 'milk', 'butter'];
// var prices = [2,4,4,8]
// console.log(groceryList[2]) ///will output 'eggs'
//
// var familyIsEvertything = ['Priscilla', 'Jordi', 'Jazzy', 'Jenesis', 'Jovanni']
// console.log(familyIsEvertything[0], familyIsEvertything[4])
// console.log('My beautiful wife is named ' + familyIsEvertything[0])
// console.log(familyIsEvertything.length);
//
// for (var i = 0; i<familyIsEvertything.length; i++){
//     if(i !== familyIsEvertything.length -1) {
//
//         console.log("at index " + i + " : " + familyIsEvertything[i]);
//     }   else {
//     console.log('I love ' + familyIsEvertything[i] + ' and...')
//     }
//
// }

// Given an array
//     var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
// First, create a for loop that generates the output:
//     ```
// San Antonio
// Austin
// Dallas
// Houston
// ```
// Then elaborate on the loop output to generate output like:
//     ```
// Student number 1 lives in San Antonio
// Student number 2 lives in Austin
// Student number 3 lives in Dallas
// Student number 4 lives in Houston
// ```
// Remember the key concept that you can use the iterator variable (i) to access array elements in a loop.

//
// var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
//     for (var i = 0; i < cities.length; i++){
//         console.log('student number ' +( i + 1)+ ' lives in ' + cities[i])
//     }

//FOR EACH LOOP

// var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// prices.forEach(function(price, index) {
//     console.log('item number ' +(index +1) + ' costs ' + price)
// });



// var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
//
// console.log(daysOfTheWeek);
// // ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Sunday' to the beginning of the week
// daysOfTheWeek.unshift('Sunday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
//
// // let's add 'Friday' and 'Saturday' to the end of the week
// daysOfTheWeek.push('Friday', 'Saturday');
//
// console.log(daysOfTheWeek);
// // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//
//
//
// var firstHAlfOF = daysOfTheWeek.slice(0,   2)






// var todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];
//
// console.log('My todo list:');
// console.log(todoList);
// // ['Take out the trash', 'Clean the car', 'Pay the bills']
//
// console.log('Completing the last item: ' + todoList[todoList.length - 1]);
//
// // let's remove the last item
// var removedItem = todoList.pop();
//
// // log what we did
// console.log('Task complete: ' + removedItem);
//
// console.log(todoList);
// // ['Take out the trash', 'Clean the car']
//
// console.log('Completing the first item: ' + todoList[0]);
//
// // let's remove the first item
// var doneItem = todoList.shift();
//
// // log what we did
// console.log('Task complete: ' + doneItem);
//
// console.log(todoList);
// // ['Clean the car']

    //
    // (function(){
    //     "use strict";
    //
    //     var planets = [
    //         'Mercury',
    //         'Venus',
    //         'Earth',
    //         'Mars',
    //         'Jupiter',
    //         'Saturn',
    //         'Uranus',
    //         'Neptune'
    //     ];
    //
    //     /**
    //      * TODO:
    //      * Read each console log below, and write some javascript code to perform
    //      * the step that it describes
    //      */
    //
    //     console.log('Adding "The Sun" to the beginning of the planets array.');
    //     console.log(planets);
    //
    //     console.log('Adding "Pluto" to the end of the planets array.');
    //     console.log(planets);
    //
    //     console.log('Removing "The Sun" from the beginning of the planets array.');
    //     console.log(planets);
    //
    //     console.log('Removing "Pluto" from the end of the planets array.');
    //     console.log(planets);
    //
    //     console.log('Finding and logging the index of "Earth" in the planets array.');
    //
    //     console.log("Reversing the order of the planets array.");
    //     console.log(planets);
    //
    //     console.log("Sorting the planets array.");
    //     console.log(planets);
    // })();


var hamletQuote = 'To be or not to be, that is the question';
var noCommasHamlet = hamletQuote.replace(',','').toLowerCase();
var hamletArray = noCommasHamlet.split(' ');

console.log(hamletArray);
hamletArray.reverse();
console.log(hamletArray);

var hamletBackwords = hamletArray.join(' ');
console.log(hamletBackwords);
var hamletQuoteWordList = hamletArray.join('   ');
console.log(hamletQuoteWordList);
var bringBackTheOriginal = hamletQuoteWordList.replaceAll(',',' ');
var theOriginal = bringBackTheOriginal.split(" ");
theOriginal.reverse();
var theOriginalOne = theOriginal.join('');
console.log(theOriginalOne);


