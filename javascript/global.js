console.log("GLOBAL");
let a = 300;

if (true) {
    let a = 3;
    const d = 7;
    // var c=4;
    // console.log(`inner ,${a}`);

}
// console.log(a);
// console.log(d);
// console.log(c);`1```


// nested function 

function one() {
    const name = "pankaj"
    function two() {
        const age = 21

        console.log(name);
    }
    two();
    // console.log(age);
}
one();