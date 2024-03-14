// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

//step-1 declearing variable famous_person

let famous_person: string = "Albert Einstein";

//step-2 storing message in a variable

let famous_personMessage: string = "“A person who never made a mistake never tried anything new.”"

//concating author and message

let famous_personMessage2: string = famous_person.concat(famous_personMessage)
// step-3 printing message

console.log(famous_personMessage2);

//--------------------------End of Exercise----------------------------------------