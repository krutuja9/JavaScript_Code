let nums = [2,3,4,5,6];
let newArray = [9,10, ...nums]
console.log(newArray)

let joineArray = [...nums, ...newArray]
console.log(joineArray)

// we can also use spread oprators on strings
let passion = 'programmming';
console.log(...passion);



// Rest patterns and parameters

let [a,b,...rest]= nums;
console.log(rest)






// MAp data structure
let restauranMap = new Map();
// Adding Values into the Map

restauranMap.set("name" ,"bomaby hotel")
restauranMap.set(1,'add1')
restauranMap.set(2,"add2");
console.log(restauranMap)