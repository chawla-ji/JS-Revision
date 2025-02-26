
// Returns a promise
// async function getData() {
//     return "Namaste"; // converts to a promise if not already
// }

const p = new Promise((resolve, reject) => {
    resolve("Promise resolved value!");
});

// handles promise
async function getData() {
    return p; // itself a promise so returned as it is internally
}

const dataPromise = getData();

dataPromise.then(data => console.log(data)) // Use it if you didn't use await
        .catch(err => console.log(err.message));


