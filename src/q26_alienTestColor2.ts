/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/


let alienColor: string = 'green';

if (alienColor === 'green') { 

   console.log('\nyou just got 5 points for shooting alien'); 
} else {
  console.log('\nyou just got 10 points for shooting'); 
  }
  
  if (alienColor === 'blue') {
    console.log('\nyou just got 5 points for shooting alien'); 
  } else {
    console.log('\nyou just got 10 points for shooting none green alien'); 
  }

  