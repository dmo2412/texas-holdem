import Deck from './deck';
import Preflop from './preflop';
import NextCard from './nextcard';
import Betting from './betting';
import SolveHand from './result';

const deck = require('./deck');
const cards = require('./preflop');
const bet = require('./betting')
const nextCard = require('./nextcard')

export default class Game {
    constructor() {
        this.deck = new Deck();
        this.cards = new Preflop();
        this.nextCard = new NextCard();
        this.bet = new Betting();
        this.solveHand = new SolveHand();
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
    
    call() {
        this.bet.preflopBet();
        this.bet.postflopBet();
        this.bet.postturnBet();
        this.bet.postriverBet();
        this.cards.startScoreboard();
        // let first = window.players[0];
        // window.players.shift();
        // window.players.push(first);
        window.flopCount += 1;
        this.nextCard.postFlop();
        this.nextCard.postTurn();
        this.nextCard.postRiver();
        this.solveHand.solveHands();
    }

    fold() {
        window.flopCount += 1;
        this.nextCard.postFlop();
        this.nextCard.postTurn();
        this.nextCard.postRiver();
        this.solveHand.solveHands();
    }

    resetGame() {
        let player = window.playerList[0];
        window.playerList.shift();
        window.playerList.push(player);
        window.players = window.playerList;
        window.deck = new Deck();
        d3.selectAll(".player3cards").remove();
        d3.selectAll(".player1cards").remove();
        d3.selectAll(".player2cards").remove();
        // window.pot.chips = 0;

        for (let i = 0; i < window.players.length; i++) {
            window.players[i].deadmoney = 0;
            window.players[i].currentBet = 0;
            window.players[i].cardPool = [];
            window.players[i].showCards = {};
        }
    }

}