
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
    console.log(it);
})

// arrow function 
arrayname.forEach((val)=>{
    console.log(val);
})