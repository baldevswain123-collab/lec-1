// let fruits = ["Apple", "Banana", "Mango"]

// //For Loop==============
// console.log("By using for loop================");
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// //For of Loop============
// console.log("By using for of loop================");
// for(const fruit of fruits){
//     console.log(fruit);
    
// }

//For in Loop
// const student = {
//   id: 101,
//   name: "Amiya",
//   age: 20,
//   course: "BCA",
//   courseFees: 300000
// };

// // for (const key in student) {
// //    // console.log(key, typeof key);
// //   console.log(student[key]);
// // }

// //Object.keys()==============
// console.log(Object.keys(student));//Object key Array create
// for(const key of Object.keys(student)){//Object key Extract by for of loop
//     console.log(key);
// }

// //For Each Loop =============
// console.log(Object.values(student));//Object values Array create
// Object.values(student).forEach((value) => {
//  console.log("value is", value)//Object values Extract by for each loop
// })

//Object.entries() => Array of arrays or array of key value pairs 

const student = {
  id: 101,
  name: "Amiya",
  age: 20,
  course: "BCA",
  courseFees: 300000
};
//console.log(Object.entries(student));// Direct Array of entries crete
// const entries = Object.entries(student)
// for(const entry of entries){
//     console.log("////", entry);//Array
    
// }
// const entries = Object.entries(student)
// for(const entry of entries){
//     console.log("Outer loop");
//     for (let i= 0; i < entry.length; i++) {
//     console.log("value is", entry[i], "at idx", i);
            
//     }
        
// }

// const entries = Object.entries(student)
// for(const entry of entries){              //Destructuring of the Object Key and Object Values
// const [key, value] = entry
// console.log(key, '->', value);
// }

for(const[key, value] of Object.entries(student)){
    console.log(key, '->', value);
    
}