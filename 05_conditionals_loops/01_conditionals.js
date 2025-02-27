// false values
// false, 0, -0, BigInt 0n, '', null, undefined, NaN

//true
// '0', 'false', ' ', [], {}, function() {}

// Nullish Coalescing Operator (??): It is used to provide a default value for variables that are null or undefined.
const nullValue = null;
const undefinedValue = undefined;
const someValue = nullValue ?? 'Default Value';
console.log(someValue); // Default Value
const someValue1 = undefinedValue ?? 'Default Value';
console.log(someValue1); // Default Value
const someValue2 = 0 ?? 'Default Value';
console.log(someValue2); // 0