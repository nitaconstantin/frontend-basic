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
