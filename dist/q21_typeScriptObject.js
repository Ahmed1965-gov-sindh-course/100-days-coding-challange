"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//creating a new TypeScript Object
const person = {
    name: "John",
    age: 24,
}, Person = [];
Person.push(person);
Person.push({
    name: 'Joshp',
    age: 24,
}, {
    name: 'Maria',
    age: 20,
});
Person.map((Person) => {
    console.log(`${Person.name} is :  ${Person.age} years old`);
});
