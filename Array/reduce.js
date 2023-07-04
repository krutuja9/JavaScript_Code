// Array method

// Reduce method

// run reducer function for each array element
// Array.reduce(function(total, currentValue), initialValue)
// it return single value

// sum of all elements using reduce method

let num = [1,2,3,4,5];

let sum = num.reduce(function(total ,currentValue){
    return total + currentValue
},0)

console.log(sum);
console.log(num)