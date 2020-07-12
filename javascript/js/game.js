import Deck from './deck';
import Preflop from './preflop';

const deck = require('./deck');
const cards = require('./preflop');
const betting = require('./betting')

export default class Game {
    constructor() {
        this.deck = new Deck();
        this.cards = new Preflop();
        
    }

    createGame() {
        this.cards.startScoreboard();
        this.cards.placeBet();
        // this.cards.dealCards();
        // this.cards.setBlinds();
        // debugger
        // this.deck.retainCards();
        // debugger
    }

}