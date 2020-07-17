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
            window.styledCards = []
            // ♢
            // ♠
            // ♡
            // ♣
            let card;
            for (let i = 0; i < window.middleCards.length; i++) {
                if (window.middleCards[i][1] === 'd') {
                    card = window.middleCards[i];
                    card = card[0] + '🔹';
                    // card.style.color = "blue"
                    window.styledCards.push(card);
                } else if (window.middleCards[i][1] === 's') {
                    card = window.middleCards[i];
                    card = card[0] + '♠️';
                    // card.style.color = "black"
                    window.styledCards.push(card);
                } else if (window.middleCards[i][1] === 'h') {
                    card = window.middleCards[i];
                    card = card[0] + '❤️';
                    // card.style.color = "red"
                    window.styledCards.push(card);
                } else if (window.middleCards[i][1]=== 'c') {
                    card = window.middleCards[i];
                    card = card[0] + '🍀';
                    // card.style.color = "green"
                    window.styledCards.push(card);
                }
            }
            
            d3.select("#flopcard-anchor").selectAll("p")
                .data(window.styledCards)
                .enter()
                .append("p")
                .text(function (d) { return d })
                .attr("class", "flopcards")
        }
    }

    postTurn() {
        if (window.betCount === window.players.length) {
            let card = window.deck.cards[0];
            let c = card;
            if (card[1] === 'd') {
                // card = window.middleCards[i];
                card = card[0] + '🔹';
                
                // card.style.color = "blue"
                window.styledCards.push(card);
            } else if (card[1] === 's') {
                // card = window.middleCards[i];
                card = card[0] + '♠️';
                // card.style.color = "black"
                window.styledCards.push(card);
            } else if (card[1] === 'h') {
                // card = window.middleCards[i];
                card = card[0] + '❤️';
                // card.style.color = "red"
                window.styledCards.push(card);
            } else if (card[1] === 'c') {
                // card = window.middleCards[i];
                card = card[0] + '🍀';
                // card.style.color = "green"
                window.styledCards.push(card);
            }

            window.playerTurn = 2;
            window.middleCards[3] = c;
            
            for (let i = 0; i < window.players.length; i++) {
                window.players[i].cardPool.push(c)
            }
            window.deck.cards = window.deck.cards.slice(1);
            
            d3.select("#flopcard-anchor").selectAll("p")
                .data(window.styledCards)
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
            let card = window.deck.cards[0];
            
            window.playerTurn = 3;
            window.middleCards[4] = c;
            if (card[1] === 'd') {
                // card = window.middleCards[i];
                card = card[0] + '🔹';
                // card.style.color = "blue"
                window.styledCards.push(card);
            } else if (card[1] === 's') {
                // card = window.middleCards[i];
                card = card[0] + '♠️';
                // card.style.color = "black"
                window.styledCards.push(card);
            } else if (card[1] === 'h') {
                // card = window.middleCards[i];
                card = card[0] + '❤️';
                // card.style.color = "red"
                window.styledCards.push(card);
            } else if (card[1] === 'c') {
                // card = window.middleCards[i];
                // let symbol = '🍀'
                // symbol.style.fontSize = '1px'
                card = card[0] + '☘️';

                // card.style.color = "green"
                window.styledCards.push(card);
            }

            for (let i = 0; i < window.players.length; i++) {
                window.players[i].cardPool.push(c)
            }
            window.deck.cards = window.deck.cards.slice(1);
            d3.select("#flopcard-anchor").selectAll("p")
                .data(window.styledCards)
                .enter()
                .append("p")
                .text(function (d) { return d })
                .attr("class", "flopcards")
                window.betRound += 1;
                window.turnCount += 1;
        }
    }


}