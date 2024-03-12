// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// console.log("bye")
// console.log("ham ")


//callback one function acts as argument in other function

function sum(a, b) {
  console.log(a + b);
}
function calulator(a, b, fun) {
  fun(a, b);
}


const hello = ()=>{
    console.log("hello")
}

//nested callback hell
//one one  data after some time interval


function getdata(data,timeinterval){
    setTimeout(()=>{
    console.log("data",data)
    if (timeinterval){
        timeinterval()
    }
    },2000)

}

getdata(1,()=>{
    getdata(2,()=>{
        getdata(3)
    })
})

//we use call back in nested form then call back hell problem occurs to solevt this problem we have promises

//Async-Await
//to make asynchronos program simple
//normal function simple

const URL='https://cat-fact.herokuapp.com/facts'


const Fetchdata= async()=>{
    console.log("fetching data ......")
    let responce=await fetch(URL)
    console.log(responce)//json
    let data = await responce.json()//make it readable
    console.log(data)
}
 
// let promise= new Promise((resolve,reject)=>{
//     setInterval(()=>{})
//     console.log("i am promise")
//     reject("error ")
// })

//our work in promises

// promise.then((res)=>{
//     console.log(res)

// })

