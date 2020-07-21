export default class NextCard {

    constructor() {
        window.middleCards = [];
    }

    postFlop() {
        if (window.turnCount === 1 && window.player1.currentBet === window.player2.currentBet) {
            
            let c = window.deck.cards.slice(0,3);
            window.middleCards = window.middleCards.concat(c);
        
            for (let i = 0; i < window.players.length; i++) {
                window.players[i].cardPool.push(window.deck.cards[0])
                window.players[i].cardPool.push(window.deck.cards[1])
                window.players[i].cardPool.push(window.deck.cards[2])
            }

            window.deck.cards = window.deck.cards.slice(3);
            window.betRound += 1;
            window.turnCount += 1;
            window.styledCards = [];
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
                } else if (window.middleCards[i][1] === 'c') {
                    card = window.middleCards[i];
                    card = card[0] + '🍀';
                    // card.style.color = "green"
                    window.styledCards.push(card);
                }
            }
            window.player1.currentBet = 0;
            window.player2.currentBet = 0;
            d3.select("#flopcard-anchor").selectAll("p")
                .data(window.styledCards)
                .enter()
                .append("p")
                .text(function (d) { return d })
                .attr("class", "flopcards")
        }
    }

    postTurn() {
        if (window.betRound === 2 && window.players[0].currentBet === window.players[1].currentBet && window.turnCount === 3) {
            let card = window.deck.cards[0];
            let c = card;

            if (card[1] === 'd') {
                card = card[0] + '🔹';
                window.styledCards.push(card);
            } else if (card[1] === 's') {
                card = card[0] + '♠️';
                window.styledCards.push(card);
            } else if (card[1] === 'h') {
                card = card[0] + '❤️';
                window.styledCards.push(card);
            } else if (card[1] === 'c') {
                card = card[0] + '🍀';
                window.styledCards.push(card);
            }
            window.middleCards[3] = c;
            for (let i = 0; i < window.players.length; i++) {
                window.players[i].cardPool.push(c)
            }
            d3.select("#flopcard-anchor").selectAll("p")
                .data(window.styledCards)
                .enter()
                .append("p")
                .text(function (d) { return d })
                .attr("class", "flopcards")

            window.player1.currentBet = 0;
            window.player2.currentBet = 0;
            window.betRound += 1;
            window.deck.cards.slice(1);
            window.flopCount = 0;
            window.turnBetCount = 0;
        }
    }

    postRiver() {
        if (window.betRound === 3 && window.players[0].currentBet === window.players[1].currentBet && window.turnCount === 4) {
            
            // window.deck.cards.slice(1);
            let c = window.deck.cards[1];
            let card = window.deck.cards[1];
            window.middleCards[4] = c;

            if (card[1] === 'd') {
                card = card[0] + '🔹';
                window.styledCards.push(card);
            } else if (card[1] === 's') {
                card = card[0] + '♠️';
                window.styledCards.push(card);
            } else if (card[1] === 'h') {
                card = card[0] + '❤️';
                window.styledCards.push(card);
            } else if (card[1] === 'c') {
                card = card[0] + '☘️';
                window.styledCards.push(card);
            }

            for (let i = 0; i < window.players.length; i++) {
                window.players[i].cardPool.push(c)
            }

            d3.select("#flopcard-anchor").selectAll("p")
                .data(window.styledCards)
                .enter()
                .append("p")
                .text(function (d) { return d })
                .attr("class", "flopcards")

            window.betRound += 1;
        }
    }
}