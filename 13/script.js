// if else 

    // conditional statements 


let age = 30; 

if(age>18)
    {console.log("Eligible for vote")}
else
    {console.log("Not Eligible");}



// if else if else 

if(age<10)
{
    console.log("kid");
}
else if(age<20)
{
    console.log("Teen");
}
else if(age<40)
{
    console.log("Young");
}
else {
    console.log("Old");
}


// multiple conditions : switch 


switch(new Date().getDay())
{
    case 0:
        console.log("SUNDAY");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Dont' know");
}

// so switch(x){case y: statement}; 
// here we pass x to the switch which is integera 
// and according to that integer we 
// pass the case 
// the case is the value which is passed 

// if one condition satisfies it executes all teh cases even if they are invalid 
// so we write break; 


// you can give anything in swithc 
// any string , num , and all

// in string it checks the ===
// not ==










