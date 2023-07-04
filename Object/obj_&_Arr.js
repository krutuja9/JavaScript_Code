// object/arrays how reference are passed to variable


let arr = [1,2,3,4,5];

let getRef = arr;
// getRef[6] = 43;

// getRef.shift();
console.log("original arr",arr);
console.log("getRef arr",getRef) //both changing


// pass by value
console.log("*************************")
let getValue = [...arr];

getValue[7] = 67
console.log("original arr",arr);
console.log("getRef arr",getValue);