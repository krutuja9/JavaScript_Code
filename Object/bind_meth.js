// bind method 

function greet(){
    console.log(`hello ${this.fName} ${this.lName} how are u!`)
}

 let user ={
    fName:'rutuja',
    lName: 'kokate'
}
let greets = greet.bind(user)
greets();