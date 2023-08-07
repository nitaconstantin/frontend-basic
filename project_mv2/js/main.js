function configPage() {
  isUserLogged();
  createTable();
}
function isUserLogged() {
  const userLogged = sessionStorage.getItem("userLogged");
  if (userLogged !== "logged") {
    window.location.replace("./login.html");
  }
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

function createTableRow() {
  let tbody = document.getElementById("tbody");
  let i = 0;
  employeesArr.forEach((employee) => {
    i++;
    let project = employee.project === null ? "-" : employee.project;
    tbody.innerHTML += `<tr>
                        <td>${i}</td>
                       <td>${employee.name}</td>
                       <td>${employee.age}</td>
                       <td>${project}</td>
                       <td>${employee.birthDate}</td>
                       <td>${employee.hired}</td>
                       <td>${employee.phone}</td>
                       <td>${employee.email}</td>
                       </tr>`;
  });
}

function createTableHeader() {
  let table = document.getElementById("thead");
  table.innerHTML = `<tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Project</th>
            <th>Birth Date</th>
            <th>Hired</th>
            <th>Phone</th>
            <th>Email</th>
            </tr>`;
}

function createTable() {
  createTableHeader();
  createTableRow();
}

function showFormAdd() {
  document.getElementById("addEmp_container").style.display = "block";

  document.getElementById("add_btn_container").style.display = "none";
}

function resetAddForm() {
  let confirmReset = confirm("Are you sure, you want to reset your form?");

  if (confirmReset) {
    document.getElementById("formAddEmp").reset();
    document.getElementById("addEmp_container").style.display = "none";
    document.getElementById("add_btn_container").style.display = "block";
  }
}
