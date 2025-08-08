

Object.prototype
is on the highest level after 

Object.prototype.__proto__ = null 

above it no ones 


function also has its prototype 

function.prototype 

so 
let a = function()
{

}

here a.__proto__ is function.protottype 

and function.prototype.__proto__ is object only 




mozilla firefox has spidermonkey and chrome has v8 

now function all has same , same proto 
but the internal implementation of both are different 


obj1.name now how this will be decoded dpends on the browsers engines 




obj = {
    name:"rohit",
    age:20,
    gender:"male"
};

obj.name 

now how engine will implement it and give it depends on the browser 

so browser uses optimization techniques 


now they don't keep keys values together 
because when you modify the memory requirement will change then what to do 

so we uses different optimization techniques 



so they uses the hashing techniques 



they uses hashing techniques to store it 

