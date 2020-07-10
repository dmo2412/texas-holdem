const game = () => {
    var pot = { name: 'Pot', chips: 0 }
    let middlecards = [];
    let c;
    let num;
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const suits = ['s', 'c', 'h', 'd'];
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    let cards = [];
    let x1 = 270;
    let y1 = 15;
    let x2 = 265;
    let y2 = 21;
    let x3 = 290;
    let y3 = 20;
    let player1 = {
        name: 'Mike McDermott',
        chips: 100,
        cardPool: [],
        holecards: [],
        showCards: {},
        status: true
    }
    let player2 = {
        name: 'Tom Dwan',
        chips: 100,
        cardPool: [],
        holecards: [],
        showCards: {},
        status: true
    }
    let player3 = {
        name: 'Phil Ivey',
        chips: 100,
        cardPool: [],
        holecards: [],
        showCards: {},
        status: true
    }
    var theData = [player1, player2, player3, pot];
    let players = [player1, player2, player3];


    d3.select("#chipcount").selectAll("p")
        .data(theData)
        .enter()
        .append("p")
        .text(function (d) { return d.name + " : " + d.chips; })
        .attr("class", "playernames");

    let turn = 0;
    let betTurn = 0;
    let dealTurn = 0;
    let playertracker = 0;

    document.getElementById('hands').onclick = function dealCards() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
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
                cards.shift();
               
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
        } else {
            players = [player1, player2, player3];
            for (let i = 0; i < players.length; i++) {
                players[i].cardPool = [];
                players[i].holecards = [];
                players[i].status = true;
            }
            for (let i = 0; i < 2; i++) {
                player1.holecards.push(cards[0]);
                player1.cardPool.push(cards[0]);
                cards.shift()
                player2.holecards.push(cards[0]);
                player2.cardPool.push(cards[0]);
                cards.shift()
                player3.holecards.push(cards[0]);
                player3.cardPool.push(cards[0]);
                cards.shift();

            }
            turn = 0;
            betTurn = 0;
            middlecards = [];
            pot.chips = 0;

            if (player1.chips < 30) {
                player1.chips = 100;
            }
            if (player2.chips < 30) {
                player2.chips = 100;
            }
            if (player3.chips < 30) {
                player3.chips = 100;
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
    let first;
    document.getElementById("fold").onclick = function foldCards() {
        playertracker += 1
        if (players[0] === player1) {
            player1.status = false;
            // players.shift();
            d3.selectAll(".player1cards").remove();
        } else if (players[0] === player2) {
            player2.status = false;
            d3.selectAll(".player2cards").remove();
            // players.shift();
        } else if (players[0] === player3) {
            player3.status = false;
            d3.selectAll(".player3cards").remove();
            players.shift();
        }   
        if (playertracker % players.length === 0 && turn === 0 && players.length > 1) {
            debugger
            num = players.length;
            turn += 1;
            playertracker = 0;
            c = cards.slice(0, 3)
            middlecards = middlecards.concat(c);
            player1.cardPool = player1.cardPool.concat(middlecards)
            player2.cardPool = player2.cardPool.concat(middlecards)
            player3.cardPool = player3.cardPool.concat(middlecards)
            cards = cards.slice(3, 46);

            d3.select("#flopcard-anchor").selectAll("p")
                .data(middlecards)
                .enter()
                .append("p")
                .text(function (d) { return d })
                .attr("class", "flopcards")
        }
        players.shift();
        betTurn += 1;
        if (players.length === 1) {
            console.log(players[0])
        }
    }

    document.getElementById("betbutton").onclick = function placeBet() {
        playertracker += 1;
        if (betTurn < 3) {
            if (players[0] === player1) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(300, 20, 10, 0, Math.PI * 2);
                ctx.fillStyle = "tomato";
                ctx.text = '10';
                ctx.fill();
                ctx.closePath();
                ctx.strokeStyle = "black";
                ctx.stroke();
                player1.chips = player1.chips - 10;
                players.shift();
                players.push(player1);
                pot.chips += 10;
                betTurn += 1;
            } else if (players[0] === player2) {
                player2.chips = player2.chips - 10;
                ctx.beginPath();
                ctx.arc(260, 20, 10, 0, Math.PI * 2);
                ctx.fillStyle = "yellow";
                ctx.text = '10';
                ctx.fill();
                ctx.closePath();
                ctx.strokeStyle = "black";
                ctx.stroke();
                players.shift();
                players.push(player2);
                pot.chips += 10;
                betTurn += 1;
            } else if (players[0] === player3) {
                player3.chips = player3.chips - 10;
                ctx.beginPath();
                ctx.arc(270, 20, 10, 0, Math.PI * 2);
                ctx.fillStyle = "blue";
                ctx.text = '10';
                ctx.fill();
                ctx.closePath();
                ctx.strokeStyle = "black";
                ctx.stroke();
                players.shift(player3);
                players.push(player3);
                pot.chips += 10;
                betTurn += 1;
            }
            if (playertracker % players.length === 0) {
                playertracker = 0;
                c = cards.slice(0, 3)
                middlecards = middlecards.concat(c);
                player1.cardPool = player1.cardPool.concat(middlecards)
                player2.cardPool = player2.cardPool.concat(middlecards)
                player3.cardPool = player3.cardPool.concat(middlecards)
                cards = cards.slice(3, 46);
                num = players.length;

                d3.select("#flopcard-anchor").selectAll("p")
                    .data(middlecards)
                    .enter()
                    .append("p")
                    .text(function (d) { return d })
                    .attr("class", "flopcards")

                }
                d3.selectAll(".playernames").remove();
            d3.select("#chipcount").selectAll("p")
                .data(theData)
                .enter()
                .append("p")
                .text(function (d) { return d.name + " : " + d.chips; })
                .attr("class", "playernames");
        } else if (betTurn >= 3 ) {
            if (players[0] === player1) {
                ctx.beginPath();
                ctx.arc(x1, y1, 10, 0, Math.PI * 2);
                ctx.fillStyle = "tomato";
                ctx.text = '10';
                ctx.fill();
                ctx.closePath();
                ctx.strokeStyle = "black";
                ctx.stroke();
                player1.chips = player1.chips - 10;
                players.shift();
                players.push(player1);
                pot.chips += 10;
                x1 += 10;
                y1 += 2;
                num -= 1;
            } else if (players[0] === player2) {
                player2.chips = player2.chips - 10;
                ctx.beginPath();
                ctx.arc(x2, y2, 10, 0, Math.PI * 2);
                ctx.fillStyle = "yellow";
                ctx.text = '10';
                ctx.fill();
                ctx.closePath();
                ctx.strokeStyle = "black";
                ctx.stroke();
                players.shift();
                players.push(player2);
                pot.chips += 10;
                x2 -= 15;
                y2 += 2;
                num -= 1;
            } else if (players[0] === player3) {
                player3.chips = player3.chips - 10;
                ctx.beginPath();
                ctx.arc(x3, y3, 10, 0, Math.PI * 2);
                ctx.fillStyle = "blue";
                ctx.text = '10';
                ctx.fill();
                ctx.closePath();
                ctx.strokeStyle = "black";
                ctx.stroke();
                players.shift(player3);
                players.push(player3);
                pot.chips += 10;
                x3 -= 12;
                y3 += 2;
                num -= 1;
            }
            if (num === 0) {
                middlecards.push(cards[0]);
                player1.cardPool.push(middlecards[middlecards.length - 1]);
                player2.cardPool.push(middlecards[middlecards.length - 1]);
                player3.cardPool.push(middlecards[middlecards.length - 1]);
                cards.shift();
                d3.selectAll('.flopcards').remove();
                d3.select('#flopcard-anchor').selectAll('span')
                    .data(middlecards)
                    .enter()
                    .append('span')
                    .text(function (d) { return d })
                    .attr("class", 'flopcards')
                d3.selectAll(".playernames").remove();
                d3.select("#chipcount").selectAll("p")
                    .data(theData)
                    .enter()
                    .append("p")
                    .text(function (d) { return d.name + " : " + d.chips; })
                    .attr("class", "playernames");
            }

        }
    }

}

export default game;