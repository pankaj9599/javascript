console.log("function");


function myname(){
    console.log("pankaj");
    console.log("kumar");

}
// myname();


// sum of two Number

function sum(number1,number2){
   console.log(number1+number2) ;
}

// sum(4,3);

// shoping cart 

function shopingcart(...number1){
    return number1;
}
// it return the array 
// console.log(shopingcart(2,3,6,8));


const user={
    username:"pankaj",
    age:21,
}

function handleuser(userss){
    console.log(`user name ${userss.username} and age is ${userss.age}`);
}
// passing function;
// handleuser(user);

handleuser({
username:"sam",
age:23,
});


// now passing array 
const array=[2,3,4,5,6];
function print(getarray){
return getarray[2];
}
// console.log(print(array));

// console.log(print([1,2,3,4,5]));

// ++++++++++++++++++++++++ arrow function +++++++++++++++++++++++++++++

const users={
    username:"pankaj",
     age:21,
     cost:199,
     welcome :function(){
console.log(`hello users ${this.username}`)
     }
}
users.welcome();