//ask the user for a number and tell the user whether the numbers form 1 to that number are even or odd

let val = prompt("Enter a number: ");

for(let i = 1; i <= val; i++)
{
    if(i%2 === 0)
    {
        console.log(`${i} is even.`);
    }
    else
    {
        console.log(`${i} is odd.`);
    }
}