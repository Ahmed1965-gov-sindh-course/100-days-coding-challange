"use strict";
/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
//building array of cars 
let car = [
    'subaru',
    'bmw',
    'audi',
    'toyota',
    'volkswagen',
];
let cars = [
    'honda',
    'suzuki',
    'mehran',
    'waganR',
    'landcruser'
];
if (JSON.stringify(car) === JSON.stringify(car)) { //returns true
    console.log(`Is car ${(car[0])} = subaru  = True`);
}
else {
    console.log(`${car[0]} = false`);
}
if (JSON.stringify(car) === JSON.stringify(car)) { //returns true
    console.log(`\nIs car ${(car[1])} = bmw  = True`);
}
else {
    console.log(`${car[1]} = false`);
}
if (JSON.stringify(car) === JSON.stringify(car)) { //return true
    console.log(`\nIs car ${(car[2])} = audi  = True`);
}
else {
    console.log(`${car[2]} = false`);
}
if (JSON.stringify(car) === JSON.stringify(car)) { //return true
    console.log(`\nIs car ${(car[3])} = toyota  = True`);
}
else {
    console.log(`${car[3]} = false`);
}
if (JSON.stringify(car) === JSON.stringify(car)) { //return true
    console.log(`\nIs car ${(car[4])} = volkswagen  = True`);
}
else {
    console.log(`${car[4]} = false`);
}
// creating false statment
if (JSON.stringify(cars) === JSON.stringify(cars)) { //return false
    console.log(`\nIs car ${(cars[0])} = waganR  = False`);
}
else {
    console.log(`${cars[0]} = True`);
}
if (JSON.stringify(cars) === JSON.stringify(cars)) { //return false
    console.log(`\nIs car ${(cars[1])} = subaru = False`);
}
else {
    console.log(`${cars[1]} = True`);
}
if (JSON.stringify(cars) === JSON.stringify(cars)) { //return false
    console.log(`\nIs car ${(cars[2])} = bmw  = False`);
}
else {
    console.log(`${cars[2]} = True`);
}
if (JSON.stringify(cars) === JSON.stringify(cars)) { //return false
    console.log(`\nIs car ${(cars[3])} = audi  = False`);
}
else {
    console.log(`${cars[3]} = True`);
}
if (JSON.stringify(cars) === JSON.stringify(cars)) { //return false
    console.log(`\nIs car ${(cars[4])} = waganR  = False`);
}
else {
    console.log(`${cars[4]} = True`);
}
