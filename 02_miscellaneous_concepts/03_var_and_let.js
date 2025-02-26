console.log("a is " + a);
// console.log("b is " + b); // reference error
// but above code is executed

var a=1;
let b=2;

console.log("a is " + a);
console.log("b is " + b);

// let a = 3; // SyntaxError: Identifier 'a' has already been declared

// var b = 6; // SyntaxError: Identifier 'b' has already been declared

// let b = 5; // SyntaxError: Identifier 'b' has already been declared
// Won't even read single line of code in this case

var a = 5; // In this case it shadows the above a and now there is only this a in the Global scope
console.log("a is " + a); // Works only if both are var

// const b; // SyntaxError: Missing initializer in const declaration

const c = 10;
// c = 20; // TypeError: Assignment to constant variable.