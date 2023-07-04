// Asynchronous javascript

// making Http Request (Example)

// Infromational responses (100 - 199)
// Successful response (200 -299)
// Redirection messages(300- 399)
// Client error responses (400 -499)
// server error responses (500 - 599)

let todos =(callback)=>{

    let request = new XMLHttpRequest();

console.log(request,request.readyState)
request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState)
    if(request.readyState ===4 && request.status ==200){
        console.log(request.responseText)
        callback()
    }else if(request.status ===4){
        // console.log("data could not fetch")
        callback()
    }
})



// set up the request

request.open("Get","https://jsonplaceholder.typicode.com/todos/1");

// sending the request
request.send();
}

todos();


// value state decription
// 0 unsent client has been created. open() not called yet
// 1 opened open() has been called
// 2 headers_receved sedn() has been called,and headers
// 3 LOADING downloading: responseText holds partial data
// 4 Done The opration is complete interseted here