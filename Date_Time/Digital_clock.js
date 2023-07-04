// Digital clock

let hourHand = document.querySelector('.hour')
let minHand = document.querySelector('.minute')
let secHand = document.querySelector(".second")

let ticking = function(){
    let currentDate = new Date();

    console.log(currentDate)
    let getHour = currentDate.getHours();

    let getMin = currentDate.getMinutes();

    let getsec = currentDate.getSeconds();

    hourHand.textContent = getHour;
    minHand.textContent = getMin;
    secHand.textContent= getsec
}

setInterval(ticking,500) //1000 =1sec