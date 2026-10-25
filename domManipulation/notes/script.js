// // //to change the font color of a heading once tapped
// // let h1 = document.querySelector("h1");
// // h1.addEventListener("click",function(){
// //     h1.style.color = "red";
// // });
// // //to change the font color of a heading once double tapped
// function dblclick()
// {
//     h2.style.color = "pink";
// }

// let h2 = document.querySelector("h1");

// h2.addEventListener("dblclick",dblclick);

// //to remove the event listener
// h2.removeEventListener("dblclick", dblclick);

// //to add input event listener
// let input = document.querySelector("input");
// input.addEventListener("input", function()
// {
//     console.log("typed");
// });

//to print the inputted text through input event listener
// let inp = document.querySelector("input");

// inp.addEventListener("input", function(evt){console.log(evt.data)});

// //to use the change event listener
// let option = document.querySelector("select");
// let h1 = document.querySelector("h3");

// option.addEventListener("change", function(evt){
//            h1.textContent ="Device Completed!!!"
// });



window.addEventListener("keydown", function(det){
    console.log(det);
});