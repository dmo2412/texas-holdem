import Deck from './deck';
import Preflop from './preflop';

const deck = require('./deck');
const cards = require('./preflop');
const betting = require('./betting')

export default class Game {
    constructor() {
        this.deck = new Deck();
        this.cards = new Preflop();
        window.count = 0;
        
    }

    createGame() {
        this.cards.startScoreboard();
        // this.cards.placeBet();
        // this.cards.dealCards();
        // this.cards.setBlinds();
        // debugger
        // this.deck.retainCards();
        // debugger
    }

    playerTurn() {
        let first = window.players[0];
        window.players.shift();
        window.players.push(first);
    }

}