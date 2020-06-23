document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // const cards = document.querySelector('.cards');
    const playerCards = document.querySelector('.playerCards');
    const flop = document.querySelector('.flop');
    const turn = document.querySelector('.turn');
    const river = document.querySelector('.river')
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const suits = ['s', 'c', 'h', 'd'];
    let cards = [];
    let player1 = {
        name: 'Me',
        stack: 100,
        cardPool: [],
        status: 'live'
    }
    let player2 = {
        name: 'Tom Dwan',
        stack: 100,
        cardPool: [],
        status: 'live'
    }
    let player3 = {
        name: 'Phil Ivey',
        stack: 100,
        cardPool: [],
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
    for (let i = 0; i < 2; i++) {
        player1.cardPool.push(cards[0]);
        cards.shift()
        player2.cardPool.push(cards[0]);
        cards.shift()
        player3.cardPool.push(cards[0]);
        cards.shift()
    }

    let middlecards = cards.slice(0, 5);

    for (let i = 0; i < middlecards.length; i++) {
        player1.cardPool.push(middlecards[i])
        player2.cardPool.push(middlecards[i])
        player3.cardPool.push(middlecards[i])
    }

    let first3 = middlecards.slice(0,3);
    let fourth = middlecards[3];
    let fifth = middlecards[4];
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


    console.log(champ)
    debugger  
})
