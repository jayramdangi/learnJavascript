
Array in Js


why array is not contiguous in js 

const arr = [1,2,45, 27, 16 , 'rohit'];
console.log(arr); 

console.log(arr.length);


console.log(arr[0]); 

// to access the value at that index 

console.log(arr[5]); 


console.log(arr.at(1));


// what is the advantage of at 
// it can also take the negative index 
// but arr[-1] can not be accessed 


const newarr = arr; 
console.log(newarr == arr); 
// it will be true 
// because address will be same 



// but if we want the copy 
// but we want different copy not want reference 

const newarr = structuredClone(arr); 
// now it will create totally different copy 
🔹 Deep Copy
Copies all levels, including nested objects/arrays.

Changes in the copy do not affect the original.


// when we normal assign non primitves then 
🔹 Shallow Copy
Copies only the first level.

If the original has nested objects/arrays, only the reference is copied—not the actual nested value.

Changes in nested properties affect both the original and copied object.






// push at last in array 

arr = [45, 30, "jay", "ram"]
arr.push(30); 
it pushes at last 

arr.pop(); 
deletes the last element 


arr.unshift(10); 
// it pushes from the beginning 

arr.shift(); 
// deletes from starting 



delete arr[0]; 
the space will be there 
it will create a hole 
[<empty item >, 30, ....]





