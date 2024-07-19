
const arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr);
let l=arr.length-1;
// console.log(arr[0]);
// console.log(arr[l]);
// l=arr.length-1;
// arr.push(6);
// console.log(arr[l]);
// arr.pop();
// l=arr.length-1;
// console.log(arr[l]);


// arr.shift();
// console.log(arr[0]);
// arr.unshift(9,arr);
// console.log(arr[0]);


const map=new Map();
let i=3;
for (const it of arr) {

    map.set(it,i++);
}
// for (const m of map) {
//     console.log(m);
// }

// console.log(map);



const newarr=arr.filter((it)=>{
    if(it%2==0)return it;
});
// console.log(newarr);
const initial=0;
const sum=arr.reduce((acc,curr)=>acc+curr,initial);
// console.log(sum)

arr.forEach(it => {
    console.log(it);
});

