//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//  Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.•

//importing guest list

import {guestList} from './q15_changingGuestList'

console.log(guestList);

guestList.map((guest) => console.log(`Dear ${guest}, we just found a bigger dinner table. `));
//step-2 adding new guest a the beginning of the array of guest

guestList.unshift('Imran Khan');

//console.log(guestList);

//step-3 adding new guest a the middle of the array of guest
    guestList.push('Khan Gondal');
    //step-4 printing new set of invited guest
    guestList.map((guest) => console.log(`\nDear ${guest}, you are invited on dinner. `));
    
    

export {guestList} 