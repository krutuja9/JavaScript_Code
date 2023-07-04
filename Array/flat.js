// Array Method

// flat method

// It creates a new array with the elements of the subArrays
// concatenated into it;

let arr = [1,2,3,[4,5,6,7,[8,9]]]
console.log("Before flat", arr)

let result = arr.flat(2) //by default 1 value
// 2 level 

console.log("after flat:",result)



// flatMap method

// it is the combination of the "map()" method
// followed by the flat()  ,method of depth 1

let cart = [
    {
        name: "Mobile phone",
        qty :2,
        price: 550
    },{
        name: 'Tablet',
        qty: 4,
        price: 1000
    }
]
// jab bhi phone lenge will add extra screengard

let newCart = cart.flatMap(item =>{
    if(item.name === 'Mobile phone'){
        return [item,{
            name:' screen protector',
            qty:1,
            price:0
        }]
    }else{
        return[item]
    }
})
console.log(newCart)