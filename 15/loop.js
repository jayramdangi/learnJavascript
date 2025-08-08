
// for of loop 
// to access the array 


const arr = [10, 20, 11, 18, 13]; 

// we can apply for (normal )
// and for of is also same 

for(let value of arr)
{
    console.log(value);
};

let str = "Rohit is a good boy"; 

for(let value of str)
{
    console.log(value)
}



// don't use for of loop over the object 
// but why 

// const obj = {
//     name:"chavvi", 
//     age:22, 
//     gender:"female"
// }

// for(let value of obj)
// {
//     console.log(value);
// }

// because object is not iteratable 
// it does not know after name key where to go 
// age or gender 
// but string and array are iteratable 


// par agar karan hi hai toh 
// fir Object.values or keys karlo 
// or uspe iterate kar jao 



