//Person class
class Person{
    constructor(name,mobile){
        this.name=name;
        this.mobile=mobile;
    }
}

//Student class
class Student extends Person{
    constructor(name,mobile,course,marks){
        //call parent class constructor
        super(name,mobile)
        this.course=course;
        this.marks=marks;
    }
}


let std=new Student(100,999999,'b.tech',[10,20])
console.log(std)






let obj={
    a:10
}

console.log(obj)
console.log(obj.toString())