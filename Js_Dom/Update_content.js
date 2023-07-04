// updating and changing content

// innerText
let heading = document.querySelector('.coder');
console.log(heading.innerText);

// innerHTMl
// It does not ignore spaces
// retrieve and set content in html formate

console.log(heading.innerHTML)



//getting and setting attribute of elements

let coderDostLink = document.querySelector('a');
console.log(coderDostLink.getAttribute('href'))
// get fun for read

coderDostLink.setAttribute('href', "coderDost.com")
console.log(coderDostLink.getAttribute('href'))
coderDostLink.innerText = 'Master class of js'