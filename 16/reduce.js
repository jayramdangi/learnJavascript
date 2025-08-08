
// what is reduce 

// const arr = [10, 20, 30, 40, 50]; 

// it creates a result 
// it can be string , NUmber , Object 



// const reduce = arr.reduce(callback(acc,curr), initialization)

// now initialization is 
// by what you want to initialize it 
// acc is the thing which accumulates
// and curr is the current value from array 

// const result = arr.reduce((acc, curr)=>{
//          acc+= curr; 
//          return acc; 
// }, 0)
// console.log(result)



// acc , curr, index, arr 
// can also be used 

// now real world use case 

// suppose we are given with 
// let arr =["orange", "apple", "banana", "orange"]
// now we havee to give result in form of object
// in which we want freq of every 
const arr = ["orange", "banana"]

const res = arr.reduce((acc, curr)=>{
        if(acc.hasOwnProperty(curr))
        acc[curr]++;
        else 
        acc[curr]=1;
        return acc;
},{});

console.log(res)

// you always has to return acc otherwise 
// code will crash out 



// has OwnProperty returns true 
// if the given key is present 

