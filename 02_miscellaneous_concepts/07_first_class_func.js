a();
b(); // TypeError: b is not a function
// Abe shuru me b ek undefined variable h, function to bad me banega

// Function statement
function a() {
  console.log('a called');
}
a()

// Function expression
var b = function () {
  console.log('b called');
};
b()

// Anonymous function
// function () {
//   console.log('c called');
// };

// Named function expression
var c = function xyz() {
  console.log('c called');
};

c();
xyz(); // ReferenceError: xyz is not defined
// xyz is not available in the global scope
// xyz is available only inside the function

// First class functions -> Functions are treated as first class functions/citizens :-
// 1. Function can be stored in a variable
// 2. Function can be stored in an array
// 3. Function can be stored in an object
// 4. Function can be passed as an argument
// 5. Function can be returned from another function


(function() {
  var x = 20;
  var y = 20;
  var answer = x + y;
  console.log(answer);
  }
);
// This is an IIFE (Immediately Invoked Function Expression)
// This is a function that is executed right after it is created
// It has no name and is not stored in a variable
// It is executed immediately after its creation
// It is used to maintain the privacy of the variables
// It is used to avoid variable hoisting
// It is used to avoid polluting the global scope
// It is used to avoid naming conflicts
// It is used to avoid global variables and functions