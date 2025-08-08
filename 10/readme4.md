

// common methods of object


let obj ={
    name:"rohit", 
    age:30, 
    account_balance:420, 
    gender:"male"
};

// if we want all keys 
Object.keys(obj); 
// it returns the array of keys

Object.values(obj); 
// it returns the array of values 


Object.entries(obj); 
// it returns 2d array of key, value pairs






assign 

let obj1 = {a:1, b:2}; 
let obj2 = {c:3, d:4}; 
// if we want to add these obj to make single 
// object 
// we want {a:1, b:2, c:3, d:4}; 
// so we can use assign to acheive above 

const obj3 = Object.assign(obj1, obj2); 
// now obj3 is created 
// but obj1 is also mutated because 
// it assigns to the first value and return it 
// so we can give {} empty object to it 
const obj3 = Object.assign({}, obj1, obj2); 
// first is known as target and rest are source
// it returnst the modified target object 



obj3.a =10; 

does obj1 will also change 
// no it will not change 
// it creates a copy


// one more way to add these object 

const obj3 = {...obj1, ...obj2, }; 

// it will create a deep copy 
// obj3 does not know anything about obj1

// ... breaks one level and spread it 
// it is spread operator 


In JavaScript, the spread operator (...) copies by value only for primitive types (numbers, strings, booleans, null, undefined, Symbol, BigInt).

For objects and arrays, it performs a shallow copy — meaning:

The top-level values are copied by value (primitives).

Nested objects/arrays are copied by reference, so changes to nested data affect both copies.

Example:

js
Copy
Edit
let arr1 = [1, 2, [3, 4]];
let arr2 = [...arr1];

arr2[0] = 10;         // changes only arr2
arr2[2][0] = 99;      // changes both arr1 and arr2 (shared reference)

console.log(arr1); // [1, 2, [99, 4]]
console.log(arr2); // [10, 2, [99, 4]]
If you want a deep copy, you need methods like structuredClone(), JSON.parse(JSON.stringify(obj)), or a library like Lodash’s cloneDeep.









Ask ChatGPT





ChatGPT can make mistakes. Check important info. See Cookie Preferences.

