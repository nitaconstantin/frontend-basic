function checkUserPassword() {
  const username = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (username === "Marius1" && pass === "xyzw") {
    document.querySelector("#try_success").style.display = "block";
    document.querySelector("#try_error").style.display = "none";

    sessionStorage.setItem("userLogged", "logged");
    window.location.replace("./index.html");
  } else {
    document.querySelector("#try_error").style.display = "block";
    document.querySelector("#try_success").style.display = "none";
  }
}

function checkedLoggedInUser() {
  const userLoggedIn = sessionStorage.getItem("userLogged");
  console.log(userLoggedIn);
  if (userLoggedIn === "logged") {
    window.location.replace("./index.html");
  }
}
