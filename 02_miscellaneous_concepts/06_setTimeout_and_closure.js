function x() {
    for(let i=1; i<=5; i++) { // If you use var, it prints 6 5 times due to global scope. Bcz by the time the setTimeout is executed, the value of i is 6 and it stores the reference to the global variable
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    
}
x();


function x() {
    for(let i=1; i<=5; i++) { // If you use var, it prints 6 5 times due to global scope. Bcz by the time the setTimeout is executed, the value of i is 6 and it stores the reference to the global variable
        function inner(x) {
            setTimeout(function() {
                console.log(x);
            }, x * 1000);
        }
        inner(i); // call by value
    }
    
}
x();