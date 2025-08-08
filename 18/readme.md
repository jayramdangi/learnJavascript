
// this keyword 


// global object 


console.log("hello world"); 
// now where does this console.log() comes 
 from it is a function 


// setInterval(), setTimeOut(), 
// new String(), ......

// so these all are coming from 
// Global Object 
// these all are present in Global Object as a key 
// and anybody can access it 


// now this global object has differnt name in diff environment 

// in chrome it is window
// in Node.js it is global

so window.Math.random();

it also has document 
// it has setInterval , setTimeout and all which you 
// can imageine 
// isNaN


// and teh best thing is 
// the global object can be accessed without mentioning 

//even when we declare variable in global scope 
// it becomes part of the global object 

let a =10; 

is 
window.a 
//10




// now it has differnet name in diffent environment 

// global object has diff naem 
// 
so if coder rdo window.Math.random();
then node.js can not run it 

so we created a keyword 
which can be used in any environment 
// that points to the global object




// this points to the GlobalObject 
in global scope 
let c=30;
console.log(this.c)
// in browser it represents the window (global object);



// in node.js it gives modules's exports object which is empty object 



// inside a function 

1. non strict mode 
(it is by default of js)

function greet()
{
    console.log(this);
}

// it will point to the global object only 

2. use strict 

// it points to undefined 

strict mode: rules and regulations are high 
like es6 and after strict mode follows 

// if we do
a=10
console.log(10); 
// now strict mode will not it let run 
// but non strict will run it 

in Object.freeze(obj); 

// in non strict 
// it does not give erro if we change obj 
// but in strict it give error on changin 

// go on chat gpt 



// inside a method 

method is a function in object 


ChatGPT said:
Yes — in JavaScript, a method is essentially just a function that is a property of an object.

Breaking it down:
Function → A standalone block of code that can be called.

Method → A function stored as a property inside an object.

// so how does this behave inside a method 


const obj ={
    name:"Rohit", 
    age:20,
    greet : function()
    {
        console.log(this);
    }
}

obj.greet(); 
// here this points to the object which has called it 

// you can do this.name
// we cannot print name like name
// we can use this.name 
// name is deprecated



let , const global object ka part nahi bante 
var, function bante hai



// now if you call 
window.greet(); 
// in normal global function 
// now this inside greet will point to the 
// global object 
// in use strict 









// arrow functions don't have their own this .

// instead they inherit from the 
// surrounding lexical scope 

let obj ={
     greet: ()=>{
        console.log(this)
     }
}

// now it will not show obj 
// it wil show to window 


// it borrows the this from surrounding 
/

let obj ={
    name:"rohit", 
    greet: function()
    {
        let ab =()=>{
             console.log(this);
        }
    }
}

// now it will take from funciton whose thi points to obj 

// so it inhertis from its surrounding lexical scope 

lexical scope: 
what is lexical scope


ChatGPT said:
Lexical scope (also called static scope) is the rule that determines where in your code you can access variables based on where the code is written — not where it’s called from.

It’s called lexical because it depends on the lexical structure of your code (how it’s physically written in the source file).


let obj = {
    this brackets are not scoped 
}




// inside a constructor or class


this points to the 

the object which has called the constructor 



why let , const are not part of window 

because they are block scoped 

and if they are part of window they can be accessed outside of the block 

var inside function does not becomes part of the global objec t



