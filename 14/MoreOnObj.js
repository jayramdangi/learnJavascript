
// before starting with advance loops 
// we have to cover more on the object 

let obj ={
    name:"rohan", 
    age:23, 
    gender:"male",
    city:"kotdwar"
};


// for in loop to iterate over the object 

// for(let key in obj)
// {
//     console.log(key, obj[key]);
// }

// so we can iterate over the keys with the 
// help of the for in loop 



// Object.keys(obj) 
// also gives the keys of the object 
// inside an array 
// then what's the difference of for in and normal Object.keys();


let obj2 = Object.create(obj);
obj2.money = 420;

const a = Object.keys(obj2); 
for(let i=0; i<a.length; i++)
{
     console.log("hello")
    console.log(obj2[a[i]]);
}

// now it does not have the access of the 
// inherited kesy 

// but for in loop 
// for (let key in obj)
// has the access of the inherited keys also 


for(let key in obj2)
{
    console.log(obj2[key])
}

// now it will print all 


// now the question is if it is printing the keys of the 
// prototype 
// then why toString 
// hasOwnproperty and all the keys are not 
// printing which is there in the
// Object.prototype


// why is it so 

// because every
// key value pair has the 
// property 
// writable , enumerable , configurable 

let objec ={};

objec.name = "Jayram";

// key value has writable enumerable configurable

console.log(Object.getOwnPropertyDescriptor(objec,'name'));

// {
//   value: 'Jayram',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }


// writable true means you can change the value 
// configurable true means you can change 
// writable and enumerable 



let test = {};

Object.defineProperty(test, 'name',{
     value:"rohit", 
     writable:true,
     enumerable:true,
     configurable:false
});

// if we do configurable:false; 
// then in next call of defineProperty 
// you can not change writable 

Object.defineProperty(test,'name',{
    writable:false,
});
//  above will not change it will reamin writable will reamin true only 




// it is used manywhere 
// suppose if we dont' want to change the account 
// then how to handle it 

// now by default when we make object all 
// three are the true ; 
// but when getString was made by js developer 
// they do it configrable false
// so we can't change it 


// so writable 
// determines if the value of the property can 
// be changed 
// if writable : true : the peroperty value can 
// be reassigned 
// if false:
// it is read only 
// if attempts to chage it fail in non strict mode but the code runs
// in strict mode it throws error TypeError


// configurable 
// true : the property can be deleted , and you can change writable , enumerable 
// false : you can not delete property 
// you can not change the state of 
// writable and enumerable 


// Ah, got it — you mean the default property attributes when creating an object in the normal way, like:

// js
// Copy code
// const obj = { a: 10 };
// ✅ In this case, yes — for properties you define in an object literal,
// writable: true, enumerable: true, and configurable: true by default.







// now what is enumerable 


//   
let kobja ={
    names:"kobja",
    age:30
}

Object.defineProperty(kobja, 'names', {
    enumerable:false,
})

for(let key in kobja)
    console.log(kobja[key])

// now the name will not be printed 

console.log(Object.keys(kobja))
// this will also not give the key name 


// enumerable : jis ka bhi enumerable true 
// hoga uska hi access hoga object.keys ko 
// for in ko 
// or kisi ko 


// so for in can access only those who has enumerable true so the Object.toString(); here toString key has the enumerable false set by the js developer 

// console.log(kobja[names]);
// it can be read but it can not be enumerate
// enumerable affects visibility during iteration 
// not accesssibility 
// in Object.keys(), for in , Json.stringify; 




// why we don't take for in loop with array 

const arr = [10,20, 30, 40];

for(let key in arr)
{
    console.log(key, arr[key]);
}

// it is working fine 
// but why we don't use it with array 

// array is an object at the end 
// then we can do arr.name = "Rohit";
// now it will also print this 
// for in will print name 
// and arr indexx can not be a  string any ways 



// so it will break the array property 

// so for in looks for the key value pair 

// so for in aankh band karke dekhega 
// bina koi array ke index logic ke 
// 
/// so we will use the 
// normal for loop 
// it is so smart it will use the indexed length only 
// and print indexed key only 

// but we will used for of loop in next class



// we can even change of toString

Object.getOwnPropertyDescriptor(Object.prototype, 'toString', {
    enumerable:true,
})
;





// study defineProperties 
// study hasOwnPropety 


















