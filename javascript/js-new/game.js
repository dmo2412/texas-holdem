import Deck from './deck';
import Preflop from './preflop';
import Call from './calling';
import Check from './check';
import NextCard from './nextcard';
import Raise from './raise';
import SolveHand from './result';
import Fold from './fold';

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
        this.folding = new Fold();
    }

    createGame() {
        this.cards.startScoreboard();
        // d3.selectAll(".mikecurrentbet").remove()
        // d3.select('.MikeM').selectAll('p')
        //     .data(window.player1Bet)
        //     .enter()
        //     .append("p")
        //     .text(function (d) { return "current bet: " + d.currentBet })
        //     .attr("class", 'mikecurrentbet')
        // d3.selectAll(".philcurrentbet").remove()
        // d3.select('.phil').selectAll('p')
        //     .data(window.player1Bet)
        //     .enter()
        //     .append("p")
        //     .text(function (d) { return "current bet: " + d.currentBet })
        //     .attr("class", 'philcurrentbet')
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
        document.getElementById('call').innerHTML = "Call"
        // d3.selectAll(".mikecurrentbet").remove()
        // d3.select('.MikeM').selectAll('p')
        //     .data(window.player1Bet)
        //     .enter()
        //     .append("p")
        //     .text(function (d) { return "current bet: " + d.currentBet })
        //     .attr("class", 'mikecurrentbet')
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
        // d3.selectAll(".mikecurrentbet").remove()
        // d3.select('.MikeM').selectAll('p')
        //     .data(window.player1Bet)
        //     .enter()
        //     .append("p")
        //     .text(function (d) { return "current bet: " + d.currentBet })
        //     .attr("class", 'mikecurrentbet')
        
    }

    fold() {
        let first = window.players[0];
        window.players.shift()
        this.solve.resetHand();
        this.solve.solveHands();
        window.players.push(first)
        this.cards.startScoreboard();
        // d3.selectAll(".mikecurrentbet").remove()
        // d3.select('.MikeM').selectAll('p')
        //     .data(window.player1Bet)
        //     .enter()
        //     .append("p")
        //     .text(function (d) { return "current bet: " + d.currentBet })
        //     .attr("class", 'mikecurrentbet')
    }

    computer() {
        let ele = Math.floor(Math.random() * 10);
        let last = window.player1.currentBet;
        debugger
        if (last > window.player2.currentBet && window.players[0] === window.player2) {
            if (ele <= 1) {
                this.fold()
                document.getElementById('philbet').innerHTML = "fold"
                window.dealCountTurn = 0
                document.getElementById("whos-turn").innerHTML = ""
            } else if (ele <= 6 && ele > 1) {
                document.getElementById('philbet').innerHTML = "call " + window.player1.currentBet
                this.call()
            } else if (ele > 6) {
                this.raiseTwoTimes()
                document.getElementById('philbet').innerHTML = "raise to " + (window.player1.currentBet * 2)
                document.getElementById('call').innerHTML = "Call"
            }
            // d3.selectAll(".philcurrentbet").remove()
            // d3.select('.phil').selectAll('p')
            //     .data(window.player1Bet)
            //     .enter()
            //     .append("p")
            //     .text(function (d) { return "current bet: " + d.currentBet })
            //     .attr("class", 'philcurrentbet')
        } else if ((last === 0 || last === window.player2.currentBet)  && window.players[0] === window.player2) {
            if (ele <= 5) {
                this.check()
                document.getElementById('philbet').innerHTML = 'check'
            } else if (ele > 5) {
                this.raiseTwoTimes()
                document.getElementById('raise2x').innerHTML = "Raise to " + window.player2.currentBet * 2
                document.getElementById('philbet').innerHTML = 'raise to 20'
                // document.getElementById("call").innerHTML = "Call " + window.player2.currentBet
            }
            // d3.selectAll(".philcurrentbet").remove()
            // d3.select('.phil').selectAll('p')
            //     .data(window.player1Bet)
            //     .enter()
            //     .append("p")
            //     .text(function (d) { return "current bet: " + d.currentBet })
            //     .attr("class", 'philcurrentbet')
        }
    }
}