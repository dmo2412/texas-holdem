export default class SolveHand {
    solveHands() {
        var Hand = require("pokersolver").Hand;
        let playerHands = [];
        

        if (window.betRound === 5) {
            let rez1 = Hand.solve(window.player1.cardPool);
            playerHands.push(rez1);
            let rez2 = Hand.solve(window.player2.cardPool);
            playerHands.push(rez2);

            window.winner = Hand.winners(playerHands);
            this.setCardPool();
            this.returnWinner();
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);

            let player2cards = [];
            let card1;
            let card2;
            let card;
            for (let i = 0; i < 2; i++) {
                card1 = window.player2.holecards[i];
                
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
                    card = card1[0] + '🍀'
                    player2cards.push(card)
                }
            }
            window.dealCount = 0;
            window.betRound = 0;
            window.count = 0;
            window.firstBet = 0;
            window.turnCount = 0;
            window.flopCount = 0;
            window.turnBetCount = 0;
            window.riverBetCount = 0;
            window.middleCards = [];
            window.styledCards = [];
            window.player1.holecards = [];
            window.player2.holecards = [];
            window.player1.cardPool = [];
            window.player2.cardPool = [];



            d3.selectAll(".player2cards").remove();
            d3.select("player2carddiv").selectAll("p")
            .data(player2cards)
            .enter()
            .append('p')
            .text(function (d) { return d})
            .attr("class", 'player2cardsrez')

            d3.select("#pokertable").selectAll('h3')
                .data(window.winningPlayerName)
                .enter()
                .append("h3")
                .text(function (d) { return d + " wins pot with " + window.winner[0].descr })
                .attr("class", "winnerName")


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
}