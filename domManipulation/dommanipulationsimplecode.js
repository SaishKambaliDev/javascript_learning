//changing the heading of the webpage  using id
let h1 = document.querySelector("#first");
h1.textContent = "Welcome to the community";

//select all li elements and print their text
let li = document.querySelectorAll("li");
li.forEach(function (val){
    console.log(val.textContent);
});

//printing the  text content of a tag
let h2 = document.querySelector("h1");
console.log(h2.textContent);

