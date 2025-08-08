
const sum = function(...num)
{
     console.log(num);
}

sum(4,5,6,7);

// so if we don't know the number of arg 
// we can use rest operator 
// ...num
// which will convert it to the array 

// we can pass obj, function , array , anything in function 

function fun({name})
{
    console.log(name)
}

let obj = {"name":"jay"}; 


function check(obj){
     obj.name = "ram"; 
}

check(obj);

fun(obj); 

// so we can see object goes pass by reference in the
// function 

// and so does the array 

// all goes pass by reference int the fucntion 

const nam = "jay"; 

function change(name)
{
    name = "ram"; 
}

change(nam); 
console.log(nam);

// and primitives are passed by value 


// in the function in js object is pass by reference or value


// ChatGPT said:
// In JavaScript, objects (including arrays and functions) are passed by reference — but technically it’s pass-by-value of the reference.

// That means:

// The reference (memory address) to the object is copied into the function parameter.

// Both the original variable and the parameter point to the same object in memory.

// If you change a property inside the function, it affects the original object.

// But if you reassign the parameter to a new object, it won’t affect the original variable.

// Example:

// js
// Copy code
// function change(obj) {
//     obj.name = "Jay"; // changes original
// }

// let person = { name: "Ram" };
// change(person);
// console.log(person.name); // "Jay" ✅
// Reassignment case:

// js
// Copy code
// function reassign(obj) {
//     obj = { name: "Shyam" }; // changes only local reference
// }

// let person = { name: "Ram" };
// reassign(person);
// console.log(person.name); // "Ram" ❌
// If you want, I can also explain why primitives don’t behave like this in JS.







// You said:
// it means primitive will not change but non primitve can be changed by a function 


// ChatGPT said:
// Exactly ✅

// Primitives (number, string, boolean, null, undefined, symbol, bigint) → passed by value, so the function gets a copy and changing it won’t affect the original.

// Non-primitives (objects, arrays, functions) → function gets a copy of the reference, so you can change their contents inside the function, but you can’t rebind the original variable from inside the function.

// Quick demo:

// js
// Copy code
// function changePrimitive(x) {
//     x = 20;
// }

// function changeObject(obj) {
//     obj.value = 20;
// }

// let a = 10;
// let b = { value: 10 };

// changePrimitive(a);
// changeObject(b);

// console.log(a); // 10 (unchanged ❌)
// console.log(b); // { value: 20 } (changed ✅)
// If you want, I can also give you a mental model to instantly remember this rule for interviews.












// ChatGPT can make mistakes. Check important info. See Cookie Preferences.
