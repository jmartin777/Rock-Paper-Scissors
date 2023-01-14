class Game {
    constructor() {
        this.player1 = new Player({ name: "Player 1", icon: "😃", turn: true });
        this.player2 = new Player({ name: "Computer", icon: "😛", turn: false });
        this.board = [];
        this.gameType = null;
    }
    

    testWin() {
        console.log("Test Win!")
        console.log("Player 1 Selected:");
        console.log(newGame.board[0]);
        console.log("Player 2 Selected:");
        console.log(newGame.board[1]);
    }

    testDraw() {
        if (newGame.board[0] === newGame.board[1]) {
            console.log("Its a DRAW");
            document.getElementById("instructor-tag").innerHTML = "DRAW [!!]";

    }
}

    resetBoard() {
        this.board = [];
    }

    setGameType() {
        this.gameType = null;
    }
}



