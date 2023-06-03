let x = addNumbers(5, -3);
console.log(x);
function addNumbers(a, b) {
  return a + b;
}

let myFunction = function (a, b) {
  return a * b;
};

let y = myFunction(3, -7);
console.log(y);

let myFunction2 = (a, b) => {
  return a - b;
};

let z = myFunction2(25, 13);
console.log(z);

(function () {
  let div1 = document.getElementById("mydiv1");
  div1.style.backgroundColor = "red";
  console.log("Ma apelez singur");
})();

let myFunction3 = (a, b = 5) => {
  console.log("a = ", a);
  console.log("b= ", b);
  //   if (b == undefined) {
  //     b = 5;
  //   }
  return a - b;
};

let z2 = myFunction3(20);
console.log(z2);

let helloUser = (age, user = "User") => {
  let data = "Hello " + user + " your age is " + age;
  return data;
};

let hello = helloUser(34);
console.log(hello);

// console.log("myVar1 = ", myVar1);
// myVar1 = 7;
// console.log("myVar1 = ", myVar1);
