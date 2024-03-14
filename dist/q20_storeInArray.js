"use strict";
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
//step 1 -create a list of rivers in Pakistan.
let rivers = [
    'River Sindh',
    'River Kabul',
    'River Chunab',
    'River Sutlaj',
    'River Ravi'
];
//maping the list
rivers.map(river => console.log(`\n${river}`));
