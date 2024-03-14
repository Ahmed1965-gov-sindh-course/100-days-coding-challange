/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
test-1
• Tests for equality and inequality with strings
test-2
• Tests using the lower case function
test-3
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
test-4
• Tests using "and" and "or" operators
test-5
• Test whether an item is in a array
test-6
• Test whether an item is not in a array
*/



//test-1   Tests for equality and inequality with strings

let textEquality: string = "Hello, World!";
let textInqequality: string = "hello, world!";

console.log(textEquality !== textInqequality);  //true 
console.log(textEquality === textInqequality); //false

//test-2 Tests using the lower case function
let testLowerCase = 'hello, world!';
let testLowerCase1 = 'Hello, World!';

console.log(testLowerCase.toLowerCase() === testLowerCase1.toLowerCase()); //true
console.log(testLowerCase.toLowerCase() !== testLowerCase1.toLowerCase()); //false

//test-3 Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let numberEquality = 5;
let numberInEquality = 10;

console.log(numberEquality === numberInEquality); //false
console.log(numberEquality !== numberInEquality); //True

//test-4 Tests using "and" and "or" operators
let numberEquality2 = 3;
let numberEquality3 = 7;

 console.log(numberEquality2 === numberEquality3 && numberEquality3 != numberEquality2); //false

 console.log(numberEquality2 === numberEquality3 || numberEquality3 != numberEquality2); //true

//test-5 Test whether an item is in a array

let array1: number[] = [1,2,3,4,5,6,7,8,9,10];
let array2: number[] = [1,2,4,6,7,8,9,10];
 console.log(array2.includes(5)); //false
 console.log(array1.includes(5)); //true