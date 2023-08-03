function isUserLogin() {
    const isUserLoged = sessionStorage.getItem("userLogged");
//   const isUserLoged = localStorage.getItem("userLogged");
  if (isUserLoged !== "logged") {
    window.location.replace("./login.html");
  }
}
