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

         // FUTURE MODE
        // 4 > 1 
        // (boom beats rock)
        // 4 > 2
        // (boom beats paper)
        // 5 > 3 
        // (boom beats scissors)
        // 5 > 1
        // (hand beats rock)
        // 5 > 2
        // (hand beats paper)
        // 5 > 3
        // hand beats scissors)
       
         //logs to the DOM (innerHTML) and data model (this.board / wins++))

    testWin() {
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
        } else if (this.board[0] === 4 && this.board[1] === 1) {
            this.player1.wins++;
        } else if (this.board[0] === 4 && this.board[1] === 2) {
            this.player1.wins++;
        } else if (this.board[0] === 4 && this.board[1] === 3) {
            this.player1.wins++;
        } else if (this.board[0] === 5 && this.board[1] === 1) {
            this.player1.wins++;
        } else if (this.board[0] === 5 && this.board[1] === 2) {
            this.player1.wins++;
        } else if (this.board[0] === 5 && this.board[1] === 3) {
            this.player1.wins++;
        } else if (this.board[0] === 3 && this.board[1] === 5) {
            this.player2.wins++;
        } else if (this.board[0] === 2 && this.board[1] === 5) {
            this.player2.wins++;
        } else if (this.board[0] === 1 && this.board[1] === 5) {
            this.player2.wins++;
        } else if (this.board[0] === 3 && this.board[1] === 4) {
            this.player2.wins++;
        } else if (this.board[0] === 2 && this.board[1] === 4) {
            this.player2.wins++;
        } else if (this.board[0] === 1 && this.board[1] === 4) {
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
        } else if (this.board[0] === 4 && this.board[1] === 1) {
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 4 && this.board[1] === 2) {
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 4 && this.board[1] === 3) {
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 5 && this.board[1] === 1) {
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 5 && this.board[1] === 2) {
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 5 && this.board[1] === 3) {
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 3 && this.board[1] === 5) {
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
        } else if (this.board[0] === 2 && this.board[1] === 5) {
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
        } else if (this.board[0] === 1 && this.board[1] === 5) {
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
        } else if (this.board[0] === 3 && this.board[1] === 4) {
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
        } else if (this.board[0] === 2 && this.board[1] === 4) {
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
        } else if (this.board[0] === 1 && this.board[1] === 4) {
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
        }
        
     }

    
    testWinMode() {
        if (this.board[0] === this.board[1]) {
            console.log("Its a DRAW");
            document.getElementById("instructor-tag").innerHTML = "DRAW [!!]";
        } else {
        this.computerChoice
        }
        this.testWin();
        this.restart();
    };
    
    // this function instantiates new class instances of player 1 and player 2 as objects through our Game Class constructor and returns default (new game).
    // this.board is re assigned a empty. Data model updated
    //DOM manipulated return to "Choose Game" menu.(difficulty = 0[newgame])
    
    resetGame() {
        newGame = new Game()
        difficulty = 0
        this.resetGameHtml();
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


//this function is instantiating a new Game restart (new Game Class instance)  after a certain amount of time has occured as the event listener is clicked on our Classic or Future Game Button (Starting a game mode in "Classic" or "Future")
// Researched setTimeut() method which sets a delay to the resetGame function which marks a 'new round' after 15 seconds.
// Inserted this function into Event Listeners for 'classic' and 'future' button to start a timer for the game. Then restarts the whole entire game calling the "resetGame"

delayRestart() {
    setTimeout(function() {
        newGame = new Game();
        newGame.resetGameHtml();
        newGame.resetGame();

    }, 15000)
    }

//this restartRound function is setting a delay to the restart function and being used as a helper method inside the Displaycomputerchoice function after the cumputer choice  has been displayed
//instantianting and new round within the games time scope.

restartRound() {
    setTimeout(() => {
        if (difficulty === 1) {
            document.getElementById("rock").classList.remove("hidden");
            document.getElementById("paper").classList.remove("hidden");
            document.getElementById("scissors").classList.remove("hidden");
        } else if (difficulty === 2) {
            document.getElementById("rock").classList.remove("hidden");
            document.getElementById("paper").classList.remove("hidden");
            document.getElementById("scissors").classList.remove("hidden");
            document.getElementById("boom").classList.remove("hidden");
            document.getElementById("hand").classList.remove("hidden");
        }
        this.restart();
    
    }, 1000);
    
}
    // computerChoice Function-
    // declares variable 'choices' (functional scope) of computer choices (rock, paper, scissors, boom, hand)
    // declares variable 'randomChoice' (functional scope) that randomixes and assigns it a number b/t 0 and 5
    // declares variable 'computerChoice' (functional scope) that assigns the value from the 'choices' array and index [randomChoice]
    // sets value of this.board[1] to the computerChoice variable to be accessed.

computerChoice() {
    var choices = [1, 2, 3, 4, 5]; 
    var randomChoice =  Math.floor(Math.random() * 5);
    var computerChoice = choices[randomChoice];
    this.board[1] = computerChoice;
    return computerChoice
    }

// displayComputerChoice assigns a (functional scope) variable and assigns the
// value of computerChoice function ( represents the computers choice = randomized number b/t 1 and 5)
// adds the class "hidden"  to [Rock,Paper,Scissors,Boom,Hand] . ids which will hide them
// it then uses a conditional if/else statement to check the randomized computers choice and remove the hidden class
// this in the game mode will reveal the computers choice


    displayComputerChoice() {
        var computerChoice = this.computerChoice();
        document.getElementById("rock").classList.add("hidden");
        document.getElementById("paper").classList.add("hidden");
        document.getElementById("scissors").classList.add("hidden");
        document.getElementById("boom").classList.add("hidden");
        document.getElementById("hand").classList.add("hidden");


    if (computerChoice === 1 && newGame.difficulty === 1) {
        document.getElementById("rock").classList.remove("hidden");
        } else if (computerChoice === 2) {
        document.getElementById("paper").classList.remove("hidden");
        } else if (computerChoice === 3) {
        document.getElementById("scissors").classList.remove("hidden");
        } 

    if (computerChoice === 1 && newGame.difficulty === 2 ) {
        document.getElementById("rock").classList.remove("hidden");
        } else if (computerChoice === 2 && newGame.difficulty === 2) {
        document.getElementById("paper").classList.remove("hidden");
        } else if (computerChoice === 3 && newGame.difficulty === 2) {
        document.getElementById("scissors").classList.remove("hidden");
        } else if (computerChoice === 4 && newGame.difficulty === 2) {
        document.getElementById("boom").classList.remove("hidden");
        } else if (computerChoice === 5 && newGame.difficulty === 2) {
        document.getElementById("hand").classList.remove("hidden");
        }
    this.restartRound()
    }

    resetGameHtml() {
        document.getElementById("instructor-tag").innerHTML = "Choose game."
    }
    
  }



