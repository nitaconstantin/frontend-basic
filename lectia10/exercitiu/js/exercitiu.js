let persons = [
  {
    name: "Alexandru",
    phone: "0722332211",
  },
  {
    name: "Rodica",
    phone: "0722112331",
  },
];

function displayPersons() {
  let value = "";
  const list = document.getElementById("list1");
  persons.forEach((person) => {
    value += `<li>${person.name} - Tel. ${person.phone}</li>`;
  });

  list.innerHTML = value;
}

displayPersons();

function validatePhone(el) {
  let fieldValue = el.value;
  console.log("tel: ", fieldValue);

  let pattern = /^07\d{8}$/g;
  //   let pattern = /^07[0-9]{8}$/g;
  const res = pattern.test(fieldValue);
  console.log("res: ", res);
  if (!res) {
    showError();
  } else {
    document.getElementById("error").style.visibility = "hidden";
    document.getElementById("tel").style.border = "1px solid black";
    activateButton();
  }
}

function showError() {
  let error = document.getElementById("error");
  error.style.visibility = "visible";

  let phone = document.getElementById("tel");
  phone.style.border = "1px solid red";
}

function activateButton() {
  let button = document.querySelector("button");
  button.removeAttribute("disabled");
}

function addPerson() {
  let person = {
    name: document.getElementById("person").value,
    phone: document.getElementById("tel").value,
  };
  persons.push(person);
  displayPersons();
  clearForm();
}

function clearForm() {
  document.querySelector("button").disabled = true;
  (document.getElementById("person").value = ""),
    (document.getElementById("tel").value = "");
}
