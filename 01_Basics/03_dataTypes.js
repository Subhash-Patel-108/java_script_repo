//In java Script,there are 8 data type (null is standalone value)

//If we want to find the data type of any variable then we can use typeof operator
//Eg :-

console.log(typeof "") ; //string
//or
console.log(typeof("")) ; //string (calling type as a function)

//1. Number (range is -2^53 to 2^53 - 1 : beacause of Zero +ve is one less then -ve)
//Eg :- 
let num = 10 ;

console.log(typeof num); //number

//2. String (The string is a sequence of characters)
//Eg :-
let name = "Subh Patel" ;

console.log(typeof name) ; //string

//3. Boolean (true or false)
//Eg :-

let isLoggedIn = true ;

console.log(typeof isLoggedIn) ; //boolean

//4. Undefined (if we declare a variable but not assign any value to it)
//Eg :-
let city ;
console.log(typeof city) ; //undefined

//5. Null (it is a standalone value)
//Eg :-
let weather = null ;
console.log(typeof weather) ; //object (it is a bug in js)
//In js the type of the null is object it is a bug in js and asked in interview

//6. BigInt (it is used to store large numbers)
//Eg :-
{
    let bigInt = 1234567890123456789012345678901234567890n ;//Ethere is a n at the end of the number
    console.log(typeof bigInt) ; //bigint
}

//Or by using BigInt constructor

let bigInt = BigInt(1234567890123456789012345678901234567890) ; //this is the recommended way to create bigInt

console.log(typeof bigInt) ; //bigint

//7. Symbol (it is used to create unique identifiers)
//Eg :-
let sym = Symbol("unique") ;
console.log(typeof sym) ; //symbol

//8. Object (it is a collection of key-value pairs)
//Eg :-
let person = {
    name: "Subh Patel",
    age: 22,
    city: "Indore"
}

console.log(typeof person) ; //object

