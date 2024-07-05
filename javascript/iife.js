console.log("IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)")

// WHY WE USE IIFE?
// we use iife to get rid of global pollution 

// first way 
function chai(){
    console.log("DATABASE CONNECTED");
}
chai();

// second way 
(function coffee(){
    console.log("DATABASE CONNECTED COFFEE");
})();

// arrow function 
( ()=>{
    console.log(`database =>arrow`)
}
)()