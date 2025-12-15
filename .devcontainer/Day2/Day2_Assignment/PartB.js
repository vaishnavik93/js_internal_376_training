//question 16
function isPrime(n){
    if(n<=1) return false
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
        else{
            return true
        }
    }
    return true
}
console.log(isPrime(7))
//question 17
let num=123
let sum=0
while(num>0){
    let rem=num%10
    sum=sum+rem
    num=Math.floor(num/10)
}
console.log("Sum of digits:",sum)
//question 18
function reverse_str(str){
    let rev=""
    for(let i=str.length-1;i>=0;i--) 
        rev+=str[i]
    return rev
}
console.log(reverse_str("hello"))
//question 19
let userInput=prompt("Please enter your marks:")
console.log(userInput)