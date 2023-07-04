// object

let car = {
    color:"black",
    model: "2022",
    company:"Honda"
}
console.log(car);

// Accessing the js object properties

console.log(car['color'])
console.log(car.company)

let propertiesName = 'color';
console.log(car[propertiesName]) //as varible pass krna
console.log(car.color) //as it send krega


// "Modify" the object

car.color = "brown";
console.log(car.color)


// Delete properties of object

let obj = {
    prop1:"value1",
    prop2: 'value2'
}

let result = delete obj["prop2"];
// It alway retrn true
console.log(obj.prop2)
console.log(result)




// this keyword
// in each method we have an access of special keyword called this

// this keyword represent the object "calling " the "method"
// in which "this" is "present"