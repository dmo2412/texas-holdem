const values = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
const suits = ['s','c','h','d'];
let cards = [];

for (let i = 0; i < values.length; i++) {
    for (let j = 0; j< suits.length; j++) {
        let ele = values[i].concat(suits[j]);
        cards.push(ele);
    }
}
