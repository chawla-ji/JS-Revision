// singleton

// Symbol
const symbol1 = Symbol("key1");

// Object literal
var user = {
  name: 'Harsh', // key is by default considered as string, write it or not
  age: 23,
  location: 'India',
  "can't access with dot": "use square brackets",
  email: 'harsh@beehyv.com',
  isLoggedIn: false,
  lastLoginDays: ['Monday', 'Tuesday', 'Wednesday'],
  [symbol1]: 'symbol1 ki value' // Correct way to use symbol. This also cannot be accessed with dot
//   symbol1: 'symbol1 ki value' // Not correct way to use symbol
  
};

console.log(user);
console.log(user.name);
console.log(user['age']); // Give as string as key is considered as string
console.log(user["can't access with dot"]);
// console.log(typeof user.symbol1); // string if not used correctly
console.log(user[symbol1]); // Correct way to use symbol. Print the object and see the symbol key
// console.log(user);


user.name = 'Harsh Chawla';
// Object.freeze(user); // This will freeze the object and you cannot change the values of the object
// user.name = 'Harsh'; // No change will be made
// console.log(user);

// Adding function to object
user.greeting = function() {
    console.log(`Hello ${this.name}`);
}

console.log(user.greeting); // undefined
user.greeting()