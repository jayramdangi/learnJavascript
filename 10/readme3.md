
third method to create the object 

class Person {
       
        constructor(name, age, gender)
        {
            this.name =name;
            this.age =age;
            this.gender = gender; 

        }
}

let per1 = new People("rohit", 20, "Male"); 
console.log(per1); 


this is pointing here to the per1 , 
or the one who has call the constructor


advantage is we can create multiple object with same 
code 
but without it 
we have to write same key twice 


// new keyword se aapko heap me memory milti hai




