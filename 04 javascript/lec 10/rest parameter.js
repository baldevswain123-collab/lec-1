// function fun(){
//     console.log("arguments" ,arguments);
//     console.log(arguments[0])
//     console.log(arguments[2])
// }
// fun(10 , "jt" , true)
// for(let i = 0 ; i<arguments.length; i++){
//     console.log(arguments[i])
// }
// fun(10 , "jt" , true)

//  const fun = function fun(){
//     console.log("arguments" ,arguments);
//     console.log(arguments[0])
//     console.log(arguments[2])
// }
// fun(10 , "jt" , true)
// for(let i = 0 ; i<arguments.length; i++){
//     console.log(arguments[i])
// }
// fun(10 , "jt" , true)
    

// const fun =(...others)  => {
//     console.log("others" ,others);
//     // console.log(arguments[0])
//     // console.log(arguments[2])

// for(let i = 0 ; i<arguments.length; i++){
//  console.log(arguments[i])

// // fun(10 , "jt" , true)
// //   console.log(arguments[i]) 
// }
// others.forEach((e1) => console.log(e1))
// }

function f1(a, ...params){
     console.log("1. params", params)
     console.log("2.arguments", arguments)
}
f1(10,20,30)