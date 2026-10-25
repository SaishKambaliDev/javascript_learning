//create an object for student with name, age and isEnrolled

let stu_obj = 
{
    name: "Saish",
    age: 20,
    isEnrolled: true,
}

//Access the value of first-name from this object
const user = {
    "first-name": "Harsh",
};

console.log(user["first-name"]);

//given a dynamic key let key = "age", how will you access user[key]?

let key = "age";
const user1 = {
    age: 26,
};

console.log(user1[key]);

//from the object below  , prinnt the latitude:

const location1 = {
    city: "Bhopal",
    coordinates: {
        lat: 23.2,
        lng: 77.4,
    },
};

console.log(location1.coordinates.lat);

//what will happen if coordinates is missing ? how will you handle the error?

console.log(location1?.coordinates?.lat);


//Destructure the city and lat from the location object above.

let {city} = location1;

let {lat} = location1.coordinates;

console.log(city, lat);


//destructure the key "first-name" as a variable called firstName

const user3 =
{
    "first-name": "Harsh",
};

let {"first-name": firstName} = user3;

console.log(firstName);

//use for-in to log all keys in this object:
const course =
{
    title: "Javascript",
    duration: "4 weeks",
};

for(let key in course)
{
    console.log(key);
}

//use Object.entries() to print all key-value pairs as:
//title: Javascript
//durationn: 4 weeks

Object.entries(course).forEach(function (val)
{
    console.log(val[0] + ": " + val[1]);
});

//using a key to dynamically assigning a property
let key1 = "admin";
let user4 =
{
    name: 'Harsh',
    age: 15,
    [key1]: "harsh",
};

console.log(user4[key1]);