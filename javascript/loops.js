
// for of 
["","",""]
[{},{},{}]

const arr=[1,2,3,4,5,6,7,8];
// for of 
for (const it of arr) {
    // console.log(it);
}

// for in
for (const key in arr) {
    // console.log(arr[key]);
}

const greeting="hello sir";
for (const gr of greeting) {
    // console.log(gr);
}

// Map 

const map=new Map();
map.set("a",1);
map.set("s",2);
map.set("e",3);
map.set("r",4);

for (const m of map) {
    // console.log(m);
    
}


// Object 

const myobjects={
"name":"pankaj",
"age":21

}
// myobjects is not iterable
// for (const ob of myobjects) {
//     console.log(ob);
// }

// we use for in to iterate in objects 

const group={
    pankaj:21,
    raja:32,
    pranjal:23
}
for (const key in group) {
    // console.log(` ${key}->${group[key]}`);
        
    
}


// for each loop 


const arrayname=["pankaj","raja","amar"];

arrayname.forEach(function (it){
    // console.log(it);
})

// arrow function 
arrayname.forEach((val)=>{
    // console.log(val);
})




// DAY TWO 
// const arr=[1,2,3,4,5,6,7,8];
const val=arr.forEach((it) => {
    // console.log(it);
    return it;
});
// console.log(val);


const nums=[1,2,3,4,5,6,7,8];

// Using Filter 
// const numbers=nums.filter((it)=>(it>3)); //return on their own 
// console.log(numbers);

// const numbers=nums.filter((it)=>it>3); //return on their own 
// console.log(numbers);

// if you are using curly braces then you have to return 
const numbers=nums.filter((it)=>{
   return it>2;
}); 
// console.log(numbers);


// Using Foreach 
const answer=[];
nums.forEach(it => {
    if(it>4){
        answer.push(it);
    }
});
// console.log(answer);



const people=[
    {name:"pankaj",age:21,weight:72,height:5.8},
    {name:"raja",age:23,weight:23,height:6.7},
    {name:"piyush",age:18,weight:67,height:4.7},
    {name:"salman",age:19,weight:87,height:5.9},
    {name:"pranjal",age:22,weight:87,height:6},
]

// let user=people.filter((pe)=>());
 let user=people.filter((pe)=>(pe.weight>75&&pe.height>=6));
// console.log(user);


// Map 
// const mynum=[1,2,3,4,5,6,7];
// let numberss=mynum.map((it)=>it+10);
// console.log(numberss);


// CHAINING 

const mynum=[1,2,3,4,5,6,7];
let numberss=mynum
                  .map((it)=>it*10)
                  .map((it)=>it+1)
                  .filter((it)=>it>50);
// console.log(numberss);  

// REDUCE 


const intarray=[1,2,3,4,5];
const initial=0;
const sum=intarray.reduce(
    (acc,cur)=>acc+cur,initial
);
console.log(sum);


// REDUCE (FUNCTION)
const sum1=intarray.reduce(function (acc,curr) {
  return  acc+curr},0)
console.log(sum1);

// using arrow function 
const sum2=intarray.reduce( (acc,curr)=> 
 (acc+curr),0)
console.log(sum2);


// EXAMPLE /\
const shopingcart=[
    {
        course:"hindi",
        price:999,
        timetof:10,
    },
    {
        course:"english",
        price:990,
        timetof:10,
    },
    {
        course:"maths",
        price:900,
        timetof:10,
    },
    {
        course:"science",
        price:800,
        timetof:10,
    }

]

let totalbill=shopingcart.reduce((acc,item)=>acc+item.price,0);
console.log(totalbill);

 totalbill=shopingcart.reduce((acc,item)=>acc+item.timetof,0);
 console.log(totalbill);