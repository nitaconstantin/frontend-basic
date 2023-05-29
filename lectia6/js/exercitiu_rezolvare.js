function addValue() {
  //   console.log("OK");
  const userData = prompt(
    "Introduceti un numar, un nume sau textul adevarat sau fals"
  );
  let responseText = "";

  const x = parseInt(userData);

  if (userData === "") {
    responseText = "Nu ai introdus nimic. Mai incearca!";
  } else if (isNaN(x)) {
    if (userData === "adevarat" || userData === "fals") {
      responseText = "Ai dreptate este adevarat sau fals";
    } else {
      responseText = "Salut " + userData + " O zi buna!";
    }
  } else {
    const y = 3;
    const z = 20;
    let res;

    switch (true) {
      case x >= 5 && x <= 10:
        res = x * y;
        responseText = x + "*" + y + " = " + res;
        break;
      case x > 10:
        res = x + z;
        responseText = x + "+" + z + " = " + res;
        break;
      default:
        responseText = "Ai introdus un numar mai mic decat 5";
    }
  }

  const divData = document.getElementById("divData");
  divData.innerText = responseText;
}
