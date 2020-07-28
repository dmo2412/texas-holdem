

export default class Call {
    constructor() {
        window.betRound = 0;
        window.count = 0;
        window.firstBet = 0;
    }

    preflopCallFive() {
        if (window.firstBet === 0 && window.betRound === 0) {
            if (window.players[0] === window.player1 && window.count === 0) {
                window.player1.chips -= (window.player2.currentBet - window.player1.currentBet);
                window.pot.chips += (window.player2.currentBet - window.player1.currentBet);
                window.player1.deadmoney += (window.player2.currentBet - window.player1.currentBet);
                window.player1.currentBet += (window.player2.currentBet - window.player1.currentBet);
                let first = window.players[0];
                window.players.shift();
                window.players.push(first);
            } else if (window.players[0] === window.player2 && window.count === 0) {
                window.player2.chips -= (window.player1.currentBet - window.player2.currentBet);
                window.pot.chips += (window.player1.currentBet - window.player2.currentBet);
                window.player2.deadmoney += (window.player1.currentBet - window.player2.currentBet);
                window.player2.currentBet += (window.player1.currentBet - window.player2.currentBet);
                let first = window.players[0];
                window.players.shift();
                window.players.push(first);
            }
            window.firstBet += 1;
           
        }
    }

    preflopCall() {
        if (window.firstBet > 0 && window.middleCards.length === 0 && window.players[1].currentBet > window.players[0].currentBet) {
            debugger
            window.players[0].chips -= (window.players[1].currentBet - window.players[0].currentBet);
            
            window.players[0].deadmoney += (window.players[1].currentBet -window.players[0].currentBet);
            window.players[0].currentBet = (window.players[1].currentBet);
            
            window.pot.chips = window.players[1].currentBet + window.players[0].currentBet;
            
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.turnCount += 1;
            
        }
    }

    postflopCall() {
        if (window.betRound === 1 && window.players[1].currentBet > window.players[0].currentBet) {
            window.players[0].chips -= (window.players[1].currentBet - window.players[0].currentBet);
            window.pot.chips += window.players[1].currentBet - window.players[0].currentBet;
            window.players[0].deadmoney += (window.players[1].currentBet - window.players[0].currentBet);
            window.players[0].currentBet = (window.players[1].currentBet);
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.turnCount += 1;
            window.betRound += 1;
        }
    }

    postTurnCall() {
        if (window.betRound === 3 && window.players[1].currentBet > window.players[0].currentBet) {
            window.players[0].chips -= (window.players[1].currentBet - window.players[0].currentBet);
            window.pot.chips += window.players[1].currentBet - window.players[0].currentBet;
            window.players[0].deadmoney += (window.players[1].currentBet - window.players[0].currentBet);
            window.players[0].currentBet = (window.players[1].currentBet);
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.turnCount += 1;
        }
    }

    postRiverCall() {
        if (window.betRound === 4 && window.players[1].currentBet > window.players[0].currentBet) {
            window.players[0].chips -= (window.players[1].currentBet - window.players[0].currentBet);
            window.pot.chips += window.players[1].currentBet - window.players[0].currentBet;
            window.players[0].deadmoney += (window.players[1].currentBet - window.players[0].currentBet);
            window.players[0].currentBet = (window.players[1].currentBet);
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.betRound += 1;
        }
    }



    

}