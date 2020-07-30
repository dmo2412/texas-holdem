import Deck from '../javascript/js-new/deck'
import Cards from '../javascript/js-new/preflop';
import Game from '../javascript/js-new/game';

document.addEventListener("DOMContentLoaded", () => {
    const deal = new Cards();
    const game = new Game();
    game.createGame();

    window.turnCount = 0;
    window.flopCount = 0;
    window.turnBetCount = 0;
    window.riverBetCount = 0;
    window.dealCountTurn = 0;
    let playerShift = 0;
    // document.getElementById('currBet').innerHTML = "current Bet:" + window.player1.currentBet;
    
    document.getElementById('player2chips').innerHTML = window.player2.chips;
    document.getElementById('player1chips').innerHTML = window.player1.chips;
    
    document.getElementById('hands').onclick = function dealTheCards() {
        if (window.dealCountTurn === 0) {
            window.player1.currentBet = 0;
            window.player2.currentBet = 0;
            window.dealCountTurn = 1;
        const players = [window.player1, window.player2];
        
        
        d3.selectAll(".player1cards").remove();
        d3.selectAll(".player2cardsrez").remove();
        d3.selectAll(".flopcards").remove();
        d3.selectAll(".winnerName").remove();
        
        let first;
        for (let i = 0; i < playerShift; i++) {
            first = players[0];
            players.shift(1);
            players.push(first)
        }
        window.players = players
        playerShift += 1;
        
        for (let i = 0; i < window.players.length; i++) {
            window.players[i].cardPool = [];
            window.players[i].holecards = [];
            window.players[i].currentBet = 0;
            window.players[i].deadmoney = 0;
        }
        
        
        deal.dealCards();

        

        document.getElementById('player2chips').innerHTML = window.player2.chips;
        document.getElementById('player1chips').innerHTML = window.player1.chips;
        if (window.players[0] === window.player1) {
            document.getElementById('whos-turn').innerHTML = "Mike McDermott's Turn"
        } else if (window.players[0] === window.player2) {
            document.getElementById('whos-turn').innerHTML = "Click CPU Player for computer turn"
        }
        document.getElementById("philbet").innerHTML = ""
        document.getElementById("mikebet").innerHTML = ""
        document.getElementById('raise2x').innerHTML = "Raise 2x"
        document.getElementById('call').innerHTML = "Call"
        window.turnCount = 0;

    }
    }

    document.getElementById('call').onclick = function callBet() {
        if (window.players[0] === window.player1) {
            document.getElementById('whos-turn').innerHTML = "Click CPU Player for computer turn"
            document.getElementById('mikebet').innerHTML = "call " + window.player2.currentBet
            game.call();
            document.getElementById('player2chips').innerHTML = window.player2.chips;
            document.getElementById('player1chips').innerHTML = window.player1.chips;
            // document.getElementById('raise2x').innerHTML = "Raise"
        }
    }

    document.getElementById('check').onclick = function checkTurn() {
        if (window.players[0] === window.player1) {
            document.getElementById('whos-turn').innerHTML = "Click CPU Player for computer turn"
            document.getElementById('mikebet').innerHTML = "check"
            game.check();
        }
    }

    document.getElementById('raise2x').onclick = function raiseTwox() {
        if (window.players[0] === window.player1) {
            document.getElementById('whos-turn').innerHTML = "Click CPU Player for computer turn"
            game.raiseTwoTimes();
            if (window.player2.currentBet === 0) {
                // document.getElementById('raise2x').innerHTML = "Raise 2x"
                document.getElementById('mikebet').innerHTML = "raise 20"
            } else {
                document.getElementById('raise2x').innerHTML = 'Raise 2x'
                document.getElementById('mikebet').innerHTML = 'Raise ' + window.player2.currentBet * 2;
            }
            document.getElementById('player2chips').innerHTML = window.player2.chips;
            document.getElementById('player1chips').innerHTML = window.player1.chips;
        }
    }

    document.getElementById('fold').onclick = function foldCards() {
        if (window.players[0] === window.player1) {
            d3.selectAll(".player1cards").remove();
            d3.selectAll('.player2cards').remove();
            game.fold();
            document.getElementById('mikebet').innerHTML = "fold"
            window.dealCountTurn = 0;
            document.getElementById("whos-turn").innerHTML = ""
        }
        
        // d3.selectAll(".player2cardsrez").remove();
    }

    document.getElementById('cpu').onclick = function computerPlayer() {
        if (window.players[0] === window.player2) {
            document.getElementById('whos-turn').innerHTML = "Mike Mcdermott's Turn"
            game.computer()
            document.getElementById('player2chips').innerHTML = window.player2.chips;
            document.getElementById('player1chips').innerHTML = window.player1.chips;
        }
    }

})