function checkUserPass() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  //   console.log("===", username, password);
  if (username === "Marius1" && password === "xyzw") {
    document.getElementById("success_msg").style.display = "block";
    document.getElementById("error_msg").style.display = "none";

    sessionStorage.setItem("userLogged", "logged");
    window.location.replace("./index.html");
  } else {
    document.getElementById("error_msg").style.display = "block";
    document.getElementById("success_msg").style.display = "none";
  }
}

function checkLoggedInUser() {
  const userLoggedIn = sessionStorage.getItem("userLogged");
  //   console.log(userLoggedIn);
  if (userLoggedIn === "logged") {
    window.location.replace("./index.html");
  }
}
