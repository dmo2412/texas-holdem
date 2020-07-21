

import Deck from '../javascript/js/deck'
import Cards from '../javascript/js-new/preflop';
import Game from '../javascript/js-new/game';
import Betting from '../javascript/js/betting';
import Fold from '../javascript/js/fold';
import NextCard from '../javascript/js/nextcard';
document.addEventListener("DOMContentLoaded", () => {
    
    const deal = new Cards();
    const game = new Game();
    // const bet = new Betting();
    game.createGame();
    let playerShift = 0;
    window.num = 10 * 2;
    
    window.betCount = 0;
    window.riverTurn = 0;
    window.lastBet = 0;
    
    document.getElementById('player2chips').innerHTML = window.player2.chips;
    // document.getElementById('player3chips').innerHTML = window.player3.chips;
    document.getElementById('player1chips').innerHTML = window.player1.chips;

    
    document.getElementById('hands').onclick = function dealTheCards() {
        const players = [window.player1, window.player2];
        // d3.selectAll(".player3cardsrez").remove();
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
        window.betRound = -1;
        window.betRound += 1;
        window.count = 0;
        window.flopCount = 0;
        window.middleCards = [];
        window.playerTurn = 2;
        window.turnCount = 0;
        window.betCount = 0;
        window.handCount = 0;
        window.lastBet = 0;
        deal.dealCards();
        // document.getElementByClassName('player2chips').innerHTML = 'window.player2.chips';
        document.getElementById('player2chips').innerHTML = window.player2.chips;
        // document.getElementById('player3chips').innerHTML = window.player3.chips;
        document.getElementById('player1chips').innerHTML = window.player1.chips;


        // bet.placeBet();
    }

    document.getElementById('fold').onclick = function foldYourCards() {
        const fold = new Fold();
        fold.removePlayer();
        window.count += 1;
        // window.flopCount += 1;
        game.fold();
        // game.playerTurn();
        // game.resetGame();
    }

    document.getElementById('betbutton').onclick = function placeYourBet() {
        const bet = new Betting();
        deal.startScoreboard();
        game.call();
        window.count += 1;
        document.getElementById('player2chips').innerHTML = window.player2.chips;
        // document.getElementById('player3chips').innerHTML = window.player3.chips;
        document.getElementById('player1chips').innerHTML = window.player1.chips;
    }

    document.getElementById('raise2x').onclick = function raisePot() {
        
    }
    
})