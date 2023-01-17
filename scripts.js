window.onload = function() {
    setTimeout(function(){document.body.style.opacity="100";},500);
};

var newGame = new Game();
var difficulty = 0 

var difficultyButton = document.getElementById('difficulty-button')
var classicButton = document.getElementById('classic-button') 
var futureButton = document.getElementById('future-button')
var rockImage = document.getElementById("rock");
var paperImage = document.getElementById("paper");
var scissorsImage = document.getElementById("scissors");
var boomImage = document.getElementById("boom");
var handImage = document.getElementById("hand");
var player1Wins = document.getElementById("player-data-1");
var player2Wins = document.getElementById("player-data-2");

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
    newGame.delayRestart();
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
    newGame.delayRestart();
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
    console.log(event.target)
    if (newGame.player1.turn === true) {
        newGame.board[0] = 1;
        newGame.board[1] = newGame.computerChoice()
        newGame.player1.turn = false;
        newGame.player2.turn = true;
        newGame.displayComputerChoice();
    }
    newGame.testWinMode()
    console.log(newGame.player1.wins);
    console.log(newGame.player2.wins);
    
});

paperImage.addEventListener("click", function() {
    if (newGame.player1.turn === true) {
        newGame.board[0] = 2;
        newGame.board[1] = newGame.computerChoice()
        newGame.player1.turn = false;
        newGame.player2.turn = true;
        newGame.displayComputerChoice();
    }
    newGame.testWinMode()
    console.log(newGame.player1.wins);
    console.log(newGame.player2.wins);
});

scissorsImage.addEventListener("click", function() {
    console.log("fire")
    if (newGame.player1.turn === true) {
        newGame.board[0] = 3;
        newGame.board[1] = newGame.computerChoice()
        newGame.player1.turn = false;
        newGame.player2.turn = true;
        newGame.displayComputerChoice();
    }
        newGame.testWinMode()
        console.log(newGame.player1.wins);
        console.log(newGame.player2.wins);
    
});

boomImage.addEventListener("click", function() {
    if (newGame.player1.turn === true) {
        newGame.board[0] = 4;
        newGame.board[1] = newGame.computerChoice()
        newGame.player1.turn = false;
        newGame.player2.turn = true;
        newGame.displayComputerChoice();
    }
        newGame.testWinMode();
        console.log(newGame.player1.wins);
        console.log(newGame.player2.wins);
   
});

handImage.addEventListener("click", function() {
    if (newGame.player1.turn === true) {
        newGame.board[0] = 5;
        newGame.board[1] = newGame.computerChoice()
        newGame.player1.turn = false;
        newGame.player2.turn = true;
        newGame.displayComputerChoice();
    }
        newGame.testWinMode();
        console.log(newGame.player1.wins);
        console.log(newGame.player2.wins);
});

function revealObject(object) {
    if (object.classList.contains("hidden")) {
      object.classList.remove("hidden");
    } 
}

function hideObject(object) {
    object.classList.add("hidden");
    
}


