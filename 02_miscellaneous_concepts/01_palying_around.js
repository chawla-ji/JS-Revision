
// getName(); // TypeError: getName is not a function
console.log(x); // undefined (hoisting)
console.log(getName); // Arrow function gives undefined
// In case of function getName() { console.log("harsh"); }, above line will give function definition and getName() will work properly

var x = 7;

var getName = () => {
    console.log('Harsh');    
}

// function getName() {
//     console.log("harsh");
// }

// getName();
// console.log(x);