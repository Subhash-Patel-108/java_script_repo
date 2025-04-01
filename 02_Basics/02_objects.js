//In this session we learn about objects in js
//The Objects is use to store the data in key and value pair

//There are two types of objects in js
//1. Object Literal - The object literal is a comma-separated list of name-value pairs inside curly braces
//2. Object Constructor - The object constructor is a function that creates an object
//In the object constructor can containes single tone

//+++++++++++++++++++First we learn about the Object Literal +++++++++
//The Declaration of an  object literal
let JSUser = {
    name : "Subh Patel" ,
    age : 19 ,
    gmail : "subhaPatel123@gmail.com" ,
    isStudent : true ,
    hobbies : ["Coding" , "Reading" , "Gaming"] ,
}

//to access the elements of the object we use dot and bracket notation

console.log(JSUser.name); //Subh Patel

//by the help of sqaure bracket notation
console.log(JSUser["name"]); //Subh Patel

//+++++++++++++++++++++++++++++++How to add Symbol in Object +++++++++++++++++++++++++++++++//
let mySymbol = Symbol("myFirstKey") ;

let bank = {
    bankName : "SBI" ,
    location : "India" ,
    [mySymbol] : "My First Symbol" ,//To add the symbol in the object we use square bracket notation
    isBankOpen : true ,
    balance : 100000 ,
}

console.log(bank[mySymbol]); // to accesss the symbol we use square bracket notation
console.log(bank); // the typeof the mySymbol is symbol

//+++++++++++++++++++++++++++++++How to add function in Object +++++++++++++++++++++++++++++++//


JSUser.greeting = function() {
    console.log("Hello " + this.name);
    //or console.log(`Hello ${this.name}`);
}

JSUser.greeting(); //Hello Subh Patel

//+++++++++++++++++++++++++++++++How to freeze the object +++++++++++++++++++++++++++++++//
//The Object.freeze() method freezes an object. A frozen object can no longer be changed:
Object.freeze(JSUser) ; 

JSUser.name = "Subhash Patel" ; //We can't change the value of the object
console.log(JSUser.name); //Subh Patel

