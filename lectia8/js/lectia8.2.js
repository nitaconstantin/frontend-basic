let newArr1 = [7, 12, 24, 56, 77];

let arrLength = newArr1.length;
for (let i = 0; i < arrLength; i++) {
  console.log("newArr1[", i, "] =>", newArr1[i]);
  let v1 = newArr1[i] + 3;
}

// function incrementEl(vector) {
//   for (let i = 0; i < vector.length; i++) {
//     return vector[i];
//   }
// }

// console.log(incrementEl(newArr1));
// console.log("v1 = ", v1);

for (let val of newArr1) {
  console.log("val = ", val);
}

newArr1.forEach((val, i) => {
  console.log("forEach val[", i, "] = ", val);
});

let newArr2 = [43, 21, 75, 32, 56, 3, 9];
newArr2.length = 0;
let length2 = newArr2.length;
console.log("->", length2, newArr2);

let newArr3 = [
  [4, 6, 9],
  [2, 5, 9],
  [11, 27, 1],
];

console.log("-->", newArr3);
console.log(newArr3[2][1]);

let newArr4 = ["Ce", "zi", "buna", 5, 7, 15, "soare"];
console.log(newArr4.toString());
console.log(newArr4.join(" ")); // permite transformarea unui vector in string si ii putem adauga si un delimitator, default fiind ,

let newString1 = "mere, pere, caise, prune";
console.log("newString1 ca si vector: ", newString1.length);
console.log(newString1[2]); //r

// metode folositoare pt stringuri
let newString2 = "banane, struguri, Pere";

let newString3 = newString1.concat(" ,", newString2); //newString1 + newString2;
// console.log("newString3: ", newString3);
// console.log('newString3: '  + newString3)
console.log(`newString3: ${newString3}`); // liniile de mai sus produc acelasi rezultat

let word = "pere";
console.log(
  `In stringul newString3 ${
    newString3.includes(word) ? "exista" : "nu exista"
  } cuvantul ${word} `
);

console.log(
  `Cuvantul ${word} se gaseste la indexul cu numarul, ${newString3.lastIndexOf(
    word
  )}.`
);

// console.log("formula de repeat: ", word.repeat(7));
// let newStr4 = newString3.replace(/pere/gi, "nuci");
let newStr4 = newString3.replaceAll("pere", "nuci");
console.log(`newStr4 = ${newStr4}`);

console.log(newStr4.slice(6, 10));

let newArr5 = newStr4.split(", ");
console.log(newArr5);

console.log(newStr4.toLowerCase());
console.log(newStr4.toUpperCase());

let newStr6 = "     Buna ziua!     -"; // trimEnd() si trimStart()
console.log(newStr6.trim(" "));
console.log(newStr6.trimStart());
