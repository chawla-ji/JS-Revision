const coding = ['java', 'py', 'go', 'js']

coding.forEach((item) => {
    console.log(item);
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((...items) => { // Here we got to know what all parameters can the callback function have
    console.log(items);
})

const myCoding = [
    {
        lang: 'js',
        file: 'js.js'
    },
    {
        lang: 'java',
        fileName: 'java,java'
    }
]

myCoding.forEach((item) => {
    console.log(item.file);
    
})