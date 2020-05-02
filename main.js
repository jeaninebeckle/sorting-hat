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
    //clicking the Sort! button needs to take the input text from the HTML form and merge it with the randomly generated house.
   //then it needs to push an object of student name and house to an empty array
   //then the buildStudentCards function needs to pull the info from that array and print to DOM
   let newStudent = {};
   newStudent['name'] = document.getElementById("inputPassword2").value;
   newStudent['house'] = houses[Math.floor(Math.random() * (houses.length))];
   newStudent['uniqueid'] = Date.now();
   console.log(newStudent);
   studentArray.push(newStudent);
   console.log(studentArray)
   buildStudentCards(studentArray);
}

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
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
            <a href="#" class="btn btn-primary">Expel</a>
          </div>
        </div>
      </div>
      `;
  }
  domString += '</div>'

  printToDom("#students", domString)
  }
}


const clickEvents = () => {
  document.querySelector("#startSort").addEventListener("click", validateForm);
  document.querySelector("#startSort").addEventListener("click", assignToHouse);
  document.querySelector("#startSort").addEventListener("click", clickSortButton);
  
 }

const init = () => {
  clickEvents();
  // buildStudentCards(studentArray)
  
}

init ();


//todo: on a click event, make the value of the input box null
// figure out how to target by unique id and remove from studentArray
