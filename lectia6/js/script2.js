"use strict";
console.log("descriere");
// console.error("Mesaj de eroare");
// console.info("mesaj informativ");

// comentariu pe o singura linie
/*
Comentariu
pe mai multe
linii
*/

// var - cea mai slaba declaratie a unei variabile
// let - variabila careia ii putem modifica valoarea in alta parte din cod
// const - variabila ce trebuie initializata cu tot cu valoare si nu poate fi modificata

// tipuri de date primitive: number, string, undefined, boolean, bigint, symbol
// tipuri de date structurale: object, function
// tipul de date null

// let x = 5
// let x = 'text'
// let x = boolean
// let x = { name: "Andrei", varsta: 27 };
// let x = true;

// let x = function () {};
// let x = null;
// console.log("Variabila x este de tipul ", typeof x);

// let x = 10;
// let y = 7;
// let z = x % y;
// let x = 7;
// let y = 10;
// x -= y; // x = x + 5
// x++;
// let x = 5 + 3 * 2 + 7 - 8 / 2; // 14

// let x = "Text";
// let y = "descriptiv";
// let z = x + " " + y;
// x += " un alt text";
// let x = 5;
// x += 3;
// x += "7";
// x += 1;

// 0 && 1 = 0;
// 0 && 0 = 0;
// 1 && 0 = 0;
// 1 && 1 = 1;

// 0 || 0 = 0;
// 0 || 1 = 1;
// 1|| 0 = 1;
// 1 || 1 = 1;

// operatorul logic pentru negare !

let x = 5;
let y = 8;
let z = x === y || x > 3;

// console.log("testam NaN", isNaN(y));

// console.log("y transformat in numar = ", parseInt(y));
// console.log(typeof z);
console.log("z = ", z);

// function testAge() {
//   let age = prompt("Introduceti varsta:");
//   if (age >= 18) {
//     document.getElementById("mydiv1").innerText =
//       "Aveti varsta legala pentru a conduce";
//   } else {
//     document.getElementById("mydiv1").innerText =
//       "Nu aveti varsta legala pentru a conduce";
//   }
// }
