//  More event

// copy event

let copyRightElemnt = document.querySelector('.copy');

copyRightElemnt.addEventListener('copy',()=>{
    console.log('you cant copy this line')
})


// Mouse move event

let box = document.querySelector('.box')

box.addEventListener('mousemove', (e)=>{
    console.log(e.offsetX,e.offsetY);
})