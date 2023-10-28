let main = document.querySelector(".main");
let data = document.querySelector(".data");
let table = document.querySelector("table");

data.addEventListener("click", () => {
  //create new para
  let para = document.createElement("p");
  //set id attribute
  para.setAttribute("class","para")
  //add content to para
  para.textContent = "Paragraph";
  //append to main element
  main.appendChild(para);
});

//array of emps
let emps = [
  { eno: 100, name: "ravi", age: 21, city: "hyd" },
  { eno: 200, name: "suresh", age: 42, city: "chennai" },
  { eno: 300, name: "bhanu", age: 24, city: "bangalore" },
  { eno: 400, name: "vikas", age: 34, city: "chennai" },
  { eno: 500, name: "manasa", age: 23, city: "hyd" },
  { eno: 600, name: "keerthi", age: 20, city: "vizag" },
];

//get tbody
let tbody = document.querySelector("tbody");

for (let empObj of emps) {
  tbody.innerHTML += `<tr>
        <td>${empObj.eno}</td>
        <td>${empObj.name}</td>
        <td>${empObj.age}</td>
        <td>${empObj.city}</td>
    </tr>`;
}

//get toggle button
let toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
  if (table.hidden === true) {
    table.hidden = false;
    toggleBtn.textContent='Hide table'
    toggleBtn.style.backgroundColor='orange'
  } else {
    table.hidden = true;
    toggleBtn.textContent='Show table'
    toggleBtn.style.backgroundColor='pink'
  }
});
