// Arrow function(ES6)
/* 
    Speacial form of function expression
    It allows us to write function more fast becz 
    No need to use function keyword
    No need to use  paranthesis() in case of single parameter
    No need to use curely{} if signle line code in function
    No need to use return statement iff signle line code in function

*/

// Function expression

let inivitation = name =>(`welcome ${name}`)

console.log(inivitation('rutuja'))


//Passing Function as an Argument(Higher Order function example)

let uppercase = function(str)
{
    return str.toUpperCase();
}
let lowerCase = function(str){
    return str.toLowerCase();
}

let transformer = function(str, fun){
    return fun(str);
}

console.log(transformer('hello this is Higher order', uppercase))


// Function (higher order)
// function returing anthore function

let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`)
        return true;
    }
};
console.log(compliment ('you are good coder')("rutuja"))




// Immediately invoked function Expression
// Executed only once
// Now this is expression


// (function(){
//     console.log('this function will never execute again', name);
// })()




// setTimeOut and SetInterval

// setTimeOut -> Run Function "Once" after " interval" of time

// setInterval -> Run Function repetedly, starting after the 
// interval of time , then repeating...


// function greeting(){
//     console.log("welcome to our coder dost family")
// }
// setTimeout(greeting,5000)


// setTimeout(function(name){
//     console.log(`welcome ${name}`);
// },1000,'rutuja')



// setInterval

// setInterval(function(){
//     console.log("i am setInterval");
// },2000)



// Hoisting
// Variable "declaration " are "hoisted toward "top" of thei scope

text();
function text(){
    console.log("hoisting")
}