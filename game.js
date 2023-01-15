class Game {
    constructor() {
        this.player1 = new Player({ name: "Player 1", icon: "😃", turn: true, wins: 0 });
        this.player2 = new Player({ name: "Computer", icon: "😛", turn: false, wins: 0 });
        this.board = [];
    }

    //CLASSIC MODE 
        // 1 > 3
        // (rock beats paper)
        // 3 > 2
        // (scissors beats paper)
        // 2 > 1 
        // (paper beats rock)

         //rock versus scissors
         //paper versus rock
         //scissors versus paper
         //rock versus paper (computer)logs to the DOM (innerHTML) and data model (this.board / wins++))
         //paper versus scissors (computer)
         //scissors versus rock (computer)

    testWinClassic() {
        if(this.board[0] === 1 && this.board[1] === 3) {
            this.player1.wins++;
        } else if (this.board[0] === 2 && this.board[1] === 1) {
            this.player1.wins++;
        } else if (this.board[0] === 3 && this.board[1] === 2) {
            this.player1.wins++;
        } else if (this.board[0] === 1 && this.board[1] === 2) {
            this.player2.wins++;
        } else if (this.board[0] === 2 && this.board[1] === 3) {
            this.player2.wins++;
        } else if (this.board[0] === 3 && this.board[1] === 1) {
            this.player2.wins++;
        }

        //debugging logic : wins are not being updated in the data model
        // solution : seperated the test testWinClassic function into two seperate 'if' statements 
        // and created a function that restarts the turn and updates the model for wins to be updated

        if(this.board[0] === 1 && this.board[1] === 3) {
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 2 && this.board[1] === 1) {
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 3 && this.board[1] === 2) {
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 1 && this.board[1] === 2) {
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
        } else if (this.board[0] === 2 && this.board[1] === 3) {
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
        } else if (this.board[0] === 3 && this.board[1] === 1) {
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
            

    }
}
    
    testWinClassicMode() {
        this.testWinClassic()
        if (this.board[0] === this.board[1]) {
            console.log("Its a DRAW");
            document.getElementById("instructor-tag").innerHTML = "DRAW [!!]";
        } else {
        this.computerChoiceClassic
        }
        this.testWinClassic()
    }
    
    // declares variable 'choices' (functional scope) of computer choices (rock, paper, scissors)
    // declares variable 'randomChoice' (functional scope) that randomixes and assigns it a number b/t 0 and 2
    // declares variable 'computerChoice' (functional scope) that assigns the value from the 'choices' array and index [randomChoice]
    // sets value of this.board[1] to the computerChoice variable to be accessed.

    computerChoiceClassic() {
    var choices = [1, 2, 3]; 
    var randomChoice =  Math.floor(Math.random() * 3);
    var computerChoice = choices[randomChoice];
    this.board[1] = computerChoice;
    return computerChoice
    }
    
    // this function instantiates new class instances of player 1 and player 2 as objects through our Game Class constructor and returns default (new game).
    // this.board is re assigned a empty. Data model updated
    //DOM manipulated return to "Choose Game" menu.(difficulty = 0[newgame])
    
    resetGame() {
        newGame = new Game()
        difficulty = 0
        newGame.player1.wins = 0;
        newGame.player2.wins = 0;
        revealObject(classicButton);
        revealObject(futureButton);
        hideObject(difficultyButton);
        hideObject(boomImage);
        hideObject(handImage);
        hideObject(scissorsImage);
        hideObject(paperImage);
        hideObject(rockImage);
      
}

// function that resets the game board and the player turns (*debug logic yo update player1.wins and player2.wins)

restart() {
    this.board = [null, null];
    this.player1.turn = true;
    this.player2.turn = false;
}


//this function is instantiating a new Game Class
// Researched setTimeut() method which sets a delay to the resetGame function which marks a 'new round' after 10 seconds.
// Inserted this function into Event Listeners for 'classic' and 'future' button to start a timer for the game. Then restarts the whole entire game calling the "resetGame function"

delayRestart() {
    setTimeout(this.resetGame, 10000)
    }
}
 // FUTURE MODE
        // 4 > 1 
        // (boom beats rock)
        // 4 > 3
        // (boom beats scissors)
        // 5 > 2 
        // (hands beats paper)
        // 5 > 4
        // (hands beat boom)
        // 3 > 5
        // (scissors beats hand)
        // 3 > 2
        // (scissors beats paper)
        // 2 > 1
        // (paper beats rock)
        // 2 > 4
        // (paper beats boom)
        // 1 > 3
        // (rock beats scissors)
        // 1 > 5
        // (rock beats hand)