

let obj1 ={
     id:20, 
     naming:"rohit", 

}

let obj2 = obj1; 

obj2.id = 15; 
console.log(obj1)

// now obj2 is actually pointing the obj1 only 
// if we change in the obj2
// then it will change the obj1 
// because obj1 is storing address which we have 
// given to obj2


