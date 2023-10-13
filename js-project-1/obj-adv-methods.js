
//object literal & constructor & class
//accessing properties
//delete prop
//iterate(for in)
//modify props
//complex obj


let student={
    sno:100,
    name:'bhanu',
    age:21,
    branch:'cse'
}

//find keys
let keys=Object.keys(student)
console.log(keys)

//find values
let values=Object.values(student);
console.log(values)


//freeze student obj
Object.freeze(student)

student.branch='ece';
student.city='hyd'
console.log(student)



let obj1={
    a:10
}

let obj2={
    b:20
}

let obj3={
    c:30
}

//merge obj1 and obj2
let newObj=Object.assign({},obj1,obj2,obj3)
console.log(newObj)