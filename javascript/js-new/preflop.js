import Deck from './deck';

export default class Preflop {
    constructor() {
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
            name: 'Phil Ivey',
            chips: 1000,
            deadmoney: 0,
            currentBet: 0,
            cardPool: [],
            holecards: [],
            showCards: {},
            status: true
        }
        window.dealCount = 0;
        window.pot = { name: 'Pot', chips: 0 }
        window.players = [window.player1, window.player2];
        window.theData = [window.player1, window.player2, window.pot];
        window.deck = new Deck();
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    setOrder() {
        let player0 = window.players[0];
        window.players.shift();
        window.players.push(player0);
    }

    dealCards() {
        if (window.dealCount === 0){
        this.setOrder();
        this.placeBlinds();
        window.deck.createCards();
        for (let i = 0; i < 2; i++) {
            window.players[0].holecards.push(window.deck.cards[0]);
            window.players[0].cardPool.push(window.deck.cards[0]);
            window.deck.cards.shift();
            window.players[1].holecards.push(window.deck.cards[0]);
            window.players[1].cardPool.push(window.deck.cards[0]);
            window.deck.cards.shift();
        }
        window.player1Cards = [];

        let card1;
        let cardVal;
        for (let i = 0; i < 2; i++) {
            card1 = window.player1.holecards[i];
            if (card1[1] === 'd') {
                cardVal = card1[0] + '🔹'
                window.player1Cards.push(cardVal)
            } else if (card1[1] === 's') {
                cardVal = card1[0] + '♠️'
                window.player1Cards.push(cardVal)
            } else if (card1[1] === 'h') {
                cardVal = card1[0] + '❤️'
                window.player1Cards.push(cardVal)
            } else if (card1[1] === 'c') {
                cardVal = card1[0] + '🍀'
                window.player1Cards.push(cardVal)
            }
        }
        window.dealCount += 1;
        d3.select("#player1carddiv").selectAll("p")
            .data(window.player1Cards)
            .enter()
            .append('p')
            .text(function (d) { return d })
            .attr("class", 'player1cards')

        d3.select("#player2carddiv").selectAll("p")
            .data(['🎴🎴'])
            .enter()
            .append('p')
            .text(function (d) { return d })
            .attr("class", 'player2cards')
    }
    }

    placeBlinds() {
        let first;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (window.players[0] === window.player1) {
            window.player1.chips -= 5;
            window.player1.deadmoney += 5;
            window.player1.currentBet += 5;
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

            window.player2.chips -= 10;
            window.player2.deadmoney += 10;
            window.player2.currentBet += 10;
            this.ctx.beginPath();
            this.ctx.arc(260, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "tomato";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            first = window.players[0]
            window.players.shift();
            window.players.push(first);
        } else if (window.players[0] === window.player2) {
            window.player2.chips -= 5;
            window.player2.deadmoney += 5;
            window.player2.currentBet += 5;
            this.ctx.beginPath();
            this.ctx.arc(260, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "tomato";
            this.ctx.text = '10';
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.strokeStyle = "black";
            this.ctx.stroke();

            window.player1.chips -= 10;
            window.player1.deadmoney += 10;
            window.player1.currentBet += 10;

            first = window.players[0]
            window.players.shift();
            window.players.push(first);

            this.ctx.beginPath();
            this.ctx.arc(270, 20, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "tomato";
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

}