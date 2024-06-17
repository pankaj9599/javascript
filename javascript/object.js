// console.log("OBJECT");

// // THEORY

// // 1)Objects are containers for Properties and Methods.
// // 2)Properties are named Values.
// // 3)Methods are Functions stored as Properties.
// // 4)Properties can be primitive values, functions, or even other objects.
// // create an object 

// // In JavaScript, almost "everything" is an object.
// // Objects are objects
// // Maths are objects
// // Functions are objects
// // Dates are objects
// // Arrays are objects
// // Maps are objects
// // Sets are objects
// // All JavaScript values, except primitives, are objects.


// // ++++++++++++++++++++{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}
// const car={
//     carname:"maruti",
//     modle:500,
//     weight:900,
// };
 
// // this is how you can access the object items.
// console.log(car.carname);


// // +++++++++++++++++++++++++++++++++++++++++++++++

// // creating empty object and then adding variables
// const person={};
// person.name="pankaj";
// person.age=29;
// person.weight=70;

// console.log(person.age);

// // +++++++++++++++++++++++++++++++++++++++++++++++++
// // use new Object()

// // The examples above do exactly the same.
// // But, there is no need to use new Object().
// // For readability, simplicity and execution speed, use the object literal method.

// const game=new Object();
// game.name="pubg";
// game.size="5gb";

// // one way to access the object 
// console.log(game.name);
// // another way to access the object
// console.log(game["size"]);


// // +++{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// // this refers to the person object:
// // this.name means the name property of game.



// // {{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}
// const person1={};
// person1.name="pankaj";
// person1.age=29;
// person1.weight=70;
// console.log(person1.name);
// // The object x is not a copy of person. The object x is person.
// // The object x and the object person share the same memory address.
// // Any changes to x will also change person:
// const x=person1;
// x.name="kumar";
// console.log(person1.name);
// console.log(x.name);




// PROPERTY++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("property");
// THEORY++++++++++
// * An Object is an Unordered Collection of Properties
// * Properties are the most important part of JavaScript objects.
// * Properties can be changed, added, deleted, and some are read only.

const car={
    carname:"maruti",
    model:500,
    weight:900,
};

// there are three way to access the properties of object

let one=car.carname;
let two=car["model"];
// let three=car[weight];
console.log(`${one},${two}`);

// you can add new property to the existing object
car.color="red";
console.log(car.color);

//   you can also delete any property from the object

// The delete keyword deletes both the value of the property and the property itself.
// After deletion, the property cannot be used before it is added back again.
delete car.color;
console.log(car.color);


// nested object 

const preson ={
    name:"pankaj",
     car1:{
        model:44,
     }
};
console.log(preson.car1.model);