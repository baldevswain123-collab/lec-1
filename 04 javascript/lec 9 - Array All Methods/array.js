// // const s1 = "Priti"
// // const s2 = "Bijaya"
// // const s3 = "Dipti"
// const students = ["Priti", "Bijaya", "Dipti"]
// console.log(students)

// // console.log(students[0])//Priti
// // console.log(students[1])//Bijaya
// // console.log(students[2])//Dipti
//  for (let i = 0; i < students.length; i++) {
//         console.log(students[i])
//  }

//  console.log(students[4]) //undefined because there is no value at index 4 in the array.

//  students[10] = "Dev"//it will add the value at index 10 and the index 3 to 9 will be empty.


//-------------------Array Methods-------------------//

const fruits = ["Apple", "Banana", "Mango"]

fruits.push("Orange" , "Grapes")//it will add the value at the end of the array.
console.log(fruits);

fruits.pop()//it will remove the last value from the array.
console.log(fruits);

fruits.unshift("Pineapple")//it will add the value at the start of the array.
console.log(fruits);

fruits.shift()//it will remove the first value from the array.
console.log(fruits);

console.log(fruits.includes("Banana"))//it will check if the value is present in the array or not. It will return true or false.
console.log(fruits.includes("Banana", 3))//it will check if the value is present in the array or not. It will return true or false.

console.log(fruits.indexOf("Mango", 3))//it will return the index of the value in the array. If the value is not present, it will return -1.

// const fruits1 = ["Apple", "Banana", "Kiwi", "Banana"]//it will return the index of the value in the array. If the value is not present, it will return -1.
// swap (arr , i, j) => {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

//step 1 => check if the value is present in the array or not. If the value is not present, return -1.
if (fruits.includes("Banana")) {
//step 2 => if the value is present, return the index of the value in the array.
const index = fruits.indexOf("Banana")
//step 3 => then update the value at the index with the new value.
fruits[index] = "Kiwi"
console.log(fruits)
}else{
//step 4 =>if not present, return -1.
alert("Value not found in the array")
}

fruits.push("Banana")//it will add the value at the end of the array.
console.log(fruits)
console.log("last index of Banana is",fruits.lastIndexOf("Banana"))//it will return the last index of the value in the array. If the value is not present, it will return -1.

console.log(fruits.slice(1, 3))//it will return a new array with the values from index 1 to index 2. It will not modify the original array.
console.log(fruits.slice(1, 4))//it will return a new array with the values from index 1 to the end of the array. It will not modify the original array.
console.log(fruits.slice(2))//it will return a new array with the values from index 1 to the end of the array. It will not modify the original array.
console.log(fruits.slice())//it will return a new array with the values from index 1 to the end of the array. It will not modify the original array.

// fruits.splice(2, 3)//it will remove the values from index 1 to index 2. It will modify the original array.
// console.log("After splice:", fruits)

fruits.splice(2, 1, "Pineapple")//it will remove the values from index 1 to index 2 and add the new values at index 1. It will modify the original array. console.log("After splice2:", fruits)
console.log("After splice2:", fruits)

const numbers = [1, 2, 3, 4, 5]
const fruitsWithNumbers = fruits.concat(numbers)//it will return a new array with the values from both the arrays. It will not modify the original array.
console.log("fruitsWithNumbers", fruitsWithNumbers)

const fruitsString = fruits.join('-')//it will return a new array with the values from both the arrays. It will not modify the original array.
console.log(fruitsString)

fruits.reverse()//it will reverse the values in the array. It will modify the original array.
console.log("After reverse:", fruits)

fruits.push(1, 2, 3)
fruits.sort()//it will sort the values in the array. It will modify the original array.
console.log("After sort:", fruits)

const arr = [10, 20, 30, 5, 15, 25]
arr.sort((a, b) => a - b)//it will sort the values in the array in ascending order. It will modify the original array.
console.log(arr)

// for a function declartion
//  arr.sort(function xyz(a, b) {
//      return a - b
//  })

function Sort(a, b) {
    return a - b
}
arr.sort(Sort)
console.log(arr)
