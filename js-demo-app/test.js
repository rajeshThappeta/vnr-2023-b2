let main=document.querySelector('.main');

function getUsers(){
    fetch('https://reqres.in/api/users?page=2')
    .then(res=>res.json())
    .then(usersObj=>{
        let users=usersObj.data;
        //display data as grid of cards
        for(let user of users){
            main.innerHTML+=`
                <div class='col'>
                    <div class='card text-center h-100 '>
                    <img src=${user.avatar} class='w-100' />
                    <div class='card-body'>
                      <h3>${user.id}</h3>
                      <p class='lead'>${user.first_name} ${user.last_name}</p>
                      <h4 class='text-primary'>${user.email}</h4>
                    </div>
                    <div>
                </div>

            `
        }
         
    })
    .catch(err=>console.log(err))
}

getUsers()