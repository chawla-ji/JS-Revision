const accId = 134432;
// We generally use let
let accEmail = 'abcd123@gmail.com'; // scope specific
var accPass = '1234';
city = "Hyd";
let accState;

/*
Prefer not use var
due to issue in block scope and functional scope
*/

// accId = 1432

accEmail = 'qwerty123@gmail.com';
accPass = '123456';
city = "Jp";

// console.log(accId);

console.table([accId, accEmail, accPass, city, accState]);