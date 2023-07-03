//  if , else, else if, statement

// let budget = 1000;
// if(budget > 6000){
//     console.log('will do dinner in hotel');
// }
// else if(budget > 4500){
//     console.log("will do dinner at 3 star hotel");
// }else if(budget > 1000){
//     console.log('will do dinner at 2 star hotel');
// }
// else{
//     console.log("will do dinner at home");
// }


// nested id statement (not used)

// let num = 27;
// if(num > 22){
//     console.log("run if 1st condition true");
//     if(num > 25){
//         console.log('conditon false');
//     }
// }



// Break and constinue statement 
// also called jump statement
// continue statement
// used to skip some value of loop

// for(let i=0;i<10;i++){
//     if(i==2){
//         continue;  //move towards the next iteration
//     }
//     console.log("value of i: " ,i);
// }

// break statement
// used to terminate the loop and controll transfer from outside

// for(let j=0;j<10;j++){
//     if(j == 6){
//         console.log('our desired value is: ', j);
//         break
//     }
//     console.log('value of i: ',j);
// }
// console.log("Now i am outside of the loop scope")



// Logic Oprators
//  AND && , OR ||, NOt !

let password = "querty";
if(password.length > 5 && password.includes('@')){
    console.log("password is strog")
}else
console.log("change is password ")

// And && bot condition must be true then result =true
// OR ||  true+ false = true
// not ! true == false and f == t just convert 

let status = false
if(!status){
    console.log("your status is ", status)
}

// priorities
// first  Not  
// second ANd , Or from left to right

let result = true && true || false && !false
console.log(result); 