const cart = ["shoes", "shirts", "pants"];

const promise = createOrder(cart);

promise.then((orderId) => {
    console.log(orderId);
    return orderId;
}) // Calling ourselves and not depending on the createOrder function to call the proceedToPayment function via callback
.catch(err => {
    console.log(err.message);
})
// No matter whatever happens above, the below chain will execute if there is a catch in between
.then((orderId) => {
    return proceedToPayment(orderId) // Now you can also do a .then here as well and a promice hell will be created but why was it introduced in the first place? To prevent our code from growing horizontally
}).then((paymentStatus) => {
    console.log(paymentStatus);
})
.catch(err => {
    console.log(err.message);
});

// Creating a promise
// Producer end
function createOrder(cart) {
    const promise = new Promise(function(resolve, reject) {
        // create order
        // validate cart
        // orderId
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic for createOrder
        const orderId = "1234"; // DB call
        if(orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    });
    return promise;
}

function validateCart(cart) {
    return false;
}