//100 person objects
// 100 x 10 = 1000 properties
// 12 + 100 =112

//1.Create Person type
function Person(id, name, age) {
  //object initialization logic

  //obj.new-key=value
  this.id = id;
  this.name = name;
  this.age = age;
  // this.getName=function(){
  //     return this.name
  // }
}

//add methods to prototype of Person
Person.prototype.getName = function () {
  return this.name;
};

//2. Create objects of Person type
let person1 = new Person(100, "Ravi", 21);
console.log(person1.getName());

let person2 = new Person(200, "Bhanu", 22);
console.log(person2.getName());

//Create Emp type using constructor function
function Emp(id,name,basic,skills,address){
    this.id=id;
    this.name=name;
    this.basic=basic;
    this.skills=skills;
    this.address=address;
} 
//salary=basic + hra(15% of basic) + da(10% basic)
//method to find salary
Emp.prototype.getSalary=function(){
    //calculate hra
    let hra=0.15*this.basic;
    let da=0.10*this.basic;
    let salary=this.basic+hra+da;
    return salary;
}


//2.Create Emp objects
let emp1=new  Emp(10,'Vasu',10000,['Javascript','Nodejs'],{
    city:'hyd',
    pincode:333333
})


console.log(emp1)
//console.log(emp1.getSalary())