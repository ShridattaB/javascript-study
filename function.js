// Arrow Functions:
// Theory: Explain what arrow functions are in JavaScript and how they differ from traditional function expressions.
// Practical: write a function expression as an arrow function and demonstrate its usage with an example.


// Traditional function expressions use the function keyword.
// Arrow functions use a shorter syntax with the => arrow symbol
arr1=[10,20,30,40]
const sumof=(arr)=>{
    sum=0
    for(i of arr){
        sum=sum+i
    }
    
console.log(sum)
}


// forEach Loop in Arrays:
// Theory: Describe how the forEach method works in JavaScript arrays and its advantages.
// Practical: Write a JavaScript program that uses the forEach method to iterate over an array of numbers and print each element to the console.
// The forEach() method calls a function for each element in an array. The forEach() method is not executed for empty elements.

// arr2=[10,20,30,40,50]
// arr2.forEach(n => {
//     console.log(n*n) //(n,index,arr)
// });


// More Array Methods (map, filter, reduce):
// Theory: Introduce additional array methods: map, filter, and reduce, explaining their purposes and functionalities.
// Practical: Implement JavaScript functions that utilize each of these array methods to perform specific tasks, such as doubling each element, filtering out even numbers, and calculating the sum of all elements in an array.

// map: It changes every item in a list based on a rule you give, making a new list with those changes.
// filter: It picks out only the items in a list that meet a condition you set, making a new list with just those items.
// reduce: It crunches all the items in a list down to a single value, like adding them all up or finding the biggest one.


//doubling each element

arr3=[1,2,3,4,5]
newarr=arr3.map(num=>num*2)
console.log(newarr)

//filtering out even numbers
newarry1=arr3.filter(n=>n>3)
console.log(newarry1)

//sum of element
newarry2=arr3.reduce((a,b)=>a+b)
console.log(newarry2)


// Filter Method:
// Theory: Explain how the filter method works in JavaScript arrays and its significance in data manipulation.
// Practical: Develop a JavaScript program that uses the filter method to extract elements from an array that meet certain criteria, such as filtering out strings longer than a specified length.

// Reduce Method:
// Theory: Discuss the reduce method in JavaScript arrays and its role in aggregating data.
// Practical: Write a JavaScript function that utilizes the reduce method to calculate the total sum of elements in an array and return the result.
//already done on above example