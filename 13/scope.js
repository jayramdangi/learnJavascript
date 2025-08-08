
// now we will talk about scope 

const { space } = require("postcss/lib/list");


let a = 10; 
var b =20;
const c= 30;

// we don't use var 

console.log(a);
console.log(b);
console.log(c);


// scope ke bare mein 
// global scope , local(functional scope), block scope


// when we write in open any variable in 
// a program 

// it can be used by any function , any block and anyone if/else , for
// it is in global scope 


// local scope (functional scope )

// now if some variables are born inside the function
// they have local scope 
// now none of them can be accessed outside of the 
// block 
// let , const , var 
// all three can not be accessed outside of the 
// functional block 


// block scope 
// khela hobe 
let q = "hello";

if(true)
{
    var p = 10;
    let q = 20;
    const r= 30;

}
// 
console.log(p)
// we can not scope q, r
// but we can access p 
// so it is very wrong 
// that's why we don't use var 

// var is not block scoped 
// and also var can be redeclared 



// in different scope you can take same variable 
// names 



// block is used with 
// for loop , if/else 


// we will never use the variable keyword var

let amount = 20; 
if(true)
{
    let amount = 30; 
      
}
console.log(amount);
// now it will give the 20 only 
// becuase in scope they are different 
// in a same scope there can't be two same namein 
// let and const 


// so wheenver we access a local access in local access it will search within local then it will goes to global scope afterwards if 
// not present in block space


// can we access amount before writing it 
// no
// but we can access var before writing it 




// problems with var
// 1. it can be redeclared in same scope 
// 2. it is not block scoped 
// 3. it can be accessed before declaring 
// it will give undefined but not give error 


greet();

function greet()
{
    console.log("hello Greet");
}

greet();

const meet = function()
{
    console.log("hello meet"); 
}

meet();


// greet can also be called before declaration 

// reason is hoisting of both function and var 
// so we will study in upcoing 
// we can't access let that's why meet also 





