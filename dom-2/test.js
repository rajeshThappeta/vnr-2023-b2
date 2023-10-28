let first = document.querySelector("#first");
let second = document.querySelector("#second");
let addBtn = document.querySelector(".add");
let subBtn = document.querySelector(".sub");
let result = document.querySelector(".result");
result.style.fontSize = "100px";
let fn,sn;

function getValues() {
   fn = Number(first.value);
   sn = Number(second.value);
}

addBtn.addEventListener("click", () => {
  getValues();
  let sum = fn + sn;
  result.textContent = sum;
});
subBtn.addEventListener("click", () => {
  getValues();
  let sub = fn - sn;
  result.textContent = sub;
});
