console.log(" ARRAY");
// When to Use Arrays. When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.


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
// console.log(he);


// using this you can flat the array (means you can get the element of array in array in one single array);
const another_array=[1,3,5,[2,5,7],6,[2,3,[3,4]]]
const usable_array=another_array.flat(Infinity);
// console.log(usable_array);

// using (isArray). you can find rather given object is array or not
// console.log(Array.isArray("pankajkumar"));
// using form you can convert any object into array 
// console.log(Array.from("pankajkumar"));
// console.log(Array.from({name:"pankajkumar"}));

// using tostring you can convert array to string 
const converttostring=usable_array.toString();
//  console.log(converttostring);
//  console.log(typeof converttostring);


//  for loop in array 
// for(let i=0;i<converttostring.length;i++){
//     console.log(converttostring[i]);
// }


// hole concept /==========+++++++++++
// In JavaScript, arrays are dynamic and can grow or shrink in size. When you add an element 
// at a high index, any indexes between the previous last element and the new high index that 
// you haven't explicitly defined will be treated as "undefined" or "holes."
const hole=[1,2,3];
hole[7]=7;
// console.log(hole);



// The two statements, const points = new Array(40); and const points = [40];, create arrays in JavaScript,
//  but they have different meanings and produce different results.
//  const points = new Array(40);
// console.log(points.length); // Output: 40
// console.log(points);
//         // Output: [undefined, undefined, ..., undefined] (40 times)
// const points = [40];
// console.log(points.length); // Output: 1
// console.log(points);        // Output: [40]


const one=[3];
// // DIFFERENCE 
const two =new Array(5);
// console.log(one);
// console.log(two);



// METHODS IN ARRAY 
// }}}}}}{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}
const array =[1,2,3,4,5,6,7];
// length
// console.log(array.length);

// convert array to string
const stringg=array.toString();
// console.log(stringg);


// The at() method returns an indexed element from an array.
// The at() method returns the same as [].
// console.log(array.at(3));
// console.log(array[3]);

// join() 
// The method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
// console.log(array.join("+"));

// push and pop 
array.push(10);
// console.log(array);
array.pop()
// console.log(array);


// shift 
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const shiftt=array.shift();
// console.log(shiftt);
// 1
// console.log(array);
// [ 2, 3, 4, 5, 6, 7 ]

// unshift
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const unshiftt=array.unshift(1);
// console.log(unshiftt);
// 7
// console.log(array);
// [ 1, 2, 3, 4, 5, 6, 7]


// delete()
// Warning !
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead
//      delete array[3];
// console.log(array);
// [ 1, 2, 3, <1 empty item>, 5, 6, 7 ]


//  concat()
// The method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.


// // FLATTENING 
// Flattening an array is the process of reducing the dimensionality of an array.
// Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

const arr5=[1,2,3,[3,4,5],[2,4,[2,5]]];

// console.log(arr5.flat(Infinity)); 
//  [ 1, 2, 3, 3, 4, 5, 2, 4, 2, 5]


// SPLICE AND SLICE 
console.log(array);
console.log(array.slice(1,3));
console.log(array);
console.log(array.splice(3,4));