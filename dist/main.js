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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/js/cards.js":
/*!********************************!*\
  !*** ./javascript/js/cards.js ***!
  \********************************/
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

/***/ "./javascript/js/player_chips.js":
/*!***************************************!*\
  !*** ./javascript/js/player_chips.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var playerChips = function playerChips() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var x = canvas.width / 2;
  var y = canvas.height - 30;
  var x1 = canvas.width / 2;
  var y1 = canvas.height - 30; // debugger

  var dx = 2;
  var dy = -10;
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "tomato";
  ctx.fill();
  ctx.closePath();
  ctx.strokeStyle = "black";
  ctx.stroke(); // function draw() {
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
};

/* harmony default export */ __webpack_exports__["default"] = (playerChips);

/***/ }),

/***/ "./javascript/js/scoreboard.js":
/*!*************************************!*\
  !*** ./javascript/js/scoreboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var scoreboard = function scoreboard() {
  debugger;
  var pot = {
    name: 'Pot',
    chips: 0
  };
  var middlecards = [];
  var c;
  var values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  var suits = ['s', 'c', 'h', 'd'];
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var x1 = canvas.width / 2;
  var y1 = canvas.height - 30;
  var dx = 2;
  var dy = -10;
  var cards = [];
  var player1 = {
    name: 'Me',
    chips: 100,
    cardPool: [],
    holecards: [],
    status: 'live'
  };
  var player2 = {
    name: 'Tom Dwan',
    chips: 100,
    cardPool: [],
    holecards: [],
    status: 'live'
  };
  var player3 = {
    name: 'Phil Ivey',
    chips: 100,
    cardPool: [],
    holecards: [],
    status: 'live'
  };
  var theData = [player1, player2, player3, pot];
  var players = [player1, player2, player3];
  d3.select("#chipcount").selectAll("p").data(theData).enter().append("p").text(function (d) {
    return d.name + " : " + d.chips;
  }).attr("class", "playernames"); // for (let i = 0; i < values.length; i++) {
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

  var turn = 0;
  var betTurn = 0;
  var dealTurn = 0;

  document.getElementById('hands').onclick = function dealCards() {
    // if (dealTurn === 0) {
    // const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    // const suits = ['s', 'c', 'h', 'd'];
    // let cards = [];
    cards = [];

    for (var _i = 0; _i < values.length; _i++) {
      for (var _j = 0; _j < suits.length; _j++) {
        var ele = values[_i].concat(suits[_j]);

        cards.push(ele);
      }
    }

    var i, j, temp;

    for (i = cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }

    ;

    if (dealTurn === 0) {
      dealTurn += 1;

      for (var _i2 = 0; _i2 < 2; _i2++) {
        player1.holecards.push(cards[0]);
        player1.cardPool.push(cards[0]);
        cards.shift();
        player2.holecards.push(cards[0]);
        player2.cardPool.push(cards[0]);
        cards.shift();
        player3.holecards.push(cards[0]);
        player3.cardPool.push(cards[0]);
        cards.shift();
      } // let arr = [player1.holecards, player2.holecards, player3.holecards];


      d3.select("#player1carddiv").selectAll("p").data(player1.holecards).enter().append('p').text(function (d) {
        return d;
      }).attr("class", 'player1cards');
      d3.select("#player2carddiv").selectAll("p").data(player2.holecards).enter().append('p').text(function (d) {
        return d;
      }).attr("class", 'player2cards');
      d3.select("#player3carddiv").selectAll("p").data(player3.holecards).enter().append('p').text(function (d) {
        return d;
      }).attr("class", 'player3cards');
    }

    if (betTurn >= 4) {
      turn = 0;
      betTurn = 0;
      dealTurn = 0;
      middlecards = [];
      pot.chips = 0;

      for (var _i3 = 0; _i3 < players.length; _i3++) {
        players[_i3].cardPool = [];
        players[_i3].holecards = [];
      }

      d3.selectAll(".player1cards").remove();
      d3.selectAll(".player2cards").remove();
      d3.selectAll(".player3cards").remove();
      d3.selectAll(".flopcards").remove();
      d3.selectAll(".playernames").remove();
      d3.selectAll(".champ").remove();
      d3.select("#chipcount").selectAll("p").data(theData).enter().append("p").text(function (d) {
        return d.name + " : " + d.chips;
      }).attr("class", "playernames");
    }
  };

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
        betTurn += 1;
        c = cards.slice(0, 3);
        middlecards = middlecards.concat(c);
        player1.cardPool = player1.cardPool.concat(middlecards);
        player2.cardPool = player2.cardPool.concat(middlecards);
        player3.cardPool = player3.cardPool.concat(middlecards);
        cards = cards.slice(3, 46);
        d3.select("#player1carddiv").selectAll("span").data(middlecards).enter().append("span").text(function (d) {
          return d;
        }).attr("class", "flopcards");
      }

      turn += 1;
      pot.chips += 10;
      d3.selectAll(".playernames").remove();
      d3.select("#chipcount").selectAll("p").data(theData).enter().append("p").text(function (d) {
        return d.name + " : " + d.chips;
      }).attr("class", "playernames");
    } else if (betTurn === 1 || betTurn === 2) {
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
        d3.select('#player1carddiv').selectAll('span').data(middlecards).enter().append('span').text(function (d) {
          return d;
        }).attr("class", 'flopcards');
      }

      turn += 1;
      pot.chips += 10;
      d3.selectAll(".playernames").remove();
      d3.select("#chipcount").selectAll("p").data(theData).enter().append("p").text(function (d) {
        return d.name + " : " + d.chips;
      }).attr("class", "playernames");
    } else if (betTurn === 3) {
      var hand1 = Hand.solve(player1.cardPool);
      var hand2 = Hand.solve(player2.cardPool);
      var hand3 = Hand.solve(player3.cardPool);
      var hands = [hand1, hand2, hand3];
      var winner = Hand.winners(hands);
      var champ;

      if (hand1.cardPool === winner[0].cardPool) {
        champ = player1.name;
        player1.chips += pot.chips;
      } else if (hand2.cardPool === winner[0].cardPool) {
        champ = player2.name;
        player2.chips += pot.chips;
      } else {
        champ = player3.name;
        player3.chips += pot.chips;
      }

      console.log(champ); // let victor = [champ]
      // champ is a string of the winner's name

      var champion = [{
        name: champ
      }];
      d3.select(".champ").selectAll('p').data(champion).enter().append("p").text(function (d) {
        return d.name + ' wins the pot';
      }).attr("class", "champ");
      betTurn += 1;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (scoreboard);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _javascript_js_scoreboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../javascript/js/scoreboard */ "./javascript/js/scoreboard.js");
/* harmony import */ var _javascript_js_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../javascript/js/cards */ "./javascript/js/cards.js");
/* harmony import */ var _javascript_js_cards__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_javascript_js_cards__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _javascript_js_player_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../javascript/js/player_chips */ "./javascript/js/player_chips.js");
// const axios = require('axios');



document.addEventListener("DOMContentLoaded", function () {
  debugger;
  console.log("this isn't working");
  Object(_javascript_js_scoreboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  _javascript_js_cards__WEBPACK_IMPORTED_MODULE_1___default()();
  Object(_javascript_js_player_chips__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9jYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2pzL3BsYXllcl9jaGlwcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2pzL3Njb3JlYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInBsYXllckNoaXBzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwieDEiLCJ5MSIsImR4IiwiZHkiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJzY29yZWJvYXJkIiwicG90IiwibmFtZSIsImNoaXBzIiwibWlkZGxlY2FyZHMiLCJjIiwidmFsdWVzIiwic3VpdHMiLCJjYXJkcyIsInBsYXllcjEiLCJjYXJkUG9vbCIsImhvbGVjYXJkcyIsInN0YXR1cyIsInBsYXllcjIiLCJwbGF5ZXIzIiwidGhlRGF0YSIsInBsYXllcnMiLCJkMyIsInNlbGVjdCIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImFwcGVuZCIsInRleHQiLCJkIiwiYXR0ciIsInR1cm4iLCJiZXRUdXJuIiwiZGVhbFR1cm4iLCJvbmNsaWNrIiwiZGVhbENhcmRzIiwiaSIsImxlbmd0aCIsImoiLCJlbGUiLCJjb25jYXQiLCJwdXNoIiwidGVtcCIsImZsb29yIiwicmFuZG9tIiwic2hpZnQiLCJyZW1vdmUiLCJwbGFjZUJldCIsImNsZWFyUmVjdCIsInNsaWNlIiwiaGFuZDEiLCJIYW5kIiwic29sdmUiLCJoYW5kMiIsImhhbmQzIiwiaGFuZHMiLCJ3aW5uZXIiLCJ3aW5uZXJzIiwiY2hhbXAiLCJjb25zb2xlIiwibG9nIiwiY2hh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UCxPQUFELENBQWY7QUFDQXBDLFFBQUUsQ0FBQ0MsTUFBSCxDQUFVLFFBQVYsRUFBb0JDLFNBQXBCLENBQThCLEdBQTlCLEVBQ0NDLElBREQsQ0FDTW9DLFFBRE4sRUFFQ25DLEtBRkQsR0FHQ0MsTUFIRCxDQUdRLEdBSFIsRUFJQ0MsSUFKRCxDQUlNLFVBQVVDLENBQVYsRUFBYTtBQUFDLGVBQVFBLENBQUMsQ0FBQ3RCLElBQUYsR0FBUyxlQUFqQjtBQUFrQyxPQUp0RCxFQUtDdUIsSUFMRCxDQUtNLE9BTE4sRUFLZSxPQUxmO0FBTUFFLGFBQU8sSUFBSSxDQUFYO0FBRUg7QUFDSixHQWpIRDtBQWtISCxDQW5RRDs7QUFvUWUzQix5RUFBZixFOzs7Ozs7Ozs7Ozs7QUN0UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFyQixRQUFRLENBQUM4RSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRDtBQUNBSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBdkQsMkVBQVU7QUFDVlEsNkRBQUs7QUFDTC9CLDZFQUFXO0FBQ2QsQ0FORCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbi8vICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbi8vICAgICBjdHguYmVnaW5QYXRoKCk7XG4vLyAgICAgY3R4LmFyYygyNDAsIDE2MCwgMjAsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4vLyAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbi8vICAgICBjdHguZmlsbCgpO1xuLy8gICAgIGN0eC5jbG9zZVBhdGgoKTtcbi8vICAgICAvLyBjb25zdCB2YWx1ZXMgPSBbJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICdUJywgJ0onLCAnUScsICdLJywgJ0EnXTtcbi8vICAgICAvLyBjb25zdCBzdWl0cyA9IFsncycsICdjJywgJ2gnLCAnZCddO1xuLy8gICAgIC8vIGxldCBjYXJkcyA9IFtdO1xuLy8gICAgIC8vIGxldCBwbGF5ZXIxID0ge1xuLy8gICAgIC8vICAgICBuYW1lOiAnTWUnLFxuLy8gICAgIC8vICAgICBzdGFjazogMTAwLFxuLy8gICAgIC8vICAgICBjYXJkUG9vbDogW10sXG4vLyAgICAgLy8gICAgIGhvbGVjYXJkczogW10sXG4vLyAgICAgLy8gICAgIHN0YXR1czogJ2xpdmUnXG4vLyAgICAgLy8gfVxuLy8gICAgIC8vIGxldCBwbGF5ZXIyID0ge1xuLy8gICAgIC8vICAgICBuYW1lOiAnVG9tIER3YW4nLFxuLy8gICAgIC8vICAgICBzdGFjazogMTAwLFxuLy8gICAgIC8vICAgICBjYXJkUG9vbDogW10sXG4vLyAgICAgLy8gICAgIGhvbGVjYXJkczogW10sXG4vLyAgICAgLy8gICAgIHN0YXR1czogJ2xpdmUnXG4vLyAgICAgLy8gfVxuLy8gICAgIC8vIGxldCBwbGF5ZXIzID0ge1xuLy8gICAgIC8vICAgICBuYW1lOiAnUGhpbCBJdmV5Jyxcbi8vICAgICAvLyAgICAgc3RhY2s6IDEwMCxcbi8vICAgICAvLyAgICAgY2FyZFBvb2w6IFtdLFxuLy8gICAgIC8vICAgICBob2xlY2FyZHM6IFtdLFxuLy8gICAgIC8vICAgICBzdGF0dXM6ICdsaXZlJ1xuLy8gICAgIC8vIH1cbiAgICBcbiAgICBcbi8vICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1aXRzLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgLy8gICAgICAgICBsZXQgZWxlID0gdmFsdWVzW2ldLmNvbmNhdChzdWl0c1tqXSk7XG4vLyAgICAgLy8gICAgICAgICBjYXJkcy5wdXNoKGVsZSk7XG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyB9XG4vLyAgICAgLy8gdmFyIGksIGosIHRlbXA7XG4vLyAgICAgLy8gZm9yIChpID0gY2FyZHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuLy8gICAgIC8vICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4vLyAgICAgLy8gICAgIHRlbXAgPSBjYXJkc1tpXTtcbi8vICAgICAvLyAgICAgY2FyZHNbaV0gPSBjYXJkc1tqXTtcbi8vICAgICAvLyAgICAgY2FyZHNbal0gPSB0ZW1wO1xuLy8gICAgIC8vIH07XG5cbi8vICAgICAvLyAvLyBkMy5zZWxlY3QoXCIjY2hpcGNvdW50XCIpLnNlbGVjdEFsbChcInBcIilcbi8vICAgICAvLyAvLyAgICAgLmRhdGEodGhlRGF0YSlcbi8vICAgICAvLyAvLyAgICAgLmVudGVyKClcbi8vICAgICAvLyAvLyAgICAgLmFwcGVuZChcInBcIilcbi8vICAgICAvLyAvLyAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSArIFwiIDogXCIgKyBkLmNoaXBzOyB9KVxuLy8gICAgIC8vIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwicGxheWVybmFtZXNcIik7XG5cblxuLy8gICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW5kcycpLm9uY2xpY2sgPSBmdW5jdGlvbiBkZWFsQ2FyZHMoKSB7XG4vLyAgICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4vLyAgICAgLy8gICAgICAgICBwbGF5ZXIxLmhvbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbi8vICAgICAvLyAgICAgICAgIHBsYXllcjEuY2FyZFBvb2wucHVzaChjYXJkc1swXSk7XG4vLyAgICAgLy8gICAgICAgICBjYXJkcy5zaGlmdCgpXG4vLyAgICAgLy8gICAgICAgICBwbGF5ZXIyLmhvbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbi8vICAgICAvLyAgICAgICAgIHBsYXllcjIuY2FyZFBvb2wucHVzaChjYXJkc1swXSk7XG4vLyAgICAgLy8gICAgICAgICBjYXJkcy5zaGlmdCgpXG4vLyAgICAgLy8gICAgICAgICBwbGF5ZXIzLmhvbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbi8vICAgICAvLyAgICAgICAgIHBsYXllcjMuY2FyZFBvb2wucHVzaChjYXJkc1swXSk7XG4vLyAgICAgLy8gICAgICAgICBjYXJkcy5zaGlmdCgpXG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgICAgbGV0IGFyciA9IFtwbGF5ZXIxLmhvbGVjYXJkcywgcGxheWVyMi5ob2xlY2FyZHMsIHBsYXllcjMuaG9sZWNhcmRzXTtcbi8vICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coYXJyKVxuLy8gICAgIC8vICAgICAvLyBoYW5kcy5pbm5lckhUTUwgPSBhcnI7XG4vLyAgICAgLy8gICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIxY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4vLyAgICAgLy8gICAgIC5kYXRhKHBsYXllcjEuaG9sZWNhcmRzKVxuLy8gICAgIC8vICAgICAuZW50ZXIoKVxuLy8gICAgIC8vICAgICAuYXBwZW5kKCdwJylcbi8vICAgICAvLyAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtyZXR1cm4gZH0pXG4vLyAgICAgLy8gICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjFjYXJkcycpXG4gICAgICAgIFxuLy8gICAgIC8vICAgICBkMy5zZWxlY3QoXCIjcGxheWVyMmNhcmRkaXZcIikuc2VsZWN0QWxsKFwicFwiKVxuLy8gICAgIC8vICAgICAuZGF0YShwbGF5ZXIyLmhvbGVjYXJkcylcbi8vICAgICAvLyAgICAgLmVudGVyKClcbi8vICAgICAvLyAgICAgLmFwcGVuZCgncCcpXG4vLyAgICAgLy8gICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7cmV0dXJuIGR9KVxuLy8gICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsICdwbGF5ZXIyY2FyZHMnKVxuICAgICAgICBcbi8vICAgICAvLyAgICAgZDMuc2VsZWN0KFwiI3BsYXllcjNjYXJkZGl2XCIpLnNlbGVjdEFsbChcInBcIilcbi8vICAgICAvLyAgICAgLmRhdGEocGxheWVyMy5ob2xlY2FyZHMpXG4vLyAgICAgLy8gICAgIC5lbnRlcigpXG4vLyAgICAgLy8gICAgIC5hcHBlbmQoJ3AnKVxuLy8gICAgIC8vICAgICAudGV4dChmdW5jdGlvbiAoZCkge3JldHVybiBkfSlcbi8vICAgICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCAncGxheWVyM2NhcmRzJylcbi8vICAgICAvLyAgICAgLy8gZGVidWdnZXJcblxuXG4gICAgICAgIFxuLy8gICAgIC8vIH1cbi8vICAgICAvLyBsZXQgbWlkZGxlY2FyZHMgPSBbXTtcblxuLy8gICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbG9wJykub25jbGljayA9IGZ1bmN0aW9uIGZsb3BDYXJkcygpIHtcbi8vICAgICAvLyAgICAgYyA9IGNhcmRzLnNsaWNlKDAsMylcbi8vICAgICAvLyAgICAgbWlkZGxlY2FyZHMgPSBtaWRkbGVjYXJkcy5jb25jYXQoYyk7XG4vLyAgICAgLy8gICAgIHBsYXllcjEuY2FyZFBvb2wgPSBwbGF5ZXIxLmNhcmRQb29sLmNvbmNhdChtaWRkbGVjYXJkcylcbi8vICAgICAvLyAgICAgcGxheWVyMi5jYXJkUG9vbCA9IHBsYXllcjIuY2FyZFBvb2wuY29uY2F0KG1pZGRsZWNhcmRzKVxuLy8gICAgIC8vICAgICBwbGF5ZXIzLmNhcmRQb29sID0gcGxheWVyMy5jYXJkUG9vbC5jb25jYXQobWlkZGxlY2FyZHMpXG4vLyAgICAgLy8gICAgIGZsb3AuaW5uZXJIVE1MID0gbWlkZGxlY2FyZHM7XG4vLyAgICAgLy8gICAgIGNhcmRzID0gY2FyZHMuc2xpY2UoMyw0Nilcbi8vICAgICAvLyB9XG5cblxuXG4vLyAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4nKS5vbmNsaWNrID0gZnVuY3Rpb24gdHVybkNhcmQoKSB7XG4vLyAgICAgLy8gICAgIG1pZGRsZWNhcmRzLnB1c2goY2FyZHNbMF0pO1xuLy8gICAgIC8vICAgICBwbGF5ZXIxLmNhcmRQb29sLnB1c2gobWlkZGxlY2FyZHNbM10pO1xuLy8gICAgIC8vICAgICBwbGF5ZXIyLmNhcmRQb29sLnB1c2gobWlkZGxlY2FyZHNbM10pO1xuLy8gICAgIC8vICAgICBwbGF5ZXIzLmNhcmRQb29sLnB1c2gobWlkZGxlY2FyZHNbM10pO1xuLy8gICAgIC8vICAgICB0dXJuLmlubmVySFRNTCA9IHBsYXllcjEuY2FyZFBvb2xbNV07XG4vLyAgICAgLy8gICAgIGNhcmRzLnNoaWZ0KCk7XG4vLyAgICAgLy8gfVxuXG4vLyAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpdmVyJykub25jbGljayA9IGZ1bmN0aW9uIHJpdmVyQ2FyZCgpIHtcbi8vICAgICAvLyAgICAgbWlkZGxlY2FyZHMucHVzaChjYXJkc1swXSk7XG4vLyAgICAgLy8gICAgIHBsYXllcjEuY2FyZFBvb2wucHVzaChtaWRkbGVjYXJkc1s0XSk7XG4vLyAgICAgLy8gICAgIHBsYXllcjIuY2FyZFBvb2wucHVzaChtaWRkbGVjYXJkc1s0XSk7XG4vLyAgICAgLy8gICAgIHBsYXllcjMuY2FyZFBvb2wucHVzaChtaWRkbGVjYXJkc1s0XSk7XG4vLyAgICAgLy8gICAgIHJpdmVyLmlubmVySFRNTCA9IHBsYXllcjEuY2FyZFBvb2xbNl07XG4vLyAgICAgLy8gICAgIGNhcmRzLnNoaWZ0KCk7XG4vLyAgICAgLy8gfVxuXG4vLyAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvbHZlJykub25jbGljayA9IGZ1bmN0aW9uIHdpbm5pbmdIYW5kKCkge1xuLy8gICAgIC8vICAgICBsZXQgaGFuZDEgPSBIYW5kLnNvbHZlKHBsYXllcjEuY2FyZFBvb2wpO1xuLy8gICAgIC8vICAgICBsZXQgaGFuZDIgPSBIYW5kLnNvbHZlKHBsYXllcjIuY2FyZFBvb2wpO1xuLy8gICAgIC8vICAgICBsZXQgaGFuZDMgPSBIYW5kLnNvbHZlKHBsYXllcjMuY2FyZFBvb2wpO1xuLy8gICAgIC8vICAgICBsZXQgaGFuZHMgPSBbaGFuZDEsIGhhbmQyLCBoYW5kM107XG4vLyAgICAgLy8gICAgIGxldCB3aW5uZXIgPSBIYW5kLndpbm5lcnMoaGFuZHMpO1xuLy8gICAgIC8vICAgICBsZXQgY2hhbXA7XG4vLyAgICAgLy8gICAgIGlmIChoYW5kMS5jYXJkUG9vbCA9PT0gd2lubmVyWzBdLmNhcmRQb29sKSB7XG4vLyAgICAgLy8gICAgICAgICBjaGFtcCA9IHBsYXllcjFcbi8vICAgICAvLyAgICAgfSBlbHNlIGlmIChoYW5kMi5jYXJkUG9vbCA9PT0gd2lubmVyWzBdLmNhcmRQb29sKSB7XG4vLyAgICAgLy8gICAgICAgICBjaGFtcCA9IHBsYXllcjJcbi8vICAgICAvLyAgICAgfSBlbHNlIHtcbi8vICAgICAvLyAgICAgICAgIGNoYW1wID0gcGxheWVyM1xuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gICAgIHNvbHZlLmlubmVySFRNTCA9IGNoYW1wLm5hbWU7XG4vLyAgICAgLy8gfVxuXG5cblxuICAgIFxuICAgIFxuXG4vLyAvLyAvLyBwbGF5ZXJDYXJkcy5hcHBlbmQoaGFuZHMpXG4gICAgXG4vLyB9KVxuIiwiY29uc3QgcGxheWVyQ2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdmFyIHggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICB2YXIgeSA9IGNhbnZhcy5oZWlnaHQgLSAzMDtcbiAgICAgICAgdmFyIHgxID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgdmFyIHkxID0gY2FudmFzLmhlaWdodCAtIDMwO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB2YXIgZHggPSAyO1xuICAgICAgICB2YXIgZHkgPSAtMTA7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh4LCB5LCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ0b21hdG9cIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuXG4gICAgLy8gZnVuY3Rpb24gZHJhdygpIHtcbiAgICAvLyAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIC8vICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gICAgIGN0eC5hcmMoeCwgeSwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAvLyAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIC8vICAgICBjdHguZmlsbCgpO1xuICAgIC8vICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgLy8gICAgIHggKz0gZHg7XG4gICAgLy8gICAgIHkgKz0gZHk7XG4gICAgLy8gfVxuXG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmV0YnV0dG9uXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiBtb3ZlQ2hpcHMoKSB7XG4gICAgICAgIC8vICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICBjdHguYXJjKHgxLCB5MSwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcInRvbWF0b1wiO1xuICAgICAgICAvLyAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgLy8gICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgLy8gICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gICAgIHgxICs9IGR4O1xuICAgICAgICAvLyAgICAgeTEgKz0gZHk7XG4gICAgICAgIC8vICAgICBkZWJ1Z2dlclxuICAgICAgICAvLyB9XG5cblxuICAgIH1cbmV4cG9ydCBkZWZhdWx0IHBsYXllckNoaXBzOyIsIlxuXG5jb25zdCBzY29yZWJvYXJkID0gKCkgPT4ge1xuICAgIGRlYnVnZ2VyXG4gICAgdmFyIHBvdCA9IHtuYW1lOiAnUG90JywgY2hpcHM6IDB9XG4gICAgbGV0IG1pZGRsZWNhcmRzID0gW107XG4gICAgbGV0IGM7XG4gICAgY29uc3QgdmFsdWVzID0gWycyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnVCcsICdKJywgJ1EnLCAnSycsICdBJ107XG4gICAgY29uc3Qgc3VpdHMgPSBbJ3MnLCAnYycsICdoJywgJ2QnXTtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgeDEgPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHZhciB5MSA9IGNhbnZhcy5oZWlnaHQgLSAzMDtcbiAgICB2YXIgZHggPSAyO1xuICAgIHZhciBkeSA9IC0xMDtcbiAgICBsZXQgY2FyZHMgPSBbXTtcbiAgICBsZXQgcGxheWVyMSA9IHtcbiAgICAgICAgbmFtZTogJ01lJyxcbiAgICAgICAgY2hpcHM6IDEwMCxcbiAgICAgICAgY2FyZFBvb2w6IFtdLFxuICAgICAgICBob2xlY2FyZHM6IFtdLFxuICAgICAgICBzdGF0dXM6ICdsaXZlJ1xuICAgIH1cbiAgICBsZXQgcGxheWVyMiA9IHtcbiAgICAgICAgbmFtZTogJ1RvbSBEd2FuJyxcbiAgICAgICAgY2hpcHM6IDEwMCxcbiAgICAgICAgY2FyZFBvb2w6IFtdLFxuICAgICAgICBob2xlY2FyZHM6IFtdLFxuICAgICAgICBzdGF0dXM6ICdsaXZlJ1xuICAgIH1cbiAgICBsZXQgcGxheWVyMyA9IHtcbiAgICAgICAgbmFtZTogJ1BoaWwgSXZleScsXG4gICAgICAgIGNoaXBzOiAxMDAsXG4gICAgICAgIGNhcmRQb29sOiBbXSxcbiAgICAgICAgaG9sZWNhcmRzOiBbXSxcbiAgICAgICAgc3RhdHVzOiAnbGl2ZSdcbiAgICB9XG4gICAgdmFyIHRoZURhdGEgPSBbcGxheWVyMSwgcGxheWVyMiwgcGxheWVyMywgcG90XTtcbiAgICBsZXQgcGxheWVycyA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzXVxuXG4gICAgZDMuc2VsZWN0KFwiI2NoaXBjb3VudFwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgIC5kYXRhKHRoZURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgKyBcIiA6IFwiICsgZC5jaGlwczsgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBsYXllcm5hbWVzXCIpO1xuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWl0cy5sZW5ndGg7IGorKykge1xuICAgIC8vICAgICAgICAgbGV0IGVsZSA9IHZhbHVlc1tpXS5jb25jYXQoc3VpdHNbal0pO1xuICAgIC8vICAgICAgICAgY2FyZHMucHVzaChlbGUpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIHZhciBpLCBqLCB0ZW1wO1xuICAgIC8vIGZvciAoaSA9IGNhcmRzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAvLyAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgIC8vICAgICB0ZW1wID0gY2FyZHNbaV07XG4gICAgLy8gICAgIGNhcmRzW2ldID0gY2FyZHNbal07XG4gICAgLy8gICAgIGNhcmRzW2pdID0gdGVtcDtcbiAgICAvLyB9O1xuICAgIGxldCB0dXJuID0gMDtcbiAgICBsZXQgYmV0VHVybiA9IDBcbiAgICBsZXQgZGVhbFR1cm4gPSAwO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW5kcycpLm9uY2xpY2sgPSBmdW5jdGlvbiBkZWFsQ2FyZHMoKSB7XG4gICAgICAgIC8vIGlmIChkZWFsVHVybiA9PT0gMCkge1xuICAgICAgICAgICAgLy8gY29uc3QgdmFsdWVzID0gWycyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnVCcsICdKJywgJ1EnLCAnSycsICdBJ107XG4gICAgICAgICAgICAvLyBjb25zdCBzdWl0cyA9IFsncycsICdjJywgJ2gnLCAnZCddO1xuICAgICAgICAgICAgLy8gbGV0IGNhcmRzID0gW107XG4gICAgICAgICAgICBjYXJkcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3VpdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZSA9IHZhbHVlc1tpXS5jb25jYXQoc3VpdHNbal0pO1xuICAgICAgICAgICAgICAgICAgICBjYXJkcy5wdXNoKGVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGksIGosIHRlbXA7XG4gICAgICAgICAgICBmb3IgKGkgPSBjYXJkcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgICAgIHRlbXAgPSBjYXJkc1tpXTtcbiAgICAgICAgICAgICAgICBjYXJkc1tpXSA9IGNhcmRzW2pdO1xuICAgICAgICAgICAgICAgIGNhcmRzW2pdID0gdGVtcDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGlmIChkZWFsVHVybiA9PT0gMCkge1xuICAgICAgICAgICAgZGVhbFR1cm4gKz0gMVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmhvbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmNhcmRQb29sLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KClcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmhvbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmNhcmRQb29sLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KClcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmhvbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNhcmRQb29sLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxldCBhcnIgPSBbcGxheWVyMS5ob2xlY2FyZHMsIHBsYXllcjIuaG9sZWNhcmRzLCBwbGF5ZXIzLmhvbGVjYXJkc107XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIxY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMS5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjFjYXJkcycpXG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIyY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMi5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjJjYXJkcycpXG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIzY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMy5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjNjYXJkcycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmV0VHVybiA+PSA0KSB7XG4gICAgICAgICAgICB0dXJuID0gMDtcbiAgICAgICAgICAgIGJldFR1cm4gPSAwO1xuICAgICAgICAgICAgZGVhbFR1cm4gPSAwO1xuICAgICAgICAgICAgbWlkZGxlY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIHBvdC5jaGlwcyA9IDA7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBsYXllcnNbaV0uY2FyZFBvb2wgPSBbXTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzW2ldLmhvbGVjYXJkcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcjFjYXJkc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIyY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVyM2NhcmRzXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmZsb3BjYXJkc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXJuYW1lc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5jaGFtcFwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2NoaXBjb3VudFwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEodGhlRGF0YSlcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSArIFwiIDogXCIgKyBkLmNoaXBzOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwbGF5ZXJuYW1lc1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZXRidXR0b24nKS5vbmNsaWNrID0gZnVuY3Rpb24gcGxhY2VCZXQoKSB7XG5cbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoeDEsIHkxLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ0b21hdG9cIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgeDEgKz0gZHg7XG4gICAgICAgIHkxICs9IGR5O1xuXG5cblxuICAgICAgICBpZiAoYmV0VHVybiA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHR1cm4gJSAzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5jaGlwcyA9IHBsYXllcjEuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHVybiAlIDMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmNoaXBzID0gcGxheWVyMi5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0dXJuICUgMyA9PT0gMikge1xuICAgICAgICAgICAgICAgIHBsYXllcjMuY2hpcHMgPSBwbGF5ZXIzLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgYmV0VHVybiArPSAxXG4gICAgICAgICAgICAgICAgYyA9IGNhcmRzLnNsaWNlKDAsIDMpXG4gICAgICAgICAgICAgICAgbWlkZGxlY2FyZHMgPSBtaWRkbGVjYXJkcy5jb25jYXQoYyk7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5jYXJkUG9vbCA9IHBsYXllcjEuY2FyZFBvb2wuY29uY2F0KG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgICAgIHBsYXllcjIuY2FyZFBvb2wgPSBwbGF5ZXIyLmNhcmRQb29sLmNvbmNhdChtaWRkbGVjYXJkcylcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNhcmRQb29sID0gcGxheWVyMy5jYXJkUG9vbC5jb25jYXQobWlkZGxlY2FyZHMpXG4gICAgICAgICAgICAgICAgY2FyZHMgPSBjYXJkcy5zbGljZSgzLCA0Nik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KFwiI3BsYXllcjFjYXJkZGl2XCIpLnNlbGVjdEFsbChcInNwYW5cIilcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEobWlkZGxlY2FyZHMpXG4gICAgICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJzcGFuXCIpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJmbG9wY2FyZHNcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHR1cm4gKz0gMTtcbiAgICAgICAgICAgIHBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgXG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXJuYW1lc1wiKS5yZW1vdmUoKTtcblxuXG4gICAgICAgIGQzLnNlbGVjdChcIiNjaGlwY291bnRcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgLmRhdGEodGhlRGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSArIFwiIDogXCIgKyBkLmNoaXBzOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBsYXllcm5hbWVzXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNlIGlmIChiZXRUdXJuID09PSAxIHx8IGJldFR1cm4gPT09IDIpIHtcbiAgICAgICAgICAgIGlmICh0dXJuICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2hpcHMgPSBwbGF5ZXIxLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR1cm4gJSAzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jaGlwcyA9IHBsYXllcjIuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHVybiAlIDMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNoaXBzID0gcGxheWVyMy5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgIGJldFR1cm4gKz0gMTtcbiAgICAgICAgICAgICAgICBtaWRkbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmNhcmRQb29sLnB1c2gobWlkZGxlY2FyZHNbbWlkZGxlY2FyZHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHBsYXllcjIuY2FyZFBvb2wucHVzaChtaWRkbGVjYXJkc1ttaWRkbGVjYXJkcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMy5jYXJkUG9vbC5wdXNoKG1pZGRsZWNhcmRzW21pZGRsZWNhcmRzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICBjYXJkcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmZsb3BjYXJkcycpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCgnI3BsYXllcjFjYXJkZGl2Jykuc2VsZWN0QWxsKCdzcGFuJylcbiAgICAgICAgICAgICAgICAuZGF0YShtaWRkbGVjYXJkcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3NwYW4nKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7cmV0dXJuIGR9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ2Zsb3BjYXJkcycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0dXJuICs9IDE7XG4gICAgICAgICAgICBwb3QuY2hpcHMgKz0gMTA7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVybmFtZXNcIikucmVtb3ZlKCk7XG5cblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2NoaXBjb3VudFwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEodGhlRGF0YSlcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSArIFwiIDogXCIgKyBkLmNoaXBzOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwbGF5ZXJuYW1lc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChiZXRUdXJuID09PSAzKSB7XG4gICAgICAgICAgICBsZXQgaGFuZDEgPSBIYW5kLnNvbHZlKHBsYXllcjEuY2FyZFBvb2wpO1xuICAgICAgICAgICAgbGV0IGhhbmQyID0gSGFuZC5zb2x2ZShwbGF5ZXIyLmNhcmRQb29sKTtcbiAgICAgICAgICAgIGxldCBoYW5kMyA9IEhhbmQuc29sdmUocGxheWVyMy5jYXJkUG9vbCk7XG4gICAgICAgICAgICBsZXQgaGFuZHMgPSBbaGFuZDEsIGhhbmQyLCBoYW5kM107XG4gICAgICAgICAgICBsZXQgd2lubmVyID0gSGFuZC53aW5uZXJzKGhhbmRzKTtcbiAgICAgICAgICAgIGxldCBjaGFtcDtcbiAgICAgICAgICAgIGlmIChoYW5kMS5jYXJkUG9vbCA9PT0gd2lubmVyWzBdLmNhcmRQb29sKSB7XG4gICAgICAgICAgICAgICAgY2hhbXAgPSBwbGF5ZXIxLm5hbWVcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmNoaXBzICs9IHBvdC5jaGlwcztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFuZDIuY2FyZFBvb2wgPT09IHdpbm5lclswXS5jYXJkUG9vbCkge1xuICAgICAgICAgICAgICAgIGNoYW1wID0gcGxheWVyMi5uYW1lXG4gICAgICAgICAgICAgICAgcGxheWVyMi5jaGlwcyArPSBwb3QuY2hpcHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW1wID0gcGxheWVyMy5uYW1lXG4gICAgICAgICAgICAgICAgcGxheWVyMy5jaGlwcyArPSBwb3QuY2hpcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFtcClcbiAgICAgICAgICAgIC8vIGxldCB2aWN0b3IgPSBbY2hhbXBdXG4gICAgICAgICAgICAvLyBjaGFtcCBpcyBhIHN0cmluZyBvZiB0aGUgd2lubmVyJ3MgbmFtZVxuICAgICAgICAgICAgbGV0IGNoYW1waW9uID0gW3tuYW1lOiBjaGFtcH1dO1xuICAgICAgICAgICAgZDMuc2VsZWN0KFwiLmNoYW1wXCIpLnNlbGVjdEFsbCgncCcpXG4gICAgICAgICAgICAuZGF0YShjaGFtcGlvbilcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtyZXR1cm4gIGQubmFtZSArICcgd2lucyB0aGUgcG90JyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYW1wXCIpXG4gICAgICAgICAgICBiZXRUdXJuICs9IDFcblxuICAgICAgICB9XG4gICAgfSBcbn1cbmV4cG9ydCBkZWZhdWx0IHNjb3JlYm9hcmQ7XG5cbiIsIi8vIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmltcG9ydCBzY29yZWJvYXJkIGZyb20gJy4uL2phdmFzY3JpcHQvanMvc2NvcmVib2FyZCc7XG5pbXBvcnQgY2FyZHMgZnJvbSAnLi4vamF2YXNjcmlwdC9qcy9jYXJkcyc7XG5pbXBvcnQgcGxheWVyQ2hpcHMgZnJvbSAnLi4vamF2YXNjcmlwdC9qcy9wbGF5ZXJfY2hpcHMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgZGVidWdnZXJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXNuJ3Qgd29ya2luZ1wiKVxuICAgIHNjb3JlYm9hcmQoKTtcbiAgICBjYXJkcygpO1xuICAgIHBsYXllckNoaXBzKCk7XG59KSJdLCJzb3VyY2VSb290IjoiIn0=