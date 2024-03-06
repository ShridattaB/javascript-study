// Introduction to JavaScript Classes:
// Theory: Explain the concept of classes in JavaScript and their role in object-oriented programming.
// Practical: Write a simple JavaScript class definition with properties and methods and instantiate an object from it.
//classes are nothing but blueprint of object
//object are nothing but instance of class

class person {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

 marks(marks){
    console.log(`the marks are ${marks}`)
 }
}
const john = new person("shre", 38);




// Constructor in Classes:
// Theory: Describe the constructor method in JavaScript classes and its purpose in initializing object instances.
// Practical: Create a JavaScript class with a constructor method that initializes object properties based on input parameters.

// The constructor method is defined within the class using the keyword constructor. It can take parameters that are used to initialize the object's properties. Inside the constructor, you typically assign these parameters to the object's properties using the this keyword.
// One key feature of the constructor method is that it is automatically invoked when you create a new instance of the class
//above example






// The Super Keyword:
// Theory: Explain the super keyword in JavaScript and its use in accessing and calling methods from a parent class within a subclass.
// Practical: Write a JavaScript subclass that overrides a method from its parent class and calls the parent method using the super keyword.


// To call the superclass constructor within the subclass constructor, using super().
// To call methods from the superclass within the subclass.


class animal{
    constructor(name,age,color){
        this.name=name
        this.age=age
        this.color=color
    }
    eat(){
        console.log("he is eating")
    }
    bark(){
        console.log("animal is")
    }
}

class dog extends animal{
    constructor(age){
        super()
        this.age=age

    }
    bark(){
        // super.bark() 
        console.log("dog is barking")
    }


}
dog1=new dog(20)
dog1.bark()


// Error Handling:
// Theory: Discuss error handling techniques in JavaScript, including try-catch blocks, throwing custom errors, and handling asynchronous errors.
// Practical: Write JavaScript code that demonstrates error handling using try-catch blocks and custom error classes.
//Error handling in js
//for error handling we have try catch blocks

let a= 9
let b=10
console.log(a)
console.log(b)
try{
    
    if(a!==10)
    throw new Error("Shree Error A is not 10")
    console.log("mult:"+a*b)

 //error
} catch(err){ 
    console.log(err) 
   //catch is used to handle our error

}
finally{
    console.log("SBDSDSAD")
}

console.log(a+b)
console.log(a-b)

try {
    ///logic

} catch (error) {
   //error handling 
}


let user=1
try{
if(user<18){
    throw new Error("ur under 18")
}
    console.log("welcom")
}
catch(err){
    console.log(err)
}
finally{
    console.log("end of the program")
}



