//the form used to sort students is hidden until this function runs with a button click

const showFirstForm = () => {
  let x = document.getElementById("firstForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

//alerts user to enter a name if sort button is clicked while form is empty

const validateForm = () => {
  let x = document.forms["myForm"]["fName"].value;
  if (x == "" || x == null) {
    alert ("Even though the Sorting Hat can read minds, you must type a name in the box first!");
    return false;
  } else {
    return true
  }
}

//function to randomly sort students into one of four houses

const houses =["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const sortedStudents = []

const assignToHouse = () => {
  let randomNumber = Math.floor(Math.random() * (houses.length));
  document.getElementById("startSort").value= houses[randomNumber];
  sortedStudents.push(document.getElementById("studentName").value,(houses[randomNumber]));
}

//takes sorted student and puts them in a student array along with a house and unique id

let studentArray = [];
let studentIndex=0

const clickSortButton = () => {
  if (validateForm () == true) {
    assignToHouse ();
    let newStudent = {};
    newStudent['name'] = document.getElementById("studentName").value;
    newStudent['house'] = houses[Math.floor(Math.random() * (houses.length))];
    newStudent['uniqueId'] = studentIndex;
    console.log(newStudent);
    studentArray.push(newStudent);
    console.log(studentArray)
    buildStudentCards(studentArray);
    document.getElementById("studentName").value = null;
    studentIndex++
  }
}

//prints sorted student cards to dom

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const buildStudentCards = (studentArray) => {
  let domString = '<div class="row">';

    for (let i=0; i<studentArray.length; i++) {

    domString += `
      <div class="col">
        <div class="card">
          <div class="card-body ${studentArray[i].house}">
            <h5 class="card-title">${studentArray[i].name}</h5>
            <p class="card-text">${studentArray[i].house}</p>
            <button id =${studentArray[i].uniqueId} class="btn btn-outline-danger expel">Expel</button>
          </div>
        </div>
      </div>
      `;
  }
  domString += '</div>'
  

  
  printToDom("students", domString)
  addExpelEvent();
  }


//Gets unique id for student and creates id for expelStudent function

const findStudents = () => {
  for (let i=0; i<studentArray.length; i++) {
  expelStudent(studentArray[i].uniqueId)
  }
}

//Assigns a unique id to each button on a student card

const addExpelEvent = () => {
  const expelButtons = document.getElementsByClassName('expel')
  for (let i=0; i<expelButtons.length; i++) {
    expelButtons[i].addEventListener("click", expelStudentEvent)
  }
}

//targets expel button by unique id, expels student, and creates expelled students cards

const expelStudentEvent = (event) => {
  const goodbyeStudent = (event.target.id);
  expelStudent(goodbyeStudent);
  buildExpelledStudents(voldemortsArmy);
}


//expels students if expel button is clicked and puts them in a new array

let voldemortsArmy = []

const expelStudent = (id) => {
  studentArray = studentArray.filter(function (s) {
    if (id != s.uniqueId) {
      return s
    } else {
      if (id == s.uniqueId) {
        voldemortsArmy.push(s)
      }
    }
  })
  buildStudentCards(studentArray);
}

//Prints Voldemort's Army to dom below regular students

const buildExpelledStudents = (voldemortsArmy) => {
  let domString = '<div class="row">';

    for (let i=0; i<voldemortsArmy.length; i++) {

    domString += `
      <div class="col">
        <div class="card">
          <div class="card-body expelled-students">
            <h4>Voldemort's Army</h4>
            <h5 class="card-title">${voldemortsArmy[i].name}</h5>
          </div>
        </div>
      </div>
      `;
  }
  domString += '</div>'

  printToDom("expelled", domString)
}


const clickEvents = () => {
  document.getElementById("startSort").addEventListener("click", clickSortButton);
 }

const init = () => {
  buildStudentCards(studentArray)
  clickEvents();
}

init ();
