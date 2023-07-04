// Js DOM (Document Object Model)

// Created by browser as the html load into the browser

// Browser create object of html called "documnet object"

// In Document object there is model of complete html in 
//tree like structure


// console.log(document.URL)




// getting html elements using querySelectorAll()
// querySelector returns "first element" that match css selector
// to get all matched elements we use querySelectorAll

let resultElement = document.querySelectorAll('p')
console.log(resultElement)
resultElement.forEach(element => {
    console.log(element)
});

// other ways to get html elements

let targetNameEle = document.getElementsByTagName('p')
console.log(targetNameEle)


// getElementby.. not used in todays js
// used queryselectore