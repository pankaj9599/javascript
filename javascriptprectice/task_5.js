function oddoreven(number){
    if(number%2==0)console.log(`${number} is even`);

    else console.log(`${number} is odd`);
}
// oddoreven(8);

function squarroot(number){
    console.log(number*number);
}
// squarroot(5);

function maxi(num1,num2){
    if(num1>num2)console.log(`${num1} is greater then ${num2}`);
    else console.log(`${num2} is greater then ${num1}`);

}
// maxi(45,34);

// let a='pankaj';
// let b='kumar';
function joinsting(b,c){
     console.log(b+c);
}
// joinsting(a,b);
let a=3;
let b=4;
 const sum=(a,b)=>{
return a+b;
}
// console.log(sum(a,b));



const find =(s,t)=>{
for(let i=0;i<s.length;i++){
    if(s[i]===t)return true;
}
return false;
}

console.log(find('pankaj','o'));