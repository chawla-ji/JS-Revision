// // singleton object
// const tinderUser = new Object();
// tinderUser.id = 1;
// tinderUser.name = 'Harsh';
// tinderUser.age = 23;
// tinderUser.isLoggedIn = false;
// console.log(tinderUser);


// const regularUser = {
//     email: "bkdvbsjklkeqn",
//     fullname: {
//         firstname: "Harsh",
//         lastname: "Chawla"
//     }   
// }

// console.log(regularUser);
// console.log(regularUser.fullname.firstname);
// console.log(regularUser['fullname']['lastname']);

// const obj1 = {1: 'a', 2: 'b', 3: 'c'};
// const obj2 = {4: 'd', 5: 'e', 6: 'f'};
// const obj3 = {obj1, obj2};
// console.log(obj3);
// const obj4 = {...obj1, ...obj2};
// console.log(obj4);
// // We can also use Object.assign() to merge objects
// const obj5 = Object.assign({}, obj1, obj2);
// console.log(obj5);
// // Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object (first argument of the function is the target and that object becomes equal to the object on the left side of '=')

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // Returns an array of keys
// console.log(Object.values(tinderUser)); // Returns an array of values
// console.log(Object.entries(tinderUser)); // Returns an array of arrays of key-value pairs
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Returns true if the object has the property

// console.log(Object.getOwnPropertyNames(tinderUser)); // Returns an array of all properties
// console.log(Object.getOwnPropertySymbols(tinderUser)); // Returns an array of all symbols
// console.log(Object.getPrototypeOf(tinderUser)); // Returns the prototype of the object
// console.log(Object.isExtensible(tinderUser)); // Returns true if the object is extensible
// console.log(Object.isFrozen(tinderUser)); // Returns true if the object is frozen
// console.log(Object.isSealed(tinderUser)); // Returns true if the object is sealed
// console.log(Object.is(tinderUser, tinderUser)); // Returns true if the two objects are the same
// console.log(Object.is({}, {})); // Returns false as the two objects are different
// console.log(Object.is(1, 1)); // Returns true as the two numbers are the same
// console.log(Object.is(1, '1')); // Returns false as the two numbers are different
// console.log(Object.is('1', '1')); // Returns true as the two strings are the same
// console.log(Object.is('1', 1)); // Returns false as the two strings are different
// console.log(Object.is(undefined, undefined)); // Returns true as the two undefined values are the same
// console.log(Object.is(null, null)); // Returns true as the two null values are the same
// console.log(Object.is(null, undefined)); // Returns false as the two null and undefined values are different


const course = {
    courseName: 'JavaScript',
    price: 999,
    courseInstructor: 'Harsh'
}

// console.log(course.courseInstructor);
// OR
const {courseInstructor: instructor} = course; // destructuring
console.log(instructor);


// const navbar = (props.company) => {
const navbar = ({company}) => {

}

navbar(company = 'hitesh')