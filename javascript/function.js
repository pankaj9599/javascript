// console.log("function");


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

// handleuser({
// username:"sam",
// age:23,
// });


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
// if you console only this then it return the current context of object 
console.log(this);
     }
}
// users.welcome();
// users.username="janvi";
// users.welcome();

console.log(this);

// const chaii= function(){
//     let username="pankaj";
//     console.log(this.username);
// } 

// const chaii = () =>{
//     let username="pankaj";
//     console.log(this.username);
// } 
// chaii();


// arrow function 


const add =(num1,num2)=>{
    console.log(num1+num2);
}
// add(2,4)
// if you use curly braces the you have to return the val 
const add1=(num1,num2)=>{
    return num1+num2;
}
console.log(add1(5,6));

// no need to return val if you write code in one line 
const add2= (num1,num2)=> (num1+num2);
console.log(add2(2,5));