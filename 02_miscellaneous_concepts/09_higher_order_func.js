// If you want to make your function more flexible, you can pass another function as an argument. This is called a higher-order function.

calc = (radius, callbackFunc) => {
    const output = [];
    for(let i=0; i<radius.length; i++) {
        output.push(callbackFunc(radius[i]));
    }
    return output;
}

// If you want to access it ass arr.func(arg), you can do:

Array.prototype.calc = function(callbackFunc) { // similar to map function
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(callbackFunc(this[i]));
    }
    return output;
};

let radius = [1, 2, 3, 4];

console.log(radius.calc((radius) => 2 * radius)); // Output: [2, 4, 6, 8]


// You cannot assign calc with a callback function because it does not bind with this
// Below code won't give the expected output

// Array.prototype.calc = (callbackFunc) => {
//     const output = [];
//     for(let i=0; i<this.length; i++) {
//         output.push(callbackFunc(this[i]));
//     }
//     return output;
// }

// let radius = [1,2,3,4]

// console.log(radius.calc((radius) => 2*radius));