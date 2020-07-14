
// import scoreboard from '../javascript/js-old/scoreboard';
// import table from '../javascript/js-old/table'
// import player_chips from '../javascript/js-old/player_chips';
// import shuffle from '../javascript/js/shuffle'
import Deck from '../javascript/js/deck'
import Cards from '../javascript/js/preflop';
import Game from '../javascript/js/game';
import Betting from '../javascript/js/betting';
import Fold from '../javascript/js/fold'
// const shuffle = require('shuffle');
document.addEventListener("DOMContentLoaded", () => {
    // table();
    // shuffle()
    const deal = new Cards();
    const game = new Game();
    // const bet = new Betting();
    game.createGame();
    

    document.getElementById('hands').onclick = function dealTheCards() {
        deal.dealCards();
        // bet.placeBet();
    }

    document.getElementById('fold').onclick = function foldYourCards() {
        const fold = new Fold();
        fold.removePlayer();
        window.count += 1;
    }

    document.getElementById('betbutton').onclick = function placeYourBet() {
        const bet = new Betting();
        bet.placeBet();
        deal.startScoreboard();
        game.playerTurn();
        window.count += 1;
    }
    
})