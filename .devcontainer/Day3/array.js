function fun(n){
    return n*2;
}
let ch=fun(72)
console.log(ch)
/*let ch=[1,2,3,4]
console.log(ch)*/
let fruits=['apple','banana','mango','kiwi','orange'];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);//question 1
}
for(let value of fruits){
    console.log(value)
}
/*let number=[1,2,3]
let doubled=number.map(n=>n*2)
console.log(doubled)*/
/*let nums=[10,25,30,40]
let result=nums.filter(n=>n>20)
console.log(result)
let total=nums.reduce((acc,val)=>acc+val,0)
console.log(total)*/
//use of map
let numbers=[2,4,6,8]
let doubled=numbers.map(n=>n*2)
console.log(doubled)//question 6
//use of filter
let number=[10,25,30,5,60]
let result=number.filter(n=>n>20)
console.log(result)//question 7
//use of reduce
let arr=[1,2,3,4,5]
let total=arr.reduce((acc,val)=>acc+val,0)
console.log(total)//question 8