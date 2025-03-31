//in this session we will learn about operations in javascript

//let start with the example

console.log(1 + 2 ) ; // 3 

console.log(1 - 2 ) ; // -1

console.log(1 * 2 ) ; // 2

console.log(1 / 2 ) ; // 0.5

console.log(1 % 2 ) ; // 1

console.log(2 ** 3 ) ; // it is a exponentiation operator (2^3 = 8)

//let's see the example of string concatenation

console.log("hello" + "world") ; // helloworld

console.log("hello" + 1) ; // hello1

console.log("hello" + true) ; // hellotrue

console.log("3" + 2 + 1) ; // 321 

console.log(3 + 2 + "1") ; // 51
// it is because of the operator precedence , In js the opration is perfrom from left to right
// so first 3 + 2 = 5 then "1" is concatenated with 5
// so the result is 51

//let's see the example of string subtraction
console.log("hello" - "world") ; // NaN

console.log("hello" - 1) ; // NaN

console.log("hello" - true) ; // NaN

console.log("3" - 2 - 1) ; // 0
// it is because of the operator precedence , In js the opration is perfrom from left to right
// so first 3 - 2 = 1 then 1 - 1 = 0    

