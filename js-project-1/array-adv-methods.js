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




let ar1=[20,100,300,9]

//find sum of elements
let sum=ar1.reduce((accumulator,element)=>accumulator+element)
console.log(sum)


//find big element
let small=ar1.reduce((acc,element)=>acc<element?acc:element)

console.log(small)

//find small element
let big=ar1.reduce((acc,element)=>acc>element?acc:element)
console.log(big)

//find 10
let result1= ar1.find(element=>element===100)
console.log("search result :",result1)

let index=ar1.findIndex(element=>element==9)
console.log(index)