// control flow
//For  loop 
// Run the specific task 10 times

// for (let i=2;i<10;i++){
//     console.log(i++);
// }


// uscase for loop

// let dishes = ['Biryani', 'chana=chat','panipuri'];

// Access the array values

/*for(let i =dishes.length-1; i>=0;i--){
    let dis = dishes[i]
    console.log(dis);
}
console.log(dishes.length)
*/

// Iteration and value



// While loop
/*let i=0;
while(i<=10){
    console.log(i);
    i++;
}*/
let dishes = ['Biryani', 'chana=chat','panipuri'];
let i =0;
while(i<dishes.length){
    console.log('Favorite dish::',dishes[i]);
    i++;
}

// do while
let j=0;
do {
    console.log(j+1);
    j++;
}while(j<=10);