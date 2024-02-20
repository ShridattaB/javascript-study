// Arrays Introduction:
// Theory: Explain what arrays are in JavaScript and their importance in programming.
// Practical: Create a JavaScript array containing your favorite fruits and display them on the console.

// Arrays in JavaScript are used to store multiple values in a single variable. They can hold various data types, including numbers, strings, objects, and even other arrays

// let fruit=["apple","banan","lichi"]
// console.log(fruit)

// Arrays Indices:
// Theory: Describe how array indices work in JavaScript and how to access elements at specific indices.
// Practical: Write a JavaScript function that takes an array of numbers as input and returns the sum of the elements at even indices

//array strat with indx of 0
num=[1,2,3,4]
num[2]=1 //update the array


arr1=[10,20,30,40,50,60]
sum=0
for(i=1;i<=arr1.length;i+=2){
    sum=sum+arr1[i]
    
}
console.log(sum)


// let num=[1,2,3,4,5,6,7,8,9,10]

// function sumofarry(arr){
//     sum=0
//     for(let i of arr){
//         if(i%2==0){
//             sum=sum+i
//         }
        
//     }
//     console.log(sum)
// }



// Array Methods: 
// Theory: Introduce common array methods in JavaScript, such as push, pop, shift, unshift, slice, splice, concat, indexOf, and includes.
// Practical: Create a JavaScript program that demonstrates the usage of at least three array methods to perform various operations, such as adding elements, removing elements, and searching for elements.









// Array Methods: 
// Theory: Introduce common array methods in JavaScript, such as push, pop, shift, unshift, slice, splice, concat, indexOf, and includes.
// Practical: Create a JavaScript program that demonstrates the usage of at least three array methods to perform various operations, such as adding elements, removing elements, and searching for elements.

// arr=[1,2,3]
// arr.push(0,1)
// arr.pop()
// arr.unshift(9)
// arr.shift()
// console.log(arr)



//slice
// array=[1,2,3,4,5,6]
// new_array=array.slice(0,3) //starting index and ending index give result
// console.log(array)
// console.log(new_array)



//splice 1)starting index
//deleting values count
//adding new vales

// arr=[1,2,3,4,5,6,7,8]
// arr.splice(0,5,33)
// console.log(arr)


// arr1=[1,2,3,4,5]
// arr2=[5,6,7,8]
// newarray=arr1.concat(arr2)
 

//indexOf
// arr1=[1,2,3,4,5]
// index=arr1.indexOf(5)
// console.log(index)


//include
// arr1=[1,2,3,4,5]
// arry2=arr1.includes(2)




// arr=[1,2,3]
// arr.push(0,1)
// arr.pop()
// arr.unshift(9)
// arr.shift()
// console.log(arr)



// Looping Over Arrays:
// Theory: Discuss different methods for looping over arrays, including for loops, while loops, and forEach method.
// Practical: Implement a JavaScript function that uses a for loop to find the average of the elements in an array of numbers.

// function avg(arry){
//     length=arry.length
//     sum=0
//     for(i of arry){
//         sum=sum+i
//     }
//     average=sum/length
//     console.log(average)
// }
// avg([1,2,3,4,5,6,7,8,9,10])








