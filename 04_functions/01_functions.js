let a = 3;
var b = 2;

function addTwo() {
    var b = 3
    let ret = a + 2;
    return ret;
}
console.log(addTwo()); // 5
console.log(b); // 2

if(a > 0) {
    let c = 4;
    var d = 5;
}
// console.log(c); // ReferenceError: c is not defined
console.log(d); // 5
// The let statement declares a block scope local variable, optionally initializing it to a value.
// The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
// The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global.
// The scope of a variable declared with let is the block in which it is defined, starting with the block's opening { and ending with its closing }.
// The scope of a variable declared with const is the same as with let but the value of a const cannot be changed through reassignment, and it can't be redeclared.
// The let keyword allows you to declare a variable with block scope.
// The var keyword allows you to declare a variable with function scope.
// The const keyword allows you to declare a constant (unchanging) variable.