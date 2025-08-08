
// string in js 

let str = "hello coder army";

let str2='mein toh mast hu';

console.log(str1, str2); 

let str3= ` or kya hal chal `; 

all will create the string 
str3 is the most modern 

`or ${name} kaise ho `; 
now name is js variable 


// string concatenation 

let s1= "hello"; 
let s2 = "Coder Army"; 

let s3= s1+s2; 
console.log(s3); 


console.log(s3.length); 

length is the property not function here 

// how to print quotation 

// one way is 
console.log('"hello coder army"')
// "hello coder army"

\n for next line 


let message = "Rohit bhaiya badmash hai or \n gande hai "; 
console.log(message); 


how to print \n 

use \ it is a escape character 

console.log("\\n")

// so we can print any special character also with this 




let special = "rohit"; 
console.log(special[0]);
// r will be printed 

console.log(special.charAt(3));
// same as special[3]


// for lowercase and uppercase 

special.toLowerCase(); 
special.toUpperCase(); 
special.charAt(0).toUpperCase(); 
// above does not changes the original string 
// it returns the new string 



// why we don't use function call with length 
// but witht the uppercase and all 




// searching in string 

let hero = "hello coder army coder"; 

console.log(hero.indexOf("Coder")); 
// returns the first index

console.log(hero.lastIndexOf("Coder")); 

// if not present then -1; 

console.log(hero.includes("coder")); 
// returns true /false if present 



// extracting the substrings 

let newString = "hello don bhai "; 
console.log(newString.slice(0,3)); 

// it return the portion from [0,3)
// does not change the original string 


console.log(newString.substring(0,3)); 
// same things in terms of output like slice 
// does not change the original 
// cannot except negative indexing 
// -7 -6 ..... -1

// newString.substr(3, 8); 
// it takes start index and length as input 






