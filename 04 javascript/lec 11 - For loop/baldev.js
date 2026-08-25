const users = {
    id: 105,
  name: "Baldev",
  age: 22,
  course: "ITM",
  courseFees: 20000
};
console.log(Object.keys(users));

for(const key of Object.keys(users)){
    console.log(key);
    
}

console.log(Object.values(users));
Object.values(users).forEach(val => console.log(val));

