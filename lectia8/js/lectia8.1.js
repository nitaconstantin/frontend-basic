let array1 = new Array();

let array2 = [];

let array3 = [
  "mar",
  "strugure",
  "piersica",
  3,
  { age: 26 },
  function () {
    alert("Atentie!");
  },
];
// console.log(typeof array3);
console.log(array3[0]);
array3[5]();
console.log(array3[4].age);

let array4 = ["rosu", "verde", "mov"];
array4[1] = "albastru";
array4[3] = "galben";
// nu este o practica uzuala
// array4[10] = "alb";
console.log(array4.length, array4);
// console.log(array4[5]);

// metode ale vectorilor:
// 1 push si pop
array4.push("alb");
console.log(array4);
array4.pop();
console.log(array4);

// 2 shift si unshift
array4.unshift("negru");
console.log(array4);
array4.shift();
console.log(array4);

let array5 = ["Marian"];
let array6 = ["Marian"];
console.log("array5 === array6 = ", array5 === array6);

let array7 = array5;
array7.push("Andreea");
console.log("array5 = ", array5);
console.log("array5 === array7 = ", array5 === array7);
