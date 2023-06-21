function checkElement(input) {
  let val = document.getElementById(input).value;
  if (val !== "") {
    if (isNaN(val)) {
      showError(input);
      return false;
    } else {
      document.getElementById(input).className = "";
      return val;
    }
  } else {
    return false;
  }
}

function showError(input) {
  let inpEl = document.getElementById(input);
  let resEl = document.getElementById("result");

  inpEl.className = "numbers_error";
  resEl.style.color = "red";
  resEl.innerText = "Trebuie sa introduceti numai numere";
}

function showResult() {
  let val1 = checkElement("inp1");
  let val2 = checkElement("inp2");
  let val3 = checkElement("inp3");

  if (val1 && val2 && val3) {
    let result = document.getElementById("result");
    result.style.color = "black";
    result.innerText = doTheMath(val1, val2, val3);
  }
}

function doTheMath(v1, v2, v3) {
  return v1 - v2 * v3;
}
