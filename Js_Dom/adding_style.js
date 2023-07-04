// Adding the style

// let heading = document.querySelector('h1');

// heading.style.color = 'pink'
// heading.style.backgroundColor = 'blue'










// Add, remove and replace class of elements

let heading = document.querySelector('h1');

// Add the class
heading.classList.add("main")
// remove the class
heading.classList.remove('hello')

// replace the class
heading.classList.replace('main', 'newClass')






// Parent, children and sibling elements 

let parenetElement = document.querySelector('.main');
// All children of parent 
console.log(parenetElement.children)