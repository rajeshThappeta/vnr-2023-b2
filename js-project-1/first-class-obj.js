//Function are callable objects(special objects)

//function can be stored in a variable
let a=function(){};

//a function can send as arg
function test(x){
    console.log(x())
}
        //callback function is a function that send as arg to another function
test(function(){return "arg function"}) 


//a function can return another function
function someFunction(){
    return function(){
        return 'inner function'
    };
}

let result=someFunction()
console.log(result())