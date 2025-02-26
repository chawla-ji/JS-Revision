console.log("start");

setTimeout(() => {
    console.log("Callback");
}, 5000);

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0); // Registes a setTimeout Web API, which goes through the callback queue and then the event loop sends it to the call stack after the call stack is empty

console.log("end");

// 10 sec synchronous excution

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("10 sec completed");