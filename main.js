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





// const printToDom = (selector, textToPrint) => {
//   const selectedDiv = document.querySelector(selector);
//   selectedDiv.innerHTML = textToPrint;
// }

// const buildSortForm = () => {
//   let domString = '';
// }



// const showSortForm = (event) => {
//   const buttonId = event.target.id;
// }

// const clickEvents = () => {
//   document.querySelector("#sortButton").addEventListener("click", showSortForm)
// }

// const init = () => {
//   clickEvents();
// }

// init ();
