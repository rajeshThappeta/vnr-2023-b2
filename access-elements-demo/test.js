//access element directly
let mainDiv=document.querySelector("div")
let para=document.querySelector('p')
let delBtn=document.querySelector('button')

//access children of a parent
console.log(mainDiv.lastElementChild)
console.log(mainDiv.children.item(1))
console.log(mainDiv.children[2].children)

//access parent
console.log(mainDiv.parentElement)
console.log(para.parentElement)

//access siblings
console.log(para.nextElementSibling)
console.log(para.previousElementSibling)

//add image to div
let img=document.createElement('img')
img.src='https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds'
img.style.width='400px'
img.setAttribute('class','rounded-circle')
//img.className='rounded-circle'


mainDiv.after(img)


//create h1
let h1=document.createElement('h1');
h1.textContent='Welcome to DOM';
h1.setAttribute('class',' display-2 text-danger text-center bg-dwarning')

mainDiv.prepend(h1)

delBtn.addEventListener('click',()=>{
  mainDiv.removeChild(mainDiv.lastElementChild)
})