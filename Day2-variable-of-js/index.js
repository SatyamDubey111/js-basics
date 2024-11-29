console.log("hello,world");

// use of var keyword

var num = 5;
var satyam = 7656;
console.log(num);
console.log(satyam);
document.write(satyam);

// use of let 

let name  = "Ram"
console.log(name);

const fullName = "Shyam sharma"

console.log(fullName);

// difference between var ,let , const .

// var  = globalscope ,function scoped , reassign , redeclarable , can be hoisted
// let = function scope , blocked scope ,reassign
// const = function scope, blocked scope 

// var fulName = "Ram Sharma"
// var fulName = "shyam Shamrma" // re-declare
// fulName = "Mohan Sharma" // re-assign
// console.log("fulName");


// let fullyName = "Ram sharma";
// fullyName = "Ram sharma"; // re-assign is posible
// let fullyName = "Mohan sharma" // re-declaration is not possible
// console.log(fullyName);

// const fulllyName = "Shayam"
// fulllyName = "Shyam sharma" // reassign is not possible
// const fulllyName = "Sohan sharma"
// console.log(fulllyName);

const DOB = 2004;
const pi =3.14;

let address = "india";
address = "usa"
console.log(address)


// ** Alert, confirm or prompt

// Certainly!,in java Script , an alert is a method that displays a dailog box with a specified message and an ok button .

// A confirm is an another dailog box that displays box that displays a message along with ok and cancel buttons.

// A prompt is similar toconfirm but also allow the user to input text.

alert("warning you are in danger");
confirm("Are you 18+");
prompt("please enter your name","Satyam");

// Q. jb ham kuch promt alert ya confirm me dete hai to kya vo variable me save ho sakta hai ?
// ans  - haji bilkul ho sakta hain uske liye bhi hame variable banana padega 

let name1 = prompt("enter your name");
console.log(name1);




    
