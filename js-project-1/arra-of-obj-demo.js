let emps=[
    {
        eno:100,
        name:'ravi',
        basic:100000,
        skills:['js','node'],
        city:"hyderabad"
    },
    {
        eno:200,
        name:'bhanu',
        basic:20000,
        skills:['html','java'],
        city:"chennai"
    },
    {
        eno:300,
        name:'vikas',
        basic:15000,
        skills:['css','react'],
        city:"hyderabad"
    },
    {
        eno:400,
        name:'manasa',
        basic:25000,
        skills:['react','angular'],
        city:"chennai"
    }
]



//get emps of hyderabad
let empsOfHyd=emps.filter(empObj=>empObj.city==='hyderabad');
console.log("emps of hyd:",empsOfHyd)


//find emp with highest basic
let highlyPaidEmp=emps.reduce((acc,empObj)=>acc.basic>empObj.basic?acc:empObj);
console.log(highlyPaidEmp)


//give hike 2000 for the emps of hyd and 5000 for emps of chennai
let newEmpData=emps.map(empObj=>{
    if(empObj.city==='hyderabad'){
        empObj.basic=empObj.basic+2000;
        return empObj;
    }
    if(empObj.city==='chennai'){
        empObj.basic=empObj.basic+5000;
        return empObj;
    }
})

console.log(newEmpData)