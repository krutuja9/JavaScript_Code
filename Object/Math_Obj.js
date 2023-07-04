// Math object built in object in js

// console.log(Math);

// let number = 9.9;
// console.log(Math.round(number))  //round to nearest integer
// console.log(Math.floor(number)) //nearest integer small value
// console.log(Math.ceil(number)) //next large integer number
// console.log(Math.trunc(number))  //remove decimal part


let random = Math.random();
console.log(Math.round(random*100))


// Function
// Call And apply Method
// we can manually set the value of this keyword using call


let mainPlan ={
    airline :'Fly India',
    lastcode:'Fi',
    bookings:[],
    book:function(flightNum, name){
        console.log(`${name} Booked flight on ${this.airline} with this flight number ${this.lastcode} ${flightNum}`)
        this.bookings.push({flight: `${this.airline}`,name:name,flightNum:flightNum})
    }
}
mainPlan.book(553,'carlos')
mainPlan.book(432,'rutuja')
console.log(mainPlan)



// new airline launched of same group

let childPlain = {
    airline:'child plain',
    iatCode: 'cp',
    bookings:[],
}

let book = mainPlan.book;

// book(555,'ruri'); //book is regural function
// 'this' value is undefined at least in strict node

// sloution using 'call' method


book.call(childPlain, 689, 'zeek');
console.log(childPlain);
console.log(mainPlan, 655,'ritu')
