//Person type
function Person(name,mobile){
    this.name=name;
    this.mobile=mobile;

}

//Student type
function Student(name,mobile,course,marks){
    Person.call(this,name,mobile)
    this.course=course;
    this.marks=marks;
 
}

//Set Person as prototype to Student
Student.prototype=Object.create(Person.prototype)

let std=new Student(100,999999,'b.tech',[10,20])
console.log(std)