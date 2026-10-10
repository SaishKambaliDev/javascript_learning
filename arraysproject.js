//create an array with 3 fruits and print the 2nd fruit

let fruits = ["apple", "banana", "mango"];

console.log(fruits[1]);

//add pineapple at the end and mango at the beginning of this array ["apple", "banana"]

let fruit = ["Apple", "Banana"];
fruit.push("Pineapple");
fruit.unshift("Mango");

console.log(fruit);

//insert red and blue in the first index

let colors = ["white", "green"];
colors.splice(1,0,"Red","Blue");

console.log(colors);

//sort this array alphabetically and then reverse it

let names = ["saish", "parth", "pratik", "sam"];
names.sort().reverse();

console.log(names);

//use .map() to square each number in the array

let num = [1,2,3,4];
let squ_num = num.map(function (val)
{
    return val ** 2;
});

console.log(squ_num);

// use .filter() to keep numbers greater than 10

let arr_num = [1,2,90, 9, 7];
let filter_arr = arr_num.filter(function (val)
{
    return val>10;
});

console.log(filter_arr);

//use .reduce() to find the sum of this array

let arr2 = [1,2,3,4,5,6];
let arr_sum = arr2.reduce(function (accumulator, val){
    return accumulator + val;
}, 0);

console.log(arr_sum);

//use .find() to return first number smaller than 10

let arr3 = [20, 30, 40, 5];
let comp_arr = arr3.find(function (val){
    return val < 10;
});

console.log(comp_arr);

//use .some() to check if any student has scored less than 25'

let stu_mark = [100, 80, 90, 10];
let result = stu_mark.some(function (val){
    return val < 25;
});

console.log(result);

//use .every() to check if all numbers are even or not
let arr4 = [2,4,6,8,10];
let even_test = arr4.every(function(val){
    return val%2 === 0;
});

console.log(even_test);

//merging two arrays using spread operators

let arr5 = [1,2,3];
let arr6 = [3,4,5];
let arr7 = [...arr5,  ...arr6];

console.log(arr7);
