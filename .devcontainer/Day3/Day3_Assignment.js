//task 1
let marks = [80, 90, 70, 85, 95]
let total=marks.reduce((acc,val)=>acc+val,0)
let n=marks.length
let result=total/n
console.log("Average:",result)

//task 2
let numbers = [1,2,3,4,5,6,7,8,9] 
let res=numbers.filter(n=>n%2==0)
console.log("Even number:",res)

//task 3
let cart = {
  item: "Laptop",
  price: 45000,
  quantity: 2
};
let totalBill = cart.price * cart.quantity
console.log("Total Bill:", totalBill)

//task 4
let movies = ["KGF", "3 Idiots", "Dangal"]
movies.push("Bahubali")
movies.pop()
console.log("Final Movie List:")
for (let movie of movies) {
  console.log(movie)
}

//task 5
let user = {
  name: "Vaishnavi",
  age: 20,
  course: "JS"
};
//convert object to JSON and store in a variable
let jsonData = JSON.stringify(user);
console.log("JSON Data:", jsonData);
//convert JSON back to object
let userObj = JSON.parse(jsonData);
console.log("Converted Object:", userObj);

//task 6
let arr = [10, 40, 25, 80, 15];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Maximum Number:", max);

//task 7
let names = ["ram", "shyam", "mohan"];
let upperNames = names.map(name => name.toUpperCase());
console.log("Uppercase Names:", upperNames);



