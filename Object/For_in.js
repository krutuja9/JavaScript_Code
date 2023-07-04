//  for-in loop (each iteration return a 'key' of object)
// mostly used for object

let  car ={
    model: 2023,
    color : "black",
    company:"toyato"
}
console.log(car)
let x="";
for(let key in car){
    x = x+ car[key];
}
console.log(x);