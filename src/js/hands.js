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
    var i,
        j,
        temp;
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
let dealt = [];
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
// console.log(player1);
player2 = player2.concat(middlecards);
// console.log(player2);
player3 = player3.concat(middlecards);
// console.log(player3);
var hand1 = Hand.solve(player1);
console.log(hand1.cardPool);
console.log(hand1);
var hand2 = Hand.solve(player2);
var hand3 = Hand.solve(player3);
console.log(hand2);
console.log(hand3);
var winner = Hand.winners([hand1, hand2, hand3]); 
console.log(winner)
if (hand1.cardPool === winner[0].cardPool) {
    console.log('player1')
} else if (hand2.cardPool === winner[0].cardPool) {
    console.log('player2')
} else {
    console.log('player3')
}


// console.log(winner[0].cardPool);


// if (winner === hand1) {
//     console.log('player1');
//     // console.log(hand1)
// } else if (winner === hand2) {
//     console.log('player2');
//     // console.log(hand2);
// } else if (winner === hand3) {
//     console.log('player3');
//     // console.log(hand3)
// }
// // var hand1 = Hand.solve(player1.concat(middlecards));
// // var hand1 = player1.concat(middlecards);
// // var hand2 = player2.concat(middlecards);
// // var hand3 = player3.concat(middlecards);
// console.log(hand1);

// // console.log(hand1.name);
// // console.log(hand1.descr);
// // var hand2 = Hand.solve(player2.concat(middlecards));
// console.log(hand2);
// // console.log(hand2.name);
// // console.log(hand2.descr);
// // var hand3 = Hand.solve(player3.concat(middlecards));
// console.log(hand3);
// // console.log(hand3.name);
// // console.log(hand3.descr);
// var winner = Hand.winners([hand1, hand2, hand3]);
// console.log(winner);

