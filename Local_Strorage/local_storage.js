// Local Storage

// in previouse todo list task when we referesh the browser we
// lose our current state data
// store and refresh data from database
// for now our focus is on local storgae
// store and retrieve data from local storage

// Is an api provided by browser to store data inside browser

// console.log(localStorage)


// Local storage
// set item
// get item
// update item

// set the item in local storage

localStorage.setItem('passion','programming')
localStorage.setItem('age', 24)
console.log(localStorage)

console.log(localStorage.getItem('age'))

// update 
localStorage.setItem('age', 40)
console.log(localStorage)

// remove item
// localStorage.removeItem('age')
// localStorage.removeItem('passion')