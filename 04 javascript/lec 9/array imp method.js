let numbers = [10, 20, 30, 40, 50]

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

const users = [
    { name: "pritismita swain", 
        id: 1,
        age: 25,
        salary: 50000
     },
    { name: "soumya sahoo", 
        id: 2,
        age: 30,
        salary: 60000
     },
    { name: "Baldev swain",
        id: 3,
        age: 35,
        salary: 70000
     },
    { name: "Ramesh patray",
        id: 4,
        age: 40,
        salary: 80000
     },
]

// const modifiedUsers = users.map((value ) =>{
//     console.log("value is", value)
//     return {
//         firstname: value.name.split(" ")[0],
//         id: value.id,
//         age: value.age,
//         bonus: value.salary * .10
//     }
// })

const modifiedUsers = users.map(user =>({
        firstname: user.name.split(" ")[0],
        id: user.id,
        age: user.age,
        bonus: user.salary * .10
    
}))
console.log("modifiedUsers", modifiedUsers)


//=====================FILTER=======================