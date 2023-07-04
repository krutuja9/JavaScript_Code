// Bubbling and Delegation

// creating

let ul = document.querySelector('ul');
let btn = document.querySelector('.clickme')

btn.addEventListener('click',function(){
    let li = document.createElement('li')
    li.textContent = 'something added new'
    ul.append(li)
})

// removing

let elements = document.querySelectorAll('li')

elements.forEach(function(element){
    element.addEventListener('click',e =>{
        console.log('inside li')
        e.target.remove();
    })
})

