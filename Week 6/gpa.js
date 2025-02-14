function getGrades(inputSelector) {
    // get grades from the input box
    grades = document.querySelector(inputSelector).value;
    // split them into an array (String.split(','))
    const gradeArray = grades.split(",");
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const cleanArray = gradeArray.map((grade) => grade.trim().toUpperCase());
    // return grades
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa
  }