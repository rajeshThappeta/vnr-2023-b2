let student={
    student:100,
    name:'Suresh',
    marks:[90,78,68],
    address:{
        street:'kphb',
        pincode:555555,
        city:'hyd'
    },
    getAverageOfMarks:function(){
        //to process properties of this object
        let avg=this.marks[0]+this.marks[1]+this.marks[2]/3;
        return avg;
    }

}

console.log(student.getAverageOfMarks())
console.log(student.address.street)
console.log(student.marks.length)


