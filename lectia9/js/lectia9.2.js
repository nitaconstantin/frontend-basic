// tipuri de variabile primitive:
/*
1. string
2. number
3. boolean
4. undefined
5. NULL
*/
let a = new String("red");
let a2 = "red";
console.log(typeof a, typeof a2, a === a2);

let arrOne = [2, 3, 5];
console.log(typeof arrOne);

//object literal
let personOne = {
  firsName: "Radu",
  lastName: "Popescu",
  age: 27,
  height: 181,
  hair: "black",
  fullName: function () {
    return this.firsName + " " + this.lastName;
  },
};

console.log(personOne.firsName);
console.log(personOne.fullName());

let personTwo = new Object();
personTwo.name = "Maria";
personTwo.height = 172;
personTwo.age = 32;

let personThree = personTwo;
personThree.name = "Roxana";
console.log(personTwo.name);

let propertyName = "name";

console.log("Numele persoanei 2 este: ", personTwo.name);
console.log("Numele persoanei 2 este: ", personTwo["name"]);
console.log("Numele persoanei 2 este: ", personTwo[propertyName]);

function iterateObj(object) {
  for (let p in object) {
    console.log(`Proprietatea ${p} are ca vvaloarea: ${object[p]}`);
  }
}

iterateObj(personOne);

console.log("----", personTwo);
delete personTwo.age;
console.log("===", personTwo);

// JSON = JavaScript Object Notation

let myObjOne = [
  {
    name: "Marius",
    age: 28,
  },
  {
    name: "Maria",
    age: 34,
  },
];

let myObjTwo = JSON.stringify(myObjOne);
let myObjThree = JSON.parse(myObjTwo);
console.log(myObjOne);
console.log(myObjTwo);
console.log(myObjThree);

let myCarObjOne = {
  make: "Volvo",
  color: "black",
  doors: 5,
  media: {
    sound: "Sony",
  },
};

console.log(myCarObjOne);

// let make = myCarObjOne.make;
// let color = myCarObjOne.color;

// let { make, color, height = 172 } = myCarObjOne;
// console.log(make, color, height);

// let { make: carMake, color: carColor } = myCarObjOne;
// console.log(carMake, carColor);

// let {
//   media: { sound },
// } = myCarObjOne;
// console.log(sound);

// let prop = "make";
// let { [prop]: carMake } = myCarObjOne;
// console.log(carMake);

let { make, ...rest } = myCarObjOne;
console.log(rest);
