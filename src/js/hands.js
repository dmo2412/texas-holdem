var Hand = require("pokersolver").Hand;

const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const suits = ['s', 'c', 'h', 'd'];
let cards = [];
for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
        let ele = values[i].concat(suits[j]);
        cards.push(ele);
    }
}

let scramble = function shuffle(cards) {
    var i, j ,temp;
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
};
cards = scramble(cards);

num = Math.floor(Math.random() * 52);
let player1 = [];
let player2 = [];
let player3 = [];
let players = [player1, player2, player3];


for (let i = 0; i < 2; i++) {
    player1.push(cards[0]);
    cards.shift()
    player2.push(cards[0]);
    cards.shift()
    player3.push(cards[0]);
    cards.shift()
}
let middlecards = cards.slice(0, 5);
player1 = player1.concat(middlecards);
player2 = player2.concat(middlecards);
player3 = player3.concat(middlecards);

const getWinner = () => {
    
    var hand1 = Hand.solve(player1);
    var hand2 = Hand.solve(player2);
    var hand3 = Hand.solve(player3);
    var winner = Hand.winners([hand1, hand2, hand3]); 
    // console.log(winner)
    if (hand1.cardPool === winner[0].cardPool) {
        return player1
    } else if (hand2.cardPool === winner[0].cardPool) {
        player2
    } else {
        return player3
    }
    // console.log(winner)
}
module.exports = getWinner;
