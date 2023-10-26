//make API req(HTTP Req & AJAX request)
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(posts=>console.log(posts))
.catch(err=>console.log("Err in API call",err))





fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>console.log("Users data :",users))
.catch(err=>err)