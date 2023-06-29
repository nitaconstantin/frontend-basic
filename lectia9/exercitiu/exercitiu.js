let studentsArr = [
  { name: "Andreea", age: 21, grades: [5, 9, 7, 6] },
  { name: "Daniela", age: 21, grades: [9, 9, 7, 7] },
  { name: "Marius", age: 22, grades: [5, 7, 7, 9] },
  { name: "Radu", age: 22, grades: [6, 8, 8, 6] },
];

function calculateAverage(grades) {
  const sum = grades.reduce((total, curent) => total + curent, 0);
  return sum / grades.length;
}

function displayList() {
  let val = "";
  let students = studentsArr.sort((a, b) => {
    calculateAverage(a.grades) < calculateAverage(b.grades)
      ? 1
      : calculateAverage(b.grades) < calculateAverage(a.grades)
      ? -1
      : 0;
  });
  students.forEach((student) => {
    let avg = calculateAverage(student.grades);
    val += `<li>${student.name} (${student.age}) - Media: ${avg.toFixed(
      2
    )}</li>`;
  });
  document.getElementById("list").innerHTML = val;
}
displayList();

function getRandomBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function getRandomGrades() {
  let gradesArr = [];
  for (let i = 0; i < 4; i++) {
    gradesArr.push(getRandomBetween(5, 9));
  }
  return gradesArr;
}

function addStudent() {
  const obj = {
    name: document.getElementById("student_name").value,
    age: document.getElementById("student_age").value,
    grades: getRandomGrades(),
  };

  studentsArr.push(obj);
  displayList();
  console.log(obj);
}
