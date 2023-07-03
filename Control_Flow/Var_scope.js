// variable and block scope
//  scope >> --  area where variable is define or accessible

 let score = 90 //global scope

 if(true){
    // let score = 50;
    console.log(score)   //block scope
 }
 score+=30;
 console.log(score)





//  ternary oprators (condition ? true: false)

// let age = 10;
// let weight = 40
// let result = age > 18 ? weight >55 ?  "qualify":"weightIssue" :"Fail"
// console.log( result)



// Swaitch statement

let  age =17
switch(age){
    case 17 :
        console.log("case matches");
        break;
    
        case 10 :
            console.log("case  10 number")
            break;
        default:
            console.log("plx enter valid  case")
}
