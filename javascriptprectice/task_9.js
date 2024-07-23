const name="pankaj";
const age='21';

const book={
    bookname:"silent voice",
    publish:1993,
    bookdiscription:{
        page:799,
        price:999,
    }
};
let {bookname,publish,cv="hidden",bookdiscription:{page,price}}=book;
// console.log(bookname);
// console.log(cv);
// console.log(publish);
// console.log(page);



const arr=[1,2,3,4,5]
let [a,b,c,d,e]=arr;
// console.log(e);



const arr1=[6,7,8,9,0];
const comb=[...arr,...arr1];
// console.log(comb);


const arbi=[1,2,3];
const [one,two ,three]=arbi;
console.log(typeof one);
const sum=(one,two,three)=>one+two+three;

console.log(sum);