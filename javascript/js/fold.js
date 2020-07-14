import preflop from './preflop';

export default class Fold {
    removePlayer() {
        window.players.shift();
        this.removeCards()
    }

    removeCards() {
        if (window.players[0] === window.player1) {
            d3.selectAll(".player3cards").remove();
        } else if (window.players[0] === window.player2) {
            d3.selectAll(".player1cards").remove();
        } else if (window.players[0] === window.player3) {
            d3.selectAll(".player3cards").remove();
        }
    }
}