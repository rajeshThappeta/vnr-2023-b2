//Create Person type with class
class Person {
  //constructor method
  constructor(id, name, age) {
    //object initialization logic
    this.id = id;
    this.name = name;
    this.age = age;
  }

  //methods
  getName() {
    return this.name;
  }
}

//2. Create objects of Person type
let person1 = new Person(10, "John", 21);
console.log(person1);

let person2 = new Person(20, "Babu", 31);
console.log(person2);
//Create Emp type with class
class Emp{
    constructor(id,name,basic,skills,address){
        this.id=id;
        this.name=name;
        this.basic=basic;
        this.skills=skills;
        this.address=address;
    }

    getSalary(){
        //calculate hra
        let hra=0.15*this.basic;
        let da=0.10*this.basic;
        let salary=this.basic+hra+da;
        return salary;
    }
}



//2.Create Emp objects
let emp1=new Emp(10,'Vasu',25000,['Javascript','Nodejs'],{
    city:'hyd',
    pincode:333333
})


console.log(emp1.getSalary())