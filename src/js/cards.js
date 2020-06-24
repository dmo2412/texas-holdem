document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const suits = ['s', 'c', 'h', 'd'];
    let cards = [];
    let player1 = {
        name: 'Me',
        stack: 100,
        cardPool: [],
        holecards: [],
        status: 'live'
    }
    let player2 = {
        name: 'Tom Dwan',
        stack: 100,
        cardPool: [],
        holecards: [],
        status: 'live'
    }
    let player3 = {
        name: 'Phil Ivey',
        stack: 100,
        cardPool: [],
        holecards: [],
        status: 'live'
    }
    
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
    document.getElementById('hands').onclick = function dealCards() {
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
        let arr = [player1.holecards, player2.holecards, player3.holecards];
        console.log(arr)
        hands.innerHTML = arr;
        // let middlecards = cards.slice(0, 5);
        // for (let i = 0; i < middlecards.length; i++) {
        //     player1.cardPool.push(middlecards[i])
        //     player2.cardPool.push(middlecards[i])
        //     player3.cardPool.push(middlecards[i])
        // }
        // let first3 = middlecards.slice(0,3);
        // let fourth = middlecards[3];
        // let fifth = middlecards[4];
        // let housecards = [middlecards, first3, fourth, fifth]
        // return housecards
    }
    let middlecards = [];

    document.getElementById('flop').onclick = function flopCards() {
        c = cards.slice(0,3)
        middlecards = middlecards.concat(c);
        player1.cardPool = player1.cardPool.concat(middlecards)
        player2.cardPool = player2.cardPool.concat(middlecards)
        player3.cardPool = player3.cardPool.concat(middlecards)
        flop.innerHTML = middlecards;
        cards = cards.slice(3,46)
    }



    document.getElementById('turn').onclick = function turnCard() {
        middlecards.push(cards[0]);
        player1.cardPool.push(middlecards[3]);
        player2.cardPool.push(middlecards[3]);
        player3.cardPool.push(middlecards[3]);
        turn.innerHTML = player1.cardPool[5];
        cards.shift();
    }

    document.getElementById('river').onclick = function riverCard() {
        middlecards.push(cards[0]);
        player1.cardPool.push(middlecards[4]);
        player2.cardPool.push(middlecards[4]);
        player3.cardPool.push(middlecards[4]);
        river.innerHTML = player1.cardPool[6];
        cards.shift();
    }

    document.getElementById('solve').onclick = function winningHand() {
        let hand1 = Hand.solve(player1.cardPool);
        let hand2 = Hand.solve(player2.cardPool);
        let hand3 = Hand.solve(player3.cardPool);
        let hands = [hand1, hand2, hand3];
        let winner = Hand.winners(hands);
        let champ;
        if (hand1.cardPool === winner[0].cardPool) {
            champ = player1
        } else if (hand2.cardPool === winner[0].cardPool) {
            champ = player2
        } else {
            champ = player3
        }
        solve.innerHTML = champ.name;
    }



    
    

// // playerCards.append(hands)
    
})
