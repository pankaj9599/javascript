// const fr={
//     gamename:"invincible",
//     rollno:21,
//     author:"vinchi",
//     book:"carlo",
//     bookplusauthor:function(){
//         return this.book +" "+this.author;
//     },
//     chanderollno:function(rollno){
//         return this.rollno;
//     }
// }
// // console.log(fr);
// // console.log(fr.book);
// // console.log(fr.bookplusauthor());

// fr.rollno=54;
// console.log(fr.chanderollno());

const library ={
person1:{
    name:"pankaj",
    book:[1,2,3,4],

},
person2:{
    name:"rahul",
    book:[1,2,3,7],
},
person3:{
    name:"ajay",
    book:[1,2,3,5],
},
}
// console.log(library.person1.book);
// console.log(library.person2.name);
// console.log(library.person3.name);

for (const it in library) {
    for (const key in it) {
       
        console.log(it[key]);
            
        }
    }
