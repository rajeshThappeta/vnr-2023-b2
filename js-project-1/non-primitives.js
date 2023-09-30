//declare a number array
let arr=[10,20,30,40]

let names=['ravi','suman','kiran']


//access elements
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])


for(let index=0;index<4;index++){
  console.log(arr[index])
}

console.log(typeof arr)
console.log(typeof names)


//object
let student={
  sno:100,
  name:'ravi',
  age:21,
  city:'hyderabad'
}

console.log(typeof student)

//access properties
console.log(student.age)
console.log(student.city)
console.log(student['name'])
