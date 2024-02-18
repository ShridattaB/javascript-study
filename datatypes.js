//
// Data Types in JavaScript:
// List and describe the basic data types in JavaScript.
// Provide examples of each data type and explain their usage in practical scenarios
/* two types of data in js premitive data type and non premitie data type 
premitive are inbult data types and non premituive data types which created bye use or programer
according to their requirement*/

//1)number data type
let age=20
console.log (typeof(age))
//here type of data is number

//2)string data types
let name="shridatt"
console.log(typeof(name))

//3 bollena data type 

let boll=2<5
console.log(typeof(boll))


//undefined
// Represents a variable that has been declared but not assigned a value.
let undef;
console.log(typeof(undef))


//null
// Represents the intentional absence of any value

let address = null;
console.log(typeof(address))
//null is not premitive noe a object


//object
//Object: Represents a collection of key-value pairs, where keys are strings (or symbols) and values can be any data type. if we give key interger it automatically converted into string

let person = { name: "shree", age: 22 };

console.log(typeof(person))


//array
//Array: Represents an ordered collection of values, 
let numbers = [1, 2, 3, 4, 5];
console.log(typeof(numbers))
//Arrays in JavaScript can hold values of any data type, including numbers, strings, objects, functions, or even other arrays


