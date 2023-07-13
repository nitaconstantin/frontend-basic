let users = [
  { name: "Alexandru", phone: "072223311" },
  { name: "Rodica", phone: "0744556677" },
];

function displayUsers() {
  let value = "";
  const list = document.getElementById("list");
  users.forEach((user) => {
    value += `<li>${user.name} - Tel. ${user.phone}</li>`;
  });

  list.innerHTML = value;
}

displayUsers();

function enableButton() {
  let button = document.querySelector("button");
  button.removeAttribute("disabled");
}

function verifyPhone(el) {
  let phone = el.value;
  let pattern = /^07[0-9]{8}$/g;
  let result = pattern.test(phone);

  if (!result) {
    console.log("Afiseaza Eroarea!!");
    showError();
  } else {
    document.getElementById("error").style.visibility = "hidden";
    document.getElementById("tel").style.color = "black";
    document.getElementById("tel").style.border = "1px solid black";
    enableButton();
  }
}

function showError() {
  let error = document.getElementById("error");
  error.style.color = "red";
  error.style.visibility = "visible";
  let phone = document.getElementById("tel");
  phone.style.border = "1px solid red";
  phone.style.color = "red";
}

function addUser() {
  let user = {
    name: document.getElementById("name").value,
    phone: document.getElementById("tel").value,
  };

  users.push(user);
  displayUsers();
  clearInputs();
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("tel").value = "";
}
