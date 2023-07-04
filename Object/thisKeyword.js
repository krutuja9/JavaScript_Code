// this keyword

// In each method we have an access of speacial keyword called
// "this"

// "this" keyword represent the object 'calling the 'method
// in which "this is present "

// example

let person={
    firstName :'rutuja',
    lastName : 'kokate',
    city:'nashik',
    birthYear: 2001,
    Education: 'It engineering',
    getSummary: function(){
        return this
        // return `${this.firstName} ${this.lastName} live in ${this.city}. She is ${this.Education}. Her birthyear is ${this.birthYear}`
    }
}
console.log(person.getSummary())

// step 1 : Check in which method we use 'this' keyword
// step 2 : owner of that method(who is calling those method)