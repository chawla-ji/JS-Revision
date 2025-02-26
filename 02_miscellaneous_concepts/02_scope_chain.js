// // Case 1
// function a() {
//     console.log(b);
// }

// var b = 10;
// a();
// //Prints 10


// // Case 2
// function a() {
//     c();
//     function c() {
//         console.log(b);
//     }
// }

// var b = 10;
// a();
// // Prints 10


//Case 3
function a() {
    var b = 10;
}

console.log(b);
a();
// ReferenceError: b is not defined