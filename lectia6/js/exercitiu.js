"use strict";

function addValue() {
  let data = prompt("Adauga o valoare");
  let divData = document.getElementById("divData");
  if (isNaN(data)) {
    if (
      data === "adevarat" ||
      data === "fals" ||
      data === "true" ||
      data === "false"
    ) {
      divData.innerText = "E corect poate fi adevarat sau fals";
    } else if (data !== "adevarat" || data !== "false") {
      divData.innerText = "Salut " + data + " bine te-am gasit!";
    }
  } else if (!isNaN(data)) {
    data = parseInt(data);
    if (data < 5 || data > 20) {
      divData.innerText = "Te rugam sa introduci un numar intre 5 si 20";
    } else if (data >= 5) {
      divData.innerText = data + " * 3 = " + data * 3;
    }
  }
}
