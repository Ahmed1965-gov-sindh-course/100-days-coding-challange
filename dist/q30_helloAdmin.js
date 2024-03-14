"use strict";
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */
//generating user array 
let userArray = ['admin', 'Eric', 'John', 'Hameed', 'Gulzar'];
for (let user = 0; user < userArray.length; user++) {
    let adminMessage = "Hello Admin wold you like to see some status reports";
    if (userArray[user] === 'admin') {
        console.log(`\n ${adminMessage}`);
    }
    else {
        console.log(`\nHello ${userArray[user]}, thank you for logging in again`);
    }
}
