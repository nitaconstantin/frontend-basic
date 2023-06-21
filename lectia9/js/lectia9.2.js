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

let person3 = personTwo;
person3.name = "Roxana";
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

iterateObj(person1);

console.log("----", personTwo);
delete person2.age;
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
