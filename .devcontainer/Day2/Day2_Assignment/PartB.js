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
/*const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Please enter your marks:",function(marks){
    marks=Number(marks)
    if(marks>=90)
        console.log("Grade A")
    else if(marks>=75)
        console.log("Grade B")
    else if(marks>=50)
        console.log("Grade C")
    else
        console.log("Fail")
    rl.close;
});*/
//question 20
/*
const readline=require("readline")
const rl1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl1.question("Please enter the first number:",function(num1){
    rl1.question("Please enter the second number:",function(num2){
        rl1.question("Please enter the operator(+,-,*,/):",function(op){
            num1=Number(num1)
            num2=Number(num2)
            let result
            switch(op){
                case '+':
                    result=num1+num2
                    break
                case '-':
                    result=num1-num2
                    break
                case '*':
                    result=num1*num2
                    break
                case '/':
                    result=num1/num2
                    break
                default:
                    console.log("Invalid Operator")
                    rl1.close
                    return
            }
            console.log("Result:",result)
            rl1.close
        });
    });
});*/
//question 21
function count_Vowels(str){
    let count=0
    for(let ch of str){
        if("aeiouAEIOU".includes(ch)) count++;
    }
    return count;
}
console.log(count_Vowels("Javascript"))
//question 22
let n2=5,a=0,b=1
console.log("Fibonacci Series:")
for(let i=1;i<=n2;i++){
    
    console.log(a)
    let temp=a+b
    a=b
    b=temp
}
//question 23
function minmax(arr){
    return{
        min:Math.min(...arr),
        max:Math.max(...arr)
    };
}
console.log(minmax([10,20,50,40,30]))
//question 24
let choice=2,p=10,q=5
let res
switch(choice){
    case 1:
        res=p+q
        break
    case 2:
        res=p-q
        break
    case 3:
        res=p*q
        break
    case 4:
        res=p/q
        break
    default:
        console.log("Invalid")

}
console.log("Result:",res)
//question 25

function armstrong(num){
    let temp=num,sum=0
    while(temp>0){
        let d=temp%10
        sum+=d*d*d
        temp=Math.floor(temp/10)
    }
    return sum===num
}
console.log(armstrong(153))

