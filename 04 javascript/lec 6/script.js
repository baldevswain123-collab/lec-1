//function fun(f1) {
  //console.log("value of f1",f1);
    
//}

//fun(10)
//fun(true)
//fun("Jt")   

//function hello(){
  //  console.log("Hello Everyone!!!");
    //return 100;
//}
//console.log(hello);

//fun(hello())//Normal Function
//fun(hello)//Higher Order Function as an argument //Call Back function


// function f1(){
//     console.log("This is a F1 function");
    
//     //return 100
//     return function f2(){
//         console.log("This is a f2 function");
        
//     }
// } 
//     let x = f1()
//     console.log("///////",x);
//     x()

// function f3(){
//     console.log("This is f3 function");
//     f3()
// }
// function f1(){
//     console.log("This is a F1 function");
//     return f3
// }

//     let x = f1()
//     console.log("///////",x);
//     x()
  
        //===============setTimeout , setInterval ==============================

    //  console.log("hiii");
    //  setTimeout(function f1(){
    //     console.log("oye");
    //      }, 5000)
    //  console.log("oye hoye");
     

    //  console.log(1);
    //  setTimeout(f1, 3000)
    //     console.log(3);
        
    //     function f1(){
    //         console.log(2);
    //     }

    // SetInterval

    //     function f1(){
    //         console.log("Hiiiii");
            
    //     }
    //     const intervalId = setInterval(f1 ,2000)
    //    console.log("////////////", intervalId);
    //     setTimeout(function (){
    //         console.log("Clearing interval");
    //         clearInterval(intervalId)
    //     }, 10000) 


            // function f1(){
            // console.log("Hiii");
                
            //   }
            //  const intervallId = setInterval(f1 , 2000)
            // setTimeout(function (){
            //  console.log("Clearing interval");
            //  clearTimeout(intervallId)
                
            // } , 10000)

        
            console.log(1);
            setTimeout(function(){
                console.log(":::::");
                
            },1000 )
            console.log(2);
            