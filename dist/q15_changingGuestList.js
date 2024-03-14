"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = [
    'Adnan Sami',
    'Yaqoob Khanzada',
    'Muhammad Rafiq'
];
exports.guestList = guestList;
console.log(` Dear Guest:  Mr. ${guestList[2]} applogised to attend dinner`);
//step 2 modify the guest list
guestList.pop();
guestList.push('Ahmed Waqar Khan');
// step-3 printing the new list
guestList.map((guest) => {
    console.log(`\n ${guest}: You are invited on dinner:`);
});
