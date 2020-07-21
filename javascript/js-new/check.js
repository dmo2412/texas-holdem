

export default class Check {
    preflopCheck() {
        if (window.betRound === 0 && window.players[0].currentBet === window.players[1].currentBet) {
            // window.betRound += 1;
            window.turnCount += 1;
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
        } 
    }

    postflopCheck() {
        if (window.flopCount === 0 && window.betRound === 1 && window.players[0].currentBet === window.players[0].currentBet) {
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.flopCount += 1;
            debugger
        } else if (window.flopCount === 1 && window.betRound === 1 && window.players[0].currentBet === window.players[1].currentBet) {
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.turnCount += 1;
            window.betRound += 1;
            window.flopCount += 1;
            window.turnBetCount = 1;
            debugger
        }
    }

    postTurnCheck() {
        if (window.betRound === 3 && window.turnBetCount === 0 && window.players[0].currentBet === window.players[1].currentBet) {
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.turnBetCount += 1;
            debugger
        } else if (window.betRound === 3 && window.turnBetCount === 1 && window.players[0].currentBet === window.players[0].currentBet) {
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.turnCount += 1;
            debugger
        }
    }

    postRiverCheck() {
        if (window.betRound === 4 && window.riverBetCount === 0 && window.players[0].currentBet === window.players[1].currentBet) {
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.riverBetCount += 1;
            debugger
        } else if (window.betRound === 4 && window.riverBetCount === 1 && window.players[0].currentBet === window.players[1].currentBet) {
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.betRound += 1;
        }
    }

}