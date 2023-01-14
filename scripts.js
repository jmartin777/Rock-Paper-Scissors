var difficulty = 0 

var classicButton = document.getElementById('classic-button') 
var futureButton = document.getElementById('future-button')
var rockImage = document.getElementById("rock");
var paperImage = document.getElementById("paper");
var scissorsImage = document.getElementById("scissors");
var boomImage = document.getElementById("boom");
var handImage = document.getElementById("hand")

futureButton.addEventListener("click", function() {
    if (difficulty === 0) {
        revealObject(boomImage);
        revealObject(handImage);
        revealObject(scissorsImage);
        revealObject(paperImage);
        revealObject(rockImage);
    
    } else if (difficulty === 1) {
        revealObject(boomImage);
        revealObject(handImage);
    }
    difficulty = 2;
    document.getElementById("instructor-tag").innerHTML = "Select your object. (Future Mode)"
    // console.log("State "+ difficulty)
});

classicButton.addEventListener("click", function() {
    if (difficulty === 0) {
        revealObject(rockImage);
        revealObject(paperImage);
        revealObject(scissorsImage);
        
    } else if (difficulty === 2) {
        hideObject(boomImage);
        hideObject(handImage);

    }
    difficulty = 1;
    document.getElementById("instructor-tag").innerHTML = "Select your object. (Classic Mode)"
    // console.log("State "+ difficulty)
});

function revealObject(object) {
    if (object.classList.contains("hidden")) {
      object.classList.remove("hidden");
    } 
  }

function hideObject(object) {
    object.classList.add("hidden");
    
}


