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
  var ctx = canvas.getContext("2d"); // var x = canvas.width / 2;
  // var y = canvas.height - 30;
  // var x1 = canvas.width / 2;
  // var y1 = canvas.height - 30;
  // // debugger
  // var dx = 2;
  // var dy = -10;
  // ctx.beginPath();
  // ctx.arc(25, 150, 10, 0, Math.PI * 2);
  // ctx.fillStyle = "pink";
  // ctx.fill();
  // ctx.closePath();
  // ctx.strokeStyle = "black";
  // ctx.stroke();
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
  //     ctx.arc(x1, y1, 20, 0, Math.PI * 2);
  //     ctx.fillStyle = "tomato";
  //     ctx.fill();
  //     ctx.closePath();
  //     ctx.strokeStyle = "black";
  //     ctx.stroke();
  //     x1 += dx;
  //     y1 += dy;
  //     // debugger
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
  var pot = {
    name: 'Pot',
    chips: 0
  };
  var middlecards = [];
  var allCards = {};
  var c;
  var values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  var suits = ['s', 'c', 'h', 'd'];
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var x1 = 290;
  var y1 = 20;
  var dx = 2;
  var dy = -10;
  var time = 0;
  var cards = [];
  var player1 = {
    name: 'Mike McDermott',
    chips: 100,
    cardPool: [],
    holecards: [],
    showCards: {},
    status: true
  };
  var player2 = {
    name: 'Tom Dwan',
    chips: 100,
    cardPool: [],
    holecards: [],
    showCards: {},
    status: true
  };
  var player3 = {
    name: 'Phil Ivey',
    chips: 100,
    cardPool: [],
    holecards: [],
    showCards: {},
    status: true
  };
  var theData = [player1, player2, player3, pot];
  var players = [player1, player2, player3];
  d3.select("#chipcount").selectAll("p").data(theData).enter().append("p").text(function (d) {
    return d.name + " : " + d.chips;
  }).attr("class", "playernames");
  var turn = 0;
  var betTurn = 0;
  var dealTurn = 0;

  document.getElementById('hands').onclick = function dealCards() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    cards = [];
    var deck1 = {};
    var deck2 = {};
    var deck3 = {};
    var deck4 = {};
    var card;
    var num;

    var _char;

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
        card = cards[0];
        _char = card[0]; // debugger

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
      }).attr("class", 'player3cards'); // debugger
    }

    if (betTurn >= 4) {
      turn = 0;
      betTurn = 0;
      dealTurn = 0;
      middlecards = [];
      pot.chips = 0;

      if (player1.chips < 30) {
        player1.chips = 100;
      }

      if (player2.chips < 30) {
        player2.chips = 100;
      }

      if (player3.chips < 30) {
        player3.chips = 100;
      }

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
    if (betTurn === 0) {
      if (turn % 3 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(300, 20, 10, 0, Math.PI * 2);
        ctx.fillStyle = "tomato";
        ctx.text = '10';
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        x1 += dx;
        y1 += dy;
        player1.chips = player1.chips - 10;
      } else if (turn % 3 === 1) {
        player2.chips = player2.chips - 10; // ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(260, 20, 10, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.text = '10';
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        x1 += dx;
        y1 += dy;
      } else if (turn % 3 === 2) {
        player3.chips = player3.chips - 10;
        ctx.beginPath();
        ctx.arc(270, 20, 10, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.text = '10';
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        x1 += dx;
        y1 += dy;
        betTurn += 1;
        c = cards.slice(0, 3);
        middlecards = middlecards.concat(c);
        player1.cardPool = player1.cardPool.concat(middlecards);
        player2.cardPool = player2.cardPool.concat(middlecards);
        player3.cardPool = player3.cardPool.concat(middlecards);
        cards = cards.slice(3, 46);
        d3.select("#flopcard-anchor").selectAll("p").data(middlecards).enter().append("p").text(function (d) {
          return d;
        }).attr("class", "flopcards"); // .attr("height", "50px")
      }

      turn += 1;
      pot.chips += 10;
      d3.selectAll(".playernames").remove();
      d3.select("#chipcount").selectAll("p").data(theData).enter().append("p").text(function (d) {
        return d.name + " : " + d.chips;
      }).attr("class", "playernames");
    } else if (betTurn === 1 || betTurn === 2) {
      if (turn % 3 === 0) {
        if (time === 0) {
          player1.chips = player1.chips - 10;
          ctx.beginPath();
          ctx.arc(270, 15, 10, 0, Math.PI * 2);
          ctx.fillStyle = "tomato";
          ctx.text = '10';
          ctx.fill();
          ctx.closePath();
          ctx.strokeStyle = "black";
          ctx.stroke();
          x1 += dx;
          y1 += dy;
        } else {
          player1.chips = player1.chips - 10;
          ctx.beginPath();
          ctx.arc(265, 21, 10, 0, Math.PI * 2);
          ctx.fillStyle = "tomato";
          ctx.text = '10';
          ctx.fill();
          ctx.closePath();
          ctx.strokeStyle = "black";
          ctx.stroke();
          x1 += dx;
          y1 += dy;
        }
      } else if (turn % 3 === 1) {
        if (time === 0) {
          player2.chips = player2.chips - 10;
          ctx.beginPath();
          ctx.arc(290, 20, 10, 0, Math.PI * 2);
          ctx.fillStyle = "yellow";
          ctx.text = '10';
          ctx.fill();
          ctx.closePath();
          ctx.strokeStyle = "black";
          ctx.stroke();
          x1 += dx;
          y1 += dy;
        } else {
          player2.chips = player2.chips - 10;
          ctx.beginPath();
          ctx.arc(295, 21, 10, 0, Math.PI * 2);
          ctx.fillStyle = "yellow";
          ctx.text = '10';
          ctx.fill();
          ctx.closePath();
          ctx.strokeStyle = "black";
          ctx.stroke();
          x1 += dx;
          y1 += dy;
        }
      } else if (turn % 3 === 2) {
        if (time === 0) {
          player3.chips = player3.chips - 10;
          ctx.beginPath();
          ctx.arc(320, 20, 10, 0, Math.PI * 2);
          ctx.fillStyle = "blue";
          ctx.text = '10';
          ctx.fill();
          ctx.closePath();
          ctx.strokeStyle = "black";
          ctx.stroke();
          x1 += dx;
          y1 += dy;
          betTurn += 1;
          time += 1;
        } else {
          player3.chips = player3.chips - 10;
          ctx.beginPath();
          ctx.arc(305, 24, 10, 0, Math.PI * 2);
          ctx.fillStyle = "blue";
          ctx.text = '10';
          ctx.fill();
          ctx.closePath();
          ctx.strokeStyle = "black";
          ctx.stroke();
          x1 += dx;
          y1 += dy;
          betTurn += 1;
        }

        middlecards.push(cards[0]);
        player1.cardPool.push(middlecards[middlecards.length - 1]);
        player2.cardPool.push(middlecards[middlecards.length - 1]);
        player3.cardPool.push(middlecards[middlecards.length - 1]);
        cards.shift();
        d3.selectAll('.flopcards').remove();
        d3.select('#flopcard-anchor').selectAll('span').data(middlecards).enter().append('span').text(function (d) {
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
        champ = player1;
        player1.chips += pot.chips;
      } else if (hand2.cardPool === winner[0].cardPool) {
        champ = player2;
        player2.chips += pot.chips;
      } else {
        champ = player3;
        player3.chips += pot.chips;
      }

      console.log(champ); // let victor = [champ]
      // champ is a string of the winner's name

      var champion = [{
        name: champ.name
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
/* harmony import */ var _javascript_js_player_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../javascript/js/player_chips */ "./javascript/js/player_chips.js");
// const axios = require('axios');


document.addEventListener("DOMContentLoaded", function () {
  // console.log("this isn't working")
  Object(_javascript_js_player_chips__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_javascript_js_scoreboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9wbGF5ZXJfY2hpcHMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwbGF5ZXJDaGlwcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2NvcmVib2FyZCIsInBvdCIsIm5hbWUiLCJjaGlwcyIsIm1pZGRsZWNhcmRzIiwiYWxsQ2FyZHMiLCJjIiwidmFsdWVzIiwic3VpdHMiLCJ4MSIsInkxIiwiZHgiLCJkeSIsInRpbWUiLCJjYXJkcyIsInBsYXllcjEiLCJjYXJkUG9vbCIsImhvbGVjYXJkcyIsInNob3dDYXJkcyIsInN0YXR1cyIsInBsYXllcjIiLCJwbGF5ZXIzIiwidGhlRGF0YSIsInBsYXllcnMiLCJkMyIsInNlbGVjdCIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImFwcGVuZCIsInRleHQiLCJkIiwiYXR0ciIsInR1cm4iLCJiZXRUdXJuIiwiZGVhbFR1cm4iLCJvbmNsaWNrIiwiZGVhbENhcmRzIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJkZWNrMSIsImRlY2syIiwiZGVjazMiLCJkZWNrNCIsImNhcmQiLCJudW0iLCJjaGFyIiwiaSIsImxlbmd0aCIsImoiLCJlbGUiLCJjb25jYXQiLCJwdXNoIiwidGVtcCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNoaWZ0IiwicmVtb3ZlIiwicGxhY2VCZXQiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJjbG9zZVBhdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInNsaWNlIiwiaGFuZDEiLCJIYW5kIiwic29sdmUiLCJoYW5kMiIsImhhbmQzIiwiaGFuZHMiLCJ3aW5uZXIiLCJ3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dEI7QUFDQTs7QUFDQSxVQUFJRyxRQUFRLEdBQUcsQ0FBQztBQUFDL0UsWUFBSSxFQUFFNEUsS0FBSyxDQUFDNUU7QUFBYixPQUFELENBQWY7QUFDQXNCLFFBQUUsQ0FBQ0MsTUFBSCxDQUFVLFFBQVYsRUFBb0JDLFNBQXBCLENBQThCLEdBQTlCLEVBQ0NDLElBREQsQ0FDTXNELFFBRE4sRUFFQ3JELEtBRkQsR0FHQ0MsTUFIRCxDQUdRLEdBSFIsRUFJQ0MsSUFKRCxDQUlNLFVBQVVDLENBQVYsRUFBYTtBQUFDLGVBQVFBLENBQUMsQ0FBQzdCLElBQUYsR0FBUyxlQUFqQjtBQUFrQyxPQUp0RCxFQUtDOEIsSUFMRCxDQUtNLE9BTE4sRUFLZSxPQUxmO0FBTUFFLGFBQU8sSUFBSSxDQUFYO0FBRUg7QUFDSixHQWxORDtBQW1OSCxDQWpYRDs7QUFrWGVsQyx5RUFBZixFOzs7Ozs7Ozs7Ozs7QUNsWEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFKLFFBQVEsQ0FBQ3NGLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hEO0FBQ0F4Riw2RUFBVztBQUNYTSwyRUFBVTtBQUNiLENBSkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBwbGF5ZXJDaGlwcyA9ICgpID0+IHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAvLyB2YXIgeCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgIC8vIHZhciB5ID0gY2FudmFzLmhlaWdodCAtIDMwO1xuICAgICAgICAvLyB2YXIgeDEgPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICAvLyB2YXIgeTEgPSBjYW52YXMuaGVpZ2h0IC0gMzA7XG4gICAgICAgIC8vIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIHZhciBkeCA9IDI7XG4gICAgICAgIC8vIHZhciBkeSA9IC0xMDtcbiAgICAgICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyBjdHguYXJjKDI1LCAxNTAsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcInBpbmtcIjtcbiAgICAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIC8vIGN0eC5zdHJva2UoKTtcblxuXG4gICAgLy8gZnVuY3Rpb24gZHJhdygpIHtcbiAgICAvLyAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIC8vICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gICAgIGN0eC5hcmMoeCwgeSwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAvLyAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIC8vICAgICBjdHguZmlsbCgpO1xuICAgIC8vICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgLy8gICAgIHggKz0gZHg7XG4gICAgLy8gICAgIHkgKz0gZHk7XG4gICAgLy8gfVxuXG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmV0YnV0dG9uXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiBtb3ZlQ2hpcHMoKSB7XG4gICAgICAgIC8vICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICBjdHguYXJjKHgxLCB5MSwgMjAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcInRvbWF0b1wiO1xuICAgICAgICAvLyAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgLy8gICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgLy8gICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gICAgIHgxICs9IGR4O1xuICAgICAgICAvLyAgICAgeTEgKz0gZHk7XG4gICAgICAgIC8vICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyB9XG5cblxuICAgIH1cbmV4cG9ydCBkZWZhdWx0IHBsYXllckNoaXBzOyIsImNvbnN0IHNjb3JlYm9hcmQgPSAoKSA9PiB7XG4gICAgdmFyIHBvdCA9IHtuYW1lOiAnUG90JywgY2hpcHM6IDB9XG4gICAgbGV0IG1pZGRsZWNhcmRzID0gW107XG4gICAgbGV0IGFsbENhcmRzID0ge307XG4gICAgbGV0IGM7XG4gICAgY29uc3QgdmFsdWVzID0gWycyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnVCcsICdKJywgJ1EnLCAnSycsICdBJ107XG4gICAgY29uc3Qgc3VpdHMgPSBbJ3MnLCAnYycsICdoJywgJ2QnXTtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgeDEgPSAyOTA7XG4gICAgdmFyIHkxID0gMjA7XG4gICAgdmFyIGR4ID0gMjtcbiAgICB2YXIgZHkgPSAtMTA7XG4gICAgbGV0IHRpbWUgPSAwO1xuICAgIGxldCBjYXJkcyA9IFtdO1xuICAgIGxldCBwbGF5ZXIxID0ge1xuICAgICAgICBuYW1lOiAnTWlrZSBNY0Rlcm1vdHQnLFxuICAgICAgICBjaGlwczogMTAwLFxuICAgICAgICBjYXJkUG9vbDogW10sXG4gICAgICAgIGhvbGVjYXJkczogW10sXG4gICAgICAgIHNob3dDYXJkczoge30sXG4gICAgICAgIHN0YXR1czogdHJ1ZVxuICAgIH1cbiAgICBsZXQgcGxheWVyMiA9IHtcbiAgICAgICAgbmFtZTogJ1RvbSBEd2FuJyxcbiAgICAgICAgY2hpcHM6IDEwMCxcbiAgICAgICAgY2FyZFBvb2w6IFtdLFxuICAgICAgICBob2xlY2FyZHM6IFtdLFxuICAgICAgICBzaG93Q2FyZHM6IHt9LFxuICAgICAgICBzdGF0dXM6IHRydWVcbiAgICB9XG4gICAgbGV0IHBsYXllcjMgPSB7XG4gICAgICAgIG5hbWU6ICdQaGlsIEl2ZXknLFxuICAgICAgICBjaGlwczogMTAwLFxuICAgICAgICBjYXJkUG9vbDogW10sXG4gICAgICAgIGhvbGVjYXJkczogW10sXG4gICAgICAgIHNob3dDYXJkczoge30sXG4gICAgICAgIHN0YXR1czogdHJ1ZVxuICAgIH1cbiAgICB2YXIgdGhlRGF0YSA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzLCBwb3RdO1xuICAgIGxldCBwbGF5ZXJzID0gW3BsYXllcjEsIHBsYXllcjIsIHBsYXllcjNdXG4gICAgXG5cbiAgICBkMy5zZWxlY3QoXCIjY2hpcGNvdW50XCIpLnNlbGVjdEFsbChcInBcIilcbiAgICAgICAgLmRhdGEodGhlRGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInBcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSArIFwiIDogXCIgKyBkLmNoaXBzOyB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwicGxheWVybmFtZXNcIik7XG5cbiAgICBsZXQgdHVybiA9IDA7XG4gICAgbGV0IGJldFR1cm4gPSAwXG4gICAgbGV0IGRlYWxUdXJuID0gMDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFuZHMnKS5vbmNsaWNrID0gZnVuY3Rpb24gZGVhbENhcmRzKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNhcmRzID0gW107XG4gICAgICAgICAgICBsZXQgZGVjazEgPSB7fTtcbiAgICAgICAgICAgIGxldCBkZWNrMiA9IHt9O1xuICAgICAgICAgICAgbGV0IGRlY2szID0ge307XG4gICAgICAgICAgICBsZXQgZGVjazQgPSB7fTtcbiAgICAgICAgICAgIGxldCBjYXJkO1xuICAgICAgICAgICAgbGV0IG51bTtcbiAgICAgICAgICAgIGxldCBjaGFyO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3VpdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZSA9IHZhbHVlc1tpXS5jb25jYXQoc3VpdHNbal0pO1xuICAgICAgICAgICAgICAgICAgICBjYXJkcy5wdXNoKGVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGksIGosIHRlbXA7XG4gICAgICAgICAgICBmb3IgKGkgPSBjYXJkcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgICAgIHRlbXAgPSBjYXJkc1tpXTtcbiAgICAgICAgICAgICAgICBjYXJkc1tpXSA9IGNhcmRzW2pdO1xuICAgICAgICAgICAgICAgIGNhcmRzW2pdID0gdGVtcDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBpZiAoZGVhbFR1cm4gPT09IDApIHtcbiAgICAgICAgICAgIGRlYWxUdXJuICs9IDFcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5ob2xlY2FyZHMucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5jYXJkUG9vbC5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBjYXJkID0gY2FyZHNbMF07XG4gICAgICAgICAgICAgICAgY2hhciA9IGNhcmRbMF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgICAgICBjYXJkcy5zaGlmdCgpXG4gICAgICAgICAgICAgICAgcGxheWVyMi5ob2xlY2FyZHMucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jYXJkUG9vbC5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBjYXJkcy5zaGlmdCgpXG4gICAgICAgICAgICAgICAgcGxheWVyMy5ob2xlY2FyZHMucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMy5jYXJkUG9vbC5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBjYXJkcy5zaGlmdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsZXQgYXJyID0gW3BsYXllcjEuaG9sZWNhcmRzLCBwbGF5ZXIyLmhvbGVjYXJkcywgcGxheWVyMy5ob2xlY2FyZHNdO1xuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIjcGxheWVyMWNhcmRkaXZcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHBsYXllcjEuaG9sZWNhcmRzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgncCcpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsICdwbGF5ZXIxY2FyZHMnKVxuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIjcGxheWVyMmNhcmRkaXZcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHBsYXllcjIuaG9sZWNhcmRzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgncCcpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsICdwbGF5ZXIyY2FyZHMnKVxuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIjcGxheWVyM2NhcmRkaXZcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHBsYXllcjMuaG9sZWNhcmRzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgncCcpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsICdwbGF5ZXIzY2FyZHMnKVxuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmV0VHVybiA+PSA0KSB7XG4gICAgICAgICAgICB0dXJuID0gMDtcbiAgICAgICAgICAgIGJldFR1cm4gPSAwO1xuICAgICAgICAgICAgZGVhbFR1cm4gPSAwO1xuICAgICAgICAgICAgbWlkZGxlY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIHBvdC5jaGlwcyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChwbGF5ZXIxLmNoaXBzIDwgMzApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmNoaXBzID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsYXllcjIuY2hpcHMgPCAzMCkge1xuICAgICAgICAgICAgICAgIHBsYXllcjIuY2hpcHMgPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyMy5jaGlwcyA8IDMwKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMy5jaGlwcyA9IDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyc1tpXS5jYXJkUG9vbCA9IFtdO1xuICAgICAgICAgICAgICAgIHBsYXllcnNbaV0uaG9sZWNhcmRzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVyMWNhcmRzXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcjJjYXJkc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIzY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuZmxvcGNhcmRzXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcm5hbWVzXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmNoYW1wXCIpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIjY2hpcGNvdW50XCIpLnNlbGVjdEFsbChcInBcIilcbiAgICAgICAgICAgICAgICAuZGF0YSh0aGVEYXRhKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInBcIilcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lICsgXCIgOiBcIiArIGQuY2hpcHM7IH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBsYXllcm5hbWVzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JldGJ1dHRvbicpLm9uY2xpY2sgPSBmdW5jdGlvbiBwbGFjZUJldCgpIHtcblxuICAgICAgICBcbiAgICAgICAgaWYgKGJldFR1cm4gPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0dXJuICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYygzMDAsIDIwLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInRvbWF0b1wiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2hpcHMgPSBwbGF5ZXIxLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR1cm4gJSAzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jaGlwcyA9IHBsYXllcjIuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgICAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmMoMjYwLCAyMCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgICAgICBjdHgudGV4dCA9ICcxMCc7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB4MSArPSBkeDtcbiAgICAgICAgICAgICAgICB5MSArPSBkeTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHVybiAlIDMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNoaXBzID0gcGxheWVyMy5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKDI3MCwgMjAsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgIGJldFR1cm4gKz0gMVxuICAgICAgICAgICAgICAgIGMgPSBjYXJkcy5zbGljZSgwLCAzKVxuICAgICAgICAgICAgICAgIG1pZGRsZWNhcmRzID0gbWlkZGxlY2FyZHMuY29uY2F0KGMpO1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2FyZFBvb2wgPSBwbGF5ZXIxLmNhcmRQb29sLmNvbmNhdChtaWRkbGVjYXJkcylcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmNhcmRQb29sID0gcGxheWVyMi5jYXJkUG9vbC5jb25jYXQobWlkZGxlY2FyZHMpXG4gICAgICAgICAgICAgICAgcGxheWVyMy5jYXJkUG9vbCA9IHBsYXllcjMuY2FyZFBvb2wuY29uY2F0KG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgICAgIGNhcmRzID0gY2FyZHMuc2xpY2UoMywgNDYpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdChcIiNmbG9wY2FyZC1hbmNob3JcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YShtaWRkbGVjYXJkcylcbiAgICAgICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInBcIilcbiAgICAgICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImZsb3BjYXJkc1wiKVxuICAgICAgICAgICAgICAgICAgICAvLyAuYXR0cihcImhlaWdodFwiLCBcIjUwcHhcIilcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0dXJuICs9IDE7XG4gICAgICAgICAgICBwb3QuY2hpcHMgKz0gMTA7XG4gICAgICAgIFxuICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVybmFtZXNcIikucmVtb3ZlKCk7XG5cblxuICAgICAgICBkMy5zZWxlY3QoXCIjY2hpcGNvdW50XCIpLnNlbGVjdEFsbChcInBcIilcbiAgICAgICAgICAgIC5kYXRhKHRoZURhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInBcIilcbiAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgKyBcIiA6IFwiICsgZC5jaGlwczsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwbGF5ZXJuYW1lc1wiKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZSBpZiAoYmV0VHVybiA9PT0gMSB8fCBiZXRUdXJuID09PSAyKSB7XG4gICAgICAgICAgICBpZiAodHVybiAlIDMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjEuY2hpcHMgPSBwbGF5ZXIxLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYygyNzAsIDE1LCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ0b21hdG9cIjtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRleHQgPSAnMTAnO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB4MSArPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgeTEgKz0gZHk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMS5jaGlwcyA9IHBsYXllcjEuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKDI2NSwgMjEsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInRvbWF0b1wiO1xuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dCA9ICcxMCc7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgICAgICB5MSArPSBkeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR1cm4gJSAzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMi5jaGlwcyA9IHBsYXllcjIuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKDI5MCwgMjAsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dCA9ICcxMCc7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgICAgICB5MSArPSBkeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIyLmNoaXBzID0gcGxheWVyMi5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoMjk1LCAyMSwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgeDEgKz0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHVybiAlIDMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjMuY2hpcHMgPSBwbGF5ZXIzLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYygzMjAsIDIwLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgeDEgKz0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgICAgICBiZXRUdXJuICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRpbWUgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIzLmNoaXBzID0gcGxheWVyMy5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoMzA1LCAyNCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dCA9ICcxMCc7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgICAgICB5MSArPSBkeTtcbiAgICAgICAgICAgICAgICAgICAgYmV0VHVybiArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtaWRkbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmNhcmRQb29sLnB1c2gobWlkZGxlY2FyZHNbbWlkZGxlY2FyZHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHBsYXllcjIuY2FyZFBvb2wucHVzaChtaWRkbGVjYXJkc1ttaWRkbGVjYXJkcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMy5jYXJkUG9vbC5wdXNoKG1pZGRsZWNhcmRzW21pZGRsZWNhcmRzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICBjYXJkcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmZsb3BjYXJkcycpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCgnI2Zsb3BjYXJkLWFuY2hvcicpLnNlbGVjdEFsbCgnc3BhbicpXG4gICAgICAgICAgICAgICAgLmRhdGEobWlkZGxlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdzcGFuJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge3JldHVybiBkfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsICdmbG9wY2FyZHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHVybiArPSAxO1xuICAgICAgICAgICAgcG90LmNoaXBzICs9IDEwO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcm5hbWVzXCIpLnJlbW92ZSgpO1xuXG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNjaGlwY291bnRcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHRoZURhdGEpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgKyBcIiA6IFwiICsgZC5jaGlwczsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwicGxheWVybmFtZXNcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoYmV0VHVybiA9PT0gMykge1xuICAgICAgICAgICAgbGV0IGhhbmQxID0gSGFuZC5zb2x2ZShwbGF5ZXIxLmNhcmRQb29sKTtcbiAgICAgICAgICAgIGxldCBoYW5kMiA9IEhhbmQuc29sdmUocGxheWVyMi5jYXJkUG9vbCk7XG4gICAgICAgICAgICBsZXQgaGFuZDMgPSBIYW5kLnNvbHZlKHBsYXllcjMuY2FyZFBvb2wpO1xuICAgICAgICAgICAgbGV0IGhhbmRzID0gW2hhbmQxLCBoYW5kMiwgaGFuZDNdO1xuICAgICAgICAgICAgbGV0IHdpbm5lciA9IEhhbmQud2lubmVycyhoYW5kcyk7XG4gICAgICAgICAgICBsZXQgY2hhbXA7XG4gICAgICAgICAgICBpZiAoaGFuZDEuY2FyZFBvb2wgPT09IHdpbm5lclswXS5jYXJkUG9vbCkge1xuICAgICAgICAgICAgICAgIGNoYW1wID0gcGxheWVyMVxuICAgICAgICAgICAgICAgIHBsYXllcjEuY2hpcHMgKz0gcG90LmNoaXBzO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYW5kMi5jYXJkUG9vbCA9PT0gd2lubmVyWzBdLmNhcmRQb29sKSB7XG4gICAgICAgICAgICAgICAgY2hhbXAgPSBwbGF5ZXIyXG4gICAgICAgICAgICAgICAgcGxheWVyMi5jaGlwcyArPSBwb3QuY2hpcHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW1wID0gcGxheWVyM1xuICAgICAgICAgICAgICAgIHBsYXllcjMuY2hpcHMgKz0gcG90LmNoaXBzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhbXApXG4gICAgICAgICAgICAvLyBsZXQgdmljdG9yID0gW2NoYW1wXVxuICAgICAgICAgICAgLy8gY2hhbXAgaXMgYSBzdHJpbmcgb2YgdGhlIHdpbm5lcidzIG5hbWVcbiAgICAgICAgICAgIGxldCBjaGFtcGlvbiA9IFt7bmFtZTogY2hhbXAubmFtZX1dO1xuICAgICAgICAgICAgZDMuc2VsZWN0KFwiLmNoYW1wXCIpLnNlbGVjdEFsbCgncCcpXG4gICAgICAgICAgICAuZGF0YShjaGFtcGlvbilcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtyZXR1cm4gIGQubmFtZSArICcgd2lucyB0aGUgcG90JyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYW1wXCIpXG4gICAgICAgICAgICBiZXRUdXJuICs9IDFcblxuICAgICAgICB9XG4gICAgfSBcbn1cbmV4cG9ydCBkZWZhdWx0IHNjb3JlYm9hcmQ7XG5cbiIsIi8vIGNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmltcG9ydCBzY29yZWJvYXJkIGZyb20gJy4uL2phdmFzY3JpcHQvanMvc2NvcmVib2FyZCc7XG5pbXBvcnQgcGxheWVyQ2hpcHMgZnJvbSAnLi4vamF2YXNjcmlwdC9qcy9wbGF5ZXJfY2hpcHMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzbid0IHdvcmtpbmdcIilcbiAgICBwbGF5ZXJDaGlwcygpO1xuICAgIHNjb3JlYm9hcmQoKTtcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==