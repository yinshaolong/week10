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