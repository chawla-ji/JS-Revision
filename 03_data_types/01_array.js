// const myArray = [1, 2, 3, 4, 5];
// console.log(myArray); // [1, 2, 3, 4, 5]
// myArray.push(6);
// console.log(myArray); // [1, 2, 3, 4, 5, 6]
// myArray.pop();
// console.log(myArray); // [1, 2, 3, 4, 5]
// myArray.unshift(3); // push in front of the array
// // Time consuming bcz adding in start
// console.log(myArray); // [3, 1, 2, 3, 4, 5]
// myArray.shift(); // remove from the start
// console.log(myArray); // [1, 2, 3, 4, 5]
// myArray.reverse();
// console.log(myArray); // [5, 4, 3, 2, 1]
// myArray.sort();
// console.log(myArray); // [1, 2, 3, 4, 5]

// console.log(myArray.includes(3)); // true

// const arr2 = myArray.slice(1, 3); // similar to substring in strings
// console.log(arr2); // [2, 3]

// // array.splice(startIndex, deleteCount, item1, item2, ...);
// // startIndex: The index at which to start modifying the array (here, 1).
// // deleteCount: The number of elements to remove (here, 0, meaning no elements are removed).
// // Additional arguments (2, 3, 4): These values are inserted at startIndex.
// myArray.splice(2, 3);
// console.log(myArray); // [1, 2]
// myArray.splice(1, 0, 2, 3, 4);
// console.log(myArray); // [1, 2, 3, 4, 5]
// myArray.splice(2, 1);
// console.log(myArray); // [1, 2, 4, 5]
// myArray.splice(2, 0, 3);
// console.log(myArray); // [1, 2, 3, 4, 5]
// myArray.splice(2, 1, 3);
// console.log(myArray); // [1, 2, 3, 4, 5]

// // join() => joins the array elements into a string
// // split() => splits a string into an array
// const newArr = myArray.join('-');
// console.log(newArr); // 1-2-3-4-5

// const arr = newArr.split();
// console.log(arr); // [ '1-2-3-4-5' ]

// const arrr = myArray.join();
// console.log(arrr); // 1,2,3,4,5

// const anotherArr = [6,7,8,9,10];
// myArray.push(anotherArr);
// console.log(myArray); // [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]
// myArray.pop();
// const finalArr = myArray.concat(anotherArr); // It doesn't change the original array
// console.log(finalArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const arr1 = [...myArray, ...anotherArr]; // This is a way of copying the array by valuse and not by reference
// console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// // flat() => flattens nested arrays
// const nestedArr = [1, 2, [3, 4, [5, 6]]];
// console.log(nestedArr.flat()); // [1, 2, 3, 4, [5, 6]]
// console.log(nestedArr.flat(2)); // [1, 2, 3, 4, 5, 6]
// console.log(nestedArr.flat(Infinity)); // [1, 2, 3, 4, 5, 6]


// from() => creates a new, shallow-copied array from an array-like or iterable object
const str = 'hello';
const strArr = Array.from(str);
console.log(strArr); // [ 'h', 'e', 'l', 'l', 'o' ]
const set = new Set([1, 2, 3, 4, 5]);
const setArr = Array.from(set);
console.log(setArr); // [ 1, 2, 3, 4, 5 ]

console.log(Array.from({name: 'Harsh'}));


// weird but works
function demo() {
    console.log(Array.from(arguments));
  }
  
demo(10, 20, 30);

const obj1 = { name: 'Harsh' };
const result1 = Array.from(Object.values(obj1));
console.log(result1);
// Output: ['Harsh']

const obj2 = { name: 'Harsh' };
const result2 = Array.from(Object.keys(obj2));
console.log(result2);
// Output: ['name']

const obj3 = { name: 'Harsh' };
const result3 = Array.from(Object.entries(obj3));
console.log(result3);
// Output: [['name', 'Harsh']]
