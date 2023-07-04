// Array Method
//  find method
// All this method is higher order function
// it return the first element we are looking for...

let students = [{id:1, name:'rutuja'},{id:1, name:'bob'},{id:2, name:"jhon"}]

let result = students.find(student =>{
    return student.id == 1
})

console.log(result)




// findIndex method

// Execuate function for each array element
// It return "index" of that array element who "first pass the "
// test "otherwise "  -1

let ages = [ 20,21,22,23,11]

let result_ = ages.findIndex(age =>{
    return age < 15
})
console.log(result_)

// let findEle = ages.find(age =>{
//     return age < 15
// })
// console.log(findEle)
