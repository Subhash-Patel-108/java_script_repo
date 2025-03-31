//in java script the console.log() is use to print any thing on the display
//if i want to print any thing on the display i will use console.log() method

console.log("Hello World");//in this i am printing Hello World on the display as a string

//what is i want to print any number on the display
console.log(50);//in this i am printing 10 on the display as a number

//or 
let num = 10 ;

console.log(num) ;//in this i am printing num on the display as a number 

//Eg:- 

const accountId = 12455685202 ;
let accountHolderName = "Subh Patel" ;
let accountBalance = 50000 ;

//in this way we are printing the data one by one

console.log("Printing the data one by one : ");
console.log("Account ID : " + accountId);
console.log("Account Holder Name : " + accountHolderName);
console.log("Account Balance : " + accountBalance);
//or

/*
By the help of the table the table is printed in the display
in the table we can see the data in a structured way
in this way we are printing the data in a table format
*/

console.log("Printing the data in a table format : ");
console.table([accountId , accountHolderName , accountBalance]);


/*or we can use template literals
in the template literals we can use the backtick ` and ${} to print the variable value
in this way we are printing the data in a template literals
*/
console.log("Printing the data in a template literals : ");
console.log(`Account ID : ${accountId}`);
console.log(`Account Holder Name : ${accountHolderName}`);
console.log(`Account Balance : ${accountBalance}`);
