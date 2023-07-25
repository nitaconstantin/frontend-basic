function doStartUpConfig() {
  checkUserLogin();
  createTable();
  createTableRow();
}
function checkUserLogin() {
  const userLoggedIn = sessionStorage.getItem("userLogged");
  console.log(userLoggedIn);
  if (userLoggedIn !== "logged") {
    window.location.replace("./login.html");
  }

  // createTable();
}

let employeesArr = [
  {
    name: "Alex",
    age: 29,
    project: null,
    birthDate: "1994-01-10",
    date_employee: "2020-10-05",
    hired: "2021-01-17",
    phone: "0722112233",
    email: "alex@alex.com",
  },
  {
    name: "Madalina",
    age: 25,
    project: null,
    birthDate: "1998-09-15",
    date_employee: "2020-09-20",
    hired: "2021-01-17",
    phone: "0722112233",
    email: "mada@mada.com",
  },
  {
    name: "Cristina",
    age: 29,
    project: null,
    birthDate: "1992-02-11",
    hired: "2021-01-17",
    phone: "0722112233",
    email: "cris@cris.com",
  },
];

function createTable() {
  let table = document.getElementById("employees_table");
  let headerStr =
    "<tr><th>No</th><th>Name</th><th>Age</th><th>Project</th><th>Birthdate</th><th>Hired at</th><th>Phone</th><th>Email</th></tr>";
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

// function createTableHeader() {
//   let headerStr =
//     "<tr><th>No</th><th>Name</th><th>Age</th><th>Project</th><th>Birthdate</th><th>Hired at</th><th>Phone</th><th>Email</th></tr>";
// }

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
              </tr>`;
  });

  return value;
}
