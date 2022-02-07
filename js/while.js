"use strict";



var number = 1
while(number <= 70000){
    console.log(number);
    number = number * 2;
}

var iceCreamSales = Math.floor(Math.random() *50) + 50;
var iceCreamSold = Math.floor(Math.random() *5) +1;

do {
    console.log(iceCreamSales + " sold")
        iceCreamSales = iceCreamSales - iceCreamSold
}   while( iceCreamSales >= 0)

console.log('sorry i cant sell that many i only have ' +  iceCreamSold)