let a = 10;

function someFunction() {
  let b = 20;

  return function () {
    return a + b;
  };
}


let result=someFunction();
console.log(result()) //error


//closure = a function + its surrounding data