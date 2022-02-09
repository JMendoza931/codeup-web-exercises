"use strict";



// function showMultiplicationTable(input) {
//     for(var i = 1; i <=10; i++) {
//         var result =  input * i
//         console.log(result)
//     }
//         }
//
// console.log(showMultiplicationTable(8));
// console.log(evenOrOdd())
// function multiple(number) {
//     for (var multiplier = 1; multiplier <= 10; multiplier++) {
//         console.log(number + 'x' + multiplier + " = " + number * multiplier)
//     }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var ranNum = Math.floor(Math.random() * 181) + 20;
for (var i = 0; i < 500; i++ ){
    var ranNum = Math.floor(Math.random() * 181) + 20;
    if (ranNum <20 || ranNum >200){
        console.log("yoooooooo");
    }   else if (ranNum === 20 || ranNum === 200) {
        console.log("heyyyy");
    }
    console.log(ranNum)
}
//////add on to bottom


// function evenOrOdd(ranNum) {
//     for (var i = 0; i <10; i++ ){
//         var ranNum = Math.floor(Math.random() *181) + 20;
//         if (ranNum % 2 === 0){
//             console.log(ranNum + " even")
//         } else {
//             console.log(ranNum + " odd")
//         }
//     }
// }
//




//
// function decreaseByFive(num) {
//     for (var i = 100; i >=5; i -= 5) {
//         // var result = num - i
//         console.log(i)
//     }
// }
//
// (decreaseByFive())
//
//
// i take a number
// im know i have to concatenate numbers
// which means they have to be an empty string  numeric string
// im going to concatenate the numeric string to the empty string
// im going to store concatenate in a variable and concatenate that stored variable
// for (var num = 1; num <10; num++){
// // var number = 9;
// var count = 0;
// var outputString = "";
// while ( count < num ){
// outputString = outputString + num.toString();
// count = count +1;
// console.log(outputString);
// }
//


// }

//
// var string = "";
// for(var i = 0; i < 8; i++){
//     var word = prompt("lets make a sentence!");
//     if (word === "cruses"){
//         console.log("this is a respectable program");
//         break
//         // continue;
//     }
//     string = string + " " + word;
//     console.log(string);
// }




