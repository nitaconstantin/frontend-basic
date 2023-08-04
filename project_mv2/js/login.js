function loginUser() {
  const username = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (username === "Marius1" && pass === "xyzw") {
    document.getElementById("success_msg").style.display = "block";
    document.getElementById("error_msg").style.display = "none";

    sessionStorage.setItem("userLogged", "logged");
    window.location.replace("./index.html");
  } else {
    document.getElementById("success_msg").style.display = "none";
    document.getElementById("error_msg").style.display = "block";
  }
}

function checkIsUserLogged() {
  const userLogged = sessionStorage.getItem("userLogged");
  if (userLogged === "logged") {
    window.location.replace("./index.html");
  }
}
