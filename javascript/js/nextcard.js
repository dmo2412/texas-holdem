const deck = require('./deck');
const preflop = require('./preflop');
const check = require('./check');

export default class NextCard {
    postFlop() {
        if (window.flopCount === 2) {
            // window.playerTurn = 0;
            let c = window.deck.cards.slice(0,3);
            
            window.middleCards = window.middleCards.concat(c);
            
            for (let i = 0; i < window.players.length; i++) {
                window.players[i].cardPool.push(window.deck.cards[0])
                window.players[i].cardPool.push(window.deck.cards[1])
                window.players[i].cardPool.push(window.deck.cards[2])
            }
            window.deck.cards = window.deck.cards.slice(3);
            window.betRound += 1;
            
            window.flopCount += 1;
            window.numPlayers = window.players.length;
            
            d3.select("#flopcard-anchor").selectAll("p")
                .data(window.middleCards)
                .enter()
                .append("p")
                .text(function (d) { return d })
                .attr("class", "flopcards")
        }
    }

    postTurn() {
        if (window.betCount === window.players.length) {
            let c = window.deck.cards[0]
            window.playerTurn = 2;
            window.middleCards[3] = c;
            
            for (let i = 0; i < window.players.length; i++) {
                window.players[i].cardPool.push(c)
            }
            window.deck.cards = window.deck.cards.slice(1);
            
            d3.select("#flopcard-anchor").selectAll("p")
                .data(window.middleCards)
                .enter()
                .append("p")
                .text(function (d) { return d })
                .attr("class", "flopcards")
                window.betRound += 1;
                window.numPlayers = window.players.length;
                window.betCount += 1;

                // let first = window.players[0];
                // window.players.shift();
                // window.players.push(first);

        }
    }

    postRiver() {
        if (window.turnCount === window.players.length) {
            let c = window.deck.cards[0];
            window.playerTurn = 3;
            window.middleCards[4] = c;

            for (let i = 0; i < window.players.length; i++) {
                window.players[i].cardPool.push(c)
            }
            window.deck.cards = window.deck.cards.slice(1);
            d3.select("#flopcard-anchor").selectAll("p")
                .data(window.middleCards)
                .enter()
                .append("p")
                .text(function (d) { return d })
                .attr("class", "flopcards")
                window.betRound += 1;
                window.turnCount += 1;
        }
    }


}