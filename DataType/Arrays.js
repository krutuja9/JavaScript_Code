//  Array

let dishes = ['biryani' , 'chat','parathay'];

// Access
// console.log(dishes);

// Modify the Array
dishes[0] = 'karahai'
// console.log(dishes)

//Array Methods

// join method

console.log(dishes.join('__'))

// indexof
console.log(dishes.indexOf("chat"))

// concat method

let newDishes = ['sweetdish', 'panipuri'];
console.log(dishes.concat(newDishes))

let updatedDishes =  dishes.concat(newDishes)

// length mnthod

console.log(updatedDishes.length)


// push method muted (array ko change kr dega) adding element at last

console.log(updatedDishes.push('bhallay' ,'pavbhaji'))

// pop method last element remove

console.log(updatedDishes.pop('bhallay' ,'pavbhaji'))
console.log(updatedDishes)
