shallow copy means 
copy by reference 
obj1=obj2; 
changes will reflect in both 
both object points to the same address


deep copy 
copy by value 
changes will not reflect in parent 
it is actual copy 
both will be different after creating and points two different address 
let obj3 = structuredClone(obj1); 



// nested object 
const obj ={
     name:"Rohit",
     balance: 430,
     address:{
        pincode: 3421,
        city:"kotdwar"
     }

}

const user2= Object.assing({}, user); 
// now what's the problem with this copy 
// assign creates a deep copy in normal object 
// but in nested object 
// it creates a shallow copy 
// that's a blunder
// in nested it will keep deep of unnested keys 
// and create shallow for the nested ones
// it means name of obj will not change by user2
// but pincode of obj can be changed by user2




// exactly same picture with the spread operator 




// so best practice is the structuredClone 

// it creates the totally different copy 





destructuring of the object 


const {name, bal}= obj; 
// now name will be inside it 
console.log(name, bal); 

// if we want different name of variable 

const{name:fullName, ...};
so now name is the key of object 
// and fullName is variable name whcih we use now here in program 





// now if we want name and bal and all rest in other object

const {name, age, ...obj1}= obj; 

// now here ... is rest operator 
// so other keys are resting in obj1





// now same destructuring can be done in arrya 

const arr =[3,2,1,5, 10];

cont [first, second]=arr; 
// now it is destructed by index wise 
// so first is 3 
// second is 2 

// if you don'tt want 2nd inex and want third 
const[first, second, , third]=arr; 

// now if i want rest values in another array and first and second other 
const [first,second, ...third]=arr;


// how to destructure the nested object 

const obj={
    id:12, 
    name:"jay",
    address:{
        pincode:24170, 
        city:"indore"
    }
}


const {address:adds}=obj; 
// it tkae address from the obj 
// and puts into adds and adds is object teherefor
// now it put the address inside the adds 
const {address:{pincode}}= obj;

// so that's how pincode can be derived



// bilkul hum kar sakte hai 
// but it is better in function 


// spread operator is for alreadyexisting 
// rest is for new creating object 



// we can store function also in object 

let user={
    name:"Rohit", 
    amount:420, 
    greet: function()
    {
        return "Hello CoderArmy";
    }
}




user.greet(); 



43:00






