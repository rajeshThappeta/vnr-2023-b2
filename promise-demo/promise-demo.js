//You promice to your frnd to call him in next 5 mins

// console.log("you promise to your frnd that you call him in next 5 mins...");
// console.log("Your frnd is awaiting for your call.......");
let futureCondition = true;

//Create promise (You)
let phoneCallPromise = new Promise((fulfilled, rejected) => {
  setTimeout(() => {
    if (futureCondition === true) {
      fulfilled("Hello...frnd");
    } else {
      rejected("Sorry frnd..call you later");
    }
  }, 10000);
});

//Consume promise(Your frnd)
// phoneCallPromise
//   .then((successMessage) => {
//     console.log(successMessage);
//   })
//   .catch((errorMessage) => {
//     console.log(errorMessage);
//   });



  //console.log("the last action")






  console.log("Director promise to relase teaser in an hour and fans are waiting........")


  //Director promise to fans about Teaser release on tomorrow
  let technicalIssues=false;

  //Creating promise(Director)
  let teaserReleasePromise=new Promise((fulfilled,rejected)=>{
    setTimeout(() => {
        if(technicalIssues===true){
            rejected('Teaser release postponed..')
        }else{
            fulfilled('Teaser is out..enjoy')
        }
    }, 8000);
  })


  //Consume promise(Fans)
  teaserReleasePromise
  .then((successMessage)=>{ return successMessage})
  .then((msg)=>console.log("msg in second then is ",msg))
  .catch((errorMessage)=>{ console.log(errorMessage)})



  console.log("Music director providing BGM to it..")
















  //JS object
  let obj={
    firstName:'ravi',
    secondname:'babu',
    age:21
  }



  {
    "firstName":"ravi",
    "secondname":"babu",
     "age":21
    }

  //convert obj to JSON
  let jsonData=JSON.stringify(obj)
  console.log(jsonData)
