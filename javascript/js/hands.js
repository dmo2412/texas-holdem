var Hand = require("pokersolver").Hand;

class Hands {
    constructor() {
        this.values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        this.suits = ['s', 'c', 'h', 'd'];
        this.cards = [];
        this.player1 = {
            name: 'Phil Ivey',
            stack: 100,
            cardPool: [],
            status: 'live'
        }
        this.player2 = {
            name: 'Tom Dwan',
            stack: 100,
            cardPool: [],
            status: 'live'
        }
        this.player3 = {
            name: 'Me',
            stack: 100,
            cardPool: [],
            status: 'live'
        }
        this.victor = ''
    }

    getDeck() {
        for (let i = 0; i < this.values.length; i++) {
            for (let j = 0; j < this.suits.length; j++) {
                let ele = values[i].concat(suits[j]);
                this.cards.push(ele);
            }
        }
    }


    shuffle() {
        var i, j ,temp;
        for (i = this.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        };
    };
    

    getCards() {
        for (let i = 0; i < 2; i++) {
            this.player1.cardPool.push(this.cards[0]);
            this.cards.shift()
            this.player2.cardPool.push(this.cards[0]);
            this.cards.shift()
            this.player3.cardPool.push(this.cards[0]);
            this.cards.shift()
        }
        let middlecards = cards.slice(0, 5);
        this.player1.cardPool.concat(middlecards);
        this.player2.cardPool.concat(middlecards);
        this.player3.cardPool.concat(middlecards);
    }

    getWinner() {
        
        var hand1 = Hand.solve(player1);
        var hand2 = Hand.solve(player2);
        var hand3 = Hand.solve(player3);
        // let victor;
        var winner = Hand.winners([hand1, hand2, hand3]); 
        // console.log(winner)
        if (hand1.cardPool === winner[0].cardPool) {
            this.victor = this.player1
        } else if (hand2.cardPool === winner[0].cardPool) {
            this.victor = this.player1
        } else {
            this.victor = this.player1
        }
    }
}
module.exports = Hands;

