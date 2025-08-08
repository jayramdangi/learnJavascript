Comparison Operators 

// number to number 

let a1=1; 
let a2 = 2; 

console.log(a1==a2); // false; 
console.log(a1!=a2); // true; 
console.log(a1 <  a2);  // true
console.log(a1 > a2);  // true

console.log(a1>=a2) ; // false; 
console.log(a1 <= a2);   // true; 



let num =10; 
let str ='10'; 
console.log(num==str); 
// true 
// in == it converts in same type 
// type conversion happens here 
// string to number 



let a1=10; 
let str1="3"; 
console.log(a1>str1); // true; 
// so comparison is done on the same basis 
// so in does type conversion 



// but if you want to check type also and then compare 

let str = '20'; 
let a = 20; 
console.log(str===a); 
// false; 
// now type also checks 



// rule 

null == undefined   // true 
null === undefined  // false   

// in all other cases null gives false 

console.log(null==undefined); // true; 
console.log(null === undefined); //false bcoz type checking 


console.log(null==0); //false  /== only with undefined
// above is not type conversion bcoz of rule
console.log(null< 0);  //false null will convert to 0 
console.log(null>0);  // false
console.log(null<=0); //true
conosle.log(null>=0); //true


null in case of == will give only true with undefined 



// undefined comparison 

console.log(undefined==0);
console.log(undefined>0); 
console.log(undefined<0); 
console.log(undefined<=0); 
console.log(undefiend>=0); 
// all will be false 
// first because rule 
// all because undefined converts to the NaN



console.log(NaN==NaN); 

// false becauae two NaN can be different 



// at most in type conversion 
// mostly converts to the number 

console.log(undefined!=null);
// will give false 




&& -> all conditions should be true    ;
|| -> any one condition should be true ;
! -> opposite 






