

console.log(Math.E); 
eulers value 
console.log(Math.LN10); 

Math.PI


// how to generate random digits 

console.log(Math.random()); 

it's value ranges from 0<=value<1

 if we multiply it by 10

 0<=value<10


 // floor and ceil 

 console.log(Math.floor(num1)); 
 // it returns the integer lower 
// ceil gives the above 


// if we want to generate the number with 1 to 10 

console.log(Math.floor(Math.random()*10+1))
// so when we add +1 it will gives us 


now suppose we have to generate from a 
range min to max 

// 11-20; 

Math.random()*10 will generate from  0 to 9
// if we add 11 to it 


so min = 40; max =50; 
console.log(Math.floor(Math.random()*(max-min+1)+min)); 


we don't use it for otp or any crucial things 

because it uses system clock to predict it 


