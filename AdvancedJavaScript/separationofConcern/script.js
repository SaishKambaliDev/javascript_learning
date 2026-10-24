let ul = document.querySelector("ul");
let btn = document.querySelector("button");

function add(num1, num2)  //added the mathematical logic separate
{
    return num1 + num2;
}

btn.addEventListener("click", function(){
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);

    let sum = add(num1, num2);

    let li = document.createElement("li");
    li.textContent = sum;

    ul.appendChild(li);
});