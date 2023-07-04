let hotel ={
    name:"hottel",
    location:"strreet no xyz delhi",
    categories:["chinease","Italian","English"],
}
let items=[2,3,4,6]
let [x,y,z,p]= items;
console.log(x,y,z,p)


// let [main,,secondary]= hotel.categories
// console.log(main,secondary)

// switch the category(Usercase)
// without destructuring

// swap
// let temp = main;
// main = secondary;
// secondary= temp;
// console.log(main,secondary)

let [secondary,main] = [main,secondary]
console.log(main,secondary)
