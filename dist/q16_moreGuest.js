"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//  Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.•
//importing guest list
const q15_changingGuestList_1 = require("./q15_changingGuestList");
Object.defineProperty(exports, "guestList", { enumerable: true, get: function () { return q15_changingGuestList_1.guestList; } });
console.log(q15_changingGuestList_1.guestList);
q15_changingGuestList_1.guestList.map((guest) => console.log(`Dear ${guest}, we just found a bigger dinner table. `));
//step-2 adding new guest a the beginning of the array of guest
q15_changingGuestList_1.guestList.unshift('Imran Khan');
//console.log(guestList);
//step-3 adding new guest a the middle of the array of guest
q15_changingGuestList_1.guestList.push('Khan Gondal');
//step-4 printing new set of invited guest
q15_changingGuestList_1.guestList.map((guest) => console.log(`\nDear ${guest}, you are invited on dinner. `));
