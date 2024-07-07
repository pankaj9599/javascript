// code file 
let val1=2;
let val2=3;

 function sum(val4,val3){
    let total=val4+val3;
    return total;
}
const retsult1=sum(val1,val2);
const result2=sum(5,6); 


// file then ->Memory Creation Phase(Only Memory Allocated Only)
 //          -> Execution Phase(All The Calculation Happens)



//  1)Global Execution ->this
    // 2) Memory Phase.   (Collect all the variable and assign them (undefined)). (Always happen)
//  Ex->
    //  val1=undefined;
    //  val=undefined;
    // sum=defination
    // result1=undefined;
    // result2=undefined;

// 3) Execution Phase 
    // val1<-2;
    // val2<-3;
    // sum->[new variable environment + Execution Thread].  


    // Again Memory phase for function sum (val4,val3)
    // delete after use 
        // sum 1) Memory Phase 
        // val4->undefined;
        // val3->undefined;
        // total ->undefined;

        // sum 2) Execution Phase
        // val4->2;
        // val3->3;
        // total=2+3;(computation);   total return to Global Execution phase 


        
         // Again Memory phase for function sum(5,6)
    // delete after use 
        // sum 1) Memory Phase 
        // val4->undefined;
        // val3->undefined;
        // total ->undefined;

        // sum 2) Execution Phase
        // val4->5;
        // val3->6;
        // total=2+3;(computation);   total return to Global Execution phase