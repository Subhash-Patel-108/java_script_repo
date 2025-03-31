"use strict" ;

//In this session we learn about numbers and math in JavaScript

//----------------------------Number----------------------//
//Numbers in JavaScript are always 64-bit floating point numbers

let number = new Number(123) ;
console.log(number); // [Number: 123]

//There are some of the function or methods that can be used with numbers
 
//1. toString() - converts a number to a string
console.log(number.toString()); // '123'

//2. toExponential() - converts a number to exponential notation
let num = 123.456
console.log(num.toExponential()); // // '1.23456e+2'

//3. toFixed() - converts a number to a string, rounding to a specified number of decimals
num = 123.598
console.log(num.toFixed(2)) ; // 123.60 

//4 . toPrecision() - converts a number to a string, rounding to a specified number of significant digits
num = 123.456789
console.log(num.toPrecision(5)); // '123.46'

//5. toLocaleString() - converts a number to a string, using locale conventions
num = 1000000
console.log(num.toLocaleString()); // '1,000,000' (it conver in US locale)

//If we want to convert it into indian locale
//So :-
console.log(num.toLocaleString('en-IN')); // '10,00,000' (it conver in Indian locale)

//to find the minimum and maximum value of a number
//6. Number.MIN_VALUE - returns the smallest number that can be represented in JavaScript
console.log(Number.MIN_VALUE); // 5e-324

//7. Number.MAX_VALUE - returns the largest number that can be represented in JavaScript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308


//----------------------------Math----------------------//
//Math is a built-in object that has properties and methods for mathematical constants and functions

//In Math there are some of the properties and methods that can be used with numbers
//First, we talk about properties

//1. Math.PI - returns the value of PI
console.log(Math.PI); // 3.141592653589793

//2. Math.E - returns Euler's number
console.log(Math.E); // 2.718281828459045

//3. Math.SQRT2 - returns the square root of 2
console.log(Math.SQRT2); // 1.4142135623730951

//4. Math.SQRT1_2 - returns the square root of 1/2
console.log(Math.SQRT1_2); // 0.7071067811865476


//++++++++++++++++++++++++++++++++Methods++++++++++++++++++++++++++++++++++++++++++++++//
//1. Math.abs() - returns the absolute value of a number
console.log(Math.abs(-10)); // 10

//2. Math.ceil() - rounds a number UP to the nearest integer
console.log(Math.ceil(10.1)); // 11

//3. Math.floor() - rounds a number DOWN to the nearest integer
console.log(Math.floor(10.9)); // 10

//4. Math.round() - rounds a number to the nearest integer
console.log(Math.round(10.5)); // 11
console.log(Math.round(10.4)); // 10

//5. Math.max() - returns the largest of zero or more numbers
console.log(Math.max(10, 20, 30)); // 30

//6. Math.min() - returns the smallest of zero or more numbers
console.log(Math.min(10, 20, 30)); // 10

//7. Math.random() - returns a random number between 0 and 1
console.log(Math.random()); // 0.123456789

//if we want to generate number in the range min - max
let min = 10 ;
let max = 20 ;

console.log(Math.floor(Math.random() * (max - min + 1)) + min ); // the range is [10, 20]


//8. Math.pow() - returns the value of a number raised to the power of another number
console.log(Math.pow(2, 3)); // 8 (2^3 = 8)

//9. Math.sqrt() - returns the square root of a number
console.log(Math.sqrt(16)); // 4 (sqrt(16) = 4)

//10. Math.log10() - returns the cube root of a number
console.log(Math.log10(100)); // 2 (10^2 = 100)

//NOTE :- If you want to find the number of digits in a number 
//The formula is :- digits = Math.floor(Math.log10(num)) + 1 ;

