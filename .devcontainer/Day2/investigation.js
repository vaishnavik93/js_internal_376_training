let p=23
const q="abc"
var r=78
s=88
console.log("Value of p:",p)
console.log("Value of q:",q)
console.log("Value of r:",r)
console.log("Value of s:",s)
try{
    p=50
    console.log("p changed to:",p)
}catch (err){
    console.log("Error changing p:",err.message)
}
try{
    q="xyz"
    console.log("q changed to:",q)
}catch (err){
    console.log("Error changing q:",err.message)
}
try{
    r=100
    console.log("r changed to:",r)
}catch (err){
    console.log("Error changing r:",err.message)
}
try{
    s=20
    console.log("s changed to:",s)
}catch{
    console.log("Error changing s:",err.message)
}
