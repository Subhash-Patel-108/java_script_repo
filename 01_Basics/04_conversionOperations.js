//In this session we will learn about conversion operations in JavaScript.
//Conversion operations are used to convert one data type to another.

//To convert the data type form one to another, There are kind of wraper class like java (Boolean , String  and Number) in JavaScript.

//1. Convert the string to number

let str = "123" ;

let strValue = Number(str) ; // it converts the string to number
console.log(strValue); // 123
console.log(typeof strValue); // number

//or second method

let strValue2 = parseInt(str) ;
console.log(strValue2); // 123

//what is we convert the string with some characters
let str2 = "123abc" ;

let number = Number(str2) ; // it converts the string to number
console.log(number); // NaN
console.log(typeof number); // number

//So the summary is
/*
    "123" => 123
    "123abc" => NaN(Not a Number)
    "123.456" => 123.456
*/


//2. Convert the number to string
let num = 123 ;
let numValue = String(num) ; // it converts the number to string
console.log(numValue); // "123"
console.log(typeof numValue); // string

//or second method
let numValue2 = num.toString() ;
console.log(numValue2); // "123"
console.log(typeof numValue2); // string

/*
Summary :- 
    123 => "123"
    123.456 => "123.456"
    NaN => "NaN"
    Infinity => "Infinity"
    -Infinity => "-Infinity"
*/

//3. Convert the boolean to string or number

let bool = true ;
let boolStr = String(bool) ; // it converts the boolean to string
console.log(boolStr); // "true"

let boolValue = Number(bool) ;
console.log(boolValue); // 1

/*
Summary :- 
    ture => "true"
    false => "false"
    true => 1
    false => 0
    NaN => 0
*/

//4. Convert the string to boolean

let string = "Subh Patel" ;
let strBoolean = Boolean(string) ; // it converts the string to boolean
console.log(strBoolean); // true

string = "" ; // re assign the string as empty
strBoolean = Boolean(string) ; // it converts the string to boolean
console.log(strBoolean); // false

/*
Summary :- If the string is empty then it will return false otherwise it will return true
    "Subh Patel" => true
    "" => false
    "0" => true
    "false" => true
    "NaN" => true
    "undefined" => true
    "null" => true
*/