
const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved value!"), 5000)
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved value!"), 10000)
});

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved value!"), 3000)
});

// handles promise
async function handlePromise() {
    
    // Note: JS engine doesn't wait here. It just appears to be waiting here
    const val = await p; // it is returned asynchronously and first the console.log outside the function will be executed with a pending promise
    console.log("Hello after 5 sec");
    
    console.log(val);

    const val2 = await p; // Won't wait here bcz already resolved
    console.log("Hello after 5 sec");
    console.log(val2);

    const val3 = await p3;
    console.log("Hello after 6 sec");
    console.log(val3);

    const val4 = await p4;
    console.log("Hello after 6 sec");
    console.log(val4);
}

handlePromise();

// console.log(handlePromise());
// console.log("End of script");
