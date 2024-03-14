/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
 */
let alienColor1 = 'green';
let alienColor2 = 'yellow';
let alienColor3 = 'red';

//generating 1st version of alien color with   green  

console.log('\nIf statement is running')

if (alienColor1==='green') 
{
    console.log('\nyou just got 5 points for shooting alien color with  green '); 
    } else if (alienColor2==='green') 
    {
    console.log('\nyou just got 10 points for shooting'); 
    }else if (alienColor3==='green')
    {
        console.log('\nyou just got 15 points for shooting');
    }else
    {
        console.log('\nyou just got no points for shooting');
    }  
 
    if (alienColor2==='yellow') 
{
    console.log('\nyou just got 5 points for shooting alien color with  yellow '); 
    } else if (alienColor2==='green') 
    {
    console.log('\nyou just got 10 points for shooting'); 
    }else if (alienColor1==='yellow') 
    {
        console.log('\nyou just got 15 points for shooting');
    }else
    {
        console.log('\nyou just got no points for shooting');
    }

if (alienColor3==='red') 
{
    console.log('\nyou just got 5 points for shooting alien color with  red'); 
    } else if (alienColor2==='green') 
    {
    console.log('\nyou just got 10 points for shooting'); 
    }else if (alienColor3==='green')
    {
        console.log('\nyou just got 15 points for shooting');
    }else
    {
        console.log('\nyou just got no points for shooting');
    }

    // 2nd version of running else if statement
    console.log('\nRunning else if statement')
if( alienColor1 === alienColor2)
{
console.log('\nyou just got 5 points for shooting ');
}else if( alienColor1 === 'green')
    {
        console.log('\nyou just got 10 points for shooting ');

    }
    //running  else statment

    console.log('\nprinting else statment')
    if( alienColor1 === alienColor2)
    {
        console.log('\nyou just got 5 points for shooting ');

    }else
    {
        console.log('\nyou just got 10 points for shooting');
    }