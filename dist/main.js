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
  }).attr("class", "playernames");
  var turn = 0;
  var betTurn = 0;
  var dealTurn = 0;

  document.getElementById('hands').onclick = function dealCards() {
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
        _char = card[0];
        debugger;
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
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.beginPath();
    // ctx.arc(x1, y1, 10, 0, Math.PI * 2);
    // ctx.fillStyle = "tomato";
    // ctx.fill();
    // ctx.closePath();
    // ctx.strokeStyle = "black";
    // ctx.stroke();
    // x1 += dx;
    // y1 += dy;
    if (betTurn === 0) {
      if (turn % 3 === 0) {
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // ctx.beginPath();
        ctx.arc(20, 20, 10, 0, Math.PI * 2);
        ctx.fillStyle = "tomato";
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        x1 += dx;
        y1 += dy;
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
/* harmony import */ var _javascript_js_player_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../javascript/js/player_chips */ "./javascript/js/player_chips.js");
// const axios = require('axios');


document.addEventListener("DOMContentLoaded", function () {
  // console.log("this isn't working")
  Object(_javascript_js_player_chips__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_javascript_js_scoreboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9wbGF5ZXJfY2hpcHMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwbGF5ZXJDaGlwcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2NvcmVib2FyZCIsInBvdCIsIm5hbWUiLCJjaGlwcyIsIm1pZGRsZWNhcmRzIiwiYyIsInZhbHVlcyIsInN1aXRzIiwieDEiLCJ3aWR0aCIsInkxIiwiaGVpZ2h0IiwiZHgiLCJkeSIsImNhcmRzIiwicGxheWVyMSIsImNhcmRQb29sIiwiaG9sZWNhcmRzIiwic3RhdHVzIiwicGxheWVyMiIsInBsYXllcjMiLCJ0aGVEYXRhIiwicGxheWVycyIsImQzIiwic2VsZWN0Iiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiYXBwZW5kIiwidGV4dCIsImQiLCJhdHRyIiwidHVybiIsImJldFR1cm4iLCJkZWFsVHVybiIsIm9uY2xpY2siLCJkZWFsQ2FyZHMiLCJkZWNrMSIsImRlY2syIiwiZGVjazMiLCJkZWNrNCIsImNhcmQiLCJudW0iLCJjaGFyIiwiaSIsImxlbmd0aCIsImoiLCJlbGUiLCJjb25jYXQiLCJwdXNoIiwidGVtcCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNoaWZ0IiwicmVtb3ZlIiwicGxhY2VCZXQiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJjbG9zZVBhdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInNsaWNlIiwiaGFuZDEiLCJIYW5kIiwic29sdmUiLCJoYW5kMiIsImhhbmQzIiwiaGFuZHMiLCJ3aW5uZXIiLCJ3aW5uZXJzIiwiY2hhbXAiLCJjb25zb2xlIiwibG9nIiwiY2hhbXBpb24iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUNsQixNQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFiO0FBQ0EsTUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVixDQUZrQixDQUdsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdILENBN0NMOztBQThDZUwsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUEsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixNQUFJQyxHQUFHLEdBQUc7QUFBQ0MsUUFBSSxFQUFFLEtBQVA7QUFBY0MsU0FBSyxFQUFFO0FBQXJCLEdBQVY7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLEVBQW1ELEdBQW5ELEVBQXdELEdBQXhELEVBQTZELEdBQTdELENBQWY7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBZDtBQUNBLE1BQUlaLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWI7QUFDQSxNQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0EsTUFBSVMsRUFBRSxHQUFHYixNQUFNLENBQUNjLEtBQVAsR0FBZSxDQUF4QjtBQUNBLE1BQUlDLEVBQUUsR0FBR2YsTUFBTSxDQUFDZ0IsTUFBUCxHQUFnQixFQUF6QjtBQUNBLE1BQUlDLEVBQUUsR0FBRyxDQUFUO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLENBQUMsRUFBVjtBQUNBLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUMsT0FBTyxHQUFHO0FBQ1ZiLFFBQUksRUFBRSxJQURJO0FBRVZDLFNBQUssRUFBRSxHQUZHO0FBR1ZhLFlBQVEsRUFBRSxFQUhBO0FBSVZDLGFBQVMsRUFBRSxFQUpEO0FBS1ZDLFVBQU0sRUFBRTtBQUxFLEdBQWQ7QUFPQSxNQUFJQyxPQUFPLEdBQUc7QUFDVmpCLFFBQUksRUFBRSxVQURJO0FBRVZDLFNBQUssRUFBRSxHQUZHO0FBR1ZhLFlBQVEsRUFBRSxFQUhBO0FBSVZDLGFBQVMsRUFBRSxFQUpEO0FBS1ZDLFVBQU0sRUFBRTtBQUxFLEdBQWQ7QUFPQSxNQUFJRSxPQUFPLEdBQUc7QUFDVmxCLFFBQUksRUFBRSxXQURJO0FBRVZDLFNBQUssRUFBRSxHQUZHO0FBR1ZhLFlBQVEsRUFBRSxFQUhBO0FBSVZDLGFBQVMsRUFBRSxFQUpEO0FBS1ZDLFVBQU0sRUFBRTtBQUxFLEdBQWQ7QUFPQSxNQUFJRyxPQUFPLEdBQUcsQ0FBQ04sT0FBRCxFQUFVSSxPQUFWLEVBQW1CQyxPQUFuQixFQUE0Qm5CLEdBQTVCLENBQWQ7QUFDQSxNQUFJcUIsT0FBTyxHQUFHLENBQUNQLE9BQUQsRUFBVUksT0FBVixFQUFtQkMsT0FBbkIsQ0FBZDtBQUVBRyxJQUFFLENBQUNDLE1BQUgsQ0FBVSxZQUFWLEVBQXdCQyxTQUF4QixDQUFrQyxHQUFsQyxFQUNLQyxJQURMLENBQ1VMLE9BRFYsRUFFS00sS0FGTCxHQUdLQyxNQUhMLENBR1ksR0FIWixFQUlLQyxJQUpMLENBSVUsVUFBVUMsQ0FBVixFQUFhO0FBQUUsV0FBT0EsQ0FBQyxDQUFDNUIsSUFBRixHQUFTLEtBQVQsR0FBaUI0QixDQUFDLENBQUMzQixLQUExQjtBQUFrQyxHQUozRCxFQUtLNEIsSUFMTCxDQUtVLE9BTFYsRUFLbUIsYUFMbkI7QUFPQSxNQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUNBLE1BQUlDLE9BQU8sR0FBRyxDQUFkO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLENBQWY7O0FBQ0F0QyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNzQyxPQUFqQyxHQUEyQyxTQUFTQyxTQUFULEdBQXFCO0FBQ3hEdEIsU0FBSyxHQUFHLEVBQVI7QUFDQSxRQUFJdUIsS0FBSyxHQUFHLEVBQVo7QUFDQSxRQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLFFBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxRQUFJQyxJQUFKO0FBQ0EsUUFBSUMsR0FBSjs7QUFDQSxRQUFJQyxLQUFKOztBQUVBLFNBQUssSUFBSUMsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR3RDLE1BQU0sQ0FBQ3VDLE1BQTNCLEVBQW1DRCxFQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLFdBQUssSUFBSUUsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR3ZDLEtBQUssQ0FBQ3NDLE1BQTFCLEVBQWtDQyxFQUFDLEVBQW5DLEVBQXVDO0FBQ25DLFlBQUlDLEdBQUcsR0FBR3pDLE1BQU0sQ0FBQ3NDLEVBQUQsQ0FBTixDQUFVSSxNQUFWLENBQWlCekMsS0FBSyxDQUFDdUMsRUFBRCxDQUF0QixDQUFWOztBQUNBaEMsYUFBSyxDQUFDbUMsSUFBTixDQUFXRixHQUFYO0FBQ0g7QUFDSjs7QUFDRCxRQUFJSCxDQUFKLEVBQU9FLENBQVAsRUFBVUksSUFBVjs7QUFDQSxTQUFLTixDQUFDLEdBQUc5QixLQUFLLENBQUMrQixNQUFOLEdBQWUsQ0FBeEIsRUFBMkJELENBQUMsR0FBRyxDQUEvQixFQUFrQ0EsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQ0UsT0FBQyxHQUFHSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCVCxDQUFDLEdBQUcsQ0FBckIsQ0FBWCxDQUFKO0FBQ0FNLFVBQUksR0FBR3BDLEtBQUssQ0FBQzhCLENBQUQsQ0FBWjtBQUNBOUIsV0FBSyxDQUFDOEIsQ0FBRCxDQUFMLEdBQVc5QixLQUFLLENBQUNnQyxDQUFELENBQWhCO0FBQ0FoQyxXQUFLLENBQUNnQyxDQUFELENBQUwsR0FBV0ksSUFBWDtBQUNIOztBQUFBOztBQUNMLFFBQUloQixRQUFRLEtBQUssQ0FBakIsRUFBb0I7QUFDaEJBLGNBQVEsSUFBSSxDQUFaOztBQUNBLFdBQUssSUFBSVUsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRyxDQUFwQixFQUF1QkEsR0FBQyxFQUF4QixFQUE0QjtBQUN4QjdCLGVBQU8sQ0FBQ0UsU0FBUixDQUFrQmdDLElBQWxCLENBQXVCbkMsS0FBSyxDQUFDLENBQUQsQ0FBNUI7QUFDQUMsZUFBTyxDQUFDQyxRQUFSLENBQWlCaUMsSUFBakIsQ0FBc0JuQyxLQUFLLENBQUMsQ0FBRCxDQUEzQjtBQUNBMkIsWUFBSSxHQUFHM0IsS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUNBNkIsYUFBSSxHQUFHRixJQUFJLENBQUMsQ0FBRCxDQUFYO0FBRUE7QUFDQTNCLGFBQUssQ0FBQ3dDLEtBQU47QUFDQW5DLGVBQU8sQ0FBQ0YsU0FBUixDQUFrQmdDLElBQWxCLENBQXVCbkMsS0FBSyxDQUFDLENBQUQsQ0FBNUI7QUFDQUssZUFBTyxDQUFDSCxRQUFSLENBQWlCaUMsSUFBakIsQ0FBc0JuQyxLQUFLLENBQUMsQ0FBRCxDQUEzQjtBQUNBQSxhQUFLLENBQUN3QyxLQUFOO0FBQ0FsQyxlQUFPLENBQUNILFNBQVIsQ0FBa0JnQyxJQUFsQixDQUF1Qm5DLEtBQUssQ0FBQyxDQUFELENBQTVCO0FBQ0FNLGVBQU8sQ0FBQ0osUUFBUixDQUFpQmlDLElBQWpCLENBQXNCbkMsS0FBSyxDQUFDLENBQUQsQ0FBM0I7QUFDQUEsYUFBSyxDQUFDd0MsS0FBTjtBQUNILE9BaEJlLENBaUJoQjs7O0FBRUEvQixRQUFFLENBQUNDLE1BQUgsQ0FBVSxpQkFBVixFQUE2QkMsU0FBN0IsQ0FBdUMsR0FBdkMsRUFDS0MsSUFETCxDQUNVWCxPQUFPLENBQUNFLFNBRGxCLEVBRUtVLEtBRkwsR0FHS0MsTUFITCxDQUdZLEdBSFosRUFJS0MsSUFKTCxDQUlVLFVBQVVDLENBQVYsRUFBYTtBQUFFLGVBQU9BLENBQVA7QUFBVSxPQUpuQyxFQUtLQyxJQUxMLENBS1UsT0FMVixFQUttQixjQUxuQjtBQU9BUixRQUFFLENBQUNDLE1BQUgsQ0FBVSxpQkFBVixFQUE2QkMsU0FBN0IsQ0FBdUMsR0FBdkMsRUFDS0MsSUFETCxDQUNVUCxPQUFPLENBQUNGLFNBRGxCLEVBRUtVLEtBRkwsR0FHS0MsTUFITCxDQUdZLEdBSFosRUFJS0MsSUFKTCxDQUlVLFVBQVVDLENBQVYsRUFBYTtBQUFFLGVBQU9BLENBQVA7QUFBVSxPQUpuQyxFQUtLQyxJQUxMLENBS1UsT0FMVixFQUttQixjQUxuQjtBQU9BUixRQUFFLENBQUNDLE1BQUgsQ0FBVSxpQkFBVixFQUE2QkMsU0FBN0IsQ0FBdUMsR0FBdkMsRUFDS0MsSUFETCxDQUNVTixPQUFPLENBQUNILFNBRGxCLEVBRUtVLEtBRkwsR0FHS0MsTUFITCxDQUdZLEdBSFosRUFJS0MsSUFKTCxDQUlVLFVBQVVDLENBQVYsRUFBYTtBQUFFLGVBQU9BLENBQVA7QUFBVSxPQUpuQyxFQUtLQyxJQUxMLENBS1UsT0FMVixFQUttQixjQUxuQjtBQU1IOztBQUVELFFBQUlFLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ2RELFVBQUksR0FBRyxDQUFQO0FBQ0FDLGFBQU8sR0FBRyxDQUFWO0FBQ0FDLGNBQVEsR0FBRyxDQUFYO0FBQ0E5QixpQkFBVyxHQUFHLEVBQWQ7QUFDQUgsU0FBRyxDQUFDRSxLQUFKLEdBQVksQ0FBWjs7QUFFQSxXQUFLLElBQUl5QyxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHdEIsT0FBTyxDQUFDdUIsTUFBNUIsRUFBb0NELEdBQUMsRUFBckMsRUFBeUM7QUFDckN0QixlQUFPLENBQUNzQixHQUFELENBQVAsQ0FBVzVCLFFBQVgsR0FBc0IsRUFBdEI7QUFDQU0sZUFBTyxDQUFDc0IsR0FBRCxDQUFQLENBQVczQixTQUFYLEdBQXVCLEVBQXZCO0FBQ0g7O0FBQ0RNLFFBQUUsQ0FBQ0UsU0FBSCxDQUFhLGVBQWIsRUFBOEI4QixNQUE5QjtBQUNBaEMsUUFBRSxDQUFDRSxTQUFILENBQWEsZUFBYixFQUE4QjhCLE1BQTlCO0FBQ0FoQyxRQUFFLENBQUNFLFNBQUgsQ0FBYSxlQUFiLEVBQThCOEIsTUFBOUI7QUFDQWhDLFFBQUUsQ0FBQ0UsU0FBSCxDQUFhLFlBQWIsRUFBMkI4QixNQUEzQjtBQUNBaEMsUUFBRSxDQUFDRSxTQUFILENBQWEsY0FBYixFQUE2QjhCLE1BQTdCO0FBQ0FoQyxRQUFFLENBQUNFLFNBQUgsQ0FBYSxRQUFiLEVBQXVCOEIsTUFBdkI7QUFFQWhDLFFBQUUsQ0FBQ0MsTUFBSCxDQUFVLFlBQVYsRUFBd0JDLFNBQXhCLENBQWtDLEdBQWxDLEVBQ0tDLElBREwsQ0FDVUwsT0FEVixFQUVLTSxLQUZMLEdBR0tDLE1BSEwsQ0FHWSxHQUhaLEVBSUtDLElBSkwsQ0FJVSxVQUFVQyxDQUFWLEVBQWE7QUFBRSxlQUFPQSxDQUFDLENBQUM1QixJQUFGLEdBQVMsS0FBVCxHQUFpQjRCLENBQUMsQ0FBQzNCLEtBQTFCO0FBQWtDLE9BSjNELEVBS0s0QixJQUxMLENBS1UsT0FMVixFQUttQixhQUxuQjtBQU1IO0FBQ0osR0F6RkQ7O0FBMkZBbkMsVUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDc0MsT0FBckMsR0FBK0MsU0FBU3FCLFFBQVQsR0FBb0I7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxRQUFJdkIsT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2YsVUFBSUQsSUFBSSxHQUFHLENBQVAsS0FBYSxDQUFqQixFQUFvQjtBQUNoQjtBQUNBO0FBQ0FsQyxXQUFHLENBQUMyRCxHQUFKLENBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsQ0FBcEIsRUFBdUJOLElBQUksQ0FBQ08sRUFBTCxHQUFVLENBQWpDO0FBQ0E1RCxXQUFHLENBQUM2RCxTQUFKLEdBQWdCLFFBQWhCO0FBQ0E3RCxXQUFHLENBQUM4RCxJQUFKO0FBQ0E5RCxXQUFHLENBQUMrRCxTQUFKO0FBQ0EvRCxXQUFHLENBQUNnRSxXQUFKLEdBQWtCLE9BQWxCO0FBQ0FoRSxXQUFHLENBQUNpRSxNQUFKO0FBQ0F2RCxVQUFFLElBQUlJLEVBQU47QUFDQUYsVUFBRSxJQUFJRyxFQUFOO0FBQ0FFLGVBQU8sQ0FBQ1osS0FBUixHQUFnQlksT0FBTyxDQUFDWixLQUFSLEdBQWdCLEVBQWhDO0FBQ0gsT0FaRCxNQVlPLElBQUk2QixJQUFJLEdBQUcsQ0FBUCxLQUFhLENBQWpCLEVBQW9CO0FBQ3ZCYixlQUFPLENBQUNoQixLQUFSLEdBQWdCZ0IsT0FBTyxDQUFDaEIsS0FBUixHQUFnQixFQUFoQztBQUNILE9BRk0sTUFFQSxJQUFJNkIsSUFBSSxHQUFHLENBQVAsS0FBYSxDQUFqQixFQUFvQjtBQUN2QlosZUFBTyxDQUFDakIsS0FBUixHQUFnQmlCLE9BQU8sQ0FBQ2pCLEtBQVIsR0FBZ0IsRUFBaEM7QUFDQThCLGVBQU8sSUFBSSxDQUFYO0FBQ0E1QixTQUFDLEdBQUdTLEtBQUssQ0FBQ2tELEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBZixDQUFKO0FBQ0E1RCxtQkFBVyxHQUFHQSxXQUFXLENBQUM0QyxNQUFaLENBQW1CM0MsQ0FBbkIsQ0FBZDtBQUNBVSxlQUFPLENBQUNDLFFBQVIsR0FBbUJELE9BQU8sQ0FBQ0MsUUFBUixDQUFpQmdDLE1BQWpCLENBQXdCNUMsV0FBeEIsQ0FBbkI7QUFDQWUsZUFBTyxDQUFDSCxRQUFSLEdBQW1CRyxPQUFPLENBQUNILFFBQVIsQ0FBaUJnQyxNQUFqQixDQUF3QjVDLFdBQXhCLENBQW5CO0FBQ0FnQixlQUFPLENBQUNKLFFBQVIsR0FBbUJJLE9BQU8sQ0FBQ0osUUFBUixDQUFpQmdDLE1BQWpCLENBQXdCNUMsV0FBeEIsQ0FBbkI7QUFDQVUsYUFBSyxHQUFHQSxLQUFLLENBQUNrRCxLQUFOLENBQVksQ0FBWixFQUFlLEVBQWYsQ0FBUjtBQUVBekMsVUFBRSxDQUFDQyxNQUFILENBQVUsaUJBQVYsRUFBNkJDLFNBQTdCLENBQXVDLE1BQXZDLEVBQ0tDLElBREwsQ0FDVXRCLFdBRFYsRUFFS3VCLEtBRkwsR0FHS0MsTUFITCxDQUdZLE1BSFosRUFJS0MsSUFKTCxDQUlVLFVBQVVDLENBQVYsRUFBYTtBQUFFLGlCQUFPQSxDQUFQO0FBQVUsU0FKbkMsRUFLS0MsSUFMTCxDQUtVLE9BTFYsRUFLbUIsV0FMbkI7QUFPSDs7QUFDREMsVUFBSSxJQUFJLENBQVI7QUFDQS9CLFNBQUcsQ0FBQ0UsS0FBSixJQUFhLEVBQWI7QUFFSm9CLFFBQUUsQ0FBQ0UsU0FBSCxDQUFhLGNBQWIsRUFBNkI4QixNQUE3QjtBQUdBaEMsUUFBRSxDQUFDQyxNQUFILENBQVUsWUFBVixFQUF3QkMsU0FBeEIsQ0FBa0MsR0FBbEMsRUFDS0MsSUFETCxDQUNVTCxPQURWLEVBRUtNLEtBRkwsR0FHS0MsTUFITCxDQUdZLEdBSFosRUFJS0MsSUFKTCxDQUlVLFVBQVVDLENBQVYsRUFBYTtBQUFFLGVBQU9BLENBQUMsQ0FBQzVCLElBQUYsR0FBUyxLQUFULEdBQWlCNEIsQ0FBQyxDQUFDM0IsS0FBMUI7QUFBa0MsT0FKM0QsRUFLSzRCLElBTEwsQ0FLVSxPQUxWLEVBS21CLGFBTG5CO0FBT0MsS0E5Q0QsTUE4Q00sSUFBSUUsT0FBTyxLQUFLLENBQVosSUFBaUJBLE9BQU8sS0FBSyxDQUFqQyxFQUFvQztBQUN0QyxVQUFJRCxJQUFJLEdBQUcsQ0FBUCxLQUFhLENBQWpCLEVBQW9CO0FBQ2hCakIsZUFBTyxDQUFDWixLQUFSLEdBQWdCWSxPQUFPLENBQUNaLEtBQVIsR0FBZ0IsRUFBaEM7QUFDSCxPQUZELE1BRU8sSUFBSTZCLElBQUksR0FBRyxDQUFQLEtBQWEsQ0FBakIsRUFBb0I7QUFDdkJiLGVBQU8sQ0FBQ2hCLEtBQVIsR0FBZ0JnQixPQUFPLENBQUNoQixLQUFSLEdBQWdCLEVBQWhDO0FBQ0gsT0FGTSxNQUVBLElBQUk2QixJQUFJLEdBQUcsQ0FBUCxLQUFhLENBQWpCLEVBQW9CO0FBQ3ZCWixlQUFPLENBQUNqQixLQUFSLEdBQWdCaUIsT0FBTyxDQUFDakIsS0FBUixHQUFnQixFQUFoQztBQUNBOEIsZUFBTyxJQUFJLENBQVg7QUFDQTdCLG1CQUFXLENBQUM2QyxJQUFaLENBQWlCbkMsS0FBSyxDQUFDLENBQUQsQ0FBdEI7QUFDQUMsZUFBTyxDQUFDQyxRQUFSLENBQWlCaUMsSUFBakIsQ0FBc0I3QyxXQUFXLENBQUNBLFdBQVcsQ0FBQ3lDLE1BQVosR0FBcUIsQ0FBdEIsQ0FBakM7QUFDQTFCLGVBQU8sQ0FBQ0gsUUFBUixDQUFpQmlDLElBQWpCLENBQXNCN0MsV0FBVyxDQUFDQSxXQUFXLENBQUN5QyxNQUFaLEdBQXFCLENBQXRCLENBQWpDO0FBQ0F6QixlQUFPLENBQUNKLFFBQVIsQ0FBaUJpQyxJQUFqQixDQUFzQjdDLFdBQVcsQ0FBQ0EsV0FBVyxDQUFDeUMsTUFBWixHQUFxQixDQUF0QixDQUFqQztBQUNBL0IsYUFBSyxDQUFDd0MsS0FBTjtBQUNBL0IsVUFBRSxDQUFDRSxTQUFILENBQWEsWUFBYixFQUEyQjhCLE1BQTNCO0FBRUFoQyxVQUFFLENBQUNDLE1BQUgsQ0FBVSxpQkFBVixFQUE2QkMsU0FBN0IsQ0FBdUMsTUFBdkMsRUFDQ0MsSUFERCxDQUNNdEIsV0FETixFQUVDdUIsS0FGRCxHQUdDQyxNQUhELENBR1EsTUFIUixFQUlDQyxJQUpELENBSU0sVUFBVUMsQ0FBVixFQUFhO0FBQUMsaUJBQU9BLENBQVA7QUFBUyxTQUo3QixFQUtDQyxJQUxELENBS00sT0FMTixFQUtlLFdBTGY7QUFNSDs7QUFDREMsVUFBSSxJQUFJLENBQVI7QUFDQS9CLFNBQUcsQ0FBQ0UsS0FBSixJQUFhLEVBQWI7QUFDQW9CLFFBQUUsQ0FBQ0UsU0FBSCxDQUFhLGNBQWIsRUFBNkI4QixNQUE3QjtBQUdBaEMsUUFBRSxDQUFDQyxNQUFILENBQVUsWUFBVixFQUF3QkMsU0FBeEIsQ0FBa0MsR0FBbEMsRUFDS0MsSUFETCxDQUNVTCxPQURWLEVBRUtNLEtBRkwsR0FHS0MsTUFITCxDQUdZLEdBSFosRUFJS0MsSUFKTCxDQUlVLFVBQVVDLENBQVYsRUFBYTtBQUFFLGVBQU9BLENBQUMsQ0FBQzVCLElBQUYsR0FBUyxLQUFULEdBQWlCNEIsQ0FBQyxDQUFDM0IsS0FBMUI7QUFBa0MsT0FKM0QsRUFLSzRCLElBTEwsQ0FLVSxPQUxWLEVBS21CLGFBTG5CO0FBTUgsS0FqQ0ssTUFpQ0MsSUFBSUUsT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ3RCLFVBQUlnQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXcEQsT0FBTyxDQUFDQyxRQUFuQixDQUFaO0FBQ0EsVUFBSW9ELEtBQUssR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdoRCxPQUFPLENBQUNILFFBQW5CLENBQVo7QUFDQSxVQUFJcUQsS0FBSyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBVy9DLE9BQU8sQ0FBQ0osUUFBbkIsQ0FBWjtBQUNBLFVBQUlzRCxLQUFLLEdBQUcsQ0FBQ0wsS0FBRCxFQUFRRyxLQUFSLEVBQWVDLEtBQWYsQ0FBWjtBQUNBLFVBQUlFLE1BQU0sR0FBR0wsSUFBSSxDQUFDTSxPQUFMLENBQWFGLEtBQWIsQ0FBYjtBQUNBLFVBQUlHLEtBQUo7O0FBQ0EsVUFBSVIsS0FBSyxDQUFDakQsUUFBTixLQUFtQnVELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVXZELFFBQWpDLEVBQTJDO0FBQ3ZDeUQsYUFBSyxHQUFHMUQsT0FBTyxDQUFDYixJQUFoQjtBQUNBYSxlQUFPLENBQUNaLEtBQVIsSUFBaUJGLEdBQUcsQ0FBQ0UsS0FBckI7QUFDSCxPQUhELE1BR08sSUFBSWlFLEtBQUssQ0FBQ3BELFFBQU4sS0FBbUJ1RCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVV2RCxRQUFqQyxFQUEyQztBQUM5Q3lELGFBQUssR0FBR3RELE9BQU8sQ0FBQ2pCLElBQWhCO0FBQ0FpQixlQUFPLENBQUNoQixLQUFSLElBQWlCRixHQUFHLENBQUNFLEtBQXJCO0FBQ0gsT0FITSxNQUdBO0FBQ0hzRSxhQUFLLEdBQUdyRCxPQUFPLENBQUNsQixJQUFoQjtBQUNBa0IsZUFBTyxDQUFDakIsS0FBUixJQUFpQkYsR0FBRyxDQUFDRSxLQUFyQjtBQUNIOztBQUNEdUUsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosRUFqQnNCLENBa0J0QjtBQUNBOztBQUNBLFVBQUlHLFFBQVEsR0FBRyxDQUFDO0FBQUMxRSxZQUFJLEVBQUV1RTtBQUFQLE9BQUQsQ0FBZjtBQUNBbEQsUUFBRSxDQUFDQyxNQUFILENBQVUsUUFBVixFQUFvQkMsU0FBcEIsQ0FBOEIsR0FBOUIsRUFDQ0MsSUFERCxDQUNNa0QsUUFETixFQUVDakQsS0FGRCxHQUdDQyxNQUhELENBR1EsR0FIUixFQUlDQyxJQUpELENBSU0sVUFBVUMsQ0FBVixFQUFhO0FBQUMsZUFBUUEsQ0FBQyxDQUFDNUIsSUFBRixHQUFTLGVBQWpCO0FBQWtDLE9BSnRELEVBS0M2QixJQUxELENBS00sT0FMTixFQUtlLE9BTGY7QUFNQUUsYUFBTyxJQUFJLENBQVg7QUFFSDtBQUNKLEdBNUhEO0FBNkhILENBdlFEOztBQXdRZWpDLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFRQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUosUUFBUSxDQUFDaUYsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQ7QUFDQW5GLDZFQUFXO0FBQ1hNLDJFQUFVO0FBQ2IsQ0FKRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IHBsYXllckNoaXBzID0gKCkgPT4ge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIC8vIHZhciB4ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgLy8gdmFyIHkgPSBjYW52YXMuaGVpZ2h0IC0gMzA7XG4gICAgICAgIC8vIHZhciB4MSA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgIC8vIHZhciB5MSA9IGNhbnZhcy5oZWlnaHQgLSAzMDtcbiAgICAgICAgLy8gLy8gZGVidWdnZXJcbiAgICAgICAgLy8gdmFyIGR4ID0gMjtcbiAgICAgICAgLy8gdmFyIGR5ID0gLTEwO1xuICAgICAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIGN0eC5hcmMoMjUsIDE1MCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwicGlua1wiO1xuICAgICAgICAvLyBjdHguZmlsbCgpO1xuICAgICAgICAvLyBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuXG5cbiAgICAvLyBmdW5jdGlvbiBkcmF3KCkge1xuICAgIC8vICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgLy8gICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyAgICAgY3R4LmFyYyh4LCB5LCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgIC8vICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgLy8gICAgIGN0eC5maWxsKCk7XG4gICAgLy8gICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAvLyAgICAgeCArPSBkeDtcbiAgICAvLyAgICAgeSArPSBkeTtcbiAgICAvLyB9XG5cbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZXRidXR0b25cIikub25jbGljayA9IGZ1bmN0aW9uIG1vdmVDaGlwcygpIHtcbiAgICAgICAgLy8gICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgIGN0eC5hcmMoeDEsIHkxLCAyMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAvLyAgICAgY3R4LmZpbGxTdHlsZSA9IFwidG9tYXRvXCI7XG4gICAgICAgIC8vICAgICBjdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAvLyAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAvLyAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyAgICAgeDEgKz0gZHg7XG4gICAgICAgIC8vICAgICB5MSArPSBkeTtcbiAgICAgICAgLy8gICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIH1cblxuXG4gICAgfVxuZXhwb3J0IGRlZmF1bHQgcGxheWVyQ2hpcHM7IiwiXG5cbmNvbnN0IHNjb3JlYm9hcmQgPSAoKSA9PiB7XG4gICAgdmFyIHBvdCA9IHtuYW1lOiAnUG90JywgY2hpcHM6IDB9XG4gICAgbGV0IG1pZGRsZWNhcmRzID0gW107XG4gICAgbGV0IGM7XG4gICAgY29uc3QgdmFsdWVzID0gWycyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnVCcsICdKJywgJ1EnLCAnSycsICdBJ107XG4gICAgY29uc3Qgc3VpdHMgPSBbJ3MnLCAnYycsICdoJywgJ2QnXTtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgeDEgPSBjYW52YXMud2lkdGggLyAyO1xuICAgIHZhciB5MSA9IGNhbnZhcy5oZWlnaHQgLSAzMDtcbiAgICB2YXIgZHggPSAyO1xuICAgIHZhciBkeSA9IC0xMDtcbiAgICBsZXQgY2FyZHMgPSBbXTtcbiAgICBsZXQgcGxheWVyMSA9IHtcbiAgICAgICAgbmFtZTogJ01lJyxcbiAgICAgICAgY2hpcHM6IDEwMCxcbiAgICAgICAgY2FyZFBvb2w6IFtdLFxuICAgICAgICBob2xlY2FyZHM6IFtdLFxuICAgICAgICBzdGF0dXM6ICdsaXZlJ1xuICAgIH1cbiAgICBsZXQgcGxheWVyMiA9IHtcbiAgICAgICAgbmFtZTogJ1RvbSBEd2FuJyxcbiAgICAgICAgY2hpcHM6IDEwMCxcbiAgICAgICAgY2FyZFBvb2w6IFtdLFxuICAgICAgICBob2xlY2FyZHM6IFtdLFxuICAgICAgICBzdGF0dXM6ICdsaXZlJ1xuICAgIH1cbiAgICBsZXQgcGxheWVyMyA9IHtcbiAgICAgICAgbmFtZTogJ1BoaWwgSXZleScsXG4gICAgICAgIGNoaXBzOiAxMDAsXG4gICAgICAgIGNhcmRQb29sOiBbXSxcbiAgICAgICAgaG9sZWNhcmRzOiBbXSxcbiAgICAgICAgc3RhdHVzOiAnbGl2ZSdcbiAgICB9XG4gICAgdmFyIHRoZURhdGEgPSBbcGxheWVyMSwgcGxheWVyMiwgcGxheWVyMywgcG90XTtcbiAgICBsZXQgcGxheWVycyA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzXVxuXG4gICAgZDMuc2VsZWN0KFwiI2NoaXBjb3VudFwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgIC5kYXRhKHRoZURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgKyBcIiA6IFwiICsgZC5jaGlwczsgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBsYXllcm5hbWVzXCIpO1xuXG4gICAgbGV0IHR1cm4gPSAwO1xuICAgIGxldCBiZXRUdXJuID0gMFxuICAgIGxldCBkZWFsVHVybiA9IDA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbmRzJykub25jbGljayA9IGZ1bmN0aW9uIGRlYWxDYXJkcygpIHtcbiAgICAgICAgICAgIGNhcmRzID0gW107XG4gICAgICAgICAgICBsZXQgZGVjazEgPSB7fTtcbiAgICAgICAgICAgIGxldCBkZWNrMiA9IHt9O1xuICAgICAgICAgICAgbGV0IGRlY2szID0ge307XG4gICAgICAgICAgICBsZXQgZGVjazQgPSB7fTtcbiAgICAgICAgICAgIGxldCBjYXJkO1xuICAgICAgICAgICAgbGV0IG51bTtcbiAgICAgICAgICAgIGxldCBjaGFyO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3VpdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZSA9IHZhbHVlc1tpXS5jb25jYXQoc3VpdHNbal0pO1xuICAgICAgICAgICAgICAgICAgICBjYXJkcy5wdXNoKGVsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGksIGosIHRlbXA7XG4gICAgICAgICAgICBmb3IgKGkgPSBjYXJkcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgICAgIHRlbXAgPSBjYXJkc1tpXTtcbiAgICAgICAgICAgICAgICBjYXJkc1tpXSA9IGNhcmRzW2pdO1xuICAgICAgICAgICAgICAgIGNhcmRzW2pdID0gdGVtcDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGlmIChkZWFsVHVybiA9PT0gMCkge1xuICAgICAgICAgICAgZGVhbFR1cm4gKz0gMVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmhvbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmNhcmRQb29sLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIGNhcmQgPSBjYXJkc1swXTtcbiAgICAgICAgICAgICAgICBjaGFyID0gY2FyZFswXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KClcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmhvbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmNhcmRQb29sLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KClcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmhvbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNhcmRQb29sLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxldCBhcnIgPSBbcGxheWVyMS5ob2xlY2FyZHMsIHBsYXllcjIuaG9sZWNhcmRzLCBwbGF5ZXIzLmhvbGVjYXJkc107XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIxY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMS5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjFjYXJkcycpXG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIyY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMi5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjJjYXJkcycpXG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIzY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMy5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjNjYXJkcycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmV0VHVybiA+PSA0KSB7XG4gICAgICAgICAgICB0dXJuID0gMDtcbiAgICAgICAgICAgIGJldFR1cm4gPSAwO1xuICAgICAgICAgICAgZGVhbFR1cm4gPSAwO1xuICAgICAgICAgICAgbWlkZGxlY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIHBvdC5jaGlwcyA9IDA7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBsYXllcnNbaV0uY2FyZFBvb2wgPSBbXTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzW2ldLmhvbGVjYXJkcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcjFjYXJkc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIyY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVyM2NhcmRzXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmZsb3BjYXJkc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXJuYW1lc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5jaGFtcFwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2NoaXBjb3VudFwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEodGhlRGF0YSlcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSArIFwiIDogXCIgKyBkLmNoaXBzOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwbGF5ZXJuYW1lc1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZXRidXR0b24nKS5vbmNsaWNrID0gZnVuY3Rpb24gcGxhY2VCZXQoKSB7XG5cbiAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIGN0eC5hcmMoeDEsIHkxLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJ0b21hdG9cIjtcbiAgICAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8geDEgKz0gZHg7XG4gICAgICAgIC8vIHkxICs9IGR5O1xuXG5cblxuICAgICAgICBpZiAoYmV0VHVybiA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHR1cm4gJSAzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKDIwLCAyMCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ0b21hdG9cIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2hpcHMgPSBwbGF5ZXIxLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR1cm4gJSAzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jaGlwcyA9IHBsYXllcjIuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHVybiAlIDMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNoaXBzID0gcGxheWVyMy5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgIGJldFR1cm4gKz0gMVxuICAgICAgICAgICAgICAgIGMgPSBjYXJkcy5zbGljZSgwLCAzKVxuICAgICAgICAgICAgICAgIG1pZGRsZWNhcmRzID0gbWlkZGxlY2FyZHMuY29uY2F0KGMpO1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2FyZFBvb2wgPSBwbGF5ZXIxLmNhcmRQb29sLmNvbmNhdChtaWRkbGVjYXJkcylcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmNhcmRQb29sID0gcGxheWVyMi5jYXJkUG9vbC5jb25jYXQobWlkZGxlY2FyZHMpXG4gICAgICAgICAgICAgICAgcGxheWVyMy5jYXJkUG9vbCA9IHBsYXllcjMuY2FyZFBvb2wuY29uY2F0KG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgICAgIGNhcmRzID0gY2FyZHMuc2xpY2UoMywgNDYpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIxY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJzcGFuXCIpXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwic3BhblwiKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZmxvcGNhcmRzXCIpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHVybiArPSAxO1xuICAgICAgICAgICAgcG90LmNoaXBzICs9IDEwO1xuICAgICAgICBcbiAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcm5hbWVzXCIpLnJlbW92ZSgpO1xuXG5cbiAgICAgICAgZDMuc2VsZWN0KFwiI2NoaXBjb3VudFwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAuZGF0YSh0aGVEYXRhKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lICsgXCIgOiBcIiArIGQuY2hpcHM7IH0pXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwicGxheWVybmFtZXNcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2UgaWYgKGJldFR1cm4gPT09IDEgfHwgYmV0VHVybiA9PT0gMikge1xuICAgICAgICAgICAgaWYgKHR1cm4gJSAzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5jaGlwcyA9IHBsYXllcjEuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHVybiAlIDMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmNoaXBzID0gcGxheWVyMi5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0dXJuICUgMyA9PT0gMikge1xuICAgICAgICAgICAgICAgIHBsYXllcjMuY2hpcHMgPSBwbGF5ZXIzLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgYmV0VHVybiArPSAxO1xuICAgICAgICAgICAgICAgIG1pZGRsZWNhcmRzLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2FyZFBvb2wucHVzaChtaWRkbGVjYXJkc1ttaWRkbGVjYXJkcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jYXJkUG9vbC5wdXNoKG1pZGRsZWNhcmRzW21pZGRsZWNhcmRzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNhcmRQb29sLnB1c2gobWlkZGxlY2FyZHNbbWlkZGxlY2FyZHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCcuZmxvcGNhcmRzJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KCcjcGxheWVyMWNhcmRkaXYnKS5zZWxlY3RBbGwoJ3NwYW4nKVxuICAgICAgICAgICAgICAgIC5kYXRhKG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnc3BhbicpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtyZXR1cm4gZH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAnZmxvcGNhcmRzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHR1cm4gKz0gMTtcbiAgICAgICAgICAgIHBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXJuYW1lc1wiKS5yZW1vdmUoKTtcblxuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIjY2hpcGNvdW50XCIpLnNlbGVjdEFsbChcInBcIilcbiAgICAgICAgICAgICAgICAuZGF0YSh0aGVEYXRhKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInBcIilcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lICsgXCIgOiBcIiArIGQuY2hpcHM7IH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBsYXllcm5hbWVzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGJldFR1cm4gPT09IDMpIHtcbiAgICAgICAgICAgIGxldCBoYW5kMSA9IEhhbmQuc29sdmUocGxheWVyMS5jYXJkUG9vbCk7XG4gICAgICAgICAgICBsZXQgaGFuZDIgPSBIYW5kLnNvbHZlKHBsYXllcjIuY2FyZFBvb2wpO1xuICAgICAgICAgICAgbGV0IGhhbmQzID0gSGFuZC5zb2x2ZShwbGF5ZXIzLmNhcmRQb29sKTtcbiAgICAgICAgICAgIGxldCBoYW5kcyA9IFtoYW5kMSwgaGFuZDIsIGhhbmQzXTtcbiAgICAgICAgICAgIGxldCB3aW5uZXIgPSBIYW5kLndpbm5lcnMoaGFuZHMpO1xuICAgICAgICAgICAgbGV0IGNoYW1wO1xuICAgICAgICAgICAgaWYgKGhhbmQxLmNhcmRQb29sID09PSB3aW5uZXJbMF0uY2FyZFBvb2wpIHtcbiAgICAgICAgICAgICAgICBjaGFtcCA9IHBsYXllcjEubmFtZVxuICAgICAgICAgICAgICAgIHBsYXllcjEuY2hpcHMgKz0gcG90LmNoaXBzO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYW5kMi5jYXJkUG9vbCA9PT0gd2lubmVyWzBdLmNhcmRQb29sKSB7XG4gICAgICAgICAgICAgICAgY2hhbXAgPSBwbGF5ZXIyLm5hbWVcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmNoaXBzICs9IHBvdC5jaGlwcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hhbXAgPSBwbGF5ZXIzLm5hbWVcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNoaXBzICs9IHBvdC5jaGlwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYW1wKVxuICAgICAgICAgICAgLy8gbGV0IHZpY3RvciA9IFtjaGFtcF1cbiAgICAgICAgICAgIC8vIGNoYW1wIGlzIGEgc3RyaW5nIG9mIHRoZSB3aW5uZXIncyBuYW1lXG4gICAgICAgICAgICBsZXQgY2hhbXBpb24gPSBbe25hbWU6IGNoYW1wfV07XG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIuY2hhbXBcIikuc2VsZWN0QWxsKCdwJylcbiAgICAgICAgICAgIC5kYXRhKGNoYW1waW9uKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge3JldHVybiAgZC5uYW1lICsgJyB3aW5zIHRoZSBwb3QnIH0pXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhbXBcIilcbiAgICAgICAgICAgIGJldFR1cm4gKz0gMVxuXG4gICAgICAgIH1cbiAgICB9IFxufVxuZXhwb3J0IGRlZmF1bHQgc2NvcmVib2FyZDtcblxuIiwiLy8gY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuaW1wb3J0IHNjb3JlYm9hcmQgZnJvbSAnLi4vamF2YXNjcmlwdC9qcy9zY29yZWJvYXJkJztcbmltcG9ydCBwbGF5ZXJDaGlwcyBmcm9tICcuLi9qYXZhc2NyaXB0L2pzL3BsYXllcl9jaGlwcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXNuJ3Qgd29ya2luZ1wiKVxuICAgIHBsYXllckNoaXBzKCk7XG4gICAgc2NvcmVib2FyZCgpO1xufSkiXSwic291cmNlUm9vdCI6IiJ9