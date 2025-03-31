//in this file we will learn about variables


//First we learn about the history of the variable in javascript
//In the beginning javascript was created to make web pages dynamic
//but in the beginning javascript was not a programming language
//it was just a scripting language
//then javascript was used to make web pages dynamic
//then javascript was used to make web pages interactive
//then javascript was used to make web pages responsive
//then javascript was used to make web pages fast
//then javascript was used to make web pages secure
//then javascript was used to make web pages scalable
//and at the beggining there are only one type of variable
//that is var
//in 2005 the let and const were introduced
//The website which is developed before 2005 is using var


//in javascript we have 3 types of variables
//1. var
var name = "John Doe";
console.log(name); // John Doe

//2. let
let age = 25;
console.log(age); // 25

//3. const
const pi = 3.14;
console.log(pi); // 3.14

//in javascript we can use var, let and const to declare variables
//but there are some differences between them
//1. var is function scoped while let and const are block scoped

//2. var can be re-declared and updated while let can be updated but not re-declared
//eg :- 
{
    var name = "Subhash Patel" ;
    console.log(name); // Subhash Patel

    var name = "Subh Patel" ;
    console.log(name); // Subh Patel
}//in the above code i am re-declaring the variable name and updating it

//but in case of let i cannot re-declare the variable
//Eg :- 
{
    let name = "Subhash Patel" ;
    console.log(name); // Subhash Patel

    let name = "Subh Patel" ;//this will give an error
    console.log(name); // it will not print anything and will give an error
}
//in let i cannot re-declare the variable but i can update it
//Eg :- 
{
    let name = "Subhash Patel" ;
    console.log(name); // Subhash Patel

    name = "Subh Patel" ;//this will not give an error
    console.log(name); // Subh Patel
}

//3 const cannot be re-declared and updated
//Eg :- 
{
    const name = "Subhash Patel" ;
    console.log(name); // Subhash Patel

    const name = "Subh Patel" ;//this will give an error
    console.log(name); // it will not print anything and will give an error
}
//in const i cannot re-declare the variable and i cannot update it  
//Eg :- 
{
    const name = "Subhash Patel" ;
    console.log(name); // Subhash Patel

    name = "Subh Patel" ;//this will give an error
    console.log(name); // it will not print anything and will give an error
}



/* In the javaScript if we can only declare the variable,then it is by default consider as undefined*/
//Eg:-
let city;

console.log(city); // undefined
//in the above code i am declaring the variable city but not assigning any value to it
//so it is by default consider as undefined

