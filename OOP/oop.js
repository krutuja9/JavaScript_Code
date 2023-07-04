// object oriented programming
// "Constructor" function and the "new" oprator

// we can not use "arrow" function as constructor

//  call "constructor" function using "new" keyword

//  1 new {object} created empty initially
// 2 "this" = {object}
// 3 object linked to prototype
//  4 function automatically return {object}


let Car = function(color , model){
    // properties
    this.color = color ;
    this.model = model;
}

let instanceofCar =  new Car('Balck', 2323)
let instance =  new Car('white', 2023)
console.log(instance,instanceofCar);