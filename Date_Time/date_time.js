// Date and time

// date object always cary both DATE and TIME

// using Date method
// let currentDate = new Date(2021, 1,2);
// console.log(currentDate)

// Using timestamp (integer number reprsent in "ms from 1-1-2023")

// let currentDate = new Date(0); // 0 is time in ms
// //  1 day = 24 *60 *60 = 
// console.log(currentDate)


//  to get time in ms

// let currentDate = new Date();
// console.log(currentDate)



// Date and time method

let completeDateAndTime = new Date();
console.log(completeDateAndTime)

// get full year
console.log(completeDateAndTime.getFullYear())
// get month 
console.log(completeDateAndTime.getMonth())

// get week day 
console.log(completeDateAndTime.getDay())
// 0 - sunday , 1- monadya and so on


// get date
console.log(completeDateAndTime.getHours())
