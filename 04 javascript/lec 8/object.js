 // const user = {
//     firstName : "Ankit",
//     lastName : "padhi",
//     age : 23,
//     isGraduated : true,
//     'course fees' : 3000.88 ,// it is a formal concept need to know

//     greet:() =>(console.log("ankit says morning",this)), //arrow function is not recommended inside the object

//     greet1:() =>(console.log("ankit says morning",this.fullName)),

//     hello: function() {   
//         console.log("this is hello function", this);
//     },
//     hello1: function() {   
//         console.log("this is hello function", this.firstName);
//     }


// }
// // console.log(user.greet())
// // console.log(user.greet1())
// // console.log(user.hello())
// console.log(user.hello1())
// console.log(user)

/* console.log("first name is",user.firstName)
console.log("last name is",user.lastName)
console.log("full name is",user.firstName , user.lastName)


console.log("AGE  is", user['age'])
console.log("course fee  is",user['course fees'])

console.log("full name is: ", user.fullName)  // this is undefined as it is not there


user.fullName = "ankit kumar padhi";

user.isGraduated = false

user['country name'] = "India"

console.log(user) */

// ======nested object=======

// const employee = {
//     fullName : 'Sahil Patra',
//     age : 32,
//     address : {
//         city: "bbsr",
//         state : "odisha",
//         PIN:"234567"
//     }
// }

// employee.address.city ="Australia";

// console.log(employee.address) 

// employee.address = null;

// console.log(employee.address)
// // console.log(employee.address.city) // it throws error because can not access null properties
// console.log(employee.address?.city)  //"?" use this (it is optional chaining)..it does not throw error to save pgm crash



const t1 = {
    name : "abc",
    roll : 12,
    data:function () {
        return this.name, "age is: ",this.roll
    },
    t2:{
        collegeName : "UU",
        branch:"mca",
      add:  function (a,b) {
           return "sum is:",(a+b)
        },
        t3:{
            city: "BBSR"
        }
    }
}


console.log(t1.data());
console.log(t1.t2.add(5,6))
t1.t2.t3 = null;
console.log(t1.t2.t3?.city)
console.log("t1 name is:",t1.name)
console.log("t1 roll is:",t1.roll)
console.log("t2 college is:",t1.t2.collegeName)
console.log("t2 branch is:",t1.t2["branch"])
console.log("t3 city is:",t1.t2.t3.city)