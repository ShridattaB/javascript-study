// Introduction to Events in JavaScript:
// Theory: Explain the concept of events in JavaScript and their significance in web development.
// Practical: Write a brief JavaScript code snippet that demonstrates an event being triggered on a webpage.

//whenevert we click any button this is nothing but event (submission of any form)
//the change in state of object is nothing but event

// let button1 = document.getElementById("btn1");
// button1.addEventListener("click", () => {
//   console.log("first btn is clicked");
// });

const printMsg = () => {
  console.log("second btn is clicked from functin");
};


// Handling Click and Double Click Events:
// Theory: Discuss how to handle click and double click events in JavaScript.
// Practical: Develop a JavaScript function that performs different actions based on whether a single click or double click event is detected on a specific element.
//did it in previous



// Understanding the Event Object:
// Theory: Describe the event object in JavaScript and its properties.
// Practical: Write JavaScript code that accesses and displays various properties of the event object when a specific event is triggered.

//the object contains extra information about event that occurred
//Event object as an argument to handler

document.getElementById("myButton").addEventListener("click", function(event) {
    console.log("Event Type: " + event.type);
    console.log("Target Element: " + event.target.tagName);
    console.log("Current Target Element: " + event.currentTarget.tagName);
    console.log("Mouse X Coordinate: " + event.clientX);
    console.log("Mouse Y Coordinate: " + event.clientY);
  });
  


//   Implementing Dark and Light Mode Toggle:
//   Theory: Discuss the concept of dark and light mode toggles in web design.
//   Practical: Create a button using HTML and CSS that toggles between dark and light modes when clicked, and implement the functionality using JavaScript.
let body=document.querySelector('body')
let mode='light'
let heading=document.querySelector('h1')

let change=document.getElementById('btncolor')



change.addEventListener('click',()=>{
    if(mode=='light'){
        body.style.backgroundColor='black'
        heading.style.color='white'
        mode='dark'

    }
    else if(mode=='dark'){
        body.style.backgroundColor='white'
        mode='light'
        heading.style.color='black'

    }

})

