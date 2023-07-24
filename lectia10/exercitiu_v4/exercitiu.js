let users = [
  {
    name: "Alexandru",
    phone: "0717721460",
  },
  {
    name: "Andreea",
    phone: "0713321460",
  },
];

function showUsers() {
  let value = "";
  let list = document.getElementById("list");
  users.forEach((user) => {
    value += `<li>${user.name}, Telefon: ${user.phone}</li>`;
  });

  list.innerHTML = value;
}

showUsers();

function verifyPhone(el) {
  let phone = el.value;
  let pattern = /^07[0-9]{8}$/g;
  let result = pattern.test(phone);

  if (!result) {
    //console.log("Nu corespunde");
    document.getElementById("showErrorMsg").style.display = "block";
    document.getElementById("showSuccessMsg").style.display = "none";
  } else {
    //console.log("Ai introdus un numar corect", phone);
    document.getElementById("showErrorMsg").style.display = "none";
    document.getElementById("showSuccessMsg").style.display = "block";
    document.querySelector("button").removeAttribute("disabled");
  }
}

function addUser() {
  const user = {
    name: document.getElementById("name").value,
    phone: document.getElementById("tel").value,
  };

  users.push(user);
  clearForm();
  showUsers();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("tel").value = "";
  document.querySelector("button").setAttribute("disabled", true);
  document.getElementById("showSuccessMsg").style.display = "none";
}
