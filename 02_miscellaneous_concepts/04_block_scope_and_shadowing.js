var a = 200; // It get shadowed by the below a
var d = 300; // It remains in the Global scope
let b = 100; // It remains in the Script scope
{
    var a = 10; // It goes to the Global scope and shadows the above a
    // var b = 20; // SyntaxError: Identifier 'b' has already been declared
    let d; // It remains in the Block scope
    let b = 20; // It takes Block scope
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
// console.log(c); // ReferenceError: c is not defined

function test() {
    var b = 200; // Now it is function scope, so won't throw error
}

//Scope for arrow functions and normal functions is same