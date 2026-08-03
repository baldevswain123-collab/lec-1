// function add(a, b) {
//     log("Adding " + a + " and " + b);
//     return a + b;
// }

// function concatStrings(a, b) {
//     console.log("Concatenating " + a + " and " + b);
//     return a + b;
// }

const concatString = function concatString (str1, str2) {
    return str1 + str2;
};
console.log("////" , concatString);
console.log(concatString("Hello", " World"));

//====Annonymous Functions====

//function(a) {
        //console.log("...." +name);
//}


//====Arrow Functions====

//  const add = (num1, num2) => {
//         console.log("Adding " + num1 + " and " + num2);
//         return num1 + num2;
//     };

    // const add = (num1, num2 = 100) => num1 + num2;
    // const result = add(5);
    // console.log(result);

// const person = (name = "Baldev" ) => {
//     console.log("hello " + name);
// };
// person();


//====IIFE (Immediately Invoked Function Expression)====

// (
// function (name) {
//     console.log("IIFE is" , name);
// }
// )('Baldev');

// console.log("Java Technocrat");