const arr = [1,2,3,4,5];

// Double - [2,4,6,8,10]

// Binary - [ '1', '10', '11', '100', '101' ]

const output = arr.map(x => x.toString(2));

console.log(output);

// Filter

const output2 = arr.filter(x => x%2 === 0); // Takes function that returns boolean value

console.log(output2);

// Reduce

const output3 = arr.reduce((acc, curr) => acc + curr, 0); // Takes function that returns a single value
// acc is the accumulator, curr is the current value, 0 is the initial value of acc
console.log(output3);


const users = [
    {
        name: 'Harsh',
        age: 21
    },
    {
        name: 'Aman',
        age: 22
    },
    {
        name: 'Ankit',
        age: 23
    }
]

const output4 = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age]++;
    }
    else {
        acc[curr.age] = 1;
    }
    // acc is acting like a map here with key as age and value as count of that age
    return acc;
}, {});

console.log(output4); // { '21': 1, '22': 1, '23': 1 }

const output5 = users.filter(x => x.age > 21).map(x => x.name);

console.log(output5); // [ 'Aman', 'Ankit' ]