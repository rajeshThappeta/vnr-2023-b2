//pack data
    let marks=[90,78,89,76]

    let person={
        firstName:'kiran',
        lastName:'babu',
        age:23
    }


//unpack data
    for(let v of marks){
        console.log(v)
    }


    for(let k in person){
        console.log(person[k])
    }


//unpack in modern way(destructuring)
    let [a,b,c,d]=marks;
    console.log(a,b,c,d)

    let {firstName,lastName,age}=person;
    console.log(firstName,lastName,age)