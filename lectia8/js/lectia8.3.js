let colors = ["rosu", "verde", "alb", "galben", "portocaliu", "bleu", "roz"];

colors.splice(1, 2, "albastru", "mov");
// console.log(`collors array = ${colors}`);
console.log(colors);
// delete colors[1];
// console.log(colors);
// console.log(colors[1]);

colors.slice(2);
let colors2 = colors.slice(2, 4);
console.log(colors);
console.log(colors2);
colors.sort();
// console.log(colors);
colors.reverse();
console.log(colors);

let numbers = [100, 27, 45, 1, 4, 77, 305, 22, 1047, 3];
numbers.sort(function (a, b) {
  //   return a - b;
  //   return b - a;
});
console.log(numbers);

let numbers2 = numbers.map(myFunc1);

function myFunc1(val, index, array) {
  return val * 2;
}

console.log(`numbers2 = ${numbers2}`);

let numbers3 = numbers.filter(myFunc2);

function myFunc2(val) {
  return val % 2 === 0;
}

console.log(numbers3);

let numbersTotal = numbers.reduce(myFunc3);

function myFunc3(total, val) {
  return total + val;
}

console.log(numbersTotal);

let everyTest = numbers.every((val) => val > 10);

console.log(`everyTest = ${everyTest}`);

let someTest = numbers.some((val) => val < 10);

console.log(`someTest = ${someTest}`);

let val1 = numbers.indexOf(100); // lastIndexOf()
console.log(val1);

let val2 = colors.indexOf("portocaliu");
console.log(val2);

let val3 = numbers.find((val) => val > 10);
console.log(val3);

let val4 = numbers.findIndex((val) => val < 10);
console.log(`val4 = ${val4}`);
