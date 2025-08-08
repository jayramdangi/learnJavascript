// some concepts for 
// dsa in javascript 


// set in js 
// set is a collection of unique values 

// the value in a set can be of any type 

// in array we can give duplicate values 

const set1 = new Set([10, 20, 20, 30, 40]);

console.log(set1);
// it will accept 20 at one time only 


// it can be used to store unique values in program 
// many times it is used 

// type of set is also an object 
// whenver you see new keyword it is object 


const set2 = new Set(); 
set2.add(5);
set2.add(6);
set2.add(8);


set1.delete(4);


const user_id = ['rohit_negi9','jayramdangi714'];

console.log(set2.size);

// has in set 
// it gives true if value present otherwise false

console.log(set2.has(5))
//true;



// Set.prototype se set property inherti karta hai 



// how to convert array to set 

let arr = [10, 20, 30, 40, 50, 30, 40];
const set5 = new Set(arr); 

// now how to convert set to tarray 
arr = [...set1]; 
// apply the spread operator 

// if we dont' use spread actor it will remain set only 
// spread takes out the vallue 


// how to take union of two set 


// union me duplicates nahi aate hai 
// ek hi bar aate hai 
let set3 = new Set([...set1, ...set2]);

// it does not sort like c++


// intersection of two sets


// common elements

// we can convert to array 
// 

const result =[...set1].filter((num)=>set2.has(num));


// if you want to convert again to set 
// do new set



// how can we iterate over the sets 

// we can iterate by the for of loop
// it has its own iterator 


// for (let value of set1)
// console.log(value);



// now we also have something called as map

// in js , map is a collection of key value pairs 
// where both the kesy and the values can be of any data type it can be number , object , or anything 

// but in object the key is always stirng 
// even integer also converts to string 


// it also stores the order or insertion 
// object doesn't guarantee the order 
// of insertion 
// it rearrange interger keys in sorted order 




// key should be unique in map

const map1 = new Map();
// map is also object 


map1.set(3, 90);
map1.set("jay", 45);
map1.set({"jay":30}, 30);

console.log(map1); 

// key should be unique 
// if you give duplicate key 
// then it wil update it 

// map1 also has has keyword like set


// map1.clear();



// map can also be created by 
// const map1 = new Map([[], []]);
// 2d array with 1d array of key value separated by comma



// for of loop can be used to iterate 
for(let value of map1)
{
    console.log(value)
}
// now it will give arrays , it means it iterate over that 2 d array 
// and give us value in 1 d array 
// we can further destructure this 
// array we know how to do it 


// map.forEach((key, value)=>{
    // console.log(Key, value)})

