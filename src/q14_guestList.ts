// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

//step-1 storing persons name to call for dinner

let guestList: string[] = [
    'Adnan Sami',
    'Yaqoob Khanzada',
    'Muhammad Rafiq'
]

// step-2 mapping list to display
guestList.map((guest)=>{
console.log(`\n ${guest}: You are invited on dinner:`)
})

export {guestList}