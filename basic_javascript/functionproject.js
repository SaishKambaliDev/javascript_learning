//Write a BMI Calculator

function bmi(height, weight)
{
    return weight / (height*height);
}

console.log(bmi(1.7, 70).toFixed(2));


//reusable discount calculator with Higher order function

function discount(discountval)
{
    return function(price)
    {
        return price - price * (discountval / 100);
    }
}

let discountcal = discount(10);
console.log(discountcal(200));


//a counter that can hold its value

function counter()
{
    let count = 0;
    return function()
    {
        count++;
        return count;
    }
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());


//use rest parameter to accept any number of scores and return the total.

function getscore(...score)
{
    let total = 0;
    score.forEach(function (val)
    {
        total = total + val;
    });
    return total;
}

console.log(getscore(1,2,3,4,5,6,7,8,9));