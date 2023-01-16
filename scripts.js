// the html seems to be loading before the JS and CSS file are updating the site(im seeing DOM skeleton before page elements)
//-solution-
//was to set a function (setTimeout) that delays the code inside and sets the opacity to 100 on window "onload"
// helping with the site transition on load.

window.onload = function() {
    setTimeout(function(){document.body.style.opacity="100";},500);
};

//global variables

var newGame = new Game();
var difficulty = 0 

//variables

var difficultyButton = document.getElementById('difficulty-button')
var classicButton = document.getElementById('classic-button') 
var futureButton = document.getElementById('future-button')
var rockImage = document.getElementById("rock");
var paperImage = document.getElementById("paper");
var scissorsImage = document.getElementById("scissors");
var boomImage = document.getElementById("boom");
var handImage = document.getElementById("hand")

// Event Listeners

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
// this gives the index position of player 1's choice of rock as a value of 1 within the index 0 of the board array.
// this gives the index position of player 2's choice of rock as a value of 1 within the index 1 of the board array.
// generates computers random choice and displays (1 second), after code block

rockImage.addEventListener("click", function() {
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
 // this gives the index position of player 1's choice of paper as a value of 2 within the index 0 of the board array.
  // this gives the index position of player 2's choice of paper as a value of 2 within the index 1 of the board array.

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
 // this gives the index position of player 1's choice of scissors as a value of 3 within the index 0 of the board array.
 // this gives the index position of player 2's choice of scissors as a value of 3 within the index 1 of the board array.

scissorsImage.addEventListener("click", function() {
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
// this gives the index position of player 1's choice of boom as a value of 4 within the index 0 of the board array.
// this gives the index position of player 2's choice of boom as a value of 4 within the index 1 of the board array.

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
 // this gives the index position of player 1's choice of hand as a value of 5 within the index 0 of the board array.
 // this gives the index position of player 2's choice of hand as a value of 5 within the index 1 of the board array.

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

// Event Handelers

        // function [reveals] the object

function revealObject(object) {
    if (object.classList.contains("hidden")) {
      object.classList.remove("hidden");
    } 
}
        // function [hides] the object

function hideObject(object) {
    object.classList.add("hidden");
    
}


