export default class Raise {
    preflopTwoTimesRaise() {
        if (window.betRound === 0){
            if (window.players[0] === window.player1) {
                window.player1.chips -= window.player2.currentBet * 2 - window.player1.currentBet;
                window.pot.chips += window.player2.currentBet * 2 - window.player1.currentBet;
                window.player1.currentBet = window.player2.currentBet * 2;
                window.player1.deadmoney += window.player2.currentBet * 2 - window.player1.deadmoney;
                let first = window.players[0];
                window.players.shift();
                window.players.push(first);
            } else if (window.players[0] === window.player2) {
                window.player2.chips -= window.player1.currentBet * 2 - window.player2.currentBet;
                window.pot.chips += window.player1.currentBet * 2 - window.player2.currentBet;
                window.player2.currentBet = window.player1.currentBet * 2;
                window.player2.deadmoney += window.player1.currentBet * 2 - window.player2.deadmoney;
                let first = window.players[0];
                window.players.shift();
                window.players.push(first);
            }
        
        window.firstBet += 1;
        }
    }

    postflopRaise() {
        if (window.betRound === 1 && window.players[1].currentBet === 0) {
            window.players[0].chips -= 10;
            window.pot.chips += 10;
            window.players[0].deadmoney += 10;
            window.players[0].currentBet = 10;
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
        } else if (window.betRound === 1 && window.players[1].currentBet > 0) {
            window.players[0].chips -= window.players[1].currentBet * 2 - window.players[0].currentBet;
            window.pot.chips += window.players[1].currentBet * 2 - window.players[0].currentBet;
            window.players[0].deadmoney += window.players[1].currentBet * 2 - window.players[0].currentBet;
            window.players[0].currentBet = window.players[1].currentBet * 2;
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
        }
    }

    postTurnRaise() {
        if (window.betRound === 3 && window.players[1].currentBet === 0) {
            window.players[0].chips -= 10;
            window.pot.chips += 10;
            window.players[0].deadmoney += 10;
            window.players[0].currentBet = 10;
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.turnBetCount += 1;
        } else if (window.betRound === 3 && window.players[1].currentBet > 0) {
            window.players[0].chips -= window.players[1].currentBet * 2 - window.players[0].currentBet;
            window.pot.chips += window.players[1].currentBet * 2 - window.players[0].currentBet;
            window.players[0].deadmoney += window.players[1].currentBet * 2 - window.players[0].currentBet;
            window.players[0].currentBet = window.players[1].currentBet * 2;
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
        }
    }

    postRiverRaise() {
        if (window.betRound === 4 && window.players[1].currentBet === 0) {
            window.players[0].chips -= 10;
            window.pot.chips += 10;
            window.players[0].deadmoney += 10;
            window.players[0].currentBet = 10;
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
        } else if (window.betRound === 4 && window.players[1].currentBet > 0) {
            window.players[0].chips -= window.players[1].currentBet * 2 - window.players[0].currentBet;
            window.pot.chips += window.players[1].currentBet * 2 - window.players[0].currentBet;
            window.players[0].deadmoney += window.players[1].currentBet * 2 - window.players[0].currentBet;
            window.players[0].currentBet = window.players[1].currentBet * 2;
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
        }
    }
}