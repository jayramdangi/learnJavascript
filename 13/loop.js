
// looping 


// suppose we have to print a same statement 100 times


// we can take a loop 

// for(let i=0; i<1e9; i++)
// {
//      if(i==1000000)
//         break;
//     console.log("hello coder army"+ i);
// }
// we have to take let here only becuase const will not change 

let sum =0; 

for(let i =0; i<100; i++)
{
    sum+=i;
}
console.log(sum);

// now why c++ is fast 
// it will redeclare teh i and new space allocation 
// every time in for loop 
// but in c++
// it just cahnges the value 




// now we can use the nested for loop also 

function fun(i)
{
    console.log(`hello ${i}`)
    fun(i+1);
}

fun(0); 