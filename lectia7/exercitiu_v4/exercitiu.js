function checkElement(input) {
  let val = document.getElementById(input).value;
  if (val !== "") {
    if (isNaN(val)) {
      // de adaugat eroare
      displayError(input);
      return false;
    } else {
      document.getElementById(input).className = "";
      return val;
    }
  } else {
    return false;
  }
}

function displayError(input) {
  let divEl = document.getElementById("result");
  let inputEl = document.getElementById(input);
  divEl.style.color = "red";
  divEl.innerText = "Introduceti doar numere";

  inputEl.className = "numbers_error";
}

function displayResult() {
  let v1 = checkElement("inp1");
  let v2 = checkElement("inp2");
  let v3 = checkElement("inp3");

  if (v1 && v2 && v3) {
    let divEl = document.getElementById("result");
    divEl.style.color = "black";
    divEl.innerText = doTheMath(v1, v2, v3);
  }
}

function doTheMath(a, b, c) {
  return a - b * c;
}
