const deck = require('./deck');
const preflop = require('./preflop');

export default class Betting {
    placeBet() {
        if (window.players[0] === window.player1) {
            window.player1.chips -= 10;
        } else if (window.players[0] === window.player2) {
            window.player2.chips -= 10;
        } else if (window.players[0] === window.player3) {
            window.player3.chips -= 10;
        }
    }

    

}
        // player() {
        //     window.player1.chips -= 10;
        //     console.log(window.player1)
        // }

// class Person {

//     get name() {
//         return this._name + '!!!'
//     }

//     set name(newValue) {
//         this._name = newValue
//     }

//     constructor(name) {
//         this._name = name
//     }
// }

// const me = new Person('Zach')
// console.log(me.name)            // Zach!!!

// me.name = 'Jacob'
// console.log(me.name)            // Jacob!!!

// // Of course, _name is not actually private.
// console.log(me._name)           // Jacob