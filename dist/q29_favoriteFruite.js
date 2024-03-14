"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
let favoriteFruite = ["apple", "orange", "grapes", "banana", "pineapple"];
favoriteFruite.forEach((fruite) => {
    if (fruite === "apple") {
        console.log("\nYou really like apples!");
    }
});
favoriteFruite.forEach((fruite) => {
    if (fruite === "orange") {
        console.log("\nYou really like oranges!");
    }
});
favoriteFruite.forEach((fruite) => {
    if (fruite === "grapes") {
        console.log("\nYou really like grapes");
    }
});
favoriteFruite.forEach((fruite) => {
    if (fruite !== "watermelon") {
        console.log("\nYou really don't like watermelon!");
    }
});
favoriteFruite.forEach((fruite) => {
    if (fruite === "banana") {
        console.log("\nYou really like bananas!");
    }
});
