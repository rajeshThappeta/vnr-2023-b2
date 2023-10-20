console.log("Three customers reached restaurant");

//synchronous
// console.log("Customer-1 ordered biryani which takes 15 min to prepare");
// for (let x = 1; x < 10000000000; x++) {}
// console.log("Customer-1 received biryani");

// console.log("Customer-2 ordered pizza which takes 10 min to prepare");
// for (let x = 1; x < 9000000000; x++) {}
// console.log("Customer-2 received pizza");

// console.log("Customer-3 ordered soup which takes 2 min to prepare");
// for (let x = 1; x < 200000000; x++) {}
// console.log("Customer-3 received soup");

//asynchronously

// console.log("Customer-1 ordered biryani which takes 15 min to prepare");
// setTimeout(() => {
//   console.log("Customer-1 received biryani");
// }, 10000);

// console.log("Customer-2 ordered pizza which takes 10 min to prepare");
// setTimeout(() => {
//   console.log("Customer-2 received pizza");
// }, 7000);

// console.log("Customer-3 ordered soup which takes 2 min to prepare");
// setTimeout(() => {
//   console.log("Customer-3 received soup");
// }, 4000);

setInterval(() => {
  console.log("hello");
}, 3000);

console.log("first");
