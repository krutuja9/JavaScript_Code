// promises general example

// let getSomething =()=>{
//     return new Promise ((resolve,reject) =>{

//         // resolve("Some data");
//          reject("some error")
//     })
// }
// getSomething().then((data) =>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })



// asyn and wait
let getTodos = async()=>{
    let response =await fetch("./data.json")
    let data = await response.json();
    return data;
}

getTodos().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})


// fetch ApI
// fetch('data.json').then((response)=>{
//     console.log("promise resloved",response)
//     return response.json()

// }).then((dataa)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })