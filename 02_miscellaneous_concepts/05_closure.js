// If a function is returned from another function and it is executed outside of the scope of the function that returned it, it will still have access to the variables in its lexical scope.

function outer() {
    // var a = 1;
    function inner() {
        var a = 1;
        console.log(a);
    }
    return inner; // returns the closure
}
var innerFn = outer();
innerFn(); // 1

// inner(); // Reference error as inner is not defined