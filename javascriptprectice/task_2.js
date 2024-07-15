
let priceofgoods=100;
let priceofgoodsaftertax=50;
// arithmetic operator
console.log(priceofgoods+priceofgoodsaftertax);
console.log(priceofgoods-priceofgoodsaftertax);
console.log(priceofgoods*priceofgoodsaftertax);
console.log(priceofgoods/priceofgoodsaftertax);
console.log(priceofgoods%priceofgoodsaftertax);



// assignment operator;
let price=50;
console.log(price+=1);
console.log(price-=1);
console.log(price*=1);
console.log(price/=1);
console.log(price%=1);

// comparison operator;

let num=50;
if(num >5){
    console.log(`${num} is greater then 5`);
}
if(num <500){
    console.log(`${num} is smaller then 500`);
}
if(num ==50){
    console.log(`${num} is equal to 50`);
}


// ternary condition 
let value=-3;
let variable=value>0?console.log(`${value} is positive`):console.log(`${value} is negative`);