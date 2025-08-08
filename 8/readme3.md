

// we can convert array to string 
by join also 

arr.join('*'); 
now it will join all the elements with * 
so join gives the flexibility over toString



// concatenation of the array 


// concat 
let arr1 = [2,35, 6, 11]; 
let arr2 = [5,12,19,20];

let arr3 = arr1.concat(arr2); 

// it gives us [2,35,6,11,5,12...]; 
// it does not mutate original


// but arr1+arr2 will not us give this 
// it will gives us in form of string and not 
// recommended 
// we can pass multiple args to concat 


// if we use 
arr1.push(arr2); 

then it will be 2d array 
// whole arr2 will be as one eleement in that array 


// if we have 2d arrays 
// and we have to convert it to 1d array 

arr2d.flat(); 
// it will goes to one level 
// if 3 d array then convert to 2d 

arr2d.flat(Infinity); 
// we can give the level 
// also if dimension not known give infinity 

// so it unwrap one level in .flat(); 





// how to find that the thing comes from backend in 
array only 

let abc =[2,1,4,1];
// because typeof gives the object 
console.loog(Array.isArray(abc)); 
// to confirmst 




