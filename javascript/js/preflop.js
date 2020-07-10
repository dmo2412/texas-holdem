import Deck from './deck';
import Betting from './betting';

const deck = require('./deck').default;

export default class Cards {
    constructor() {
        this.player1 = {
            name: 'Mike McDermott',
            chips: 1000,
            cardPool: [],
            holecards: [],
            showCards: {},
            status: true
        }   
        this.player2 = {
            name: 'Tom Dwan',
            chips: 1000,
            cardPool: [],
            holecards: [],
            showCards: {},
            status: true
        }
        this.player3 = {
            name: 'Phil Ivey',
            chips: 1000,
            cardPool: [],
            holecards: [],
            showCards: {},
            status: true
        }
        this.pot = { name: 'Pot', chips: 0 }
        this.players = [this.player3, this.player1, this.player2];
        this.theData = [this.player1, this.player2, this.player3, this.pot];
        this.deck = new Deck();
        this.count = 0;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    setOrder() {
        let player0 = this.players[0];
        this.players.shift();
        this.players.push(player0);
        
    }

    dealCards() {
        if (this.count === 0) {

            this.setOrder();
            
            this.placeBlinds();
            
            this.deck.createCards();
            // let cards = this.deck.cards;
            for (let i = 0; i < 2; i++) {
                this.players[0].holecards.push(this.deck.cards[0]);
                this.players[0].cardPool.push(this.deck.cards[0]);
                this.deck.cards.shift();
                this.players[1].holecards.push(this.deck.cards[0]);
                this.players[1].cardPool.push(this.deck.cards[0]);
                this.deck.cards.shift();
                this.players[2].holecards.push(this.deck.cards[0]);
                this.players[2].cardPool.push(this.deck.cards[0]);
                this.deck.cards.shift();
            }
            d3.select("#player1carddiv").selectAll("p")
                .data(this.player1.holecards)
                .enter()
                .append('p')
                .text(function (d) { return d })
                .attr("class", 'player1cards')

            d3.select("#player2carddiv").selectAll("p")
                .data(this.player2.holecards)
                .enter()
                .append('p')
                .text(function (d) { return d })
                .attr("class", 'player2cards')

            d3.select("#player3carddiv").selectAll("p")
                .data(this.player3.holecards)
                .enter()
                .append('p')
                .text(function (d) { return d })
                .attr("class", 'player3cards')
        }   
        this.count += 1;
    }

    retainCards() {
        return this.deck;
    }

    placeBlinds() {
        let first;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // this.ctx.beginPath();
        var arr = this.players.slice(0,2);
        if (arr[0] === this.player1) {
            this.player1.chips -= 5;
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.arc(300, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "tomato";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = this.players[0]
            this.players.shift();
            this.players.push(first);

            this.player2.chips -=10;
            this.ctx.beginPath();
            this.ctx.arc(260, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "yellow";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = this.players[0]
            this.players.shift();
            this.players.push(first);
        } else if (arr[0] === this.player2) {
            this.player2.chips -= 5;
            this.ctx.beginPath();
            this.ctx.arc(260, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "yellow";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = this.players[0]
            this.players.shift();
            this.players.push(first);
            
            this.player3.chips -= 10;
            this.ctx.beginPath();
            this.ctx.arc(270, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "blue";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = this.players[0]
            this.players.shift();
            this.players.push(first);

        } else if (arr[0] === this.player3) {
            this.player1.chips -= 10;
            this.ctx.beginPath();
            this.ctx.arc(300, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "tomato";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = this.players[0]
            this.players.shift();
            this.players.push(first);

            this.player3.chips -= 5;

            this.ctx.beginPath();
            this.ctx.arc(270, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "blue";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = this.players[0]
            this.players.shift();
            this.players.push(first);

        }
        this.pot.chips += 15;
        d3.selectAll(".playernames").remove();
        this.startScoreboard();

    }

    startScoreboard() {
        d3.select("#chipcount").selectAll("p")
            .data(this.theData)
            .enter()
            .append("p")
            .text(function (d) { return d.name + " : " + d.chips; })
            .attr("class", "playernames");
    }

    placeBet() {
        // console.log(this.player1)
        Betting.player1;
    }
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