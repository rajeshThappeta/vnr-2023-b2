let ar=[90,34,-45,67,-12,567];



//get all elements less than 50
//let result=[];

//for(let element of ar){
  //  if(element<50){
    //    result.push(element)
   // }
//}

//console.log(result)

//filter
let result=ar.filter((element)=>element<10)
console.log(result)

//map (add 10 for elements that are less than 100 and 20 for elements above 100)
let newAr=ar.map(element=>{
    if(element<100){
        return element+10;
    }
    else{
        return element+20
    }
})
console.log(newAr)



//iterate
ar.forEach((element,index)=>console.log('element at index ',index,' is ',element))