function checkTextAdded(input) {
  let val = document.getElementById(input);
  if (val.length === 0) {
    console.log("Nu ai introdus nimic");
  } else {
    console.log("functioneaza");
  }
}
function verifyTextAdded() {
  val = document.getElementById("textadded").value;
  // console.log("Verifica");
  console.log(checkTextAdded(val));
}
