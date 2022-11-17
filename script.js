// let i = 0;
// function plus() {
//   if (i < 10) document.getElementById("number").value = ++i;
// }
// else (i = 10){
//     document.getElementByClassName
// }

const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  number = document.querySelector(".number");

let a = 1;

plus.addEventListener("click", () => {
  a++;
  a = a < 10 ? "0" + a : a;
  number.innerText = a;
  console.log(a);
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    number.innerText = a;
  }
});
