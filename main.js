const showFirstForm = () => {
  let x = document.getElementById("firstForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

// const validateForm = () => {
//   let x = document.forms["myForm"]["fName"].value;
//   if (x == "" || x == null) {
//     alert ("Even though the Sorting Hat can read minds, you must type a name in the box first!");
//     return false;
//   }
// }

const houses =["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const sortedStudents = []

function assignToHouse() {
  let randomNumber = Math.floor(Math.random() * (houses.length));
  document.getElementById("startSort").value= houses[randomNumber];
  sortedStudents.push(houses[randomNumber])
  console.log(sortedStudents)
}
// const studentArray = [];

// const printToDom = (selector, textToPrint) => {
//   const selectedDiv = document.querySelector(selector);
//   selectedDiv.innerHTML = textToPrint;
// }

// const buildStudentCards = (studentArray) => {
//   let domString = '<div class="row">';

//   domString +=
//     <div class="col-sm-6">
//       <div class="card">
//         <div class="card-body">
//           <h5 class="card-title">Student Name</h5>
//           <p class="card-text">House</p>
//           <a href="#" class="btn btn-primary">Expel</a>
//         </div>
//       </div>
//     </div>
// }



// // const buildStudentCards = (event) => {
// //   const buttonId = event.target.id;
// // }

// const clickEvents = () => {
//   document.querySelector("#startSort").addEventListener("click", assignToHouse)
// }

// const init = () => {
//   // buildStudentCards(studentArray)
//   clickEvents();
// }

// init ();
