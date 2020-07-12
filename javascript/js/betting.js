const deck = require('./deck');
const preflop = require('./preflop');

export default class Betting {
    constructor(player1) {
        this._player1 = player1;
    }

    player1() {
        console.log(this._player1);
    }
}

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