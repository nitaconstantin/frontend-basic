let personObjOne = {
  firstName: "Radu",
  lastName: "Popescu",
  age: 27,
  height: 181,
  hair: "black",
  fullName: function () {
    return this.firsName + " " + this.lastName;
  },
  checkThis: function () {
    console.log(this);
  },
};

let personObjTwo = {
  firstName: "Alex",
  age: 30,
};

// personObjOne.checkThis();
// console.log(this);

let myFunc1 = function (v1, v2) {
  console.log(`Buna ziua ${this.firstName}, bine ati venit la ${v1} cu ${v2}`);
  return true;
};

myFunc1.call(personObjTwo, "magazin", "Marius");

let paramsArr = ["Mall", "Roxana"];
myFunc1.apply(personObjOne, paramsArr);

let boundFunc = myFunc1.bind(personObjTwo);
console.log(boundFunc("patinoar", "Maria"));

let number1 = 9;
let number2 = -3.5423;

// Math.PI =
console.log(typeof number1, typeof number2);
console.log(Math.PI, Math.E);

console.log(Math.sqrt(number1));

function randomNumber(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}
// console.log(Math.random());
console.log(randomNumber(2, 7));

console.log(Math.floor(number2));
console.log(Math.ceil(number2));
console.log(`Round: ${Math.round(7.4756)} -> 7, ${Math.round(7.68568)} -> 8`);

console.log("Pow:", Math.pow(5, 3), 5 ** 3);

console.log("Abs: ", Math.abs(-4));
