const deck = require('./deck');
const preflop = require('./preflop');

export default class Check {
    checkTurn() {
        let player;
        if (window.players.length === 2) {
            if (window.players[0].currentBet >= window.players[-1].currentBet) {
                player = window.players[0];
                window.players.shift();
                window.players.push(player);
                window.playerTurn += 1;
            }
        } else if (window.players.length === 3) {
            if (window.players[0].currentBet >= window.players[-1].currentBet && window.players[0].currentBet >= window.players[2].currentBet) {
                player = window.players[0];
                window.players.shift();
                window.players.push(player);
                window.playerTurn += 1;
            }
        }
    }
}