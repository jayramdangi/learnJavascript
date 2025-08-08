
// callback function 

function names(func)
{
    console.log("Hello i am name");
    func();
}

function greet()
{
    console.log("I am a call back Function"); 
}

names(greet);

// when we pass a function as a reference 
// or we can say when we pass a function as a arg 
// to another function 
// then the sended function is known 
// as the callback function 

// now we can also write 
// a function there instead of passing reference 

names(()=>{
    console.log("Hello i am a callback function 2")
});

// so we don't have to call function here 
// we have to define the function 
// or pass the reference if you call 
// then it will crash 



// uses of callback function 

function fetchData()
{
    console.log("I am fetching data"); 
}

// now if we have to use it for every five seconds 
// setInterval(fetchData, 5000); 
//  here setInterval is the function 
// and we have to pass a referece or/callback 
// function and time in milliseconds 


// a function that is arg to the other function 
// now that function can call it inside it 
// so that is the callback function 




// different ways to iterate on array 


// forEach 

let arr = [10, 20, 30, 40, 50];

// forEach also expects a callback function
arr.forEach((value, index, arr)=>{
       console.log(value, index, arr)
});

// now it puts the args in this callback 
// if givee one then value 
// if given two value, index
// if given three  value, index ,arr
// here we are not calling function 
// if we are writing function it means 
// passed by reference only 
// we have defined not invoked 




// now forEach traverse over all the array 

// filter 

// now filter returns the array 
// of the filtered number only 

const crr = [11, 10, 12, 16, 18, 17];
const brr = crr.filter((value)=>value%2==0)
console.log(brr)

// so filter wants true or false when it is on any element 
// if you get true then it includes it 
// and if you return false for that particaular value 
// then it does not accepts it


// the arg are same 
// value , index, arr



// what is map 


const pqr = [1,2,4,5]; 

// if we want to take out with specified condition
// then filter 
// if we want to iterate we use forEach 
// if we have to modify the array then 
// we can do 
pqr.map((value, index, arr)=>{
     arr[index]=2*value;
})
console.log(pqr)
// it will change by referece 
// so changes are visible 



// for each does not return anything 
// just traverse 


const app = pqr.map((value, index, arr)=>{
      return value*index;
})


// map always expects a result 


// suppose if we have 
// qrr = [1,2,3,4,5,6];
// we want the square of even number 
// so by filter we can get even 
// and we can do square by map

arr.filter((num)=>num%2==0).map((num)=>num*num);






