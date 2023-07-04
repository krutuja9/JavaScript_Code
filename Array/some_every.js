// Array method

// "some" adn " every" method

// some method return "true" if "any" array element pass the test
// every method return "true" if "all" elements pass the test;

let scores = [25,23,43,80,32]
let result = scores.some( score =>{
    return score > 80
})
console.log(result)  //some is loose condition


// strick condition
let newScores = [23,56,78,56,98]

let newResult =  newScores.every(score =>{
    return score >20
})
console.log(newResult)