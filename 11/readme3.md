

prototype 

so user2 has proto user1 
so it also has property of user1 and itself's also 



now when we create array 

let arr = [10, 20, 30, 40]; 

so it takes all the properties from its prototype 

and arr.__proto__ will gives it's first prototype 
that is 
Array.prototype 
that contains all the properties of array 


so we have a object that is Array.prototype 
that has all the functions 


now our arr has only elements now this arr will 
inherits from Array.prototype 
// and you can see it arr.__proto__ 
                         refers to it's nearest prototype 


// now this Array.prototype also has prototype 
// Object.prototype 
// you can see by arr.__proto__.__proto__
// and it will be same as Array.prototyep.__proto__




// now is there any prototype of Object 
Object.prototype.__proto__ is null 




// so whenever we create object , arr 
// there prototypes get attached to it automatically


so internally it becomes 
obj.__proto__ = Object.prototype

and this is the prototype chaining 
they are taking property from the parent 






so array arr take properties from 
Array.prototype 






