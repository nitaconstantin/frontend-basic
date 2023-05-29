let a = 6;
let b = 7;
// console.log("Inainte de if");
// if (a < 12) {
//   // cod ce urmeaza a fi executat
//   console.log("Expresia este adevarata!");
// } else if (a < 3) {
//   console.log("A doua expresie este adevarata!");
// } else {
//   console.log("Toate expresiile sunt false!");
// }
// console.log("Dupa if");

// switch (a) {
//   case 3:
//     console.log("A are valoarea 3");
//     break;
//   case 5:
//     console.log("A are valoarea 5");
//     break;
//   case 7:
//     console.log("A are valoarea 7");
//     break;
//   default:
//     console.log("Nu am gasit nici unul dintre cazurile selectate");
// }

// ternary operator
// valori ce intorc intotdeauna false: 0, '', undefined, NaN, null, false
null ? console.log("Adevarat!") : console.log("Fals!");

function addData() {
  let data = prompt("Introduceti date:");
  let div1 = document.getElementById("dataDiv");
  div1.innerText = data;
}
