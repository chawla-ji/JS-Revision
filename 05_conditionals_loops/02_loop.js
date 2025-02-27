// const arr =     [1, 2, 3, 4, 5];

// for(const i of arr) {
//     console.log(i);
// }

// const greet = "Hello World!";

// for(const i of greet) {
//     console.log(i);
// }

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');

console.log(map);

for(const i of map) {
    console.log(i);
}

for(const [key, value] of map) { // Doesn't work with objects
    console.log(key, `:`, value);
}

const obj = {
    name: 'Harsh',
    age: 21,
    company: 'Beehyv'
}
// For object, we use for-in loop
for (const key in obj) {
    console.log(`${key} has value ${obj[key]}`);    
}