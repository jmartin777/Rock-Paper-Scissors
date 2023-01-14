

var newGame = new Game();

window.onload = function() {
    setTimeout(function(){document.body.style.opacity="100";},500);
    newGame.testWin();
};

var difficulty = 0 



var difficultyButton = document.getElementById('difficulty-button')
var classicButton = document.getElementById('classic-button') 
var futureButton = document.getElementById('future-button')
var rockImage = document.getElementById("rock");
var paperImage = document.getElementById("paper");
var scissorsImage = document.getElementById("scissors");
var boomImage = document.getElementById("boom");
var handImage = document.getElementById("hand")


classicButton.addEventListener("click", function() {
    if (difficulty === 0) {
        revealObject(rockImage);
        revealObject(paperImage);
        revealObject(scissorsImage);  
    } 
    difficulty = 1;
    document.getElementById("instructor-tag").innerHTML = "Select your object. (Classic Mode)"
    hideObject(classicButton);
    hideObject(futureButton);
    revealObject(difficultyButton);
    // console.log("State "+ difficulty)
});

futureButton.addEventListener("click", function() {
    if (difficulty === 0) {
        revealObject(boomImage);
        revealObject(handImage);
        revealObject(scissorsImage);
        revealObject(paperImage);
        revealObject(rockImage);
    } 
    difficulty = 2;
    document.getElementById("instructor-tag").innerHTML = "Select your object. (Future Mode)"
    hideObject(classicButton);
    hideObject(futureButton);
    revealObject(difficultyButton);
    // console.log("State "+ difficulty)
});

difficultyButton.addEventListener("click", function() {
    difficulty = 0;
    document.getElementById("instructor-tag").innerHTML = "Choose game."
    revealObject(classicButton);
    revealObject(futureButton);
    hideObject(difficultyButton);
    hideObject(boomImage);
    hideObject(handImage);
    hideObject(scissorsImage);
    hideObject(paperImage);
    hideObject(rockImage);

});

rockImage.addEventListener("click", function() {
newGame.testWin();
});

paperImage.addEventListener("click", function() {
    newGame.testWin();
});

scissorsImage.addEventListener("click", function() {
    newGame.testWin();
});

boomImage.addEventListener("click", function() {
    newGame.testWin();
});

handImage.addEventListener("click", function() {
    newGame.testWin();
});

function revealObject(object) {
    if (object.classList.contains("hidden")) {
      object.classList.remove("hidden");
    } 
}

function hideObject(object) {
    object.classList.add("hidden");
    
}


