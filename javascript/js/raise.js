export default class Raise {
    constructor() {
        window.preflopRaiseCount = 2;
    }


    preflopRaise() {
        if (window.betRound === 0) {
            if (window.players[0] === window.player1 && window.count === 0) {
                window.player1.chips -= 2 * window.players[-1].currentBet;
                window.player1.currentBet = 2 * window.players[-1].currentBet;
                window.pot.chips += 2 * window.players[-1].currentBet
                let first = window.players[0];
                window.players.shift();
                window.players.push(first);
            }
        }
    }
}