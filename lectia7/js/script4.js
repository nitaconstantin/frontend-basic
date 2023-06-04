"use strict";

let a1 = 5;
let a2 = "5";

if (a1 === a2) {
  console.log("Valorile sunt egale");
}
switch (a1) {
  case "5":
    console.log("Switch OK");
}

let a3 = 0.1 + 0.2;
console.log("a3 = ", a3);

let a4 = "Buna" + "ziua!";
console.log(a4);

function add30ToNumber(x) {
  let y = 30;
  return x + y;
}
console.log(add30ToNumber(7));

//undefined !== null;
console.log("undefined variable: ", typeof a5);

let myNewVar1 = "",
  myNewVar2 = 0,
  myNewVar3 = [],
  myNewVar4 = {};
const myNewVar5 = 12;

let newVar1 = new String("Alina");
let newVar2 = "Alina";
console.log("--->", newVar1, newVar2, newVar1 === newVar2);
console.log(typeof newVar1, typeof newVar2);

let newVar3 = ""; // NU ASA let newVar3 = new String();

// let newVar4 = 5 + 7; // 12
// let newVar4 = "5" + 7; // 57
// let newVar4 = 5 + "7"; // 57
// let newVar4 = "5" - 7; // -2
// let newVar4 = 5 - '7'; // -2
let newVar4 = 9 - "c"; // NaN
// console.log("newVar4 = ", newVar4);

let v1 = 3;
// v1 = 3;
//delete v1;
function func1() {
  // function strict mode
  //   "use strict";
  let v2 = 5;
  function insideFunc1() {
    console.log("inauntrul functiei");
    let v3 = 7;
  }
  insideFunc1();
  console.log("descriere test");
}

func1();
//delete func1;

let obj1 = {
  name: "Marius",
  age: "32",
};

// nu putem adauga doi parametrii cu acelasi nume in strict mode
// function func2(a, a, b) {
//   return a + a - b;
// }
//func2(5, 4, 3);

let obj2 = {};
Object.defineProperty(obj2, "property1", { value: 3, writable: false });
console.log("obj2 property1: ", obj2.property1);
//obj2.property1 = 5;
// delete Object.prototype;

// let v3 = 010;
// let v4 = "\010";

// lista nume variabile ce nu pot fi folosite in strict mode
// public, protected, static, private, let, eval, arguments, interface, yield, let, var, const etc...

// let var = 5;

let myLocalVariable;
let addThreeNumbers = (a, b, c) => {
  return a + b + c;
};

// if (a == b) {
// } else {
// }

let numbersArray = [5, 7, 9];

let person = {
  name: "Adrian",
  age: 25,
  height: 1.78,
  nationality: "RO",
};

function newFuncToReadDataFromServer(
  myParameter1,
  secondParameterRegardingInput,
  thirdParameterRegardingOutput
) {
  return true;
}
