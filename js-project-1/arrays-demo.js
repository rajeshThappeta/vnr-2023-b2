
// console.log(typeof arr)
// console.log(arr.length)


//Access elements
//console.log(arr[3])

//ITERATE AN ARRAY
// for(let index=0;index<arr.length;index++){
//     console.log(arr[index])
// }

let arr=[10,20,30];

console.log(arr)

//Insert at start
let l1=arr.unshift(1,2)
console.log('new array is ',arr,' and length is ',l1)

//Insert at end
let l2=arr.push(12,13)
console.log('new array is ',arr,' and length is ',l2)

//Insert in between(Index based insertion)
arr.splice(2,0,123,234,456)
console.log('new array is ',arr)

//Delete from start
let rm1=arr.shift()
console.log('new array is ',arr,' and removed element is ',rm1)

//Delete from endf
let rm2=arr.pop()
console.log('new array is ',arr,' and removed element is ',rm2)

//Delete from start
let rm3=arr.splice(2,3)
console.log('new array is ',arr,' and removed element are ',rm3)

//Updating
let rm4=arr.splice(2,2,111)
console.log('new array is ',arr,' and removed element are ',rm4)


