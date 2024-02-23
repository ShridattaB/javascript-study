// Understanding the Window Object:
// Theory: Explain what the Window object represents in the browser environment and its significance in web development.
// Practical: Write JavaScript code that accesses and modifies properties of the Window object, such as window.location, window.innerWidth, and window.alert().

//evetyhing from browser comes from window oobject
//it is global object so we dont need to write a it every time
//The Window object in a browser environment represents the browser window or tab

// console.log(window.location.href)
// console.log(window.innerWidth)
// console.log(window.alert("hello"))


// Introduction to the DOM (Document Object Model):
// Theory: Define the DOM and its role as a programming interface for web documents.
// Practical: Use JavaScript to create a new HTML element dynamically and append it to the document using DOM manipulation techniques.

// It represents the structure of an HTML document as a tree of objects.
// Each element, attribute, and piece of text in the HTML document is represented by an object in the DOM.
// The DOM provides methods and properties that allow JavaScript to interact with and manipulate the content, structure, and style of web documents dynamically

/*newele=document.createElement('h1')
newele.innerText="this is new neading"

body=document.querySelector('body')
body.append(newele)*/



// DOM Manipulation:
// Theory: Discuss various methods for manipulating the DOM, such as getElementById, querySelector, createElement, appendChild, and addEventListener.
// Practical: Develop a JavaScript program that dynamically modifies the content and styling of existing HTML elements on a webpage using DOM manipulation methods.

//getElementbyid:- acces the elemt by there id 
//quertyselector;-acces the tag,id,class id=.idname class #className
//createElemt :- when we create a new element we use create element
//appendchild:-append filr we use

//practical
// ele=document.querySelector('h5')
// ele.innerText="bye"
// ele.style.color='red'


// Inspecting the Window:
// Theory: Explain how to use browser developer tools to inspect the Window object and explore its properties and methods.
// Practical: Demonstrate how to access and manipulate the Window object properties and methods using browser developer tools.
// Working with Attributes:

//browser developertoola provide a convenent way to 
//inspect and intract with window ogject 
//represent browser window or tab
//window.location location propety

//window.location.href=;; to modify href
//manupulate..window.alert("alet")
//window.innerwidth
//window.outerheight



//for addig somethind in html we use doc.attelemt9('name')
//deleing we use ele.remove()


 