// For Loop: 
// Theory: Explain the syntax and functionality of a for loop in JavaScript.
// Practical: Write a JavaScript program that uses a for loop to print the numbers from 1 to 10.

// for(intialization,condition,irtation){

// } this is a synax for for loop
//funcationally of js:- to perfaom specfic task again and again we use loop
//there we first intilization
 ///then we give condition to our loop
 //then iretaion for updating our values

for(i=1;i<=10;i++){

}

// While Loop:
// Theory: Describe how a while loop works and when it is appropriate to use. -Practical: Create a JavaScript function that uses a while loop to find the factorial of a given number.
//A while loop in JavaScript executes a block of code repeatedly as long as a specified condition evaluates to true. It's appropriate to use a while loop when you don't know the exact number of iterations beforehand and want to continue executing the code until a certain condition is met or becomes false.


// For loop: Used when you know the number of iterations in advance.
// While loop: Used when you need to loop until a condition is met.

// User
// if the condition is laredy given to us like run this loop 5 times then we use for loop and if there is condition like run this loop until it satisfy given condtion then while loop is used 

// num=prompt("enter the number")
// n=1
// fact=1
// while(n<=num){
//     fact=fact*n
//     n++
// }
// console.log(fact)


// Do-While Loop:
// Theory: Discuss the characteristics of a do-while loop and how it differs from other loop structures.
// Practical: Implement a JavaScript script that prompts the user to guess a secret number between 1 and 10 using a do-while loop.
//it is same as while loop only one diifernece is if it execute a code at least once
//if conditions is satify or not

// guessno=10
// num=prompt("enter")
// while(num!=guessno){
//     num=prompt("enter a num")
// }
// console.log("finally matched")


// const guessNo = 10;
// let num=prompt("enter a num")

// do {
//     num = prompt("Enter a number");
// } while (num != guessNo);

// console.log("Finally matched");

// let num = 6; 

// do {
//     console.log("hello");

// } while (num <5);


// For-of Loop:
// Theory: Explain the purpose of a for-of loop and its advantages over traditional for loops.
// Practical: Write a JavaScript function that takes an array of numbers as input and uses a for-of loop to calculate their sum
//A for-of loop in JavaScript is a programming construct used to iterate over elements in an iterable objec

let arr=[1,2,3,4,5]
sum=0
for(let i of arr){
    sum=sum+i
}
console.log(sum)

// For-in Loop:
// Theory: Define a for-in loop and illustrate its usage with an example.
// Practical: Develop a JavaScript program that iterates over the properties of an object using a for-in loop and prints each property along with its value.
//helps to to all diff things inside the objects

let info={
    name:"shri",
    age:21,
    address:"340 bharat mata nagar",
    pincode:413224
}
for (let i in info){
    console.log(i,info[i])
}











