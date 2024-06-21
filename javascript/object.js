// console.log("OBJECT");

// // THEORY

// // 1)Objects are containers for Properties and Methods.
// // 2)Properties are named Values.
// // 3)Methods are Functions stored as Properties.
// // 4)Properties can be primitive values, functions, or even other objects.

// // In JavaScript, almost "everything" is an object.
// // Objects are objects
// // Maths are objects
// // Functions are objects
// // Dates are objects
// // Arrays are objects
// // Maps are objects
// // Sets are objects
// // All JavaScript values, except primitives, are objects.


// ++++++++++++++++++++{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}
// create an object 
// use symbol 
const symb=Symbol("key1");
const car1={
    carname:"maruti",
  [symb]:"mykey1",
    modle:500,
    weight:900,
};
// you  can freez the key 
// Object.freeze(car1);
// carname="k"; 
// // this is how you can access the object items.
// console.log(car1.carname);
// console.log(car1[symb]);
car1.greeting=function(){
  // console.log("hello");
}
console.log(car1.greeting());


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











// // PROPERTY++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log("property");
// // THEORY++++++++++
// // * An Object is an Unordered Collection of Properties
// // * Properties are the most important part of JavaScript objects.
// // * Properties can be changed, added, deleted, and some are read only.

// const car={
//     carname:"maruti",
//     model:500,
//     weight:900,
// };

// // there are two way to access the properties of object

// let one=car.carname;
// let two=car["model"];

// console.log(`${one},${two}`);

// // you can add new property to the existing object
// car.color="red";
// console.log(car.color);

// //   you can also delete any property from the object

// // The delete keyword deletes both the value of the property and the property itself.
// // After deletion, the property cannot be used before it is added back again.
// delete car.color;
// console.log(car.color);


// // nested object 

// const preson ={
//     name:"pankaj",
//      car1:{
//         model:44,
//      }
// };
// console.log(preson.car1.model);








// // METHODS++++++++++++++++++++++++++++++++++++++++++++++++++++
// // In the example above, this refers to the person object:
// // this.firstName means the firstName property of person.
// // this.lastName means the lastName property of person.

// // creating method inside the object 
// console.log("METHODS");
// const person ={
//     firstname:"pankaj",
//     lastname:"kumar",
//     age:34,
//     // creating the function 
//     fullname:function(){
//         return this.firstname+ " "+this.lastname +' '+ this.age;
//     }
// };
// // you can access the method same way as property 
// console.log(person.fullname());


// // you can also create method outside the Object;*******
// person.nameplusage=function(){
//     return (this.firstname+' '+this.age).toUpperCase();
// }

// console.log(person.nameplusage());








// DISPLAY++++++++++++++++++++++++++++++++++++++++
// console.log("DISPLAY");


// const person ={
//     firstname:"pankaj",
//     lastname:"kumar",
//     age:34,
//     // creating the function 
//     fullname:function(){
//         return this.firstname+ " "+this.lastname +' '+ this.age;
//     }
// };
// Document.getElementById("demo").InnerHTML=person.firstname+', '+person.lastname;




// singleton or declaring using constructor

const instauser=new Object();
const instaname="pankaj";
const age=20;
const loggedin=false;

const regularuser={
  gmail:pankajgmail.com,
  fullname:{
    fname:pankaj,
    lname:kumar,
  }
}
console.log(regularuser.fullname.fname);