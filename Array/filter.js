// Array Method

// filter method (used to perfor filtartion on array)

// slect krta ye elemnent new array me hoga ya nhi hoga

let gifts = ['watch','ring','chocolates','teddy-bear', 'watch','ring']

//now  you want to filter only "watch and ring" gifts

let filterArray = gifts.filter(gift =>{
    if (gift == 'watch' || gift == 'ring'){
        return gift
    }
})
console.log(filterArray)
console.log(gifts)


// filter value may or may not ame with original value of array