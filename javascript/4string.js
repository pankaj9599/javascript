// console.log("string");
// +++++++++++++++++
// one way to declare string
const name="pankaj";
let age=21;
// console.log(name+age+2+3);
// use back ticks to concatinate the strings(``);
// string intercollation
// we make place holders and directly provide the addr

console.log(`my name is ${name} and age is ${age}`);

// ===========
// second way to declare the string
// const gamename=new String("pankaj");
// console.log(gamename);
// // using some functions
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(3));
// console.log(gamename.indexOf('j'))
// const newname=gamename.substring(3,5);
// console.log(newname);
// const gmail="   @gmail.com       ";
// console.log(`this is the gmail${gmail}`);
// console.log(gmail.trim());


const p=new String("pankaj");
const q=new String("kumarr");
// access the char in string
// console.log(g.charAt(3));
// console.log(p[4]);
// console.log("pankaj"[5]);
// comparing on the bases of c-'a';
if(p>q){
    console.log(`${p}is greater then ${q}`);
}