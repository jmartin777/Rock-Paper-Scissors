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
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 2 && this.board[1] === 1) {
            this.player1.wins++;
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 3 && this.board[1] === 2) {
            this.player1.wins++;
            console.log(`${this.player1.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player1.name} wins!`;
        } else if (this.board[0] === 1 && this.board[1] === 2) {
            this.player2.wins++;
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
        } else if (this.board[0] === 2 && this.board[1] === 3) {
            this.player2.wins++;
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
        } else if (this.board[0] === 3 && this.board[1] === 1) {
            this.player2.wins++;
            console.log(`${this.player2.name} wins!`);
            document.getElementById("instructor-tag").innerHTML = `${this.player2.name} wins!`;
        }
    }
    
    testWinClassicMode() {
        if (newGame.board[0] === newGame.board[1]) {
            console.log("Its a DRAW");
            document.getElementById("instructor-tag").innerHTML = "DRAW [!!]";
        } else {
            this.testWinClassic()
        }
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
        
    resetBoard() {
        this.board = [];
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

   