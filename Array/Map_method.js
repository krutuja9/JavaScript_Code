// Array Method
// Map method

// create new array from original array by applying 
// transformation function

let salaries = [3000,4000,5000,9000];
let newsalaries = salaries.map(salary =>{
    let incrementSalary = salary / 2;
    return salary + incrementSalary
})
console.log("After 50% increment new salaries",newsalaries)

// length of new array always equeal to original array