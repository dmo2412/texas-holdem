import Deck from './deck';
import Preflop from './preflop';
import Call from './calling';
import Check from './check';
import NextCard from './nextcard';
import Raise from './raise';
import SolveHand from './result';

const deck = require('./deck')
const cards = require('./preflop');
const call = require('./calling');

export default class Game {
    constructor() {
        this.deck = new Deck();
        this.cards = new Preflop();
        this.calling = new Call();
        this.checking = new Check();
        this.nextCard = new NextCard();
        this.raising = new Raise();
        this.solve = new SolveHand();
    }

    createGame() {
        this.cards.startScoreboard();
    }

    call() {
        this.calling.preflopCallFive();
        this.calling.preflopCall();
        this.calling.postflopCall();
        this.calling.postTurnCall();
        this.calling.postRiverCall();
        this.nextCard.postFlop();
        this.nextCard.postTurn();
        this.nextCard.postRiver();
        this.solve.solveHands();
        this.cards.startScoreboard();
    }

    check() {
        this.checking.preflopCheck();
        this.checking.postflopCheck();
        this.checking.postTurnCheck();
        this.checking.postRiverCheck();
        this.nextCard.postFlop();
        this.nextCard.postTurn();
        this.nextCard.postRiver();
        this.solve.solveHands();
    }

    raiseTwoTimes() {
        this.raising.preflopTwoTimesRaise();
        this.raising.postflopRaise();
        this.raising.postTurnRaise();
        this.raising.postRiverRaise();
        this.cards.startScoreboard();
    }
}