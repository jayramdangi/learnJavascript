


console.log(x);
// undefined 

var x=10;


console.log(y);
// error : cannot access before initialization
let y=10;

console.log(z);
// error:  z is not initialized 


// ***************************************************

// program 1

var x=10; 
let z= 20;
const d =90;

console.log(x);
console.log(y);
console.log(z);

// how does this above codes run 
// so first it should get memory 
// then instruction executes 

// so step by step 

// first execution context is created 
// it is divided into two parts 
// memory    and       code 
// when js code executes 
// first the var gets memory 
// only memory allocation not task executed 

//     Execution context
//   Memory          Code
//   x:undefined
//   y:
//   d:
//  
// so memory is allocated to y and d let/const also 
// but they are not initialized 
// but var is initialized with undefined int the memory allocation phase 

// y and d are temporal dead zone explained later 



// now code execution phase 
//  it will assign  x with 10
// z with 20 
// d with 90 



// js is synchronous single threaded language 
// 
// single threaded means only one statement will exectue at a time 
// one instruction at a time 

// synchronous means one by one 
// ek ke bad ek 


// now var is accessed before initialization 
// because that variable is assigned with undegined 
// int memory allocation phase 
// but let/const are not initialized with 
// anything just memory allocated 

// now when code execution phase starts 
// it will print x as undefined as till now it is not initialized with real value because that stament is later and js is synchronous 

// if we access y then it will give error also in case of const because it is not initialized 

// temporal dead zone 

// the time period when memory allocation phase
// gives memory to let/const 
// they go to temporal dead zone and remains 
// until they get initialized in code execution phase 
// and when initialized it comes out 
// when y gets 20 now it get's out 




// declare -----------------------> initialized 
// memory-------------------------> code execution
//  temporal dead zone 
// a variable inside temporal dead zone can not 
// accessed and give error 
// it is for let, const 

// if variable is not let, const and var 
// and accessing is which is not in program 
// then error:  it is not defined 




// now what is hoisting in js 

// Hoisting in js is the behaviour where variable and function declarations are moved to the top of their containing scope during the compilation phase , befor the code has been executed . 

// this means that js "hoists" or lifts the declarations (but not the assignments) to the top, so you can refer to them before they are written in the code . however only the declaration hoisted , not the assignments or initializations . 

// in other words a variabe can be used before it has been declared 


// matlab??


// ******************************************

// program 2;

console.log(x);
console.log(y); 
var p=10; 
let q=20; 

// now how we can assume js executes the code 
// take all the declarations above 
// and assign var with undefined 

// how see below 

// var p = undefined;
// let q;

// console.log(x);
// console.log(y);
// p=10;
// q=20;



// host sabhi hote hai , let , const , var 
// just difference is var gets assinged by undefined




// hosting is just a concept 
// it is not something happening really 
// because you can't do 
// const a;
// a=20; 

// it will allow const one time 



// *******************************************88888

// program 3

let a =10;
let b=20;
greet();

function greet()
{
    console.log("hello greeting....")
}

meet();

let meet = function()
{
    console.log("hello meeting......");
}



// now here in program 3 we can see 
// greet will not give error and executes fine 
// but meet will not 

// let us create a execution context 

// memory
// a:
// b:
// greet: {block of code}
// meet : 

// code execution phase
// a=10;
// b=20;
// add:{} already it function no need to execute 
// meet : {}



// memory stored in key value pair 

// now all this memory allocation and code execution phase runs in 
// global execution context 

// when we call meet the 
// memory allocation of the function will be callled 
// which will be execution context of that function 
// itself 
// and same happens inside the function execution context that is happening outside

// so function when not stored in variable 
// is just stored by block of code no memory allocatino 
// and when called it create a execution context
// and run it in stack 

// after function complets 
// it goes back to gec 
// in stack 
// and when gec finishes 
// the stack gets empty 




//  now how the greet can be executed before declaring 

//   becuase 
// memory allcoation
// greet : function code
// code execution 
// greet(); 
// function greet(){} is not something which runs in code execution 

// and meet is not executing because 
// the variable holding it is in temporal dead zone 
// and even if it is not then also in code execution phase let , const are not assigned with anything






