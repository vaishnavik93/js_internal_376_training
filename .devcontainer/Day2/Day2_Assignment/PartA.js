//question 1
let a=20
let b=30
let x=a+b
console.log("Sum of two numbers:",x)
//question 2
let name="Vaishnavi"
console.log("Hello"+" "+ name)
//question 3
let n=15
if(n%2==0){
    console.log("Number is even")
}
else{
    console.log("Number is odd")
}
//question 4
let c=30
let f=(c*9/5)+32
console.log("Celsius to Fahrenheit:",f)
//question 5
let p=10
let q=20
let r=5
console.log("Max among 3 numbers:",Math.max(p,q,r))
//question 6
let num="Vaishnavi"
console.log("Length of string:",num.length)
//question 7
let flag=true
flag=!flag
console.log("Toggle boolean:",flag)
//question 8
let str1="Vaishnavi"
let str2="Kesarwani"
console.log("String Concatenation:",str1+" "+str2)
//question 9
let a1=-10
if(a1>0){
    console.log("Positive")
}
else if(a1<0){
    console.log("Negative")
}
else console.log("Zero")
//question 10
var x1="India"
let x2=20
const x3="USA"
console.log(x1,x2,x3)
//question 11
let v=6
for(let i=1;i<=10;i++){
    console.log(v+"*"+i+"="+v*i)
}
//question 12
let sum=0
for(let i=0;i<=10;i++)
    sum+=i
console.log("Sum of first 10 natural numbers:",sum)
//question 13
let day= 3
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid input")
}
//question 14
function factorial(n1){
    let fact=1
    for(let i=1;i<=n1;i++)
        fact*=i
    return fact
}
console.log(factorial(5))
//question 15
function voting(n2){
    if(n2>=18){
        console.log("Eligible")
    }
    else{
        console.log("Not eligible")
    }
    return n2
}
console.log(voting(18))