type conversion 


converting from one type to another 

let account_bal = "10"; 

let num = Number(account_bal); 

// this is used in backend 



// converting boolean to number 

let x = true; 

console.log(Number(x)); 
true will be 1 and false will be 0


let account = "100xs"
console.log(Number(account)); 
// now it will output NaN 
not a number 



let x1= null; 
console.log(Number(x1)); 
converts to the 0 


let x2= undefined ; 
console.log(Number(x2));
it gives the NaN ;


// string ke andar convert karna hai toh 

console.log(String(20)); 
// will convert it to string 

String(true);
will become "true"



Boolean("str"); 
will give true;
Boolean(""); 
will give false; 








