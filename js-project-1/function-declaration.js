//function declaration to find sum of two numbers
function findSumOfTwoNumbers(a, b) {
  //busioness logic
  let sum = a + b;
  return sum;
}

//call the function
let result1=findSumOfTwoNumbers(10, 20);
console.log(result1)

let result2=findSumOfTwoNumbers(1234,6789)
console.log(result2)





//function to compare two numbers
function findBig(x,y){
    if(x>y){
        return "x is big"
    }else if(x==y){
        return "both are equal"
    }else{
        return "y is big"
    }
}


//call 
let big1=findBig(10,20)
console.log(big1)

let big2=findBig(1234,987);
console.log(big2)

let big3=findBig(123,123);
console.log(big3)





let findSum=function (a, b) {
    //busioness logic
    let sum = a + b;
    return sum;
  }

  let sum=findSum(12,13)
  console.log(sum)