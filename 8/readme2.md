
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





// indexOf

const arr = [2, 3, 4, 8, 10]; 

console.log(arr.indexOf(8)); 
// it returns the first index 
// lastIndexOf returns the last 

console.log(arr.include(10)); 
// returns true, false 


slice extract the portion 

console.log(arr.slice(start, end));
[start, end)

returns the array 
but does not modify the original one 



// splice 

arr.splice(2,5); 
first value is starting index 
second is the length you want 


 *********** " splice changes the original array "*************

 and it returns the removed elements 

 // splice(start, totalelement , addvalue, addvalue2);
 // now this values will add from starting index 
 // start

 // if you want to add at particulare index 
 splice(2, 0, "jay") ; 
 now jay will be added on 2 and all shifts



 // arr.toString(); 
 // it returns the string 2,35,56,78
 // does not mutate original array 
 
 


// the following are the functions that change the 
// array originally 
push(...items)
Appends items to the end of the array.

js
Copy code
let a = [1,2];
a.push(3,4);
// a → [1,2,3,4]
pop()
Removes and returns the last element.

js
Copy code
let a = [1,2,3];
a.pop(); 
// a → [1,2]
shift()
Removes and returns the first element.

js
Copy code
let a = [1,2,3];
a.shift();
// a → [2,3]
unshift(...items)
Inserts items at the start.

js
Copy code
let a = [2,3];
a.unshift(0,1);
// a → [0,1,2,3]
splice(start, deleteCount, ...items)
At start, deletes deleteCount elements and/or inserts items.

js
Copy code
let a = ['a','b','c','d'];
a.splice(1,2,'x','y');
// a → ['a','x','y','d']
sort([compareFn])
Sorts the array in place (with optional comparator).

js
Copy code
let a = [3,1,2];
a.sort((x,y)=>x-y);
// a → [1,2,3]
reverse()
Reverses the array in place.

js
Copy code
let a = [1,2,3];
a.reverse();
// a → [3,2,1]
fill(value, start = 0, end = a.length)
Fills elements from start up to end with value.

js
Copy code
let a = [1,2,3,4];
a.fill(0,1,3);
// a → [1,0,0,4]
copyWithin(target, start = 0, end = a.length)
Copies a slice (start→end) to target index, overwriting.

js
Copy code
let a = [1,2,3,4,5];
a.copyWithin(0,3,5);
// a → [4,5,3,4,5]
Setting length
Adjusting a.length truncates or extends the array.

js
Copy code
let a = [1,2,3];
a.length = 2;      // a → [1,2]
a.length = 5;      // a → [1,2,undefined,undefined,undefined]







Ask ChatGPT



Think









