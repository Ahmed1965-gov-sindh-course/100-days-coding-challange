"use strict";
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//step-1 storing a person name in variable
let myFriendName = '\n\tMushtaq\t\n';
// step-2 displaying name with white spaces
console.log(myFriendName);
// step-2 stripping white space
let myFriendName1 = myFriendName.trim();
//printing stripped name
console.log(myFriendName1);
//--------------------------------------------End of Exercise--------------------------------------------------------
