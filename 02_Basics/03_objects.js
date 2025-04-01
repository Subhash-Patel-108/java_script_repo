//In this session we learn about the object in JS

//First we create an object
let object = new Object() ; //It is object creation by the help of constructor

object.name = "Subhash Patel" ;
object.age = 19 ;
object.isLoggedIn = false ;

console.log(object); //{ name: 'Subhash Patel', age: 19, isLoggedIn: false }

//if we want to add two Object 
let obj1 = {
    1 : "a" ,
    2 : "b" 
}

let obj2 = {
    3 : "a" ,
    4 : "b" 
}

let newObj = {...obj1 , ...obj2} ; // by the help of sepreater 

//or
// let newObj = Object.assign({} , obj1 , obj2 ) ; 

console.log(newObj);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//if we want to check that there is key exist or not
console.log(object.hasOwnProperty("isLoggedIn")) ; // output :- True 

//if we want to find all the keys and values in the object

//To print all the keys
console.log(Object.keys(object)) ; // [ 'name', 'age', 'isLoggedIn' ] (return as array)

//To print all the Values
console.log(Object.values(object)) ; // [ 'Subhash Patel', 19, false ]

