"use strict";

// v1 = 3;
let v1 = 3;
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
