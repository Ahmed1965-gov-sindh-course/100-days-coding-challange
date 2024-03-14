// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

//step-1 importing guestList from Ex-14,

import { log } from 'console'
import { } from './q14_guestList'    

let guestList: string[] = [
    'Adnan Sami',
    'Yaqoob Khanzada',
    'Muhammad Rafiq'
]
console.log(` Dear Guest:  Mr. ${guestList[2]} applogised to attend dinner`)
//step 2 modify the guest list
guestList.pop();
guestList.push('Ahmed Waqar Khan');

// step-3 printing the new list
guestList.map((guest)=> {
    console.log(`\n ${guest}: You are invited on dinner:`)
})

export {guestList}













