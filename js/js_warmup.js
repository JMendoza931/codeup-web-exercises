"use strict";


// ================================= WARM UP
// Write a function, createUserMsg, that takes in a user object like the following...
// {
//     username: ‘jbomb’,
//     email: ‘john@email.com’,
//     isAdmin: true
// }
// ...and returns a string output that displays in the console like this...
// ‘User jbomb is an admin and can be reached at john@email.com’
// If jbomb were not an admin, the message should display...
// ‘User jbomb is not an admin and can be reached at john@email.com’

// var logiIn = {
//     userName: "jbomb",
//     email: 'john@email.com',
//     isAdmin: true
// };
// function createUserMsg(user) {
//     if (logiIn.isAdmin) {
//         return "User " + logiIn.userName + " is not an admin and can be reached at " + logiIn.email;
//     } else {
//         // return "User " + logiIn.userName + " is not an admin and can be reached at " + logiIn.email;
//     // }
//     return " user " + logiIn.userName + " is " + ((logiIn.isAdmin) ? "" : "not") + " an admin and can be reached at " + logiIn.email;
// }
// }
//
//
// console.log(createUserMsg(logiIn));

// var areaOrPerimeter = function (l, w) {
//     if (isNaN(parseFloat(l)) || isNaN(parseFloat(w))) ){
//         return (l * 2) + (w * 2)
//     } if (l < w || w < l) {
//         return (l * 2) * (w * 2)
//     // }  if (isNaN(parseFloat(l)) || isNaN(parseFloat(w))) {
//         return false
//     }
// };
// console.log(areaOrPerimeter( ))


// {
//     firstName: '...',
//         lastName: '...',
//     email: '...',
//     username: '...',
//     password: '...'
// }
// {
//     firstName: '...',
//         lastName: '...',
// }
var fred = {
    firstName: 'Fred',
    lastName: 'Smith',
    email: 'fred@email.com',
    username: 'fred123',
    password: 'pass123'
}
// getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}

function getSimpleUser(user) {
    return {
        firstName: user.firstName.toLowerCase(),
        lastName: user.lastName.toLowerCase()
    }
}

console.log(getSimpleUser(fred))
