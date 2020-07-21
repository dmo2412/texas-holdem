import Deck from '../javascript/js/deck'
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
    let playerShift = 0;
    // document.getElementById('currBet').innerHTML = "current Bet:" + window.player1.currentBet;

    document.getElementById('player2chips').innerHTML = window.player2.chips;
    document.getElementById('player1chips').innerHTML = window.player1.chips;

    document.getElementById('hands').onclick = function dealTheCards() {
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
    }

    document.getElementById('call').onclick = function callBet() {
        game.call();
        document.getElementById('player2chips').innerHTML = window.player2.chips;
        document.getElementById('player1chips').innerHTML = window.player1.chips;
    }

    document.getElementById('check').onclick = function checkTurn() {
        game.check();
    }

    document.getElementById('raise2x').onclick = function raiseTwox() {
        game.raiseTwoTimes();
        if (window.players[1].currentBet === 0) {
            document.getElementById('raise2x').innerHTML = "Raise to 20"
        } else {
            document.getElementById('raise2x').innerHTML = 'Raise to ' + window.players[1].currentBet * 2; 
        }
        document.getElementById('player2chips').innerHTML = window.player2.chips;
        document.getElementById('player1chips').innerHTML = window.player1.chips;
    }

    document.getElementById('fold').onclick = function foldCards() {
        d3.selectAll(".player1cards").remove();
        d3.selectAll('.player2cards').remove();
        game.fold();
        
        // d3.selectAll(".player2cardsrez").remove();
    }

})