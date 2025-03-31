//In this session we will learn about strings in JavaScript
//Strings are used to represent text data in JavaScript

//There are two ways to declare a string in JavaScript
//1. Using single quotes
let str = 'Subhash Patel' ;

//2. Using double quotes
let str1 = "Subh Patel" ;

console.log(str) ; // output: Subhash Patel

//If we want to create the string object by the help of new keyword

let string = new String('Subhash Patel') ;

console.log(string) ; // output: [String: 'Subhash Patel']

//In string there are many methods
str = "Hello World" ;

//1. length => find the length of the string (it is a variable) 

console.log(str.length) ; // output: 11 

//2. charAt => find the character at a specific index
console.log(str.charAt(0)) ; // output: H

//3. indexOf => find the index of a specific character
console.log(str.indexOf('o')) ; // output: 4

//4 concat => join two strings
let first = "Subh" ;
let last = " Patel" ;

let fullName = first.concat(last) ;

console.log(fullName) ; // output: Subh Patel

//5. toUpperCase => convert the string to upper case
console.log(str.toUpperCase()) ; // output: HELLO WORLD

//6 toLowerCase => convert the string to lower case
console.log(str.toLowerCase()) ; // output: hello world

//7. trim => remove the white spaces from the string
let trimExample = "   Hello World   " ;
console.log(trimExample.trim()) ; // output: Hello World

//8. split => split the string into an array of substrings

let splitExample = "My name is Subhash Patel and I am a software engineer" ;
let splitArray = splitExample.split(" ") ; // it break the string by the white space

console.log(splitArray) ; // output: [ 'My', 'name', 'is', 'Subhash', 'Patel', 'and', 'I', 'am', 'a', 'software', 'engineer' ]

//9. substring => extract a part of the string
let substringExample = "Hello World" ;
console.log(substringExample.substring(0, 5)) ; // output: Hello (it does not include the last index , mean 5  is not included)

//10. slice => extract a part of the string(it is similar as substring but it can accept negative index)
console.log(substringExample.slice(-11, -5)) ; // output: Hello (it does not include the last index , mean 5  is not included)


//11. replace => replace a part of the string
let replaceExample = "Hello World" ;
console.log(replaceExample.replace("World", "Subhash")) ; // output: Hello Subhash

//12. includes => check if the string contains a specific character
let includesExample = "Hello World" ;
console.log(includesExample.includes("World")) ; // output: true

