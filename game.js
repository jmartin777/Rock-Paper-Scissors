class Game {
    constructor() {
        this.player1 = new Player({ name: "Player 1", icon: "😃", turn: true, wins: 0 });
        this.player2 = new Player({ name: "Computer", icon: "😛", turn: false, wins: 0 });
        this.board = [];
    }

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
        } else if(this.board[0] === 4 && this.board[1] === 2) {
        this.player1.wins++;
        } else if(this.board[0] === 4 && this.board[1] === 3) {
        this.player1.wins++
        } else if(this.board[0] === 5 && this.board[1] === 3) {
        this.player1.wins++;
        } else if(this.board[0] === 5 && this.board[1] === 1) {
        this.player1.wins++;
        } else if(this.board[0] === 5 && this.board[1] === 2) {
        this.player1.wins++;
        } else if(this.board[0] === 1 && this.board[1] === 4) {
        this.player2.wins++;
        } else if(this.board[0] === 2 && this.board[1] === 4) {
        this.player2.wins++;
        } else if(this.board[0] === 3 && this.board[1] === 4) {
        this.player2.wins++;
        } else if(this.board[0] === 1 && this.board[1] === 5) {
        this.player2.wins++;
        } else if(this.board[0] === 2 && this.board[1] === 5) {
        this.player2.wins++;
        } else if(this.board[0] === 3 && this.board[1] === 5) {
        this.player2.wins++;
        }
    
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
    this.updateWins
}

testWinMode() {
    if (this.board[0] === this.board[1]) {
        console.log("Its a DRAW");
        document.getElementById("instructor-tag").innerHTML = "DRAW [!!]";
    } else {
    this.computerChoice
    }
    this.testWin();
    this.updateWins();
    this.restart();
};
    
resetGame() {
    newGame = new Game()
    difficulty = 0
    this.updateWins();
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

restart() {
    this.board = [null, null];
    this.player1.turn = true;
    this.player2.turn = false;
    this.updateWins();
}

delayRestart() {
    setTimeout(function() {
        newGame = new Game();
        newGame.resetGameHtml();
        newGame.resetGame();
        newGame.updateWins();

    }, 15000)
}

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
    this.updateWins();
    }, 1000);   
}

computerChoice() {
    if (difficulty === 1) {
    var choices = [1, 2, 3]; 
    var randomChoice =  Math.floor(Math.random() * 3);
    var computerChoice = choices[randomChoice];
    this.board[1] = computerChoice;
    } else if ( difficulty === 2) {
    var choices = [1, 2, 3, 4, 5]; 
    var randomChoice =  Math.floor(Math.random() * 5);
    var computerChoice = choices[randomChoice];
    this.board[1] = computerChoice;
    }
    return computerChoice
}
    
displayComputerChoice() {
        var computerChoice = this.computerChoice();
        document.getElementById("rock").classList.add("hidden");
        document.getElementById("paper").classList.add("hidden");
        document.getElementById("scissors").classList.add("hidden");
        document.getElementById("boom").classList.add("hidden");
        document.getElementById("hand").classList.add("hidden");

    if (computerChoice === 1) {
        document.getElementById("rock").classList.remove("hidden");
        } else if (computerChoice === 2) {
        document.getElementById("paper").classList.remove("hidden");
        } else if (computerChoice === 3) {
        document.getElementById("scissors").classList.remove("hidden");
        } else if (computerChoice === 1) {
        document.getElementById("rock").classList.remove("hidden");
        } else if (computerChoice === 2 ) {
        document.getElementById("paper").classList.remove("hidden");
        } else if (computerChoice === 3 ) {
        document.getElementById("scissors").classList.remove("hidden");
        } else if (computerChoice === 4 ) {
        document.getElementById("boom").classList.remove("hidden");
        } else if (computerChoice === 5 ) {
        document.getElementById("hand").classList.remove("hidden");
    }
    this.restartRound()
    this.updateWins();
}

resetGameHtml() {
    document.getElementById("instructor-tag").innerHTML = "Choose game."
    }

updateWins() {
    player1Wins.innerHTML = ` ${this.player1.wins}`;
    player2Wins.innerHTML = ` ${this.player2.wins}`;
    }
}



