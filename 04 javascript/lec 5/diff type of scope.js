var a =10;
 let b = 20;
//  {
//     let c =30;
//  }
 //Local Scope 
//  function fun() {
//     var a1 = 20;
//     function fun1() {
//         var a2 = 30;
//         console.log( a1 + a2)
//     }
//  }
 //fun();

 //console.log(a)
 //console.log(b)
 //Block Scope
//  debugger
//  {
//  var e = 50
//  let f = 60
//  console.log(e)
//  console.log(f)
//  }
//  console.log(e)
//  console.log(f)
//Lexical Scope

function fun1() {
    debugger
    let x = 10;
    console.log(x)
    function fun2() {
        let y = 20;
        console.log(y)
        console.log("Vaalue of x inside nested function", x)

        function fun3() {
            console.log("Value of y inside fun3", y)
            console.log("Value of x inside fun3", x)
            console.log("Value of a inside fun3", a)
            console.log("Value of b inside fun3", b)
        }
        console.log("Before calling fun3")
        fun3()
        console.log("After calling fun3")
    }
        console.log("Before calling fun2")
        fun2()
        console.log("After calling fun2")
}
fun1()