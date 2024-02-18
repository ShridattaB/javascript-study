// let, const, and var:
// Explain the differences between let, const, and var in JavaScript.
// Provide examples demonstrating when to use each keyword and why.

// let:-it is block scope variable
// variable can not be redeclered but it can be updated
/* const it is block scope variable
 can not be redeclered it can not  be updated

 var /* const it is global scope variable
 can be redeclered it can   be updated
*/

// const age=20
// age=30
// console.log(age)
//here we can  cannot even update out valuejust update the value

let age = 20;
age = 30; // Now, age is successfully updated to 30
console.log(age); // Outputs 30


// var name="shri"
// var name="nick"
// console.log(name)