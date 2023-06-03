function addData() {
  //   console.log("OK!");

  const userData = prompt(
    'Introduceti un nume, un numar sau textul "adevarat" sau "fals"'
  );

  let responseText = "";

  const x = parseInt(userData);

  if (userData === "" || userData === " ") {
    responseText = "Nu ai introdus nici o valoare. Mai incearca!";
  } else if (isNaN(x)) {
    if (userData === "adevarat" || userData === "fals") {
      responseText = "Ai dreptate poate fi adevarat sau false";
    } else {
      responseText = "Salut " + userData + ". Bine te-am gasit!";
    }
  } else {
    let y = 3;
    let z = 20;
    let res;
    switch (true) {
      case x >= 5 && x <= 10:
        res = x * y;
        responseText = x + " * " + y + " = " + res;
        break;
      case x > 10 && x <= 20:
        res = x + z;
        responseText = x + " + " + z + " = " + res;
        break;
      default:
        responseText = "Trebuie sa alegi un numar intre 5 si 20";
        break;
    }
  }

  const dataDiv = document.getElementById("dataDiv");
  dataDiv.innerText = responseText;
}
