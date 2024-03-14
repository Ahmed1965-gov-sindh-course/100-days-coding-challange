// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
//1
// • Print your array in its original order.
//2
// • Print your array in alphabetical order without modifying the actual list.
//3
// • Show that your array is still in its original order by printing it.
//4
// • Print your array in reverse alphabetical order without changing the order of the original list.
//5
// • Show that your array is still in its original order by printing it again.
//6
// • Reverse the order of your list. Print the array to show that its order has changed.
//7
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
//8
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//9 
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//step-1 creating variables of new arrays
let fivePlacesToVisit: string[] = ['NewYork','Paris','Germany','UK','KSA'];

// console.log(fivePlacesToVisit);

//step-2 printing array of places to visit in alphabatical format
 
console.log([...fivePlacesToVisit].sort());

//step-3 printing array of places to visit in its original format
console.log(fivePlacesToVisit);

// Print your array in reverse alphabetical order without changing the order of the original list
//step-4 printing array of places in reverse alphabetical order
console.log([...fivePlacesToVisit].reverse());

// step 5: Show that your array is still in its original order by printing it again

console.log(fivePlacesToVisit)

// step-6: Reverse the order of your list. Print the array to show that its order has changed.

fivePlacesToVisit.reverse();
console.log(fivePlacesToVisit);

// step 7: Reverse the order of your list again. Print the list to show it’s back to its original order.

fivePlacesToVisit.reverse();
console.log(fivePlacesToVisit);

// step-8: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
fivePlacesToVisit.sort();
console.log(fivePlacesToVisit);

// step-9: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

fivePlacesToVisit.sort().reverse();
console.log(fivePlacesToVisit);


export {fivePlacesToVisit};

