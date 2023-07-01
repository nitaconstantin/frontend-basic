const now = new Date(); // data curenta
console.log(now.getHours(), now.getUTCHours());
console.log(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  now.getHours(),
  now.getMinutes(),
  now.getSeconds()
);

const realTime = now.getTime(); // epoc time
console.log(realTime);

const val1 = 1688230005736 - 30 * 60 * 1000;
const date1 = new Date(val1);
console.log(date1);

const date2 = new Date("1990-03-05 12:35");
const options = { dateStyle: "long", timeStyle: "long" /*weekday: "long"*/ };
console.log(date2.toLocaleString("ro-RO", options), date2.getTimezoneOffset());

// document reprezinta DOM
const div1 = document.getElementById("myDiv1");
div1.innerText = "valoare de test";
console.log(div1);

const divs = document.getElementsByTagName("div");
console.log(divs);
divs[2].innerText = "o alta valoare de test";

const elements = document.getElementsByClassName("class1");
console.log("Elements:", elements);
elements[0].style.backgroundColor = "red";
elements[0].style.width = "100px";
// elements[0].hidden = true;
// elements[0].setAttribute("hidden", "true");

const newDiv = document.createElement("div");
newDiv.innerText = "new div creat";
// document.body.appendChild(newDiv);
divs[1].appendChild(newDiv);
document.body.removeChild(elements[1]);

document.write("text adaugat cu document.write");

// document.anchors
// document.forms <form>
// console.log(document.URL);
// document.head <head>
// document.images
// document.links
// document.title
