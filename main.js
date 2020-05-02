const showFirstForm = () => {
  let x = document.getElementById("firstForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

const validateForm = () => {
  let x = document.forms["myForm"]["fName"].value;
  if (x == "" || x == null) {
    alert ("Even though the Sorting Hat can read minds, you must type a name in the box first!");
    return false;
  }
}

const houses =["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const sortedStudents = []

const assignToHouse = () => {
  let randomNumber = Math.floor(Math.random() * (houses.length));
  document.getElementById("startSort").value= houses[randomNumber];
  sortedStudents.push(document.getElementById("inputPassword2").value,(houses[randomNumber]));
  console.log(sortedStudents)
}


let studentArray = [];

const clickSortButton = () => {
  validateForm();
  assignToHouse();
  let newStudent = {};
  newStudent['name'] = document.getElementById("inputPassword2").value;
  newStudent['house'] = houses[Math.floor(Math.random() * (houses.length))];
  newStudent['uniqueId'] = Date.now();
  console.log(newStudent);
  studentArray.push(newStudent);
  console.log(studentArray)
  buildStudentCards(studentArray);
  document.getElementById("inputPassword2").value = null;
  }



const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const buildStudentCards = (studentArray) => {
  let domString = '<div class="row">';

   if (document.getElementById("inputPassword2").value !== "" || null) {

    for (let i=0; i<studentArray.length; i++) {

    domString += `
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${studentArray[i].name}</h5>
            <p class="card-text">${studentArray[i].house}</p>
            <button id="expel" class="btn btn-primary">Expel</button>
          </div>
        </div>
      </div>
      `;
      console.log(studentArray[i].uniqueId)
  }
  domString += '</div>'

  printToDom("students", domString)
  }
}

const expelStudent = () => {
  let idValue = '';
  studentArray.forEach(student => {
     if (studentArray.uniqueId === id) {
      console.log(student.uniqueId)
      idValue = student.indexOf(student);
     }
  });
  console.log(idValue)
  return idValue;
}

const findStudents = () => {
  expelStudent(studentArray[0].uniqueId)
}

let voldemortsArmy = []

const clickEvents = () => {
  document.getElementById("startSort").addEventListener("click", clickSortButton);
  console.log("Made it past startsort buttons")
  document.getElementById("expel").addEventListener("click", findStudents);
 }

const init = () => {
  buildStudentCards(studentArray)
  clickEvents();
}

init ();


//todo: on a click event, make the value of the input box null
// figure out how to target by unique id and remove from studentArray
