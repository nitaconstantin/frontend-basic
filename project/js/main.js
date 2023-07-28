function doStartUpConfig() {
  checkUserLogin();
  createTable();
}
function checkUserLogin() {
  const userLoggedIn = sessionStorage.getItem("userLogged");
  console.log(userLoggedIn);
  if (userLoggedIn !== "logged") {
    window.location.replace("./login.html");
  }

  // createTable();
}

// let employeesArr = [
//   {
//     name: "Alex",
//     age: 29,
//     project: null,
//     birthDate: "1994-01-10",
//     date_employee: "2020-10-05",
//     hired: "2021-01-17",
//     phone: "0722112233",
//     email: "alex@alex.com",
//   },
//   {
//     name: "Madalina",
//     age: 25,
//     project: null,
//     birthDate: "1998-09-15",
//     date_employee: "2020-09-20",
//     hired: "2021-01-17",
//     phone: "0722112233",
//     email: "mada@mada.com",
//   },
//   {
//     name: "Cristina",
//     age: 29,
//     project: null,
//     birthDate: "1992-02-11",
//     hired: "2021-01-17",
//     phone: "0722112233",
//     email: "cris@cris.com",
//   },
// ];
const empForLocalStorage = localStorage.getItem("employeesArr");
let employeesArr = JSON.parse(empForLocalStorage);

function createTable() {
  let table = document.getElementById("employees_table");
  if (employeesArr && employeesArr.length === 0) {
    document.getElementById("no_emp_container").style.display = "block";
    document.getElementById("table_container").style.display = "none";
  } else {
    let headerStr =
      "<tr><th>No</th><th>Name</th><th>Age</th><th>Project</th><th>Birthdate</th><th>Hired at</th><th>Phone</th><th>Email</th><th>Actions</th></tr>";
    // table.append(headerStr);
    table.innerHTML = headerStr;

    // employeesArr.forEach((employee, i) => {
    //   table.innerHTML += `<tr>
    //                   <td>${i}</td>
    //                   <td>${employee.name}</td>
    //                   <td>${employee.age}</td>
    //                   <td>${employee.project}</td>
    //                   <td>${employee.birthDate}</td>
    //                   <td>${employee.hired}</td>
    //                   <td>${employee.phone}</td>
    //                   <td>${employee.email}</td>
    //                 </tr>`;
    // });
    table.innerHTML += createTableRow();
  }
}

// function createTableHeader() {
//   let headerStr =
//     "<tr><th>No</th><th>Name</th><th>Age</th><th>Project</th><th>Birthdate</th><th>Hired at</th><th>Phone</th><th>Email</th></tr>";
// }

function deleteEmp(i) {
  console.log("index:", i);
  if (
    confirm("Are you sure you want to delete " + employeesArr[i].name + "?")
  ) {
    employeesArr.splice(i, 1);
    localStorage.setItem("employeesArr", JSON.stringify(employeesArr));
    createTable();
  }
}

function editEmp(i) {
  displayAddForm();
  validationKeys = Object.keys(validationObject);
  validationKeys.forEach((key) => {
    document.getElementById(key).value = employeesArr[i][key];
    validationObject[key] = true;
  });
  checkValidationObj();
}
function createTableRow() {
  let value = "";

  employeesArr.forEach((employee, i) => {
    const projectName = employee.project ? employee.project : "-";
    value += `<tr>
                <td>${i + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${projectName}</td>
                <td>${employee.birthDate}</td>
                <td>${employee.hired}</td>
                <td>${employee.phone}</td>
                <td>${employee.email}</td>
                <td><span class="editButton" onclick="editEmp(${i})">Edit</span><span class="delButton" onclick="deleteEmp(${i})">Del</span></td>
              </tr>`;
  });

  return value;
}

function displayAddForm() {
  let addForm = document.getElementById("add_form_container");
  addForm.style.display = "block";
  document.getElementById("add_container").style.display = "none";
  const validationKeys = Object.keys(validationObject);
  validationKeys.forEach((key) => {
    validationObject[key] = false;
  });
  checkValidationObj();
}

function cancelAddForm() {
  const userConfirm = confirm(
    "Are you sure you want to cancel adding a new user?"
  );
  console.log("User confirm", userConfirm);
  // document.getElementById("add_container").style.display = "block";
  // document.getElementById("add_form_container").style.display = "none";
  // document.getElementById("name").value = "";

  if (userConfirm) {
    clearAndHideForm();
  }
}

function clearAndHideForm() {
  document.getElementById("add_form").reset();
  document.getElementById("add_container").style.display = "block";
  document.getElementById("add_form_container").style.display = "none";
}
// show form my version
// function showForm() {
//   let form = document.querySelector("form");
//   form.style.display = "block";
//   let btnAdd = document.querySelector("button.addEmpButton");
//   btnAdd.style.display = "none";
// }

// cancel add my version
// function cancelAddEmp() {
//   // let cancelBtn = document.querySelector("button.cancelButton");
//   let form = document.querySelector(".add_form_container form");
//   form.style.display = "none";
// }

function addNewEmp() {
  console.log("employee added...");
  // my version
  // let employee = {
  //   name: document.getElementById("name").value,
  //   age: document.getElementById("age").value,
  //   birthDate: document.getElementById("birthDate").value,
  //   phone: document.getElementById("phone").value,
  //   email: document.getElementById("email").value,
  // };
  // employeesArr.push(employee);
  // createTable();
  // document.getElementById("add_form").reset();
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const monthToAdd = month < 10 ? "0" + month : month;
  const day = newDate.getDate();
  const newEmpObj = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    birthDate: document.getElementById("birthDate").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    hired: year + "-" + monthToAdd + "-" + day,
    project: null,
  };
  employeesArr.push(newEmpObj);
  localStorage.setItem("employeesArr", JSON.stringify(employeesArr));
  createTable();
  clearAndHideForm();
}

// verify form
function checkName() {
  const name_el = document.getElementById("name");
  const name = name_el.value;
  if (name === "" || name === null) {
    document.getElementById("name_err").style.display = "block";
    name_el.classList.add("input_err");
    validationObject.name = false;
  } else {
    document.getElementById("name_err").style.display = "none";
    name_el.classList.remove("input_err");
    validationObject.name = true;
  }
  checkValidationObj();
}

function checkAge() {
  const age_el = document.getElementById("age");
  const age = age_el.value;
  if (age !== "" && !isNaN(age) && age >= 18 && age <= 65) {
    document.getElementById("age_err").style.display = "none";
    age_el.classList.remove("input_err");
    validationObject.age = true;
  } else {
    document.getElementById("age_err").style.display = "block";
    age_el.classList.add("input_err");
    validationObject.age = false;
  }
  checkValidationObj();
}

function checkBirthDate() {
  let birthDate_el = document.getElementById("birthDate");

  let birthDate = birthDate_el.value;
  let pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/g;
  let result = pattern.test(birthDate);
  if (!result) {
    document.getElementById("birthDate_err").style.display = "block";
    birthDate_el.classList.add("input_err");
  } else {
    document.getElementById("birthDate_err").style.display = "none";
    birthDate_el.classList.remove("input_err");
  }

  checkValidationObj();
}

function checkPhone() {
  let phone_el = document.getElementById("phone");
  let phone = phone_el.value;

  let pattern = /^07[0-9]{8}/g;

  const result = pattern.test(phone);
  if (!result) {
    document.getElementById("phone_err").style.display = "block";
    phone_el.classList.add("input_err");
  } else {
    document.getElementById("phone_err").style.display = "none";
    phone_el.classList.remove("input_err");
  }

  checkValidationObj();
}

function checkElement(element) {
  let html_el = document.getElementById(element);

  let el_value = html_el.value;
  let pattern;
  if (element === "birthDate") {
    pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/g;
  } else if (element === "phone") {
    pattern = /^07[0-9]{8}/g;
  } else if (element === "email") {
    pattern = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/g;
  }
  if (el_value === "" || !pattern.test(el_value)) {
    document.getElementById(element + "_err").style.display = "block";
    html_el.classList.add("input_err");
    validationObject[element] = false;
  } else {
    document.getElementById(element + "_err").style.display = "none";
    html_el.classList.remove("input_err");
    validationObject[element] = true;
  }

  checkValidationObj();
}

let initialValidationObj = {
  name: false,
  age: false,
  birthDate: false,
  phone: false,
  email: false,
};

let validationObject = initialValidationObj;
function checkValidationObj() {
  const validationKeys = Object.keys(validationObject);
  let flag = true;
  // console.log(validationObject, validationKeys);

  validationKeys.forEach((key) => {
    if (!validationObject[key]) {
      flag = false;
    }
  });
  if (flag) {
    document.getElementById("add_btn").disabled = false;
  } else {
    document.getElementById("add_btn").disabled = true;
  }
}
