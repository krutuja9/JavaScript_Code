// Event Basic (Click event)

// let eventElement = document.querySelector('.clickme')
// // console.log(eventElement)

// eventElement.addEventListener('click',function(){
//     console.log('clicked me')
// })


// let elements =document.querySelectorAll('li')
// // console.log(elements)

// elements.forEach(function(ele){
//     ele.addEventListener('click',function(e){
//         // // console.log('Item Clicked')
//         // console.log(e.target)
//         // e.target.style.textDecoration = 'line-through'
//         e.target.remove()
//     })
// })


// create
const ul = document.querySelector('ul')
let btn =document.querySelector('.clickme')

btn.addEventListener('click', function(){
    let li = document.createElement('h2')
    li.textContent='somethingNew Added'
    ul.append(li)
    // ul.prepend(li)
})