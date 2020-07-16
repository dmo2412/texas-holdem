import Deck from './deck';
import betting from './betting';
import Betting from './betting';

// const deck = require('./deck');

export default class Cards {
    constructor() {
        this.betting = new Betting();
        window.player1 = {
            name: 'Mike McDermott',
            chips: 1000,
            deadmoney: 0,
            currentBet: 0,
            cardPool: [],
            holecards: [],
            showCards: {},
            status: true
        }   
        window.player2 = {
            name: 'Tom Dwan',
            chips: 1000,
            deadmoney: 0,
            currentBet: 0,
            cardPool: [],
            holecards: [],
            showCards: {},
            status: true
        }
        window.player3 = {
            name: 'Phil Ivey',
            chips: 1000,
            deadmoney: 0,
            currentBet: 0,
            cardPool: [],
            holecards: [],
            showCards: {},
            status: true
        }
        window.middleCards = [];
        window.pot = { name: 'Pot', chips: 0 }
        window.players = [window.player3, window.player1, window.player2];
        window.theData = [window.player1, window.player2, window.player3, window.pot];
        window.deck = new Deck();
        window.playerList = window.players;
        this.count = 0;
        window.flopCount = 0;
        window.turnCount = 0;
        window.riverCount = 0;
        // window.betRound = 0;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        // sessionStorage.setItem('player1', this.player1)
        
    }

    setOrder() {
        let player0 = window.players[0];
        window.players.shift();
        window.players.push(player0);
        
    }

    dealCards() {
        if (this.count === 0) {

            this.setOrder();
            
            this.placeBlinds();
            
            window.deck.createCards();
            // let cards = this.deck.cards;
            for (let i = 0; i < 2; i++) {
                window.players[0].holecards.push(window.deck.cards[0]);
                window.players[0].cardPool.push(window.deck.cards[0]);
                window.deck.cards.shift();
                window.players[1].holecards.push(window.deck.cards[0]);
                window.players[1].cardPool.push(window.deck.cards[0]);
                window.deck.cards.shift();
                window.players[2].holecards.push(window.deck.cards[0]);
                window.players[2].cardPool.push(window.deck.cards[0]);
                window.deck.cards.shift();
            }
            d3.select("#player1carddiv").selectAll("p")
                .data(window.player1.holecards)
                .enter()
                .append('p')
                .text(function (d) { return d })
                .attr("class", 'player1cards')

            d3.select("#player2carddiv").selectAll("p")
                .data(window.player2.holecards)
                .enter()
                .append('p')
                .text(function (d) { return d })
                .attr("class", 'player2cards')

            d3.select("#player3carddiv").selectAll("p")
                .data(window.player3.holecards)
                .enter()
                .append('p')
                .text(function (d) { return d })
                .attr("class", 'player3cards')
        }   
        this.count += 1;
        window.pot.chips = 15;
        // console.log(window.player1)
    }

    retainCards() {
        return window.deck;
    }

    placeBlinds() {
        let first;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // this.ctx.beginPath();
        var arr = window.players.slice(0,2);
        if (arr[0] === window.player1) {
            window.player1.chips -= 5;
            window.player1.deadmoney += 5;
            window.player1.currentBet += 5;
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.arc(300, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "tomato";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = window.players[0]
            window.players.shift();
            window.players.push(first);

            window.player2.chips -=10;
            window.player2.deadmoney += 10;
            window.player2.currentBet += 10;
            this.ctx.beginPath();
            this.ctx.arc(260, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "yellow";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = window.players[0]
            window.players.shift();
            window.players.push(first);
        } else if (arr[0] === window.player2) {
            window.player2.chips -= 5;
            window.player2.deadmoney += 5;
            window.player2.currentBet += 5;
            this.ctx.beginPath();
            this.ctx.arc(260, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "yellow";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = window.players[0]
            window.players.shift();
            window.players.push(first);
            
            window.player3.chips -= 10;
            window.player3.chips += 10;
            window.player3.currentBet += 10;
            this.ctx.beginPath();
            this.ctx.arc(270, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "blue";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = window.players[0]
            window.players.shift();
            window.players.push(first);

        } else if (arr[0] === window.player3) {
            window.player1.chips -= 10;
            window.player1.deadmoney += 10;
            window.player1.currentBet += 10;
            this.ctx.beginPath();
            this.ctx.arc(300, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "tomato";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = window.players[0]
            window.players.shift();
            window.players.push(first);

            window.player3.chips -= 5;
            window.player3.deadmoney += 5;
            window.player3.currentBet += 5;

            this.ctx.beginPath();
            this.ctx.arc(270, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "blue";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = window.players[0]
            window.players.shift();
            window.players.push(first);

        }
        window.pot.chips += 15;
        d3.selectAll(".playernames").remove();
        this.startScoreboard();

    }

    startScoreboard() {
        d3.selectAll(".playernames").remove();
        d3.select("#chipcount").selectAll("p")
            .data(window.theData)
            .enter()
            .append("p")
            .text(function (d) { return d.name + " : " + d.chips; })
            .attr("class", "playernames");
    }

    // placeBet() {
    //     // console.log(this.player1)
    //     this.betting.player();
    // }
}

// class Person {

//     get name() {
//         return this._name + '!!!'
//     }

//     set name(newValue) {
//         this._name = newValue
//     }

//     constructor(name) {
//         this._name = name
//     }
// }

// const me = new Person('Zach')
// console.log(me.name)            // Zach!!!

// me.name = 'Jacob'
// console.log(me.name)            // Jacob!!!

// // Of course, _name is not actually private.
// console.log(me._name)           // Jacob