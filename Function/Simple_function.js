//  Function

//  it is simply a piece of code which we can use in our program many times

// it is just like a variable holding some piece of code

//  declaration

function nameOfFun(){
    console.log("you are running code");
}
// function call
nameOfFun();

//  Function Expression
let fun = function(){ //also called anonymous function
    console.log("this is an ex of functionn expression")
}

// Calling functinon expression
fun();

// Passing values (Argument and parameters)

let invitation = function(name= "defaultval", time='night'){
    console.log(`welcome! ${name} you are invited on our event ${time}`)
}
invitation('rutuja', "morning");
invitation();




// returing values (how to return value fro the function)

let ageCalculation = function(birthyear, currentYear=2023){
    let age = currentYear - birthyear
    return age;
 
}
let func = ageCalculation(2000)
console.log(func);




