"use strict";

// var userChoice = Number(prompt('enter a number between 1 and 50'))


// while(true) {
    for (var i = 1; i < 51; i+=2) {

        var userChoice = Number(prompt('enter a number between 1 and 50'))
        console.log();

        if (userChoice > 50 || userChoice <= 0) {

            // use the break keyword to exit from the while loop
            break;
            // nothing after the break will get processed
            console.log('You will never see this line.');
        }
    }
}


