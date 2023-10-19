//create copy for primitives
let data=10;

let copyData=data;

//modify data
data=200;

console.log("data is ",data)
console.log('copy is ',copyData)



//creating copy for non-primitives
let obj={
    a:10,
    b:20
}

//let copyObj=obj; wrong
//let copyObj=Object.assign({},obj)
let copyObj={...obj}


//modify obj
obj.a=1234;

console.log("obj is ",obj)
console.log('copy is ',copyObj)