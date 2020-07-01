// import chips from './chips';
var chips = require('./chips');
const deal = () => {
    // debugger
    var pot = chips.pot;
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const suits = ['s', 'c', 'h', 'd'];
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    let cards = [];
    let dealTurn = 0;
    let players = [player1, player2, player3];
    let middlecards = [];

    document.getElementById('hands').onclick = function dealCards() {
        cards = [];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                let ele = values[i].concat(suits[j]);
                cards.push(ele);
            }
        }
        var i, j, temp;
        for (i = cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        };

        if (dealTurn === 0) {
            dealTurn += 1;
            for (let i = 0; i < 2; i++) {
                player1.holecards.push(cards[0]);
                player1.cardPool.push(cards[0]);
                cards.shift()
                player2.holecards.push(cards[0]);
                player2.cardPool.push(cards[0]);
                cards.shift()
                player3.holecards.push(cards[0]);
                player3.cardPool.push(cards[0]);
                cards.shift()

                d3.select("#player1carddiv").selectAll("p")
                    .data(player1.holecards)
                    .enter()
                    .append('p')
                    .text(function (d) { return d })
                    .attr("class", 'player1cards')

                d3.select("#player2carddiv").selectAll("p")
                    .data(player2.holecards)
                    .enter()
                    .append('p')
                    .text(function (d) { return d })
                    .attr("class", 'player2cards')

                d3.select("#player3carddiv").selectAll("p")
                    .data(player3.holecards)
                    .enter()
                    .append('p')
                    .text(function (d) { return d })
                    .attr("class", 'player3cards')
            }
            if (dealTurn >= 1) {
                players = [player1, player2, player3]
                pot.chips = 0;
                let ele = players[0];
                players.shift();
                players.push(ele);
                middlecards = [];
                pot.chips = 0;
                player1.status = true;
                player2.status = true;
                player3.status = true;

                if (player1.chips < 30) {
                    player1.chips = 100;
                }
                if (player2.chips < 30) {
                    player2.chips = 100;
                }
                if (player3.chips < 30) {
                    player3.chips = 100;
                }
                for (let i = 0; i < players.length; i++) {
                    players[i].cardPool = [];
                    players[i].holecards = [];
                }
                d3.selectAll(".player1cards").remove();
                d3.selectAll(".player2cards").remove();
                d3.selectAll(".player3cards").remove();
                // d3.selectAll(".flopcards").remove();
                d3.selectAll(".playernames").remove();
                // d3.selectAll(".champ").remove();

                d3.select("#chipcount").selectAll("p")
                    .data(theData)
                    .enter()
                    .append("p")
                    .text(function (d) { return d.name + " : " + d.chips; })
                    .attr("class", "playernames");

                for (let i = 0; i < 2; i++) {
                    player1.holecards.push(cards[0]);
                    player1.cardPool.push(cards[0]);
                    card = cards[0];
                    char = card[0];
                    cards.shift()
                    player2.holecards.push(cards[0]);
                    player2.cardPool.push(cards[0]);
                    cards.shift()
                    player3.holecards.push(cards[0]);
                    player3.cardPool.push(cards[0]);
                    cards.shift()
                }

                    d3.select("#player1carddiv").selectAll("p")
                        .data(player1.holecards)
                        .enter()
                        .append('p')
                        .text(function (d) { return d })
                        .attr("class", 'player1cards')

                    d3.select("#player2carddiv").selectAll("p")
                        .data(player2.holecards)
                        .enter()
                        .append('p')
                        .text(function (d) { return d })
                        .attr("class", 'player2cards')

                    d3.select("#player3carddiv").selectAll("p")
                        .data(player3.holecards)
                        .enter()
                        .append('p')
                        .text(function (d) { return d })
                        .attr("class", 'player3cards')
            }
            


        }


    }
    

    // module.exports(player1)
}
export default deal;
