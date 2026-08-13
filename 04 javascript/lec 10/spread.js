// const numbers = [10, 20 ,30, 40, 50]
// console.log(numbers)
// console.log(...numbers)

// const employees = [
//     {name: "raj", age:25},
//     {name: "amit", age:26},
//     {name: "rajesh", age:27},
//     {name: "rahul", age:28},
// ]
// console.log(employees)
// console.log(...employees)

// const myname = "harapriya palai"
// console.log(...myname)

// ========= copy arrays
// const arr1 = [100,200,300,400]
// // const arr2 = arr1

// // arr2.push(500)
// // console.log(arr1)
// // const arr2 = []
// // for(i = 0;i < arr1.length; i++ ){
// //     arr2[i] = arr1[i]
// // }

// const arr2 = [...arr1]
// arr2.push(500)
// console.log(arr1)
// console.log(arr2)


// === mrege arrays====
// const arr1 = [10,20,30]
// const arr2 = [100,200,300]

// const arr3 = [...arr1 , ...arr2]
// console.log(arr3)

// const name = "javascript"
// const  arr4 = [...arr1, ...arr2, ...name]
// console.log(arr4)


// ===== copy object=====
// const user  = {
//     id:101,
//     name: "sonali",
//     age : 19,
// }
// // const copy = user;///error
// const copyuser = {...user, phone :"2638468474885"}
// console.log(copyuser)


// const copyuser1 = {}
// Object.assign( copyuser1 , user)
// console.log(copyuser1)

const employee  = {
    id:101,
    name: "sonali",
    age : 19,
    address:{
        city : "puri",
        pin:'752017'
    }
}
const  copyEmployee = {...employee, address : {...employee.address}}
copyEmployee.address.city = 'CTC'
console.log(employee)

const copyEmployee1 = JSON.parse(JSON.stringify(employee))
copyEmployee1.address.city = 'Rourkela'
console.log(employee);

const copyEmployee2 = structuredClone(employee)
copyEmployee2.address.city = 'sambalpur'
console.log(employee);

