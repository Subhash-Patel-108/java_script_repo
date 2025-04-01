//In this Session we learn about the JS object deStructuring

const company =  {
    companyName : "Patel PVT LTD." ,
    companyCEOName : "Subh Patel" ,
    companyAnnualBudget : "1k Crore",
    companyLocation : "Mumbai" 
}

//Now in the above object we can see that there are many keys with the long name
//so to diel with that kind of keys we use object destructures
//Syntax : 
const {companyAnnualBudget : budget} = company ;
const {companyCEOName : CEOName} = company ;
console.log(budget); // 1k Crore
console.log(CEOName) ; // Subh Patel
//we give the companyAnnualBudget as budget by the help of object Destructuring
