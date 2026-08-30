// const personName = "Ankit"

// // console.log(personName);

// //Named Export 
// // export {personName}

// //Default Export
// export default personName

// // //*
// //     1.Named Export
// //     2.Default Export
// // /*

//=============================================
//Named Export
const username = "Rajesh"

function sayHello(){
    console.log("Rajesh says hello");
}

const user ={
    username,
    sayHello,
    age:32,
    salary: 34000.99
}

export {username}
export {sayHello , user}