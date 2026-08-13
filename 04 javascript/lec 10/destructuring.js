// let numbers = [10, 20, 30, 40, 50]
// //either loop or extract one by one
// const a = numbers[0]
// const b = numbers[1]
// const c = numbers[2]
// const d = numbers[3]
// const e = numbers[4]
// console.log(a, b, c, d, e);

// //const [a, b, c, d, e] = numbers
// //console.log(a, b, c, d, e);

// //const [a, b, _, d, e] = numbers
// //console.log(a, b, c, d, e);

// numbers = [100,200,300,500,600]
// const [a, b, c, ...rest] = numbers
// console.log(a, b, c, rest);

// numbers = [100,200,300]
// const [a, b, c, ...rest] = numbers
// console.log(a, b, c, rest);

//==================Destructuring of Object

// const user = {
//     const [a, b, c, d, e] = numbers
// //console.log(a, b, c, d, e);
//      id: 101,
//        name:"Baldev",
//        age: 25,
//        salary: 25000
//     address: {
//         city: "BBSR",
//         pin: "567789"
//     }
// }
// // const {id, name, age, ...rest} = user
// // console.log(id, name, age, rest);

// const {id: userId, name:username, age = 30, ...rest} = user
// // console.log(id, name, age, rest);// reference Error :- all key are not defined
// console.log(userId, username, age, rest);

const employee = {
    id: 102,
    name: "Baldev",
    age: 20,
    salary: 40000
}
function handleUpdate(target){
    const{name, value} = target
    console.log("****", name, value);
    
    employee[name] = value
}

handleUpdate({ name: "age", value:28})
handleUpdate({ name: "id", value:105})
handleUpdate({ name: "salary", value:105000})

console.log(employee);
