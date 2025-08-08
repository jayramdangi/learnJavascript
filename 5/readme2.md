
stack and heap memory 


suppose we have 5 bags of the sugar 
and we have to place them in 
shop 


either put randomly 
or put contiguous 



now our ram is divided into two part 

stack and heap 

stack one by one  
heap at any random location 


now suppose we have to store 10 in the stack 
then we store "rohit" 
then we store "jay"

now these were primitive data types and these 
will store in stack 

non primitives are stored in the heap memory 


but why we are doing so ? 


reason: 

but before 

when let a=10; 
     let b =30;
     let c=a; 
     c=50; // only c will change because
     //primitive is call by value 
     // and non primitive is call by value 
     let obj1 ={id:"30", name:"jay"}; 

     

stack             heap

obj1=300
c=10            {id:"30", name:"jay"};
b=30
a=10

memory address is the memory location where our data is present 

300 is the address of the memory location at heap 
// and when we assing let obj2= obj1 
// then the address is copied in it 
// it is call by reference 

// both are pointing same location at memory 




primitive data types are immutable they can not be change 

// when we change it 
// it brings a new memory location and point to different and place value there 
// but in heap it overwrites on same memory location 

// it does not over writes on the prev location of primitives , it allocate new 
// unlike c++

but why ? 
becuase it is not fix what to store in js 
and it  can take more space 
can we allocate it to the prev locatin 
no?  because 
that 's why modification creates new
memor location form primitives in stack 


// in c++ it is not 
// because the data type of int is defined 
// and it will take same space 
// so it mutates to the original location 





why non primitve in heap 
primitive in stack 


stack memory is limited and heap is bigger so much 

in array we do much changes 
so if we allocate to stack we have to redeclare again and again 
and also it's memory is too large 

and these primitive takes ery less space compared


string can also be so much big then whydon't in heap 
if we take bigstring it willl automatically store in the heap 



if we do like c++; 
our time will waster 


mermory will be waste in this case in js 

stack memory is so fast 
// heap is somehow slow as two step process 

