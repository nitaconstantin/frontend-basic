// tipuri de variabile primitive:
/*
1. string
2. number
3. boolean
4. undefined
5. NULL
*/
let a1 = new String("red");
let a2 = "red";
console.log(typeof a1, typeof a2, a1 === a2);

let arr1 = [2, 3, 5];
console.log(typeof arr1);

//object literal
let person1 = {
  firsName: "Radu",
  lastName: "Popescu",
  age: 27,
  height: 181,
  hair: "black",
  fullName: function () {
    return this.firsName + " " + this.lastName;
  },
};

console.log(person1.firsName);
console.log(person1.fullName());

let person2 = new Object();
person2.name = "Maria";
person2.height = 172;
person2.age = 32;

let person3 = person2;
person3.name = "Roxana";
console.log(person2.name);

let propName = "name";

console.log("Numele persoanei 2 este: ", person2.name);
console.log("Numele persoanei 2 este: ", person2["name"]);
console.log("Numele persoanei 2 este: ", person2[propName]);

function iterateObj(object) {
  for (let p in object) {
    console.log(`Proprietatea ${p} are ca vvaloarea: ${object[p]}`);
  }
}

iterateObj(person1);

console.log("----", person2);
delete person2.age;
console.log("===", person2);

// JSON = JavaScript Object Notation

let myObj1 = [
  {
    name: "Marius",
    age: 28,
  },
  {
    name: "Maria",
    age: 34,
  },
];

let myObj2 = JSON.stringify(myObj1);
let myObj3 = JSON.parse(myObj2);
console.log(myObj1);
console.log(myObj2);
console.log(myObj3);
