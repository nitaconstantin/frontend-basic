function checkUserPass() {
  const username = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (username === "Marius1" && pass === "xyzw") {
    document.getElementById("success_msg").style.display = "block";
    document.getElementById("error_msg").style.display = "none";

    sessionStorage.setItem("userLogged", "logged");
    window.location.replace("./index.html");
  } else {
    document.getElementById("error_msg").style.display = "block";
    document.getElementById("success_msg").style.display = "none";
  }
}

function checkUserIsLogged() {
  const isUserLoged = sessionStorage.getItem("userLogged");
  if (isUserLoged === "logged") {
    window.location.replace("./index.html");
  }
}
