let result = "equal", isEqual = false
const num1 = 1, num2 = 2
if (num1 === num2){
    isEqual = true
}
if (isEqual) {
    console.log("The two numbers are "+ result)
}
else if (!isEqual){
    console.log("The two numbers are not " + result)
}
for (let i = 0; i <= 10; i++) {
    console.log(Math.pow(2, i))
}
let num = 0
while (num != 11){
    console.log(Math.pow(2, num))
    num++ 
}
num = 0
do{
    console.log(2 ** num);
    num++;
}while (num != 11)

// user = prompt("What is your name?")
// alert("Hello " + user)
let user;
do{
    user = prompt("what is your name?")
}while(!isNaN(user))
alert("Hello " + user)

let fruits = ["apple", "banana", "cherry"]
fruits.push("orange")
console.log(fruits)
fruits.pop()
fruits[fruits.length] = "kiwi"
console.log(fruits)

fruits.unshift("mango")
console.log(fruits)
fruits.shift("mango")
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
for (let fruit of fruits){
    console.log(fruit)
}

let person = {
    name: ["John", "Doe"],
    age: 30
}
console.log("my name is " + person.name[0] + " " + person.name[1])
console.log(`my name is ${person.name[0]} ${person.name[1]}`)