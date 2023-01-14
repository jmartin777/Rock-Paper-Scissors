class Game {
    constructor() {
        this.player1 = new Player({ name: "Player 1", icon: "😃", turn: true });
        this.player2 = new Player({ name: "Computer", icon: "😛", turn: false });
        this.board = [];
        this.gameType = null;
    }

    testWin() {
         console.log("Test Win!")
    }

    testDraw() {
        
    }

    resetBoard() {
        this.board = [];
    }

    setGameType(type) {
        this.gameType = type;
    }
}



