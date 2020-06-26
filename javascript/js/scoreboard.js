

const scoreboard = () => {
    debugger
    var pot = {name: 'Pot', chips: 0}
    let middlecards = [];
    let c;
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const suits = ['s', 'c', 'h', 'd'];
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x1 = canvas.width / 2;
    var y1 = canvas.height - 30;
    var dx = 2;
    var dy = -10;
    let cards = [];
    let player1 = {
        name: 'Me',
        chips: 100,
        cardPool: [],
        holecards: [],
        status: 'live'
    }
    let player2 = {
        name: 'Tom Dwan',
        chips: 100,
        cardPool: [],
        holecards: [],
        status: 'live'
    }
    let player3 = {
        name: 'Phil Ivey',
        chips: 100,
        cardPool: [],
        holecards: [],
        status: 'live'
    }
    var theData = [player1, player2, player3, pot];
    let players = [player1, player2, player3]

    d3.select("#chipcount").selectAll("p")
        .data(theData)
        .enter()
        .append("p")
        .text(function (d) { return d.name + " : " + d.chips; })
        .attr("class", "playernames");

    // for (let i = 0; i < values.length; i++) {
    //     for (let j = 0; j < suits.length; j++) {
    //         let ele = values[i].concat(suits[j]);
    //         cards.push(ele);
    //     }
    // }
    // var i, j, temp;
    // for (i = cards.length - 1; i > 0; i--) {
    //     j = Math.floor(Math.random() * (i + 1));
    //     temp = cards[i];
    //     cards[i] = cards[j];
    //     cards[j] = temp;
    // };
    let turn = 0;
    let betTurn = 0
    let dealTurn = 0;
    document.getElementById('hands').onclick = function dealCards() {
        // if (dealTurn === 0) {
            // const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
            // const suits = ['s', 'c', 'h', 'd'];
            // let cards = [];
            cards = [];

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
            dealTurn += 1
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
            }
            // let arr = [player1.holecards, player2.holecards, player3.holecards];

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

        if (betTurn >= 4) {
            turn = 0;
            betTurn = 0;
            dealTurn = 0;
            middlecards = [];
            pot.chips = 0;

            for (let i = 0; i < players.length; i++) {
                players[i].cardPool = [];
                players[i].holecards = [];
            }
            d3.selectAll(".player1cards").remove();
            d3.selectAll(".player2cards").remove();
            d3.selectAll(".player3cards").remove();
            d3.selectAll(".flopcards").remove();
            d3.selectAll(".playernames").remove();
            d3.selectAll(".champ").remove();

            d3.select("#chipcount").selectAll("p")
                .data(theData)
                .enter()
                .append("p")
                .text(function (d) { return d.name + " : " + d.chips; })
                .attr("class", "playernames");
        }
    }

    document.getElementById('betbutton').onclick = function placeBet() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x1, y1, 10, 0, Math.PI * 2);
        ctx.fillStyle = "tomato";
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        x1 += dx;
        y1 += dy;



        if (betTurn === 0) {
            if (turn % 3 === 0) {
                player1.chips = player1.chips - 10;
            } else if (turn % 3 === 1) {
                player2.chips = player2.chips - 10;
            } else if (turn % 3 === 2) {
                player3.chips = player3.chips - 10;
                betTurn += 1
                c = cards.slice(0, 3)
                middlecards = middlecards.concat(c);
                player1.cardPool = player1.cardPool.concat(middlecards)
                player2.cardPool = player2.cardPool.concat(middlecards)
                player3.cardPool = player3.cardPool.concat(middlecards)
                cards = cards.slice(3, 46);
                
                d3.select("#player1carddiv").selectAll("span")
                    .data(middlecards)
                    .enter()
                    .append("span")
                    .text(function (d) { return d })
                    .attr("class", "flopcards")
            }
            turn += 1;
            pot.chips += 10;
        
        d3.selectAll(".playernames").remove();


        d3.select("#chipcount").selectAll("p")
            .data(theData)
            .enter()
            .append("p")
            .text(function (d) { return d.name + " : " + d.chips; })
            .attr("class", "playernames");
            
        }else if (betTurn === 1 || betTurn === 2) {
            if (turn % 3 === 0) {
                player1.chips = player1.chips - 10;
            } else if (turn % 3 === 1) {
                player2.chips = player2.chips - 10;
            } else if (turn % 3 === 2) {
                player3.chips = player3.chips - 10;
                betTurn += 1;
                middlecards.push(cards[0]);
                player1.cardPool.push(middlecards[middlecards.length - 1]);
                player2.cardPool.push(middlecards[middlecards.length - 1]);
                player3.cardPool.push(middlecards[middlecards.length - 1]);
                cards.shift();
                d3.selectAll('.flopcards').remove();
                
                d3.select('#player1carddiv').selectAll('span')
                .data(middlecards)
                .enter()
                .append('span')
                .text(function (d) {return d})
                .attr("class", 'flopcards')
            }
            turn += 1;
            pot.chips += 10;
            d3.selectAll(".playernames").remove();


            d3.select("#chipcount").selectAll("p")
                .data(theData)
                .enter()
                .append("p")
                .text(function (d) { return d.name + " : " + d.chips; })
                .attr("class", "playernames");
        } else if (betTurn === 3) {
            let hand1 = Hand.solve(player1.cardPool);
            let hand2 = Hand.solve(player2.cardPool);
            let hand3 = Hand.solve(player3.cardPool);
            let hands = [hand1, hand2, hand3];
            let winner = Hand.winners(hands);
            let champ;
            if (hand1.cardPool === winner[0].cardPool) {
                champ = player1.name
                player1.chips += pot.chips;
            } else if (hand2.cardPool === winner[0].cardPool) {
                champ = player2.name
                player2.chips += pot.chips;
            } else {
                champ = player3.name
                player3.chips += pot.chips;
            }
            console.log(champ)
            // let victor = [champ]
            // champ is a string of the winner's name
            let champion = [{name: champ}];
            d3.select(".champ").selectAll('p')
            .data(champion)
            .enter()
            .append("p")
            .text(function (d) {return  d.name + ' wins the pot' })
            .attr("class", "champ")
            betTurn += 1

        }
    } 
}
export default scoreboard;

