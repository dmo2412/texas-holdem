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

    debugger;

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
    debugger;

    if (dealTurn === 0) {
      dealTurn += 1;

      for (var _i2 = 0; _i2 < 2; _i2++) {
        player1.holecards.push(cards[0]);
        player1.cardPool.push(cards[0]);
        card = cards[0];
        _char = card[0];
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

    if (dealTurn >= 1) {
      turn = 0;
      betTurn = 0;
      middlecards = [];
      pot.chips = 0;
      player1.status = true;
      player2.status = true;
      player3.status = true;
      players = [player1, player2, player3];

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

  var index;

  document.getElementById("fold").onclick = function foldCards() {
    if (turn % 3 === 0) {
      turn += 1;
      player1.status = false;
      var idx = players.indexOf(player1);
      players.shift();
    } else if (turn % 3 === 1) {
      turn += 1;
      player2.status === false;
      index = players.indexOf(player2);

      if (index > -1) {
        players.splice(index, 1);
      }
    } else if (turn % 3 === 2) {
      player3.status = false;
      turn += 1;
      betTurn += 1;

      var _index = players.indexOf(player3);

      if (_index > -1) {
        players.splice(_index, 1);
      }
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
        player2.chips = player2.chips - 10;
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
      var arr = [hand1, hand2, hand3];
      var hands = [];

      for (var i = 0; i < players.length; i++) {
        if (players[i].status === true) {
          hands.push(arr[i]);
        }
      }

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
      d3.select(".winner").selectAll('p').data(champion).enter().append("p").text(function (d) {
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

document.addEventListener("DOMContentLoaded", function () {
  Object(_javascript_js_scoreboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzY29yZWJvYXJkIiwicG90IiwibmFtZSIsImNoaXBzIiwibWlkZGxlY2FyZHMiLCJhbGxDYXJkcyIsImMiLCJ2YWx1ZXMiLCJzdWl0cyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwieDEiLCJ5MSIsImR4IiwiZHkiLCJ0aW1lIiwiY2FyZHMiLCJwbGF5ZXIxIiwiY2FyZFBvb2wiLCJob2xlY2FyZHMiLCJzaG93Q2FyZHMiLCJzdGF0dXMiLCJwbGF5ZXIyIiwicGxheWVyMyIsInRoZURhdGEiLCJwbGF5ZXJzIiwiZDMiLCJzZWxlY3QiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJhcHBlbmQiLCJ0ZXh0IiwiZCIsImF0dHIiLCJ0dXJuIiwiYmV0VHVybiIsImRlYWxUdXJuIiwib25jbGljayIsImRlYWxDYXJkcyIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYmVnaW5QYXRoIiwiZGVjazEiLCJkZWNrMiIsImRlY2szIiwiZGVjazQiLCJjYXJkIiwibnVtIiwiY2hhciIsImkiLCJsZW5ndGgiLCJqIiwiZWxlIiwiY29uY2F0IiwicHVzaCIsInRlbXAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzaGlmdCIsInJlbW92ZSIsImluZGV4IiwiZm9sZENhcmRzIiwiaWR4IiwiaW5kZXhPZiIsInNwbGljZSIsInBsYWNlQmV0IiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJzbGljZSIsImhhbmQxIiwiSGFuZCIsInNvbHZlIiwiaGFuZDIiLCJoYW5kMyIsImFyciIsImhhbmRzIiwid2lubmVyIiwid2lubmVycyIs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QUNBMkIsUUFBRSxDQUFDQyxNQUFILENBQVUsU0FBVixFQUFxQkMsU0FBckIsQ0FBK0IsR0FBL0IsRUFDQ0MsSUFERCxDQUNNNEQsUUFETixFQUVDM0QsS0FGRCxHQUdDQyxNQUhELENBR1EsR0FIUixFQUlDQyxJQUpELENBSU0sVUFBVUMsQ0FBVixFQUFhO0FBQUMsZUFBUUEsQ0FBQyxDQUFDbEMsSUFBRixHQUFTLGVBQWpCO0FBQWtDLE9BSnRELEVBS0NtQyxJQUxELENBS00sT0FMTixFQUtlLE9BTGY7QUFNQUUsYUFBTyxJQUFJLENBQVg7QUFFSDtBQUNKLEdBeE5EO0FBeU5ILENBL1lEOztBQWdaZXZDLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQy9ZQTtBQUFBO0FBQUE7QUFFQVUsUUFBUSxDQUFDbUYsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQ3RiwyRUFBVTtBQUNiLENBRkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBzY29yZWJvYXJkID0gKCkgPT4ge1xuICAgIHZhciBwb3QgPSB7bmFtZTogJ1BvdCcsIGNoaXBzOiAwfVxuICAgIGxldCBtaWRkbGVjYXJkcyA9IFtdO1xuICAgIGxldCBhbGxDYXJkcyA9IHt9O1xuICAgIGxldCBjO1xuICAgIGNvbnN0IHZhbHVlcyA9IFsnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJ1QnLCAnSicsICdRJywgJ0snLCAnQSddO1xuICAgIGNvbnN0IHN1aXRzID0gWydzJywgJ2MnLCAnaCcsICdkJ107XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdmFyIHgxID0gMjkwO1xuICAgIHZhciB5MSA9IDIwO1xuICAgIHZhciBkeCA9IDI7XG4gICAgdmFyIGR5ID0gLTEwO1xuICAgIGxldCB0aW1lID0gMDtcbiAgICBsZXQgY2FyZHMgPSBbXTtcbiAgICBsZXQgcGxheWVyMSA9IHtcbiAgICAgICAgbmFtZTogJ01pa2UgTWNEZXJtb3R0JyxcbiAgICAgICAgY2hpcHM6IDEwMCxcbiAgICAgICAgY2FyZFBvb2w6IFtdLFxuICAgICAgICBob2xlY2FyZHM6IFtdLFxuICAgICAgICBzaG93Q2FyZHM6IHt9LFxuICAgICAgICBzdGF0dXM6IHRydWVcbiAgICB9XG4gICAgbGV0IHBsYXllcjIgPSB7XG4gICAgICAgIG5hbWU6ICdUb20gRHdhbicsXG4gICAgICAgIGNoaXBzOiAxMDAsXG4gICAgICAgIGNhcmRQb29sOiBbXSxcbiAgICAgICAgaG9sZWNhcmRzOiBbXSxcbiAgICAgICAgc2hvd0NhcmRzOiB7fSxcbiAgICAgICAgc3RhdHVzOiB0cnVlXG4gICAgfVxuICAgIGxldCBwbGF5ZXIzID0ge1xuICAgICAgICBuYW1lOiAnUGhpbCBJdmV5JyxcbiAgICAgICAgY2hpcHM6IDEwMCxcbiAgICAgICAgY2FyZFBvb2w6IFtdLFxuICAgICAgICBob2xlY2FyZHM6IFtdLFxuICAgICAgICBzaG93Q2FyZHM6IHt9LFxuICAgICAgICBzdGF0dXM6IHRydWVcbiAgICB9XG4gICAgdmFyIHRoZURhdGEgPSBbcGxheWVyMSwgcGxheWVyMiwgcGxheWVyMywgcG90XTtcbiAgICBsZXQgcGxheWVycyA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzXVxuICAgIFxuXG4gICAgZDMuc2VsZWN0KFwiI2NoaXBjb3VudFwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgIC5kYXRhKHRoZURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgKyBcIiA6IFwiICsgZC5jaGlwczsgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBsYXllcm5hbWVzXCIpO1xuXG4gICAgbGV0IHR1cm4gPSAwO1xuICAgIGxldCBiZXRUdXJuID0gMFxuICAgIGxldCBkZWFsVHVybiA9IDA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbmRzJykub25jbGljayA9IGZ1bmN0aW9uIGRlYWxDYXJkcygpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjYXJkcyA9IFtdO1xuICAgICAgICAgICAgbGV0IGRlY2sxID0ge307XG4gICAgICAgICAgICBsZXQgZGVjazIgPSB7fTtcbiAgICAgICAgICAgIGxldCBkZWNrMyA9IHt9O1xuICAgICAgICAgICAgbGV0IGRlY2s0ID0ge307XG4gICAgICAgICAgICBsZXQgY2FyZDtcbiAgICAgICAgICAgIGxldCBudW07XG4gICAgICAgICAgICBsZXQgY2hhcjtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWl0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlID0gdmFsdWVzW2ldLmNvbmNhdChzdWl0c1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRzLnB1c2goZWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaSwgaiwgdGVtcDtcbiAgICAgICAgICAgIGZvciAoaSA9IGNhcmRzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICAgICAgdGVtcCA9IGNhcmRzW2ldO1xuICAgICAgICAgICAgICAgIGNhcmRzW2ldID0gY2FyZHNbal07XG4gICAgICAgICAgICAgICAgY2FyZHNbal0gPSB0ZW1wO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgaWYgKGRlYWxUdXJuID09PSAwKSB7XG4gICAgICAgICAgICBkZWFsVHVybiArPSAxXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIHBsYXllcjEuaG9sZWNhcmRzLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2FyZFBvb2wucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgY2FyZCA9IGNhcmRzWzBdO1xuICAgICAgICAgICAgICAgIGNoYXIgPSBjYXJkWzBdO1xuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KClcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmhvbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmNhcmRQb29sLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KClcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmhvbGVjYXJkcy5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNhcmRQb29sLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxldCBhcnIgPSBbcGxheWVyMS5ob2xlY2FyZHMsIHBsYXllcjIuaG9sZWNhcmRzLCBwbGF5ZXIzLmhvbGVjYXJkc107XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIxY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMS5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjFjYXJkcycpXG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIyY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMi5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjJjYXJkcycpXG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIzY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMy5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjNjYXJkcycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVhbFR1cm4gPj0gMSkge1xuICAgICAgICAgICAgdHVybiA9IDA7XG4gICAgICAgICAgICBiZXRUdXJuID0gMDtcbiAgICAgICAgICAgIG1pZGRsZWNhcmRzID0gW107XG4gICAgICAgICAgICBwb3QuY2hpcHMgPSAwO1xuICAgICAgICAgICAgcGxheWVyMS5zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgcGxheWVyMi5zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgcGxheWVyMy5zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgcGxheWVycyA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzXTtcblxuICAgICAgICAgICAgaWYgKHBsYXllcjEuY2hpcHMgPCAzMCkge1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2hpcHMgPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyMi5jaGlwcyA8IDMwKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jaGlwcyA9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbGF5ZXIzLmNoaXBzIDwgMzApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNoaXBzID0gMTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzW2ldLmNhcmRQb29sID0gW107XG4gICAgICAgICAgICAgICAgcGxheWVyc1tpXS5ob2xlY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIxY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVyMmNhcmRzXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcjNjYXJkc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5mbG9wY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVybmFtZXNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuY2hhbXBcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNjaGlwY291bnRcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHRoZURhdGEpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgKyBcIiA6IFwiICsgZC5jaGlwczsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwicGxheWVybmFtZXNcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGluZGV4O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9sZFwiKS5vbmNsaWNrID0gZnVuY3Rpb24gZm9sZENhcmRzKCkge1xuICAgICAgICBpZiAodHVybiAlIDMgPT09IDApIHtcbiAgICAgICAgICAgIHR1cm4gKz0gMVxuICAgICAgICAgICAgcGxheWVyMS5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHBsYXllcnMuaW5kZXhPZihwbGF5ZXIxKTtcbiAgICAgICAgICAgIHBsYXllcnMuc2hpZnQoKVxuICAgICAgICB9IGVsc2UgaWYgKHR1cm4gJSAzID09PSAxKSB7XG4gICAgICAgICAgICB0dXJuICs9IDFcbiAgICAgICAgICAgIHBsYXllcjIuc3RhdHVzID09PSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gcGxheWVycy5pbmRleE9mKHBsYXllcjIpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHVybiAlIDMgPT09IDIpIHtcbiAgICAgICAgICAgIHBsYXllcjMuc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICB0dXJuICs9IDE7XG4gICAgICAgICAgICBiZXRUdXJuICs9IDE7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBsYXllcnMuaW5kZXhPZihwbGF5ZXIzKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JldGJ1dHRvbicpLm9uY2xpY2sgPSBmdW5jdGlvbiBwbGFjZUJldCgpIHtcblxuICAgICAgICBcbiAgICAgICAgaWYgKGJldFR1cm4gPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0dXJuICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYygzMDAsIDIwLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInRvbWF0b1wiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2hpcHMgPSBwbGF5ZXIxLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR1cm4gJSAzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jaGlwcyA9IHBsYXllcjIuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYygyNjAsIDIwLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0dXJuICUgMyA9PT0gMikge1xuICAgICAgICAgICAgICAgIHBsYXllcjMuY2hpcHMgPSBwbGF5ZXIzLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmMoMjcwLCAyMCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICAgICAgY3R4LnRleHQgPSAnMTAnO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgeDEgKz0gZHg7XG4gICAgICAgICAgICAgICAgeTEgKz0gZHk7XG4gICAgICAgICAgICAgICAgYmV0VHVybiArPSAxXG4gICAgICAgICAgICAgICAgYyA9IGNhcmRzLnNsaWNlKDAsIDMpXG4gICAgICAgICAgICAgICAgbWlkZGxlY2FyZHMgPSBtaWRkbGVjYXJkcy5jb25jYXQoYyk7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5jYXJkUG9vbCA9IHBsYXllcjEuY2FyZFBvb2wuY29uY2F0KG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgICAgIHBsYXllcjIuY2FyZFBvb2wgPSBwbGF5ZXIyLmNhcmRQb29sLmNvbmNhdChtaWRkbGVjYXJkcylcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNhcmRQb29sID0gcGxheWVyMy5jYXJkUG9vbC5jb25jYXQobWlkZGxlY2FyZHMpXG4gICAgICAgICAgICAgICAgY2FyZHMgPSBjYXJkcy5zbGljZSgzLCA0Nik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2Zsb3BjYXJkLWFuY2hvclwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZmxvcGNhcmRzXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vIC5hdHRyKFwiaGVpZ2h0XCIsIFwiNTBweFwiKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHR1cm4gKz0gMTtcbiAgICAgICAgICAgIHBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgXG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXJuYW1lc1wiKS5yZW1vdmUoKTtcblxuXG4gICAgICAgIGQzLnNlbGVjdChcIiNjaGlwY291bnRcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgLmRhdGEodGhlRGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSArIFwiIDogXCIgKyBkLmNoaXBzOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBsYXllcm5hbWVzXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNlIGlmIChiZXRUdXJuID09PSAxIHx8IGJldFR1cm4gPT09IDIpIHtcbiAgICAgICAgICAgIGlmICh0dXJuICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aW1lID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMS5jaGlwcyA9IHBsYXllcjEuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKDI3MCwgMTUsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInRvbWF0b1wiO1xuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dCA9ICcxMCc7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgICAgICB5MSArPSBkeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIxLmNoaXBzID0gcGxheWVyMS5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoMjY1LCAyMSwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwidG9tYXRvXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgeDEgKz0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHVybiAlIDMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIyLmNoaXBzID0gcGxheWVyMi5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoMjkwLCAyMCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgeDEgKz0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjIuY2hpcHMgPSBwbGF5ZXIyLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYygyOTUsIDIxLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRleHQgPSAnMTAnO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB4MSArPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgeTEgKz0gZHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0dXJuICUgMyA9PT0gMikge1xuICAgICAgICAgICAgICAgIGlmICh0aW1lID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMy5jaGlwcyA9IHBsYXllcjMuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKDMyMCwgMjAsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRleHQgPSAnMTAnO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB4MSArPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgeTEgKz0gZHk7XG4gICAgICAgICAgICAgICAgICAgIGJldFR1cm4gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjMuY2hpcHMgPSBwbGF5ZXIzLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYygzMDUsIDI0LCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgeDEgKz0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgICAgICBiZXRUdXJuICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1pZGRsZWNhcmRzLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2FyZFBvb2wucHVzaChtaWRkbGVjYXJkc1ttaWRkbGVjYXJkcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jYXJkUG9vbC5wdXNoKG1pZGRsZWNhcmRzW21pZGRsZWNhcmRzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNhcmRQb29sLnB1c2gobWlkZGxlY2FyZHNbbWlkZGxlY2FyZHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCcuZmxvcGNhcmRzJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KCcjZmxvcGNhcmQtYW5jaG9yJykuc2VsZWN0QWxsKCdzcGFuJylcbiAgICAgICAgICAgICAgICAuZGF0YShtaWRkbGVjYXJkcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3NwYW4nKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7cmV0dXJuIGR9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ2Zsb3BjYXJkcycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0dXJuICs9IDE7XG4gICAgICAgICAgICBwb3QuY2hpcHMgKz0gMTA7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVybmFtZXNcIikucmVtb3ZlKCk7XG5cblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2NoaXBjb3VudFwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEodGhlRGF0YSlcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSArIFwiIDogXCIgKyBkLmNoaXBzOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwbGF5ZXJuYW1lc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChiZXRUdXJuID09PSAzKSB7XG4gICAgICAgICAgICBsZXQgaGFuZDEgPSBIYW5kLnNvbHZlKHBsYXllcjEuY2FyZFBvb2wpO1xuICAgICAgICAgICAgbGV0IGhhbmQyID0gSGFuZC5zb2x2ZShwbGF5ZXIyLmNhcmRQb29sKTtcbiAgICAgICAgICAgIGxldCBoYW5kMyA9IEhhbmQuc29sdmUocGxheWVyMy5jYXJkUG9vbCk7XG4gICAgICAgICAgICBsZXQgYXJyID0gW2hhbmQxLCBoYW5kMiwgaGFuZDNdXG4gICAgICAgICAgICBsZXQgaGFuZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJzW2ldLnN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kcy5wdXNoKGFycltpXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB3aW5uZXIgPSBIYW5kLndpbm5lcnMoaGFuZHMpO1xuICAgICAgICAgICAgbGV0IGNoYW1wO1xuICAgICAgICAgICAgaWYgKGhhbmQxLmNhcmRQb29sID09PSB3aW5uZXJbMF0uY2FyZFBvb2wpIHtcbiAgICAgICAgICAgICAgICBjaGFtcCA9IHBsYXllcjFcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmNoaXBzICs9IHBvdC5jaGlwcztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFuZDIuY2FyZFBvb2wgPT09IHdpbm5lclswXS5jYXJkUG9vbCkge1xuICAgICAgICAgICAgICAgIGNoYW1wID0gcGxheWVyMlxuICAgICAgICAgICAgICAgIHBsYXllcjIuY2hpcHMgKz0gcG90LmNoaXBzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFtcCA9IHBsYXllcjNcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNoaXBzICs9IHBvdC5jaGlwcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYW1wKVxuICAgICAgICAgICAgLy8gbGV0IHZpY3RvciA9IFtjaGFtcF1cbiAgICAgICAgICAgIC8vIGNoYW1wIGlzIGEgc3RyaW5nIG9mIHRoZSB3aW5uZXIncyBuYW1lXG4gICAgICAgICAgICBsZXQgY2hhbXBpb24gPSBbe25hbWU6IGNoYW1wLm5hbWV9XTtcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIi53aW5uZXJcIikuc2VsZWN0QWxsKCdwJylcbiAgICAgICAgICAgIC5kYXRhKGNoYW1waW9uKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge3JldHVybiAgZC5uYW1lICsgJyB3aW5zIHRoZSBwb3QnIH0pXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhbXBcIilcbiAgICAgICAgICAgIGJldFR1cm4gKz0gMVxuXG4gICAgICAgIH1cbiAgICB9IFxufVxuZXhwb3J0IGRlZmF1bHQgc2NvcmVib2FyZDtcblxuIiwiXG5pbXBvcnQgc2NvcmVib2FyZCBmcm9tICcuLi9qYXZhc2NyaXB0L2pzL3Njb3JlYm9hcmQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgc2NvcmVib2FyZCgpO1xufSkiXSwic291cmNlUm9vdCI6IiJ9