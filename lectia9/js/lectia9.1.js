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

// let colors = ["galben", "verde", "albastru", "gri"];

// let colors2 = [...colors];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors2[i]);
// }
