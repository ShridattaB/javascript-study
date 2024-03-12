//synchronous programing callback
function sum(a, b) {
  console.log("sum is ", a + b);
}
function sub(a, b) {
  console.log("sub is ", a - b);
}
function calculator(a, b, expression) {
  console.log(expression(a, b));
}

//calculator(2, 3, sub);

//Asynchronous callback
function hello() {
  console.log("hello");
}

// setTimeout(hello,2000)

//Callback Hell
//Nested Callbacks stacked below one another forming a pyramid structure()
//this style of programing becomes difficult to understndd & manage

//nesting
//here we write if else statement inside if this is nothing but nesting
age = 61;
if ((age) => 18) {
  if (age > 60) {
    console.log("senor");
  } else {
    console.log("middle");
  }
} else {
  console.log("child");
}
//whenever we write callback function we use arrow gunction
//this is call back hell
// function getdata(dataid, nextdata) {
//   setTimeout(() => {
//     console.log("data", dataid);
//     if (nextdata) nextdata();
//   }, 2000);
// }

// getdata(1, () => {
//   getdata(2, () => {
//     getdata(3,()=>{
//       getdata(4)

//     });
//   });
// });

//promises

//promises is for eventual completion of task i
//it is object in js
//it is solution of callback hell
//three state of promise fullfilledsate(resolved) ,pending state,reject state

const getpromise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am promise");
    resolve("success");
  });
};
// let promise=getpromise();
// promise.then(()=>{console.log("promise fullfilled")})
// promise.catch(()=>{console.log("promise not fullfilled")})

// function getdata1(dataid1,nextdata1){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("data", dataid1);
//       resolve("success")
//       if(nextdata1)
//       nextdata1();
//     }, 2000);

//   })

// }

//after fullfill we have also some work then use .then()
//after reject we have some work then we use .catch()

//promise chain
//chaing:-using one then in another than

// function Asyncfun1(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("some data data 1")
//       resolve("success1")
//     },4000)
//   })
// }

// function Asyncfun2(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("some data data 2")
//       resolve("success2")
//     },4000)
//   })
// }

// console.log("fetching data 1 ")
// let p1=Asyncfun1()
// p1.then((res)=>{
//   console.log("fetching data 2")
//   let p2=Asyncfun2()
//   p2.then(()=>{

//   })

// })

//promise chaning
//one data another

// function getdata1(dataid1){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("data", dataid1);
//       resolve("success")
//     }, 2000);
//   })
// }

// getdata1(1)
// .then((res)=>{
//   return getdata1(2)
// })
// .then((res)=>{
//   return getdata1(3)
// })
// .then((res)=>{
//   console.log("done")
// })

//callback--callbackhell--promises--promisecec chain --async await

//normal function we can make async
//await pause the execution of surrounding async function
//until the promise is settled


function getdata1(dataid1){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("data", dataid1);
      resolve("success")
    }, 2000);
  })
}

async function getAlldata(){
  await getdata1(1);
  await getdata1(2);
  await getdata1(3);
}
// getAlldata() //call functions


//IIFE immediately invoke function Expression
// (function(){
//   console.log("IIFE1")
// })()

// (()=>{console.log("IIFE2")})()

