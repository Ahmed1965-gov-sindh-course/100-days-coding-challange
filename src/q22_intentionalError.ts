//  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. 

//creating an arry

let FriendsName: string[] = [
    'Khan',
    'Wajahat',
    'Ali',
    'Mehmood'
]
//console.log(FriendsName[5]);

FriendsName.map((friend)=>console.log(friend));
console.log(FriendsName)

export {}