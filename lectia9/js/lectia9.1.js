function sum(x, y, z = 1) {
  return x + y + z;
}

let arr1 = [3, 5, 8];
// spread operator imparte vectorul in mai multe variabile
console.log(`Suma este ${sum(...arr1)}`);

let arr2 = [...arr1];
arr2.push(11);
console.log(`Arr2 = ${arr2}`);
console.log(`Arr1 = ${arr1}`);

let arr3 = ["galben", "mov"];
let arr4 = ["rosu", ...arr3, "verde", ...arr1];
let arr5 = [...arr1, ...arr3];
console.log("arr4 =>", arr4);
console.log("arr5 =>", arr5);

let [a, b, c] = [...arr1];
console.log(b);

function returnNames() {
  return ["Adrian", "Roxana", "Daniel", "Mihaela", "Radu"];
}

// let colors = ["galben", "verde", "albastru", "gri"];

// let colors2 = [...colors];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors2[i]);
// }

// let arr6 = ["Adrian", "Roxana", "Daniel", "Mihaela", "Radu"];

// let name1 = arr6[0];
// let name2 = arr6[1];
// let name1, name2;
let [name1, ...namesArr1] = returnNames();
console.log("nume1= ", name1);
// console.log("nume2= ", name2);

console.log("vector nume 1= ", namesArr1);

let [color1 = "red", color2 = "green", color3 = "yellow"] = ["black"];
console.log("colors: ", color1, color2, color3);

let x1 = 5;
let x2 = 9;

[x1, x2] = [x2, x1];
console.log(`x1 = ${x1}, x2 = ${x2}`);
