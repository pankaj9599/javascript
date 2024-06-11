// primitive datatype

// number 
// String
// bigint 
// Boolean
// null
// undefined
// symbol

// const a=34;
// const b=87.3;
// const c=false;
// const d=null;
// let gmail;
// const id=symbol('323');
// const id2=symbol('323');
// console.log(id===id2);


// reference type/non primitive

// array ,
const myhero =["h1","h2","h3"];
// object,
let myodj = {
     name:"pankaj",
     age: 21,

}
// function
// as a variable
const myfunction=function(){
    console.log("hello world");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive)
// copy of variable

//heap(non-primitive)
// reference or original


// stack++++++++++++
// let myname="pankaj kumar";
// let anothername=myname;
// anothername="ball";
// console.log(myname);
// console.log(anothername);


// heap+++++++++++++++++++++++
let user={
    email:"pankaj@2004",
    upi:"pank",
}
console.log(user.email);
let user1=user;
user1.email="123@mail";
console.log(user.email);
console.log(user1.email);