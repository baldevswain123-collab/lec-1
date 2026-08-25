//function f1(){
   // console.log("This is a F1 function");
//    
//     //return 100
//     return function f2(){
//         console.log("This is a f2 function");
        
//     }
// } 


function increment(){
    let number = 10
    return function plusOne() {
        console.log("Adding one");
        number++
        console.log("num value is " , number);
        
    }
}

    const nestedFun = increment()

    nestedFun() // 11
    nestedFun() // 12 nestedFun calls the closure method which is intilize buy declaring a num varible  
                   and proceed the method of varibale