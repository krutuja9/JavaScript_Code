// Function vs Method

// let ageCalculate = function(birthyear){
//     let  age = 2023 - birthyear;
//     console.log('Current age is: ',age);
// }
// ageCalculate(2001);


//Method>> It is nothing but object property(key) holding fu.as value

let person = {
    ageCalculate:function(birthYear){
        let age = 2023 -birthYear;
        return age;
    }
}
console.log(`Current age is: ${person.ageCalculate(2003)} `)