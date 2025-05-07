/*Defining lists */
let scoops = ["Food/brown_ice.png", "Food/pink_ice.png", "Food/white_ice.png"]
let cones = ["Food/pointed_cone.png", "Food/square_cone.png", "Food/chocolate_cone.png"]
let characters = ["food_angel.png", "food_leroy.png", "food_lilo.png", "food_stitch.png"]

/*Changes src */

function newCharacterAndIceCream(){
  let whichScoop = Math.floor(Math.random() * 3);
  let whichCone = Math.floor(Math.random() * 3);
  let whichCharacter = Math.floor(Math.random() * 4);
  
  let scoopImageUrl = scoops[whichScoop];
  let coneImageUrl = cones[whichCone];
  let characterImageUrl = characters[whichCharacter];
  
  console.log(scoopImageUrl);
  console.log(coneImageUrl);
  console.log(characterImageUrl);
  
  scoop_image.src = scoopImageUrl;
  cone_image.src = coneImageUrl;
  character_image.src = "Characters/" + characterImageUrl;
}

/*Makes desired ice cream visible */
function toggleDesiredIceCreamAndBubble(){
  cone_image.classList.toggle("visible");
  scoop_image.classList.toggle("visible");
}


function showCreatedBrownScoop(){
  created_scoop_image.src = scoops[0];
  created_scoop_image.classList.add("visible");
  changeScoreAddPoints();
}

function showCreatedPinkScoop(){
  created_scoop_image.src = scoops[1];
  created_scoop_image.classList.add("visible");
  changeScoreAddPoints();
}

function showCreatedWhiteScoop(){
  created_scoop_image.src = scoops[2];
  created_scoop_image.classList.add("visible");
  changeScoreAddPoints();
}

function showCreatedPointedCone(){
  created_cone_image.src = cones[0];
  created_cone_image.classList.add("visible");
  changeScoreAddPoints();
}

function showCreatedSquareCone(){
  created_cone_image.src = cones[1];
  created_cone_image.classList.add("visible");
  changeScoreAddPoints();
}

function showCreatedChocolateCone(){
  created_cone_image.src = cones[2];
  created_cone_image.classList.add("visible");
  changeScoreAddPoints();
}


brown_button.onclick = showCreatedBrownScoop;
pink_button.onclick = showCreatedPinkScoop;
white_button.onclick = showCreatedWhiteScoop;
pointed_button.onclick = showCreatedPointedCone;
square_button.onclick = showCreatedSquareCone;
chocolate_button.onclick = showCreatedChocolateCone;



/*Score */
let score = 0;
let scorePerIceCream = 50;

function updateScoreText(){
   score_text.textContent = "Score: " + score;
}

function increaseScore(){
  score += scorePerIceCream;
}

/*change character*/

function changeScoreAddPoints(){
  if (created_cone_image.src == cone_image.src && created_scoop_image.src == scoop_image.src) {
    increaseScore();
	updateScoreText();
    newCharacterAndIceCream();
    makeCharacterWalk()
  }
}

function makeCharacterWalk(){
  character_image.classList.remove("walk");
  setTimeout(() => character_image.classList.add("walk"));
}

music.volume = 0.1

makeCharacterWalk();