function isUserLogin() {
  const isUserLoged = sessionStorage.getItem("userLogged");
  if (isUserLoged !== "logged") {
    window.location.replace("./login.html");
  }
}
