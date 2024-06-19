console.log(" ARRAY");
// An array is a special variable, which can hold more than one value:
// If you have a list of items (a list of car names, for example),

// creating array without new keyword
const arr=["swift","honda","thar"];
// creating array using new keyword 
// const arr1=new Array[3,5,7,8,2];

// The two examples above do exactly the same.
// There is no need to use new Array().
// For simplicity, readability and execution speed, use the array literal method.

const marval=["spider","hulk","ironman"];
const dc=["superman","batman","wolverine"]
// console.log(marval);
// marval.push(dc);
// console.log(marval);

const con=marval.concat(dc);
// console.log(con);
const he=[...marval,...dc];
console.log(he);