// document.getElementById("input1").value;
// onkeyup = "func1()";

// let inp1 = document.getElementById("inp1").value;
// console.log(inp1);

function valueInput1() {
  let inp1 = document.getElementById("inp1");
  if (isNaN(inp1.value)) {
    inp1.style.border = "1px solid red";
    inp1.style.outline = "1px solid red";
    inp1.style.color = "red";
  } else {
    inp1 = parseInt(inp1);
  }
  return inp1;
}

function valueInput2() {
  let inp2 = document.getElementById("inp2");
  if (isNaN(inp2.value)) {
    inp2.style.border = "1px solid red";
    inp2.style.outline = "1px solid red";
    inp2.style.color = "red";
  } else {
    inp2 = parseInt(inp2);
  }
  return inp2;
}

function valueInput3() {
  let inp3 = document.getElementById("inp3");
  if (isNaN(inp3.value)) {
    inp3.style.border = "1px solid red";
    inp3.style.outline = "1px solid red";
    inp3.style.color = "red";
  } else {
    inp3 = parseInt(inp3);
  }
  return inp3;
}

function operationResult() {
  let opResult = document.getElementById("result");
  if (valueInput1() === "" || valueInput2() === "" || valueInput3() === "") {
    opResult.innerText = "Introduceti numere pentru a realiza operatia";

    opResult.style.color = "red";
  } else {
    opResult = valueInput1() - valueInput2() * valueInput3();
  }
  return opResult;
}

operationResult();
