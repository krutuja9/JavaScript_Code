//  Working with arrays(Simple methods)

let letters = ['a', 'b','c', 'd','e']

// Reverse (Mutate the original array)

// let reverse = letters.reverse()
// console.log(reverse)
// console.log(letters)

// count
// let num = [1,2,3,4,5,6]
// let concated = num.concat(letters)
// console.log(num)
// console.log(concated)

// join
// let joined = letters.join('+');
// console.log(typeof joined)
// console.log(letters)


// slice method
// used to extract part the array
// Array.slice(startIndex,lastIndex(excluded))
// return new Array of etracted element

// let num = [1,2,3,4,5,6];
// let extractArray = num.slice(0,6); // 1 to 4
// console.log('original Array: ',num)
// console.log("exteacted array: ",extractArray)


// splice method

// used to add new element into the array
// Array.splice(index.deleteValue, valueToBeAdded)
// Return deleted items in the form of array



let number = [ 1,2,3,4,5,6,7]
let updated  = number.splice(1,2,99,0) //index,how many values deleted, adding val

console.log(updated)
console.log(number)


// at method

let num = [23,24,43,1,2]
console.log(num.at(1))
console.log(num[0])