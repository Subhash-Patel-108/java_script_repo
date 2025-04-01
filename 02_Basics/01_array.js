//In this session we learn about arrays in js
//Arrays are used to store multiple values in a single variable

//The declaration of an array and initialization of an array
let fruits = ["Apple" , "Banana" , "Mango" , "Orange"]; //To declare an array we use square brackets

//to access the elements of the array we use indexing which is 0 based
console.log(fruits[0]); //Apple

//In array there are some instance variables and methods

//length - returns the number of elements in the array
console.log(fruits.length); //4


//+++++++++++++++++++++++++++++Methos+++++++++++++++++++++++++++++++++//
//1. toString() - returns a string representing the array and its elements
console.log(fruits.toString()); //Apple,Banana,Mango,Orange

//2. push(Value) - adds a new element to the end of the array
fruits.push("Grapes");
console.log(fruits); //Apple,Banana,Mango,Orange,Grapes

//3. pop() - pop() is use to remove the last element of the array
fruits.pop();
console.log(fruits); //Apple,Banana,Mango,Orange

//4. unshift(Value) - adds a new element to the beginning of the array
fruits.unshift("Pineapple");
console.log(fruits); //Pineapple,Apple,Banana,Mango,Orange

//5. shift() - removes the first element of the array
fruits.shift();
console.log(fruits); //Apple,Banana,Mango,Orange

//6. slice(start, end) - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
let slicedArray = fruits.slice(1, 3);
console.log(slicedArray); //Banana,Mango


//7.splice(start , end) - The splice() method change the contents of the main array by remove them and store in another array
//it change the original array also

// let splicedArray = fruits.splice(1, 2);
// console.log(splicedArray); //Banana,Mango
console.log(fruits); //Apple,Orange


//8. concat() - Use to concatenate two or more arrays and returns a new array
let vegetables = ["Potato", "Tomato", "Onion"];
let food = fruits.concat(vegetables);
console.log(food); //Apple,Orange,Potato,Tomato,Onion

//9. join() - joins all elements of an array into a string
let joinedArray = food.join(" - ");
console.log(joinedArray); //Apple - Orange - Potato - Tomato - Onion

//10. indexOf(value) - returns the first index at which a given element can be found in the array, or -1 if it is not present
let index = fruits.indexOf("Apple");
console.log(index); //0

//11. reverse() - reverses the elements of an array in place
fruits.reverse() ;
console.log(fruits); // [ 'Orange', 'Mango', 'Banana', 'Appple' ]


//12. sort() - sorts the elements of an array in place and returns the sorted array
let number = [1, 4, 2, 3, 5];
number.sort();
console.log(number); // [ 1, 2, 3, 4, 5 ]

