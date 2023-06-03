let myVar1 = 5;

function testFunc1() {
  myVar1 = 7;
  console.log("interior myVar1 = ", myVar1);
  let myVar2 = 10;
  console.log("interior myVar2 = ", myVar2); // 10
}

testFunc1();
console.log("myVar1 = ", myVar1);
// console.log("myVar2 = ", myVar2); // undefined

// function incrementVar() {
//   let counter = 0;

//   //   counter++;
//   function add() {
//     counter++;
//     return counter;
//   }
//   add();
//   return counter;
// }

let add = (function () {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

function modifyVar() {
  counter = 5;
}
function displayVar() {
  document.getElementById("mydiv2").innerText = add();
}

function testFunc2(x) {
  console.log("interior test function x: ", x);
  return function (y) {
    console.log("interior test function y: ", y);

    return x * y;
  };
}

var myVar3 = testFunc2(3);
console.log("rezultatul functiei de test 2: ", myVar3(5));
