// ES6 classes 


// class declaration

class Car {
    constructor (color, model){
        this.color = color;
        this.model = model;

    }
    startEngine (){
        console.log('This is start engine method of car class')
    }
}
let honda = new Car("Red", 2022)
console.log(honda)
honda.startEngine()