

// primitive data type 

const num =10; 

console.log(num)
num=20; // will give the error


// Non Primitive Datatype 

const obj ={
    id:10,
    balance:200
}

obj.id =20; 

we can definitely change it 
const means address should not be changed 

so we can't do 
obj = obj2; 


because now you are changing the address 


let obj2={
    id:20,

}

obj2=obj1; 
// it is allowed 

