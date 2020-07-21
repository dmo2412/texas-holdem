
export default class SolveHand {
    solveHands() {
        var Hand = require("pokersolver").Hand;
        let playerHands = [];
        let rez;
        if (window.lastBet === window.players.length) {
            for (let i = 0; i < window.players.length; i++) {
                rez = Hand.solve(window.players[i].cardPool)
                playerHands.push(rez)
            }
            window.winner = Hand.winners(playerHands)
            
            this.setCardPool();
            this.returnWinner();
            window.lastBet += 4;
            let first = window.playerList[0];
            window.playerList.shift(1);
            window.playerList.push(first);
            window.players = window.playerList;
            window.handCount = 0;
            window.deck.cards = [];
            window.betRound = -1;
            window.count = 0;
            let player2cards = [];
            let card1;
            let card2;
            let card;
            for (let i = 0; i < 2; i++) {
                card1 = window.player2.holecards[i];
                debugger
                if (card1[1] === 'd') {
                    card = card1[0] + '🔹'
                    player2cards.push(card)
                } else if (card1[1] === 's') {
                    card = card1[0] + '♠️'
                    player2cards.push(card)
                } else if (card1[1] === 'h') {
                    card = card1[0] + '❤️'
                    player2cards.push(card)
                } else if (card1[1] === 'c') {
                    debugger
                    card = card1[0] + '🍀'
                    debugger
                    player2cards.push(card)
                }
                debugger
            }

            
            d3.selectAll(".player3cards").remove();
            d3.select("#player3carddiv").selectAll("p")
                .data(player2cards)
                .enter()
                .append('p')
                .text(function (d) { return d })
                .attr("class", 'player3cardsrez')
            
            d3.select("#pokertable").selectAll('h3')
            .data(window.winningPlayerName)
            .enter()
            .append("h3")
            .text(function (d) {return d + " wins pot with " + window.winner[0].descr})
            .attr("class", "winnerName")
            
        }
    }

    returnWinner() {
        for (let i = 0; i < players.length; i++) {
            if (JSON.stringify(window.players[i].cardPool.sort()) === JSON.stringify(window.winningHand)) {
                console.log(window.players[i].name)
                window.players[i].chips += window.pot.chips;
                window.pot.chips = 0;
                window.winningPlayerName = [window.players[i].name];
            }
        }

    }

    setCardPool() {
        window.winningHand = [];
        let val;
        let suit;
        let card;
        for (let i = 0; i < 7; i++) {
            val = window.winner[0].cardPool[i].value;
            suit = window.winner[0].cardPool[i].suit;
            card = val.concat(suit)
            window.winningHand.push(card)
        }

        window.winningHand = window.winningHand.sort();
        // console.log(window.winningHand)
    }

    
}