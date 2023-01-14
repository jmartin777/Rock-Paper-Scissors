

var newGame = new Game();

window.onload = function() {
    setTimeout(function(){document.body.style.opacity="100";},500);
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
    if (newGame.player1.turn === true) {
        // this gives the index position of player 1's choice of rock as a value of 1 within the address 0 of the board array.
        newGame.board[0] = 1;
        newGame.player1.turn = false;
        newGame.player2.turn = true;
    }
    else if (newGame.player2.turn === true) {
        // this gives the index position of player 2's choice of rock as a value of 1 within the address 1 of the board array.
        newGame.board[1] = 1;
        newGame.player1.turn = true;
        newGame.player2.turn = false;
    }
    newGame.testDraw();
    newGame.testWin();
});

paperImage.addEventListener("click", function() {
    if (newGame.player1.turn === true) {
        // this gives the index position of player 1's choice of rock as a value of 1 within the address 0 of the board array.
        newGame.board[0] = 2;
        newGame.player1.turn = false;
        newGame.player2.turn = true;
    }
    else if (newGame.player2.turn === true) {
        // this gives the index position of player 2's choice of rock as a value of 1 within the address 1 of the board array.
        newGame.board[1] = 2;
        newGame.player1.turn = true;
        newGame.player2.turn = false;
    }
    newGame.testDraw();
    newGame.testWin();
});

scissorsImage.addEventListener("click", function() {
    if (newGame.player1.turn === true) {
        // this gives the index position of player 1's choice of rock as a value of 1 within the address 0 of the board array.
        newGame.board[0] = 3;
        newGame.player1.turn = false;
        newGame.player2.turn = true;
    }
    else if (newGame.player2.turn === true) {
        // this gives the index position of player 2's choice of rock as a value of 1 within the address 1 of the board array.
        newGame.board[1] = 3;
        newGame.player1.turn = true;
        newGame.player2.turn = false;
    }
    newGame.testDraw();
    newGame.testWin();
});

boomImage.addEventListener("click", function() {
    if (newGame.player1.turn === true) {
        // this gives the index position of player 1's choice of rock as a value of 1 within the address 0 of the board array.
        newGame.board[0] = 4;
        newGame.player1.turn = false;
        newGame.player2.turn = true;
    }
    else if (newGame.player2.turn === true) {
        // this gives the index position of player 2's choice of rock as a value of 1 within the address 1 of the board array.
        newGame.board[1] = 4;
        newGame.player1.turn = true;
        newGame.player2.turn = false;
    }
    newGame.testDraw();
    newGame.testWin();
});

handImage.addEventListener("click", function() {
    if (newGame.player1.turn === true) {
        // this gives the index position of player 1's choice of rock as a value of 1 within the address 0 of the board array.
        newGame.board[0] = 5;
        newGame.player1.turn = false;
        newGame.player2.turn = true;
    }
    else if (newGame.player2.turn === true) {
        // this gives the index position of player 2's choice of rock as a value of 1 within the address 1 of the board array.
        newGame.board[1] = 5;
        newGame.player1.turn = true;
        newGame.player2.turn = false;
    }
    newGame.testDraw();
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


