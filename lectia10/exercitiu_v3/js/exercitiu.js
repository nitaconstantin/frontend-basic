let users = [
  {
    name: "Alexandru",
    phone: "0722443322",
  },
  {
    name: "Andreea",
    phone: "0733552255",
  },
];

function showUsers() {
  let value = "";
  let list = document.getElementById("list");

  users.forEach((user) => {
    value += `<li>${user.name} - Tel: ${user.phone}</li>`;
  });
  list.innerHTML = value;
}

showUsers();

function verifyPhone(el) {
  let phone = el.value;
  let pattern = /^07[0-9]{8}$/g;
  let res = pattern.test(phone);
  if (!res) {
    // show error
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
  error.style.visibility = "visible";
  let tel = document.getElementById("tel");
  tel.style.color = "red";
  tel.style.border = "1px solid red";
}

function enableButton() {
  let button = document.querySelector("button");
  button.removeAttribute("disabled");
}

function addUser() {
  let user = {
    name: document.getElementById("name").value,
    phone: document.getElementById("tel").value,
  };

  users.push(user);
  showUsers();
  clearForm();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("tel").value = "";
}
