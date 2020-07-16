const deck = require('./deck');
const preflop = require('./preflop');
const nextcard = require('./nextcard')

export default class Betting {
    constructor() {
        this.count = 0;
    }
    
    preflopBet() {
        
        if (window.betRound === 0) {
            if (window.players[0] === window.player1 && window.count === 0) {
                window.player1.chips -= 10;
                window.pot.chips += 10;
                let first = window.players[0];
                window.players.shift();
                window.players.push(first);
                
                // this.count += 1;
            } else if (window.players[0] === window.player2 && window.count === 0) {
                window.player2.chips -= 10;
                window.pot.chips += 10;
                let first = window.players[0];
                window.players.shift();
                window.players.push(first);
                // this.count += 1;
                
            } else if (window.players[0] === window.player3 && window.count === 0) {
                window.player3.chips -= 10;
                window.pot.chips += 10;
                let first = window.players[0];
                window.players.shift();
                window.players.push(first);
                // this.count += 1;
                
            }
            if (window.count === 1) {
                if (window.players[0] === window.player1) {
                    window.player1.chips -= 5;      
                    window.pot.chips += 5;
                    // this.count += 1;
                    
                    
                } else if (window.players[0] === window.player2) {
                    window.player2.chips -= 5;
                    window.pot.chips += 5
                    // this.count += 1;
                    
                } else if (window.players[0] === window.player3) {
                    window.player3.chips -= 5;
                    window.pot.chips += 5;
                    // this.count += 1;
                    
                }
                
            }
        }
    }
    
    postflopBet() {
        if (window.betRound === 1) {
            
            this.count = 1;
            if (window.players[0] === window.player1) {
                window.player1.chips -= 10;
                window.pot.chips += 10;
            } else if (window.players[0] === window.player2) {
                window.player2.chips -= 10;
                window.pot.chips += 10;
            } else if (window.players[0] === window.player3) {
                window.player3.chips -= 10;
                window.pot.chips += 10;
            }
            window.betCount += 1;
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
        }
    }

    postturnBet() {
        if (window.betRound === 2) {
            if (window.players[0] === window.player1) {
                window.player1.chips -= 10;
                window.pot.chips += 10;
            } else if (window.players[0] === window.player2) {
                window.player2.chips -= 10;
                window.pot.chips += 10;
            } else if (window.players[0] === window.player3) {
                window.player3.chips -= 10;
                window.pot.chips += 10;
            }
            window.betCount += 1;
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.turnCount += 1;
        }
    }

    postriverBet() {
        if (window.betRound === 3 && window.lastBet < window.players.length) {
            if (window.players[0] === window.player1) {
                window.player1.chips -= 10;
                window.pot.chips += 10;
            } else if (window.players[0] === window.player2) {
                window.player2.chips -= 10;
                window.pot.chips += 10;
            } else if (window.players[0] === window.player3) {
                window.player3.chips -= 10;
                window.pot.chips += 10;
            }
            let first = window.players[0];
            window.players.shift();
            window.players.push(first);
            window.lastBet += 1;
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