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
