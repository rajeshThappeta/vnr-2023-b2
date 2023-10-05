// console.log(emp)
// console.log(typeof emp)

//Access properties
// console.log(emp.name)
// console.log(emp['eno'])
// console.log(emp.city)

let emp = {
  eno: 100, //property-1
  name: "ravi", //property-2
};
//Iterate obj(for-in loop)
// for(let x in emp){
//     console.log('value of ', x,' is ',emp[x])
// }

//Insert new property
emp.city = "hyd";

//Update a property
emp.name = "ravi kumar";

//Delete a property
//delete emp.eno;
for(let x in emp){
    if(x!=='eno'){
        delete emp[x]
    }
}

console.log(emp);
