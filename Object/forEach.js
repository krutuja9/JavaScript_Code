// forEach method of array

// Its another type of loop which we used to traverse
// over the array

let dishes = ['coffee','biryani','karahai','Bhallay'];

// using for loop
// for(let i=0;i<dishes.length;i++){
//     console.log(dishes[i]);
// }
// console.log("*****************")
// // using forEach method

// dishes.forEach(function(element){
//     console.log(element)
// })

// its called functional programming







// Object inside array

let blockList = [
    {username:'john',reason:'Abusive content'},
    {username:'Rutuja',reason:'copyRight reason'}
]
console.log(blockList)

for (let i=0;i<blockList.length;i++){
    console.log(`user ${blockList[i].username} Blocked due to this reason ${blockList[i].reason} as reason`)
}
 blockList.forEach(function(ele){
    console.log(`user blocked  ${ele.username} reason is ${ele.reason}`)
 })



