const cart = ["shoes", "shirts", "pants"];

api.createOrder(cart, function() {
    api.proceedToPayment(function() {
        
    })
})