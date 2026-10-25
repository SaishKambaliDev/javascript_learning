// let a = 10;    //block and global scoped
// {
//     let a = 20;   //if not this below console looks for outside a
//     console.log("Inside: ", a);
// }

// console.log("Outside: ", a);

// let a = [1,2,3];
// let b = a;

// function abcd(...val)
// {
//     console.log(val);
// }

// abcd(1,2,3,4,5,6,7,8,9,10);

// function abcd()
// {
//     let a = 10;
//     return function(){
//         console.log(a);
//     }
// }

// function abcd()
// {
//     let a = 12;
//     function def()
//     {
//         let b = 18;
//         function jhi()
//         {
//             let c = 20;
//         }
//     }
// }

// (function(){
//     console.log("Hi javascript");
// })();

// console.log(a);

// var a = 10;

let arr = [1,6,7,2,10];
let sorarr = arr.sort(function (a,b){
    return b-a;
})