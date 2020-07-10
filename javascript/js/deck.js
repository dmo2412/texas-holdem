export default class Deck {
    constructor() {
        // this.suits = ['s', 'c', 'h', 'd'];
        // this.values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        this.cards = [];
    }

    createCards() {
        let suits = ['s', 'c', 'h', 'd'];
        let values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        var i, j, temp;
        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                let ele = values[i].concat(suits[j]);
                this.cards.push(ele);
            }
        }
        this.shuffleCards(this.cards)
        // for (i = this.cards.length - 1; i > 0; i--) {
        //     j = Math.floor(Math.random() * (i + 1));
        //     temp = this.cards[i];
        //     this.cards[i] = this.cards[j];
        //     this.cards[j] = temp;
        // };
    }

    shuffleCards() {
        var i, j, temp;
        for (i = this.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        };
        return this.cards;
        
    }
    retainCards() {
        return this.cards;
    }

    resetCards() {
        this.createCards(this.cards);
    }


}
// export default Shuffle;

