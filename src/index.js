
// import scoreboard from '../javascript/js-old/scoreboard';
// import table from '../javascript/js-old/table'
// import player_chips from '../javascript/js-old/player_chips';
// import shuffle from '../javascript/js/shuffle'
import Deck from '../javascript/js/deck'
import Cards from '../javascript/js/preflop';
import Game from '../javascript/js/game';
import Betting from '../javascript/js/betting';
// const shuffle = require('shuffle');
document.addEventListener("DOMContentLoaded", () => {
    // table();
    // shuffle()
    const deal = new Cards();
    const app = new Game();
    const bet = new Betting();
    app.createGame();

    document.getElementById('hands').onclick = function dealTheCards() {
        deal.dealCards();
        bet.placeBet;
    }
    
})