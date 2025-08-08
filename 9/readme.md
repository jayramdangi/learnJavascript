
JavaScript Date Objects


// Date is so much important 

// because who is booking at what time
// who is submitting codes first 


const d = new Date(); 
console.log(d); 

// it will print out the date
// 2024-11-29T15:34:20 is the date and timezone

console.log(d.toDateString()); 
Fri Nov 29 2024


console.log(d.toString());
Fri Nov 29 2024 21:05:46 ........

console.log(d.toISOString()); 
Fri Nov 29 2024 21:06:20 GMT+0530 ....


typeof d 
is Object 


From where does it taking date 

so it is getting from system clock 
if you change time in setting it will take that 


Js Date Objects represent a single moment in the 
time in a platform independent format 

Date objects encapsulate an integral number that reperesent milliseconds since the midnight at the beginning  of January 1, 1970 , UTC


Date originally calculates in the milliseconds 

and then convert it to time 

suppose the value come 4 millisecond 
so 4 millisecond from jan1 , 1970, 12pm

suppose 1 million milliseconds 
means from 1 jan 1970


const d = new Date(20000); 
20 k seconds from the jan1, 1970



console.log(d.getDate());
console.log(d.getDay()); 

// returns the day like 29
// returns the 0-6 [mon, tue]; 
// d.getMonth();
// returns from 0-11 form jan-dec


d.getFullYear(); 
it gives the year like 2025 







// why we followed the approach of milliseconds 

// because millisecond has indepth knowledge

// in ticket booking 
// we have to be too precise




console.log(d.getTime()); 
// it will give us the milliseconds 
// from 1970


const now = Date.now(); 
console.log(now); 
// it also gives the time stamps in milliseconds 
// same as .getTime






// other ways to creaet date

const d= new Date("2025-10-20");
// here indexing of month is 1-12 only 

// const d = new Date("2025-10-20T10:10:00"); 
// it is 2025 october 25 , and 10:10 am


const date = new Date(2024,4,28); 
// now when we are giving in the form 
// of number it is zero based indexing 
// so it will print "2024-05-..


// const d = new Date("2025-10-20T10:10:00");
const date = new Date("2025...")
const date = new Date(,,,,)

now in above we can metntion
year-month -day -hr, minute , seconds , milliseconds



// setting date components 


const d = new Date(); 

d.setDate(20);
d.setFullYear(2021); 
d.setMonth(3); 
console.log(d);
2021-04-20 // will be the output 


// millisecond , minute everything can be set



date.toLocaleDateString(); 11/29/2024
date.toLocaleTimeString(); 10:30:00 AM
date.toLocalString(); 11/29/2024









