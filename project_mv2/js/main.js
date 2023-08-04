function isUserLogged() {
  const userLogged = sessionStorage.getItem("userLogged");
  if (userLogged !== "logged") {
    window.location.replace("./login.html");
  }
}
