// let numbers = [10, 20, 30, 40, 50]

// for(let i = 0; i < numbers.length; i++) 
//     console.log(numbers[i])

1// numbers.forEach(function printNumbers (value, ind, arr) {
//     console.log("value is", value, "at index", ind, "in array", arr)
// })

2// numbers.forEach(printNumbers) 
//     function printNumbers (value, ind, arr) {
//     console.log("value is", value, "at index", ind, "in array", arr)
// }

3// const printNumbers = function (value, ind, arr) {
//     console.log("value is", value, "at index", ind, "in array", arr)
// }
// numbers.forEach(printNumbers)

4// numbers.forEach(function (value, ind, arr)  {
//     console.log("value is", value, "at index", ind, "in array", arr)
// })

// numbers.forEach((value, ind, arr) => {
//     console.log("value is", value, "at index", ind, "in array", arr)
// })

//=====================MAP=======================
// const numbersIncresedByTwo=numbers.map((value, ind, arr) => {
//     console.log("value is", value, "at index", ind, "in array", arr)
//     return value + 2
// })
// console.log("numbersIncresedByTwo", numbersIncresedByTwo)

// // const squareNumbers = numbers.map((value, ind, arr) => {
// //     console.log("value is", value, "at index", ind, "in array", arr)
// //     return value * value
// // })
// // console.log("squareNumbers", squareNumbers)
// const squareNumbers = numbers.map((value) => value * value * value)
// console.log("squareNumbers", squareNumbers)

// const users = [
//     { name: "pritismita swain", 
//         id: 1,
//         age: 25,
//         salary: 50000
//      },
//     { name: "soumya sahoo", 
//         id: 2,
//         age: 30,
//         salary: 60000
//      },
//     { name: "Baldev swain",
//         id: 3,
//         age: 35,
//         salary: 70000
//      },
//     { name: "Ramesh patray",
//         id: 4,
//         age: 40,
//         salary: 80000
//      },
// ]

// // const modifiedUsers = users.map((value ) =>{
// //     console.log("value is", value)
// //     return {
// //         firstname: value.name.split(" ")[0],
// //         id: value.id,
// //         age: value.age,
// //         bonus: value.salary * .10
// //     }
// // })

// const modifiedUsers = users.map(user =>({
//         firstname: user.name.split(" ")[0],
//         id: user.id,
//         age: user.age,
//         bonus: user.salary * .10
    
// }))
// console.log("modifiedUsers", modifiedUsers)


// //=====================FILTER=======================

// numbers = [10, 21, 30, 41, 50, 61, 70]

// const divisibleByTen = numbers.filter((value,index,arr) => {
//     console.log("value is", value, "at index", index, "in array", arr)
//     return value % 10 === 0
// })
// console.log("divisibleByTen", divisibleByTen) 
// divisibleByTen.forEach((value) => console.log("value is", value))

// const users = [
//     {id: 1,name: "Amit" , isActive: true},
//     {id: 2,name: "Rahul" , isActive: false},
//     {id: 3,name: "Neha" , isActive: true},
// ];

// const activeUsers = users.filter((user) => {
//     return user.isActive === true
// })
// console.log("activeUsers", activeUsers)

// const userNames = users.map((user) => {
//     return user.name
// })
// console.log("userNames", userNames)

// const products = [
//     {id: 1, name: "Laptop", price: 50000},
//     {id: 2, name: "Mobile", price: 20000},
//     {id: 3, name: "Tablet", price: 30000}

// ];
// const productNames = products.filter((products => product.price > 25000).map(products => product.name))
// console.log(productNames);


//==============some()============

// numbers = [10, 20, 30, 40, 57, 53]
// const isAnyOddPresent = numbers.some(num => num % 2 ==1)
// console.log("///// is Any Odd Present" , isAnyOddPresent);

// const isEveryMemberAreEven = numbers.some(num => num % 2 ==1)
// console.log("///// is every numbers are even" , isEveryMemberAreEven);
// const products = [
//   {id: 1, name: "Laptop", price: 50000},
//   {id: 2, name: "Mobile", price: 20000},
//   {id: 3, name: "Tablet", price: 30000}
// ];
// const isAnyPresent = products.some(products => products.price > 40000 ==0)
// console.log(isAnyPresent);

// const isEveryMemeberAre = products.every(products => products.price > 40000 == 0)
// console.log(isEveryMemeberAre);

// const users = [
//     {id: 1,name: "Amit" , isActive: true},
//      {id: 2,name: "Rahul" , isActive: false},
//      {id: 3,name: "Neha" , isActive: true},
//  ];

//  const isAnyPresent = users.some(users => users.isActive == 0)
// console.log(isAnyPresent);

// const isEveryActive = users.every(users => users.isActive == 0)
// console.log(isEveryActive)


// ===============Find==================

// numbers = [10, 20, 30, 40, 41 ]

// const number = numbers.find(num => num == 41)
// console.log("is 41 found", number);

// const numberIdx = numbers.findIndex(num => num == 41)
// console.log(numberIdx)

// const products = [
//    {id: 1, name: "Laptop", price: 50000},
//    {id: 2, name: "Mobile", price: 20000},
//   {id: 3, name: "Tablet", price: 30000}
//  ];
//  const numberId = products.find( products => products.id == 2)
//  console.log(numberId);
//  const productsIdx = products.findIndex(products => products.id == 2)
//  console.log(productsIdx); 

//============Reduce===========
// numbers = [10, 20, 30, 40, 50, 70]

// const sum = numbers.reduce((prevVal, currVal, idx, arr) =>{
//     console.log("previous value", prevVal, "cureent value is", 
//     currVal, "at idx", idx, "of array", arr)

//     return prevVal + currVal  
// })
// console.log("////sum", sum);

// const orders = [
//     {
//         id: 101,
//         amount: 2000,
//         status: "Delivered"
//     },
//     {
//         id: 102,
//         amount: 3000,
//         status: "Pending"
//     },
//     {
//         id: 103,
//         amount: 6000,
//         status: "Delivered"
//     },
// ]

// //1. find out the order whose status is Deliverd 
// const ordersStatus = orders.filter( orders => orders.status == "Delivered" )
// console.log(ordersStatus);
// //2. merge the delivered orders amount to get the total sale
// const totalSale = ordersStatus.reduce((prev, curr) => {
//     console.log("//////", prev ,curr);
//     return prev.amount + curr.amount
// })
// console.log("///total sale is", totalSale);

// const ordersStatus = orders.filter( orders => orders.status == "Delivered" )
// console.log(ordersStatus);
// //2. merge the delivered orders amount to get the total sale
// const totalSale = ordersStatus.reduce((prev, curr) => {
//     console.log("//////", prev ,curr);
//     return typeof prev =="object" ? prev.amount = prev + curr.amount
// },0)
// console.log("///total sale is", totalSale);

//  1. find out the order whose status is Deliverd 
// const ordersStatus = orders.filter( orders => orders.status == "Delivered" )
// console.log(ordersStatus);
// //2. merge the delivered orders amount to get the total sale
// const totalSale = ordersStatus.reduce((prev, curr) => {
//     console.log("//////", prev ,curr);
//     return prev + curr.amount
// })
// console.log("///total sale is", totalSale);

const users = [
    {
        id: 1,
        name: "sarthak",
        age: 20
    },
    {
        id: 2,
        name: "amit",
        age: 26
    },
    {
        id: 3,
        name: "nikhil",
        age: 28
    },
   
]
const totalAge = users.reduce((prev, curr) => prev + curr.age, 0)
  console.log( totalAge);
  console.log( totalAge / users.length);
  







