let stitchPoints = 0;
let angelPoints = 0;
let leroyPoints = 0;

document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const isValid = validate();  

  if (isValid) {
    stitchPoints = 0;
    angelPoints = 0;
    leroyPoints = 0;

    addFirstPoints();
    addSecondPoints();
    addThirdPoints();
    addFourthPoints();
    addFifthPoints();

    whichCharacter();  // Show the result
  }
});

function validate(){
	console.log("Validation function triggered");
	const questions = document.querySelectorAll(".quiz-question")
	let allAnswered = true;
	
	questions.forEach((question, index) => {
    const errorMsg = document.getElementById(`error_${index + 1}`);  

    if (question.value === "") {
      allAnswered = false;
      errorMsg.style.display = "block"; 
    } else {
      errorMsg.style.display = "none";  
    }
  });

  return allAnswered;  
}

function addFirstPoints (){
	const question_1 = document.getElementById("question_1");
  if (question_1.value == "Blue"){
    stitchPoints += 1;
  }
  else if (question_1.value == "Pink"){
    angelPoints += 1;
  }
  else if (question_1.value == "Red") {
    leroyPoints += 1;
  } 
}

function addSecondPoints (){
	const question_2 = document.getElementById("question_2");
  if (question_2.value == "Star Wars"){
    stitchPoints += 1;
  }
  else if (question_2.value == "You've Got Mail"){
    angelPoints += 1;
  }
  else if (question_2.value == "Guardians of the Galaxy"){
    leroyPoints += 1;
  }
}

function addThirdPoints (){
	const question_3 = document.getElementById("question_3");
  if (question_3.value == "At the beach"){
    stitchPoints += 1;
  }
  else if (question_3.value == "Shopping") {
    angelPoints += 1;
  }
  else if (question_3.value == "Playing Sports") {
    leroyPoints += 1;
  }
}

function addFourthPoints (){
	const question_4 = document.getElementById("question_4");
  if (question_4.value == "Always") {
    stitchPoints += 1;
  }
  else if (question_4.value == "Most of the time"){
    angelPoints += 1;
  }
  else if (question_4.value == "Not normally"){
    leroyPoints += 1;
  }
}

function addFifthPoints (){
	const question_5 = document.getElementById("question_5");
  if (question_5.value == "Hawaii"){
    stitchPoints += 1;
  }
  else if (question_5.value == "New York City"){
    angelPoints += 1;
  }
  else if (question_5.value == "Los Angeles"){
    leroyPoints += 1;
  }
}


function whichCharacter(){
  if (stitchPoints > angelPoints && stitchPoints > leroyPoints){
    alert("You are Stitch! Loyal to the very end and always up for a trip to the beach, you make the people around you happy!")
  }
  else if (angelPoints > stitchPoints && angelPoints > leroyPoints){
    alert("You are Angel! Fashionable, fun and romantic, you are the life of the party and light up any room you're in!")
}
  else if (leroyPoints > stitchPoints && leroyPoints > stitchPoints){
    alert("You are Leroy! Powerful, determined and mischevious, you enjoy mixing things up and making life interesting!")
  }
}
