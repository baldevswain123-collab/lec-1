const user = {
    name : " Ankit",
    age : 23
}

// user = {}//error because user is a constant and cannot be reassigned to a new object

/**
 * const object
 * 1.existing keys can be modified
 * 2.new keys can be added
 * 3.existing keys can be deleted
 */
user.name = "Ankit Kumar"
console.log(user)

delete user.age
console.log(user)

user.address = "Delhi"
console.log(user)

/**
 * Object.seal(object)
 * 1.existing keys can be modified
 * 2.new keys cannot be added
 * 3.existing keys cannot be deleted
 */

let employee = {
    name : "Dolly",
    age : 43
}
Object.seal(employee)
console.log(employee)

employee.name = "Beauty"//can modify the key because the object is sealed
console.log(employee)

delete employee.name //cannot delete the key because the object is sealed
console.log(employee)

employee.address = "Delhi" //cannot add new key because the object is sealed
console.log(employee)


/**
 * Object.freeze(object)
 * 1.existing keys cannot be modified
 * 2.new keys cannot be added
 * 3.existing keys cannot be deleted
 */

let student = {
    name : "Priti",
    age : 21
}
Object.freeze(student)
console.log(student)

student.name = "Bidi" //cannot modify the key because the object is frozen
console.log(student)

delete student.name //cannot delete the key because the object is frozen
console.log(student)

student.address = "Delhi" //cannot add new key because the object is frozen
console.log(student)