const fr={
    gamename:"invincible",
    rollno:21,
    author:"vinchi",
    book:"carlo",
    bookplusauthor:function(){
        return this.book +" "+this.author;
    },
    chanderollno:function(rollno){
        return this.rollno;
    }
}
// console.log(fr);
// console.log(fr.book);
// console.log(fr.bookplusauthor());
console.log(fr.chanderollno(32));