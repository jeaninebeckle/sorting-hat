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
  } else {
    return true
  }
}

const houses =["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const sortedStudents = []

const assignToHouse = () => {
  let randomNumber = Math.floor(Math.random() * (houses.length));
  document.getElementById("startSort").value= houses[randomNumber];
  sortedStudents.push(document.getElementById("inputPassword2").value,(houses[randomNumber]));
}


let studentArray = [];
let studentIndex=0

const clickSortButton = () => {
  if (validateForm () == true) {
    assignToHouse ();
    let newStudent = {};
    newStudent['name'] = document.getElementById("inputPassword2").value;
    newStudent['house'] = houses[Math.floor(Math.random() * (houses.length))];
    newStudent['uniqueId'] = studentIndex;
    console.log(newStudent);
    studentArray.push(newStudent);
    console.log(studentArray)
    buildStudentCards(studentArray);
    document.getElementById("inputPassword2").value = null;
    studentIndex++
  }
}



const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const buildStudentCards = (studentArray) => {
  let domString = '<div class="row">';

    for (let i=0; i<studentArray.length; i++) {

    domString += `
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${studentArray[i].name}</h5>
            <p class="card-text">${studentArray[i].house}</p>
            <button id =${studentArray[i].uniqueId} class="btn btn-primary expel">Expel</button>
          </div>
        </div>
      </div>
      `;
  }
  domString += '</div>'

  printToDom("students", domString)
  addExpelEvent();
  }



const expelStudent = (id) => {
  studentArray = studentArray.filter(function (s) {
    if (id != s.uniqueId) {
      return s
    } 
  })
  buildStudentCards(studentArray)
}
     

const findStudents = () => {
  for (let i=0; i<studentArray.length; i++) {
  expelStudent(studentArray[i].uniqueId)
  }
}

const addExpelEvent = () => {
  const expelButtons = document.getElementsByClassName('expel')
  for (let i=0; i<expelButtons.length; i++) {
    expelButtons[i].addEventListener("click", expelStudentEvent)
  }
}

const expelStudentEvent = (event) => {
  const goodbyeStudent = (event.target.id)
  expelStudent(goodbyeStudent)
}




let voldemortsArmy = []

const clickEvents = () => {
  document.getElementById("startSort").addEventListener("click", clickSortButton);
 }

const init = () => {
  buildStudentCards(studentArray)
  clickEvents();
}

init ();


//todo: on a click event, make the value of the input box null
// figure out how to target by unique id and remove from studentArray

//match up student id with their index in the array
