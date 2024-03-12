// Understanding Asynchronous Programming:
// Theory: Explain the difference between synchronous and asynchronous programming in JavaScript.
// Practical: Write code examples to illustrate synchronous and asynchronous behavior in JavaScript.

//Ans:-Synchronous:- means the code runs in perticular sequence of instructons given in the program each instruction wat for previous instruction complete excution

//asynchronoys :-due so synchrous sometimes imp programs blocked due to some previous instruction which casue dely 
//asynchrous code excution allow to execute next instruction immedietly 

// console.log("first")
// console.log("second")

// setTimeout(()=>{
//     console.log("third")//here our progam not wait 

// },2000)

// console.log("forth")

// Callbacks in JavaScript:
// Theory: Discuss the concept of callbacks and their role in handling asynchronous operations.
// Practical: Implement callback functions to manage asynchronous tasks, such as fetching data from an API.

//API 




// Promise Chaining:
// Theory: Discuss the concept of promise chaining and how it enables sequential execution of asynchronous tasks.
// Practical: Write code examples to demonstrate promise chaining for handling multiple asynchronous operations.


//chaing:-using one then in another than

//promise chaning
//one data another

function getdata1(dataid1){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("data", dataid1);
      resolve("success")
    }, 2000);
  })
}

getdata1(1)
.then((res)=>{
  return getdata1(2)
})
.then((res)=>{
  return getdata1(3)
})
.then((res)=>{
  console.log("done")
})


// IIFE (Immediately Invoked Function Expression):
// Theory: Explain what IIFE is and how it is used in JavaScript.
// Practical: Implement an IIFE to encapsulate and execute code immediately within a function scope.

//IIFE immediately invoke function Expression
// (function(){
//   console.log("IIFE1")
// })()

// (()=>{console.log("IIFE2")})()
