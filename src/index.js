
// import scoreboard from '../javascript/js-old/scoreboard';
// import table from '../javascript/js-old/table'
// import player_chips from '../javascript/js-old/player_chips';
// import shuffle from '../javascript/js/shuffle'
import Deck from '../javascript/js/deck'
import Cards from '../javascript/js/preflop';
import Game from '../javascript/js/game';
import Betting from '../javascript/js/betting';
import Fold from '../javascript/js/fold';
import NextCard from '../javascript/js/nextcard';
// const shuffle = require('shuffle');
document.addEventListener("DOMContentLoaded", () => {
    // table();
    // shuffle()
    const deal = new Cards();
    const game = new Game();
    // const bet = new Betting();
    game.createGame();
    window.betRound = 0;
    window.betCount = 0;
    window.riverTurn = 0;
    window.lastBet = 0;

    if (window.winner) {
        game.resetGame();
        debugger
    }

    document.getElementById('hands').onclick = function dealTheCards() {
        deal.dealCards();


        // bet.placeBet();
    }

    document.getElementById('fold').onclick = function foldYourCards() {
        const fold = new Fold();
        fold.removePlayer();
        window.count += 1;
        // window.flopCount += 1;
        game.fold();
        // game.playerTurn();
        // game.resetGame();
    }

    document.getElementById('betbutton').onclick = function placeYourBet() {
        const bet = new Betting();
        deal.startScoreboard();
        game.call();
        window.count += 1;
        
    }
    
})