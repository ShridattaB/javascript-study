//provarity js code in event rahter than inline 
//event object
//which type of event , target of event (div,h1,where it is)
//all event handler have access to the event objects 
//clent x -here vertically our event occurs
//clinet-y where our event horizontally occur 
//classes.add('dark')

btn1=document.querySelector('#btn1')
let mode='light'
btn1.addEventListener('click',()=>{
    if(mode==='light'){
        mode='dark'
        document.querySelector('body').style.backgroundColor='black'
    }
    else{
        mode='light'
        document.querySelector('body').style.backgroundColor='white'
    }
    console.log(mode)
})

btn2=document.getElementById('btn2')
btn2.onclick=()=>{
    console.log('btn2 was clicked')

}
const h1Element=document.getElementById('heading')
   
const onTextChange=(value)=>{
     h1Element.innerText=value
    console.log(value)
}


 
