// I said:
// So spread is used in right side of = and rest is used in left side of =
// ChatGPT said:
// Yes, that's a great way to think about it!

// Spread (...) is typically used on the right-hand side of = to expand values.
// Rest (...) is typically used on the left-hand side of = to collect values.

// Spread (...) → Right side of = (Expands)
// Used to expand an array/object into individual elements/properties.

// Example 1: Copying an Array
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Expanding arr1 into arr2
console.log(arr2); // Output: [1, 2, 3]

// Example 2: Function Arguments
const numbers = [4, 5, 6];
console.log(Math.max(...numbers)); // Output: 6

// Example 3: Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Rest (...) → Left side of = (Collects)
// Used to collect multiple values into an array or object.

// Example 1: Function Parameters
function sum(...nums) { // Collects all arguments into an array
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// Example 2: Array Destructuring
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(rest); // Output: [30, 40, 50]

// Example 3: Object Destructuring
const person = { name: "Harsh", age: 23, country: "India" };
const { name, ...details } = person; // Collects remaining properties into `details`
console.log(name); // Output: Harsh
// Above way is deprecated, use below way
const {name : personName, ...personDetails} = person;
console.log(personName)
console.log(details); // Output: { age: 23, country: 'India' }