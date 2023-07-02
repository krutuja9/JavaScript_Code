//  Data types of values
//  7 datatypes 

// Numbers 0 ,1,2,3, 10.5 
// String  "i am"  'rutuja' '34'  
//  ""  '' follow one conventional only do difference between both

// Boolean true/false
// Null  Intentionally absence of value

// Undefined  variable declred but not initialized

//  bydefault value is define

// Object (it is complex types data type)

// Array

// Symbol looks like object


// camleCase 
// String   
console.log("hello coders");
let firstName = "rutuja";
let lastName = "kokate";
console.log(firstName, lastName);

// console log automatically give space whne u do spreate two variale using comm)


//  String concatenination

// Method 1 using  + oprator

let fullName = firstName + " " +lastName;
console.log(fullName)

// Method 2 using Template literals  (` ....  `)

let MyFullName =  `My full name is: ${firstName} ${lastName}`
console.log(MyFullName)


// Getting  string Character

console.log(firstName[6])  // undefine

// string Methods

console.log(firstName.toUpperCase())
console.log(lastName.indexOf('o'))   //first character


let hobbies ='  coding    playing   running      ';
// trim()  trim unwanted spaces
let result = hobbies.trim();
console.log(result);
// indexof() finding character first index
console.log(hobbies.indexOf('c'));
console.log(result.indexOf('c'))


// case sensetive language


//includes() it check perticuar thing pred=sent in string or not
console.log(result.includes('Coding'))  //case sensitive c & C are different


// Slice ()

let fName = "wowProgrammer"

console.log(fName.slice(0,3)) //Exculding last one 0-2 only
//  first include and last exculd

let results = fName.slice(0,6);
// imp note does not mutate origin array

console.log("original String = ", fName)
console.log("Extracted string = ", results)



// string " split()" method

let favoriteColors = "brown,blue,red,black"

let arrColors = favoriteColors.split('r');
// string to array
console.log(arrColors);




// Javascript string are imutable
// let str = "hello";


// numbers

let score = 50;
console.log(score , typeof favoriteColors)
//  Mathematical Opratores  * / % ** + -

// let res = score/2
// let res =score%2;   // remainder


// Mathematical expression

let res = score * 2 +(4*3)-8 /2%4;

// using Priority and Precedence
//  1 () Barckets
//  2 ** Power Opratores
//  3 * / % (from left to right)
//  4 + - (From left to right)
console.log(res)



// concatanation of Numbers
 
let  resultline = "my total score is = " +score;
console.log(resultline)


//  Loose Equality (==) vs Strict Equality Oprators (===)

// Loos Equality Oprators ==

let age = 22; //Number type value
console.log(age == "22") //focus only on value but not type

// Strict Equality Oprators
 console.log(age === 22)  // focus on Both value and its type

//  Strickty not equal
console.log (age !== 22);