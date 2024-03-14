"use strict";
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//step-1 creating Array
let myFriendsName = [
    'Khan',
    'Wajahat',
    'Ali',
    'Mehmood'
];
//step-2 calling each name one by one
myFriendsName.map((friends) => {
    console.log(friends);
});
