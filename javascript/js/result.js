
export default class SolveHand {
    solveHands() {
        var Hand = require("pokersolver").Hand;
        let playerHands = [];
        let rez;
        if (window.lastBet === window.players.length) {
            debugger
            for (let i = 0; i < window.players.length; i++) {
                rez = Hand.solve(window.players[i].cardPool)
                playerHands.push(rez)
            }
            console.log(playerHands);
            window.winner = Hand.winners(playerHands)
            console.log(window.winner);
            debugger
            // this.returnWinner();
            this.setCardPool();
            debugger
        }
    }

    // returnWinner() {
    //     if (window.player1.cardPool === winner[0].cardPool) {
    //         console.log(window.player1)
    //     }else if (window.player2.cardPool === winner[0].cardPool) {
    //         console.log(window.player2)
    //     }else if (window.player3.cardPool === winner[0].cardPool) {
    //         console.log(window.player3)
    //     }
    //     debugger
    // }

    setCardPool() {
        window.winningHand = [];
        let val;
        let suit;
        let card;
        for (let i = 0; i < 7; i++) {
            val = window.winner[0].cardPool[i].value;
            suit = window.winner[0].cardPool[i].suit;
            card = val.concat(suit)
            window.winningHand.push(card)
        }
        console.log(window.winningHand)
        debugger
    }
}