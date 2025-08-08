

let num1 = 231; 

let num2 = new Number(231); 
// now this is Object 
// and memory allocationo inside the heap 
// console.log(num2); 
// typeof object 



let num1 = new Number(231); 
let num2 = new Number(231); 
let num3 = 231; 

console.log(num1==num2); 
// false because of the address are different 

console.log(num2==num3); 
// true 
// because it will bring the data from heap to compare 
// == compares on same base 



let num = 231.68;
console.log(num.toFixed(1)); 

// toFixed means decimal ke bad kitni digit chahiye

num.toPrecision(4); 
// total kitni digit chahiey including before decimal

// when digits given are less then before decimal 
// then gives in exponential 


// num.toExponential(2); 
// it converts to 10to the power 2


console.log(num.toString()); 




🔹 num.toString() vs String(10) – What's the difference?
✅ num.toString() — Method on a Number object
It calls the .toString() method of the Number prototype.

Requires that num is not null or undefined.

Returns the string representation of the number.

js
Copy code
let num = 10;
console.log(num.toString());  // "10"
Internally:

js
Copy code
(new Number(10)).toString();
✅ String(10) — Function call for type conversion
It’s the global String() function, used for explicit type conversion.

Works on any type (number, boolean, object, etc.)

Safe even for null and undefined.

js
Copy code
console.log(String(10));         // "10"
console.log(String(true));       // "true"
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"
🔍 Key Differences:
Aspect	num.toString()	String(num)
Type	Method of Number	Global function
Works on null/undef	❌ Throws error	✅ Works fine
Use case	Call specific .toString() logic	General type conversion
Underlying call	Number.prototype.toString()	Uses internal ToString() conversion

❌ Example showing the limitation of .toString():
js
Copy code
let x = null;
console.log(String(x));     // "null"
console.log(x.toString());  // ❌ TypeError: Cannot read properties of null
✅ TL;DR:
Use String(val) when you want safe, universal conversion.

Use val.toString() when you're sure val is non-null and you want a method-specific behavior (e.g., radix in num.toString(2) for binary).

Let me know if you want a comparison table including objects and arrays too.







Is this helpful so far?



Ask ChatGPT




