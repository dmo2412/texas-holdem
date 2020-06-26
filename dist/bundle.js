/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/src/index.js":
/*!*********************************!*\
  !*** ./javascript/src/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_scoreboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/scoreboard */ "./javascript/src/js/scoreboard.js");
/* harmony import */ var _js_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/cards */ "./javascript/src/js/cards.js");
/* harmony import */ var _js_cards__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_cards__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_player_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/player_chips */ "./javascript/src/js/player_chips.js");
// const axios = require('axios');




// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Hello World"));

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server is running on port ${port}`));

// document.addEventListener("DOMContentLoaded", () => {
    // var canvas = document.getElementById("myCanvas");
    // var ctx = canvas.getContext("2d");
    console.log("this is working")
    // scoreboard();
    // cards();
    // playerChips();
// })

/***/ }),

/***/ "./javascript/src/js/cards.js":
/*!************************************!*\
  !*** ./javascript/src/js/cards.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// document.addEventListener("DOMContentLoaded", () => {
//     var canvas = document.getElementById("myCanvas");
//     var ctx = canvas.getContext("2d");
//     ctx.beginPath();
//     ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
//     ctx.fillStyle = "green";
//     ctx.fill();
//     ctx.closePath();
//     // const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
//     // const suits = ['s', 'c', 'h', 'd'];
//     // let cards = [];
//     // let player1 = {
//     //     name: 'Me',
//     //     stack: 100,
//     //     cardPool: [],
//     //     holecards: [],
//     //     status: 'live'
//     // }
//     // let player2 = {
//     //     name: 'Tom Dwan',
//     //     stack: 100,
//     //     cardPool: [],
//     //     holecards: [],
//     //     status: 'live'
//     // }
//     // let player3 = {
//     //     name: 'Phil Ivey',
//     //     stack: 100,
//     //     cardPool: [],
//     //     holecards: [],
//     //     status: 'live'
//     // }
    
    
//     // for (let i = 0; i < values.length; i++) {
//     //     for (let j = 0; j < suits.length; j++) {
//     //         let ele = values[i].concat(suits[j]);
//     //         cards.push(ele);
//     //     }
//     // }
//     // var i, j, temp;
//     // for (i = cards.length - 1; i > 0; i--) {
//     //     j = Math.floor(Math.random() * (i + 1));
//     //     temp = cards[i];
//     //     cards[i] = cards[j];
//     //     cards[j] = temp;
//     // };

//     // // d3.select("#chipcount").selectAll("p")
//     // //     .data(theData)
//     // //     .enter()
//     // //     .append("p")
//     // //     .text(function (d) { return d.name + " : " + d.chips; })
//     // //     .attr("class", "playernames");


//     // document.getElementById('hands').onclick = function dealCards() {
//     //     for (let i = 0; i < 2; i++) {
//     //         player1.holecards.push(cards[0]);
//     //         player1.cardPool.push(cards[0]);
//     //         cards.shift()
//     //         player2.holecards.push(cards[0]);
//     //         player2.cardPool.push(cards[0]);
//     //         cards.shift()
//     //         player3.holecards.push(cards[0]);
//     //         player3.cardPool.push(cards[0]);
//     //         cards.shift()
//     //     }
//     //     let arr = [player1.holecards, player2.holecards, player3.holecards];
//     //     // console.log(arr)
//     //     // hands.innerHTML = arr;
//     //     d3.select("#player1carddiv").selectAll("p")
//     //     .data(player1.holecards)
//     //     .enter()
//     //     .append('p')
//     //     .text(function (d) {return d})
//     //     .attr("class", 'player1cards')
        
//     //     d3.select("#player2carddiv").selectAll("p")
//     //     .data(player2.holecards)
//     //     .enter()
//     //     .append('p')
//     //     .text(function (d) {return d})
//     //     .attr("class", 'player2cards')
        
//     //     d3.select("#player3carddiv").selectAll("p")
//     //     .data(player3.holecards)
//     //     .enter()
//     //     .append('p')
//     //     .text(function (d) {return d})
//     //     .attr("class", 'player3cards')
//     //     // debugger


        
//     // }
//     // let middlecards = [];

//     // document.getElementById('flop').onclick = function flopCards() {
//     //     c = cards.slice(0,3)
//     //     middlecards = middlecards.concat(c);
//     //     player1.cardPool = player1.cardPool.concat(middlecards)
//     //     player2.cardPool = player2.cardPool.concat(middlecards)
//     //     player3.cardPool = player3.cardPool.concat(middlecards)
//     //     flop.innerHTML = middlecards;
//     //     cards = cards.slice(3,46)
//     // }



//     // document.getElementById('turn').onclick = function turnCard() {
//     //     middlecards.push(cards[0]);
//     //     player1.cardPool.push(middlecards[3]);
//     //     player2.cardPool.push(middlecards[3]);
//     //     player3.cardPool.push(middlecards[3]);
//     //     turn.innerHTML = player1.cardPool[5];
//     //     cards.shift();
//     // }

//     // document.getElementById('river').onclick = function riverCard() {
//     //     middlecards.push(cards[0]);
//     //     player1.cardPool.push(middlecards[4]);
//     //     player2.cardPool.push(middlecards[4]);
//     //     player3.cardPool.push(middlecards[4]);
//     //     river.innerHTML = player1.cardPool[6];
//     //     cards.shift();
//     // }

//     // document.getElementById('solve').onclick = function winningHand() {
//     //     let hand1 = Hand.solve(player1.cardPool);
//     //     let hand2 = Hand.solve(player2.cardPool);
//     //     let hand3 = Hand.solve(player3.cardPool);
//     //     let hands = [hand1, hand2, hand3];
//     //     let winner = Hand.winners(hands);
//     //     let champ;
//     //     if (hand1.cardPool === winner[0].cardPool) {
//     //         champ = player1
//     //     } else if (hand2.cardPool === winner[0].cardPool) {
//     //         champ = player2
//     //     } else {
//     //         champ = player3
//     //     }
//     //     solve.innerHTML = champ.name;
//     // }



    
    

// // // playerCards.append(hands)
    
// })


/***/ }),

/***/ "./javascript/src/js/player_chips.js":
/*!*******************************************!*\
  !*** ./javascript/src/js/player_chips.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const playerChips = () => {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var x = canvas.width / 2;
        var y = canvas.height - 30;
        var x1 = canvas.width / 2;
        var y1 = canvas.height - 30;
        // debugger
        var dx = 2;
        var dy = -10;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "tomato";
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();


    // function draw() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     ctx.beginPath();
    //     ctx.arc(x, y, 10, 0, Math.PI * 2);
    //     ctx.fillStyle = "#0095DD";
    //     ctx.fill();
    //     ctx.closePath();
    //     x += dx;
    //     y += dy;
    // }

        // document.getElementById("betbutton").onclick = function moveChips() {
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     ctx.beginPath();
        //     ctx.arc(x1, y1, 10, 0, Math.PI * 2);
        //     ctx.fillStyle = "tomato";
        //     ctx.fill();
        //     ctx.closePath();
        //     ctx.strokeStyle = "black";
        //     ctx.stroke();
        //     x1 += dx;
        //     y1 += dy;
        //     debugger
        // }


    }
/* harmony default export */ __webpack_exports__["default"] = (playerChips);

/***/ }),

/***/ "./javascript/src/js/scoreboard.js":
/*!*****************************************!*\
  !*** ./javascript/src/js/scoreboard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const scoreboard = () => {
    var pot = {name: 'Pot', chips: 0}
    let middlecards = [];
    let c;
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const suits = ['s', 'c', 'h', 'd'];
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x1 = canvas.width / 2;
    var y1 = canvas.height - 30;
    var dx = 2;
    var dy = -10;
    let cards = [];
    let player1 = {
        name: 'Me',
        chips: 100,
        cardPool: [],
        holecards: [],
        status: 'live'
    }
    let player2 = {
        name: 'Tom Dwan',
        chips: 100,
        cardPool: [],
        holecards: [],
        status: 'live'
    }
    let player3 = {
        name: 'Phil Ivey',
        chips: 100,
        cardPool: [],
        holecards: [],
        status: 'live'
    }
    var theData = [player1, player2, player3, pot];
    let players = [player1, player2, player3]

    d3.select("#chipcount").selectAll("p")
        .data(theData)
        .enter()
        .append("p")
        .text(function (d) { return d.name + " : " + d.chips; })
        .attr("class", "playernames");

    // for (let i = 0; i < values.length; i++) {
    //     for (let j = 0; j < suits.length; j++) {
    //         let ele = values[i].concat(suits[j]);
    //         cards.push(ele);
    //     }
    // }
    // var i, j, temp;
    // for (i = cards.length - 1; i > 0; i--) {
    //     j = Math.floor(Math.random() * (i + 1));
    //     temp = cards[i];
    //     cards[i] = cards[j];
    //     cards[j] = temp;
    // };
    let turn = 0;
    let betTurn = 0
    let dealTurn = 0;
    document.getElementById('hands').onclick = function dealCards() {
        // if (dealTurn === 0) {
            // const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
            // const suits = ['s', 'c', 'h', 'd'];
            // let cards = [];
            cards = [];

            for (let i = 0; i < values.length; i++) {
                for (let j = 0; j < suits.length; j++) {
                    let ele = values[i].concat(suits[j]);
                    cards.push(ele);
                }
            }
            var i, j, temp;
            for (i = cards.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = cards[i];
                cards[i] = cards[j];
                cards[j] = temp;
            };
        if (dealTurn === 0) {
            dealTurn += 1
            for (let i = 0; i < 2; i++) {
                player1.holecards.push(cards[0]);
                player1.cardPool.push(cards[0]);
                cards.shift()
                player2.holecards.push(cards[0]);
                player2.cardPool.push(cards[0]);
                cards.shift()
                player3.holecards.push(cards[0]);
                player3.cardPool.push(cards[0]);
                cards.shift()
            }
            // let arr = [player1.holecards, player2.holecards, player3.holecards];

            d3.select("#player1carddiv").selectAll("p")
                .data(player1.holecards)
                .enter()
                .append('p')
                .text(function (d) { return d })
                .attr("class", 'player1cards')

            d3.select("#player2carddiv").selectAll("p")
                .data(player2.holecards)
                .enter()
                .append('p')
                .text(function (d) { return d })
                .attr("class", 'player2cards')

            d3.select("#player3carddiv").selectAll("p")
                .data(player3.holecards)
                .enter()
                .append('p')
                .text(function (d) { return d })
                .attr("class", 'player3cards')
        }

        if (betTurn >= 4) {
            turn = 0;
            betTurn = 0;
            dealTurn = 0;
            middlecards = [];
            pot.chips = 0;

            for (let i = 0; i < players.length; i++) {
                players[i].cardPool = [];
                players[i].holecards = [];
            }
            d3.selectAll(".player1cards").remove();
            d3.selectAll(".player2cards").remove();
            d3.selectAll(".player3cards").remove();
            d3.selectAll(".flopcards").remove();
            d3.selectAll(".playernames").remove();
            d3.selectAll(".champ").remove();

            d3.select("#chipcount").selectAll("p")
                .data(theData)
                .enter()
                .append("p")
                .text(function (d) { return d.name + " : " + d.chips; })
                .attr("class", "playernames");
        }
    }

    document.getElementById('betbutton').onclick = function placeBet() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x1, y1, 10, 0, Math.PI * 2);
        ctx.fillStyle = "tomato";
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        x1 += dx;
        y1 += dy;



        if (betTurn === 0) {
            if (turn % 3 === 0) {
                player1.chips = player1.chips - 10;
            } else if (turn % 3 === 1) {
                player2.chips = player2.chips - 10;
            } else if (turn % 3 === 2) {
                player3.chips = player3.chips - 10;
                betTurn += 1
                c = cards.slice(0, 3)
                middlecards = middlecards.concat(c);
                player1.cardPool = player1.cardPool.concat(middlecards)
                player2.cardPool = player2.cardPool.concat(middlecards)
                player3.cardPool = player3.cardPool.concat(middlecards)
                cards = cards.slice(3, 46);
                
                d3.select("#player1carddiv").selectAll("span")
                    .data(middlecards)
                    .enter()
                    .append("span")
                    .text(function (d) { return d })
                    .attr("class", "flopcards")
            }
            turn += 1;
            pot.chips += 10;
        
        d3.selectAll(".playernames").remove();


        d3.select("#chipcount").selectAll("p")
            .data(theData)
            .enter()
            .append("p")
            .text(function (d) { return d.name + " : " + d.chips; })
            .attr("class", "playernames");
            
        }else if (betTurn === 1 || betTurn === 2) {
            if (turn % 3 === 0) {
                player1.chips = player1.chips - 10;
            } else if (turn % 3 === 1) {
                player2.chips = player2.chips - 10;
            } else if (turn % 3 === 2) {
                player3.chips = player3.chips - 10;
                betTurn += 1;
                middlecards.push(cards[0]);
                player1.cardPool.push(middlecards[middlecards.length - 1]);
                player2.cardPool.push(middlecards[middlecards.length - 1]);
                player3.cardPool.push(middlecards[middlecards.length - 1]);
                cards.shift();
                d3.selectAll('.flopcards').remove();
                
                d3.select('#player1carddiv').selectAll('span')
                .data(middlecards)
                .enter()
                .append('span')
                .text(function (d) {return d})
                .attr("class", 'flopcards')
            }
            turn += 1;
            pot.chips += 10;
            d3.selectAll(".playernames").remove();


            d3.select("#chipcount").selectAll("p")
                .data(theData)
                .enter()
                .append("p")
                .text(function (d) { return d.name + " : " + d.chips; })
                .attr("class", "playernames");
        } else if (betTurn === 3) {
            let hand1 = Hand.solve(player1.cardPool);
            let hand2 = Hand.solve(player2.cardPool);
            let hand3 = Hand.solve(player3.cardPool);
            let hands = [hand1, hand2, hand3];
            let winner = Hand.winners(hands);
            let champ;
            if (hand1.cardPool === winner[0].cardPool) {
                champ = player1.name
                player1.chips += pot.chips;
            } else if (hand2.cardPool === winner[0].cardPool) {
                champ = player2.name
                player2.chips += pot.chips;
            } else {
                champ = player3.name
                player3.chips += pot.chips;
            }
            console.log(champ)
            // let victor = [champ]
            // champ is a string of the winner's name
            let champion = [{name: champ}];
            d3.select(".champ").selectAll('p')
            .data(champion)
            .enter()
            .append("p")
            .text(function (d) {return  d.name + ' wins the pot' })
            .attr("class", "champ")
            betTurn += 1

        }
    } 
}
/* harmony default export */ __webpack_exports__["default"] = (scoreboard);



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map