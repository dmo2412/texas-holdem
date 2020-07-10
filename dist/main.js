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
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(200, 20, 15, 0, Math.PI * 2);
  ctx.fillStyle = "tomato";
  ctx.text = '10';
  ctx.fill();
  ctx.closePath();
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.font = "2px Georgia";
  ctx.fillText("Hello World!", 10, 50); // var x = canvas.width / 2;
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
      // dealTurn += 1
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
      }

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
      player1.status = true;
      player2.status = true;
      player3.status = true;

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

  document.getElementById("fold").onclick = function foldCards() {
    if (turn % 3 === 0) {
      turn += 1;
      player1.status = false;
      players.shift();
      player1.holecards = [];
    } else if (turn % 3 === 1) {
      turn += 1;
      player2.status === false;
      var index = players.indexOf(player2);

      if (index > -1) {
        players.splice(index, 1);
      }
    } else if (turn % 3 === 2) {
      turn += 1;
      betTurn += 1;
      player3.status = false;

      var _index = players.indexOf(player2);

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
      d3.select(".winner").selectAll('p').data(champion).enter().append("p").text(function (d) {
        return d.name + ' wins the pot';
      }).attr("class", "champ");
      betTurn += 1;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (scoreboard);

/***/ }),

/***/ "./javascript/js/table.js":
/*!********************************!*\
  !*** ./javascript/js/table.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var game = function game() {
  var pot = {
    name: 'Pot',
    chips: 0
  };
  var middlecards = [];
  var c;
  var num;
  var values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  var suits = ['s', 'c', 'h', 'd'];
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var cards = [];
  var x1 = 270;
  var y1 = 15;
  var x2 = 265;
  var y2 = 21;
  var x3 = 290;
  var y3 = 20;
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
  var playertracker = 0;

  document.getElementById('hands').onclick = function dealCards() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
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
      }

      d3.select("#player1carddiv").selectAll("p").data(player1.holecards).enter().append('p').text(function (d) {
        return d;
      }).attr("class", 'player1cards');
      d3.select("#player2carddiv").selectAll("p").data(player2.holecards).enter().append('p').text(function (d) {
        return d;
      }).attr("class", 'player2cards');
      d3.select("#player3carddiv").selectAll("p").data(player3.holecards).enter().append('p').text(function (d) {
        return d;
      }).attr("class", 'player3cards');
    } else {
      players = [player1, player2, player3];

      for (var _i3 = 0; _i3 < players.length; _i3++) {
        players[_i3].cardPool = [];
        players[_i3].holecards = [];
        players[_i3].status = true;
      }

      for (var _i4 = 0; _i4 < 2; _i4++) {
        player1.holecards.push(cards[0]);
        player1.cardPool.push(cards[0]);
        cards.shift();
        player2.holecards.push(cards[0]);
        player2.cardPool.push(cards[0]);
        cards.shift();
        player3.holecards.push(cards[0]);
        player3.cardPool.push(cards[0]);
        cards.shift();
      }

      turn = 0;
      betTurn = 0;
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

      d3.selectAll(".player1cards").remove();
      d3.selectAll(".player2cards").remove();
      d3.selectAll(".player3cards").remove(); // d3.selectAll(".flopcards").remove();

      d3.selectAll(".playernames").remove(); // d3.selectAll(".champ").remove();

      d3.select("#chipcount").selectAll("p").data(theData).enter().append("p").text(function (d) {
        return d.name + " : " + d.chips;
      }).attr("class", "playernames");
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
  };

  var first;

  document.getElementById("fold").onclick = function foldCards() {
    playertracker += 1;

    if (players[0] === player1) {
      player1.status = false; // players.shift();

      d3.selectAll(".player1cards").remove();
    } else if (players[0] === player2) {
      player2.status = false;
      d3.selectAll(".player2cards").remove(); // players.shift();
    } else if (players[0] === player3) {
      player3.status = false;
      d3.selectAll(".player3cards").remove();
      players.shift();
    }

    if (playertracker % players.length === 0 && turn === 0 && players.length > 1) {
      debugger;
      num = players.length;
      turn += 1;
      playertracker = 0;
      c = cards.slice(0, 3);
      middlecards = middlecards.concat(c);
      player1.cardPool = player1.cardPool.concat(middlecards);
      player2.cardPool = player2.cardPool.concat(middlecards);
      player3.cardPool = player3.cardPool.concat(middlecards);
      cards = cards.slice(3, 46);
      d3.select("#flopcard-anchor").selectAll("p").data(middlecards).enter().append("p").text(function (d) {
        return d;
      }).attr("class", "flopcards");
    }

    players.shift();
    betTurn += 1;

    if (players.length === 1) {
      console.log(players[0]);
    }
  };

  document.getElementById("betbutton").onclick = function placeBet() {
    playertracker += 1;

    if (betTurn < 3) {
      if (players[0] === player1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(300, 20, 10, 0, Math.PI * 2);
        ctx.fillStyle = "tomato";
        ctx.text = '10';
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        player1.chips = player1.chips - 10;
        players.shift();
        players.push(player1);
        pot.chips += 10;
        betTurn += 1;
      } else if (players[0] === player2) {
        player2.chips = player2.chips - 10;
        ctx.beginPath();
        ctx.arc(260, 20, 10, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.text = '10';
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        players.shift();
        players.push(player2);
        pot.chips += 10;
        betTurn += 1;
      } else if (players[0] === player3) {
        player3.chips = player3.chips - 10;
        ctx.beginPath();
        ctx.arc(270, 20, 10, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.text = '10';
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        players.shift(player3);
        players.push(player3);
        pot.chips += 10;
        betTurn += 1;
      }

      if (playertracker % players.length === 0) {
        playertracker = 0;
        c = cards.slice(0, 3);
        middlecards = middlecards.concat(c);
        player1.cardPool = player1.cardPool.concat(middlecards);
        player2.cardPool = player2.cardPool.concat(middlecards);
        player3.cardPool = player3.cardPool.concat(middlecards);
        cards = cards.slice(3, 46);
        num = players.length;
        d3.select("#flopcard-anchor").selectAll("p").data(middlecards).enter().append("p").text(function (d) {
          return d;
        }).attr("class", "flopcards");
      }

      d3.selectAll(".playernames").remove();
      d3.select("#chipcount").selectAll("p").data(theData).enter().append("p").text(function (d) {
        return d.name + " : " + d.chips;
      }).attr("class", "playernames");
    } else if (betTurn >= 3) {
      if (players[0] === player1) {
        ctx.beginPath();
        ctx.arc(x1, y1, 10, 0, Math.PI * 2);
        ctx.fillStyle = "tomato";
        ctx.text = '10';
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        player1.chips = player1.chips - 10;
        players.shift();
        players.push(player1);
        pot.chips += 10;
        x1 += 10;
        y1 += 2;
        num -= 1;
      } else if (players[0] === player2) {
        player2.chips = player2.chips - 10;
        ctx.beginPath();
        ctx.arc(x2, y2, 10, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.text = '10';
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        players.shift();
        players.push(player2);
        pot.chips += 10;
        x2 -= 15;
        y2 += 2;
        num -= 1;
      } else if (players[0] === player3) {
        player3.chips = player3.chips - 10;
        ctx.beginPath();
        ctx.arc(x3, y3, 10, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.text = '10';
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
        players.shift(player3);
        players.push(player3);
        pot.chips += 10;
        x3 -= 12;
        y3 += 2;
        num -= 1;
      }

      if (num === 0) {
        middlecards.push(cards[0]);
        player1.cardPool.push(middlecards[middlecards.length - 1]);
        player2.cardPool.push(middlecards[middlecards.length - 1]);
        player3.cardPool.push(middlecards[middlecards.length - 1]);
        cards.shift();
        d3.selectAll('.flopcards').remove();
        d3.select('#flopcard-anchor').selectAll('span').data(middlecards).enter().append('span').text(function (d) {
          return d;
        }).attr("class", 'flopcards');
        d3.selectAll(".playernames").remove();
        d3.select("#chipcount").selectAll("p").data(theData).enter().append("p").text(function (d) {
          return d.name + " : " + d.chips;
        }).attr("class", "playernames");
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (game);

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
/* harmony import */ var _javascript_js_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../javascript/js/table */ "./javascript/js/table.js");
/* harmony import */ var _javascript_js_player_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../javascript/js/player_chips */ "./javascript/js/player_chips.js");



document.addEventListener("DOMContentLoaded", function () {
  // scoreboard();
  Object(_javascript_js_table__WEBPACK_IMPORTED_MODULE_1__["default"])(); // player_chips();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9wbGF5ZXJfY2hpcHMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvanMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInBsYXllckNoaXBzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsInRleHQiLCJmaWxsIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJmb250IiwiZmlsbFRleHQiLCJzY29yZWJvYXJkIiwicG90IiwibmFtZSIsImNoaXBzIiwibWlkZGxlY2FyZHMiLCJhbGxDYXJkcyIsImMiLCJ2YWx1ZXMiLCJzdWl0cyIsIngxIiwieTEiLCJkeCIsImR5IiwidGltZSIsImNhcmRzIiwicGxheWVyMSIsImNhcmRQb29sIiwiaG9sZWNhcmRzIiwic2hvd0NhcmRzIiwic3RhdHVzIiwicGxheWVyMiIsInBsYXllcjMiLCJ0aGVEYXRhIiwicGxheWVycyIsImQzIiwic2VsZWN0Iiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiYXBwZW5kIiwiZCIsImF0dHIiLCJ0dXJuIiwiYmV0VHVybiIsImRlYWxUdXJuIiwib25jbGljayIsImRlYWxDYXJkcyIsImkiLCJsZW5ndGgiLCJqIiwiZWxlIiwiY29uY2F0IiwicHVzaCIsInRlbXAiLCJmbG9vciIsInJhbmRvbSIsInNoaWZ0IiwicmVtb3ZlIiwiZm9sZENhcmRzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicGxhY2VCZXQiLCJzbGljZSIsImhhbmQxIiwiSGFuZCIsInNvbHZlIiwiaGFuZDIiLCJoYW5kMyIsImhhbmRzIiwid2lubmVyIiwid2lubmVycyIsImNoYW1wIiwiY29uc29sZSIsImxvZyIsImNoYW1waW9uIiwiZ2FtZSIsIm51bSIsIngyIiwieTIiLCJ4MyIsInkzIiwicGxheWVydHJhY2tlciIsImZpcnN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhYmxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUNsQixNQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFiO0FBQ0EsTUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUNBRCxLQUFHLENBQUNFLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CTCxNQUFNLENBQUNNLEtBQTNCLEVBQWtD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QUhaLEVBSUtwQyxJQUpMLENBSVUsVUFBVXFDLENBQVYsRUFBYTtBQUFFLGlCQUFPQSxDQUFQO0FBQVUsU0FKbkMsRUFLS0MsSUFMTCxDQUtVLE9BTFYsRUFLbUIsV0FMbkI7QUFNQVAsVUFBRSxDQUFDRSxTQUFILENBQWEsY0FBYixFQUE2QnFCLE1BQTdCO0FBQ0F2QixVQUFFLENBQUNDLE1BQUgsQ0FBVSxZQUFWLEVBQXdCQyxTQUF4QixDQUFrQyxHQUFsQyxFQUNLQyxJQURMLENBQ1VMLE9BRFYsRUFFS00sS0FGTCxHQUdLQyxNQUhMLENBR1ksR0FIWixFQUlLcEMsSUFKTCxDQUlVLFVBQVVxQyxDQUFWLEVBQWE7QUFBRSxpQkFBT0EsQ0FBQyxDQUFDNUIsSUFBRixHQUFTLEtBQVQsR0FBaUI0QixDQUFDLENBQUMzQixLQUExQjtBQUFrQyxTQUozRCxFQUtLNEIsSUFMTCxDQUtVLE9BTFYsRUFLbUIsYUFMbkI7QUFNSDtBQUVKO0FBQ0osR0FqSkQ7QUFtSkgsQ0EvV0Q7O0FBaVhlbUMsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDaFhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0FyRixRQUFRLENBQUM2RixnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRDtBQUNBQyxzRUFBSyxHQUYyQyxDQUdoRDtBQUNILENBSkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBwbGF5ZXJDaGlwcyA9ICgpID0+IHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYygyMDAsIDIwLCAxNSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ0b21hdG9cIjtcbiAgICAgICAgY3R4LnRleHQgPSAnMTAnO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguZm9udCA9IFwiMnB4IEdlb3JnaWFcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiSGVsbG8gV29ybGQhXCIsIDEwLCA1MCk7XG5cblxuXG5cbiAgICAgICAgLy8gdmFyIHggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICAvLyB2YXIgeSA9IGNhbnZhcy5oZWlnaHQgLSAzMDtcbiAgICAgICAgLy8gdmFyIHgxID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgLy8gdmFyIHkxID0gY2FudmFzLmhlaWdodCAtIDMwO1xuICAgICAgICAvLyAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyB2YXIgZHggPSAyO1xuICAgICAgICAvLyB2YXIgZHkgPSAtMTA7XG4gICAgICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LmFyYygyNSwgMTUwLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJwaW5rXCI7XG4gICAgICAgIC8vIGN0eC5maWxsKCk7XG4gICAgICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAvLyBjdHguc3Ryb2tlKCk7XG5cblxuICAgIC8vIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgLy8gICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAvLyAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vICAgICBjdHguYXJjKHgsIHksIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyAgICAgY3R4LmZpbGwoKTtcbiAgICAvLyAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIC8vICAgICB4ICs9IGR4O1xuICAgIC8vICAgICB5ICs9IGR5O1xuICAgIC8vIH1cblxuICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJldGJ1dHRvblwiKS5vbmNsaWNrID0gZnVuY3Rpb24gbW92ZUNoaXBzKCkge1xuICAgICAgICAvLyAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAvLyAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgY3R4LmFyYyh4MSwgeTEsIDIwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIC8vICAgICBjdHguZmlsbFN0eWxlID0gXCJ0b21hdG9cIjtcbiAgICAgICAgLy8gICAgIGN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIC8vICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIC8vICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vICAgICB4MSArPSBkeDtcbiAgICAgICAgLy8gICAgIHkxICs9IGR5O1xuICAgICAgICAvLyAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gfVxuXG5cbiAgICB9XG5leHBvcnQgZGVmYXVsdCBwbGF5ZXJDaGlwczsiLCJjb25zdCBzY29yZWJvYXJkID0gKCkgPT4ge1xuICAgIHZhciBwb3QgPSB7bmFtZTogJ1BvdCcsIGNoaXBzOiAwfVxuICAgIGxldCBtaWRkbGVjYXJkcyA9IFtdO1xuICAgIGxldCBhbGxDYXJkcyA9IHt9O1xuICAgIGxldCBjO1xuICAgIGNvbnN0IHZhbHVlcyA9IFsnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJ1QnLCAnSicsICdRJywgJ0snLCAnQSddO1xuICAgIGNvbnN0IHN1aXRzID0gWydzJywgJ2MnLCAnaCcsICdkJ107XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdmFyIHgxID0gMjkwO1xuICAgIHZhciB5MSA9IDIwO1xuICAgIHZhciBkeCA9IDI7XG4gICAgdmFyIGR5ID0gLTEwO1xuICAgIGxldCB0aW1lID0gMDtcbiAgICBsZXQgY2FyZHMgPSBbXTtcbiAgICBsZXQgcGxheWVyMSA9IHtcbiAgICAgICAgbmFtZTogJ01pa2UgTWNEZXJtb3R0JyxcbiAgICAgICAgY2hpcHM6IDEwMCxcbiAgICAgICAgY2FyZFBvb2w6IFtdLFxuICAgICAgICBob2xlY2FyZHM6IFtdLFxuICAgICAgICBzaG93Q2FyZHM6IHt9LFxuICAgICAgICBzdGF0dXM6IHRydWVcbiAgICB9XG4gICAgbGV0IHBsYXllcjIgPSB7XG4gICAgICAgIG5hbWU6ICdUb20gRHdhbicsXG4gICAgICAgIGNoaXBzOiAxMDAsXG4gICAgICAgIGNhcmRQb29sOiBbXSxcbiAgICAgICAgaG9sZWNhcmRzOiBbXSxcbiAgICAgICAgc2hvd0NhcmRzOiB7fSxcbiAgICAgICAgc3RhdHVzOiB0cnVlXG4gICAgfVxuICAgIGxldCBwbGF5ZXIzID0ge1xuICAgICAgICBuYW1lOiAnUGhpbCBJdmV5JyxcbiAgICAgICAgY2hpcHM6IDEwMCxcbiAgICAgICAgY2FyZFBvb2w6IFtdLFxuICAgICAgICBob2xlY2FyZHM6IFtdLFxuICAgICAgICBzaG93Q2FyZHM6IHt9LFxuICAgICAgICBzdGF0dXM6IHRydWVcbiAgICB9XG4gICAgdmFyIHRoZURhdGEgPSBbcGxheWVyMSwgcGxheWVyMiwgcGxheWVyMywgcG90XTtcbiAgICBsZXQgcGxheWVycyA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzXVxuICAgIFxuXG4gICAgZDMuc2VsZWN0KFwiI2NoaXBjb3VudFwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgIC5kYXRhKHRoZURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgKyBcIiA6IFwiICsgZC5jaGlwczsgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBsYXllcm5hbWVzXCIpO1xuXG4gICAgbGV0IHR1cm4gPSAwO1xuICAgIGxldCBiZXRUdXJuID0gMFxuICAgIGxldCBkZWFsVHVybiA9IDA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbmRzJykub25jbGljayA9IGZ1bmN0aW9uIGRlYWxDYXJkcygpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjYXJkcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1aXRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGUgPSB2YWx1ZXNbaV0uY29uY2F0KHN1aXRzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgY2FyZHMucHVzaChlbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpLCBqLCB0ZW1wO1xuICAgICAgICAgICAgZm9yIChpID0gY2FyZHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgICAgICB0ZW1wID0gY2FyZHNbaV07XG4gICAgICAgICAgICAgICAgY2FyZHNbaV0gPSBjYXJkc1tqXTtcbiAgICAgICAgICAgICAgICBjYXJkc1tqXSA9IHRlbXA7XG4gICAgICAgICAgICB9O1xuICAgICAgICBpZiAoZGVhbFR1cm4gPT09IDApIHtcbiAgICAgICAgICAgIC8vIGRlYWxUdXJuICs9IDFcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5ob2xlY2FyZHMucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5jYXJkUG9vbC5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBjYXJkcy5zaGlmdCgpXG4gICAgICAgICAgICAgICAgcGxheWVyMi5ob2xlY2FyZHMucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jYXJkUG9vbC5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBjYXJkcy5zaGlmdCgpXG4gICAgICAgICAgICAgICAgcGxheWVyMy5ob2xlY2FyZHMucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMy5jYXJkUG9vbC5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBjYXJkcy5zaGlmdCgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIxY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMS5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjFjYXJkcycpXG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIyY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMi5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjJjYXJkcycpXG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIzY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEocGxheWVyMy5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjNjYXJkcycpXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZXRUdXJuID49IDQpIHtcbiAgICAgICAgICAgIHR1cm4gPSAwO1xuICAgICAgICAgICAgYmV0VHVybiA9IDA7XG4gICAgICAgICAgICBkZWFsVHVybiA9IDA7XG4gICAgICAgICAgICBtaWRkbGVjYXJkcyA9IFtdO1xuICAgICAgICAgICAgcG90LmNoaXBzID0gMDtcbiAgICAgICAgICAgIHBsYXllcjEuc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIHBsYXllcjIuc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIHBsYXllcjMuc3RhdHVzID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHBsYXllcjEuY2hpcHMgPCAzMCkge1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2hpcHMgPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyMi5jaGlwcyA8IDMwKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jaGlwcyA9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbGF5ZXIzLmNoaXBzIDwgMzApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNoaXBzID0gMTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzW2ldLmNhcmRQb29sID0gW107XG4gICAgICAgICAgICAgICAgcGxheWVyc1tpXS5ob2xlY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIxY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVyMmNhcmRzXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcjNjYXJkc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5mbG9wY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVybmFtZXNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuY2hhbXBcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNjaGlwY291bnRcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHRoZURhdGEpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgKyBcIiA6IFwiICsgZC5jaGlwczsgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwicGxheWVybmFtZXNcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbGRcIikub25jbGljayA9IGZ1bmN0aW9uIGZvbGRDYXJkcygpIHtcbiAgICAgICAgaWYgKHR1cm4gJSAzID09PSAwKSB7XG4gICAgICAgICAgICB0dXJuICs9IDFcbiAgICAgICAgICAgIHBsYXllcjEuc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICBwbGF5ZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICBwbGF5ZXIxLmhvbGVjYXJkcyA9IFtdO1xuICAgICAgICB9IGVsc2UgaWYgKHR1cm4gJSAzID09PSAxKSB7XG4gICAgICAgICAgICB0dXJuICs9IDFcbiAgICAgICAgICAgIHBsYXllcjIuc3RhdHVzID09PSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGxheWVycy5pbmRleE9mKHBsYXllcjIpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHVybiAlIDMgPT09IDIpIHtcbiAgICAgICAgICAgIHR1cm4gKz0gMTtcbiAgICAgICAgICAgIGJldFR1cm4gKz0gMTtcbiAgICAgICAgICAgIHBsYXllcjMuc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBsYXllcnMuaW5kZXhPZihwbGF5ZXIyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JldGJ1dHRvbicpLm9uY2xpY2sgPSBmdW5jdGlvbiBwbGFjZUJldCgpIHtcbiAgICAgICAgaWYgKGJldFR1cm4gPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0dXJuICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYygzMDAsIDIwLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInRvbWF0b1wiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2hpcHMgPSBwbGF5ZXIxLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR1cm4gJSAzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jaGlwcyA9IHBsYXllcjIuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYygyNjAsIDIwLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0dXJuICUgMyA9PT0gMikge1xuICAgICAgICAgICAgICAgIHBsYXllcjMuY2hpcHMgPSBwbGF5ZXIzLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmMoMjcwLCAyMCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICAgICAgY3R4LnRleHQgPSAnMTAnO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgeDEgKz0gZHg7XG4gICAgICAgICAgICAgICAgeTEgKz0gZHk7XG4gICAgICAgICAgICAgICAgYmV0VHVybiArPSAxXG4gICAgICAgICAgICAgICAgYyA9IGNhcmRzLnNsaWNlKDAsIDMpXG4gICAgICAgICAgICAgICAgbWlkZGxlY2FyZHMgPSBtaWRkbGVjYXJkcy5jb25jYXQoYyk7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5jYXJkUG9vbCA9IHBsYXllcjEuY2FyZFBvb2wuY29uY2F0KG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgICAgIHBsYXllcjIuY2FyZFBvb2wgPSBwbGF5ZXIyLmNhcmRQb29sLmNvbmNhdChtaWRkbGVjYXJkcylcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNhcmRQb29sID0gcGxheWVyMy5jYXJkUG9vbC5jb25jYXQobWlkZGxlY2FyZHMpXG4gICAgICAgICAgICAgICAgY2FyZHMgPSBjYXJkcy5zbGljZSgzLCA0Nik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2Zsb3BjYXJkLWFuY2hvclwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZmxvcGNhcmRzXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vIC5hdHRyKFwiaGVpZ2h0XCIsIFwiNTBweFwiKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHR1cm4gKz0gMTtcbiAgICAgICAgICAgIHBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgXG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXJuYW1lc1wiKS5yZW1vdmUoKTtcblxuXG4gICAgICAgIGQzLnNlbGVjdChcIiNjaGlwY291bnRcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgLmRhdGEodGhlRGF0YSlcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSArIFwiIDogXCIgKyBkLmNoaXBzOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBsYXllcm5hbWVzXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNlIGlmIChiZXRUdXJuID09PSAxIHx8IGJldFR1cm4gPT09IDIpIHtcbiAgICAgICAgICAgIGlmICh0dXJuICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aW1lID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMS5jaGlwcyA9IHBsYXllcjEuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKDI3MCwgMTUsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInRvbWF0b1wiO1xuICAgICAgICAgICAgICAgICAgICBjdHgudGV4dCA9ICcxMCc7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIHgxICs9IGR4O1xuICAgICAgICAgICAgICAgICAgICB5MSArPSBkeTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIxLmNoaXBzID0gcGxheWVyMS5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoMjY1LCAyMSwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwidG9tYXRvXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgeDEgKz0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHVybiAlIDMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIyLmNoaXBzID0gcGxheWVyMi5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoMjkwLCAyMCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgeDEgKz0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjIuY2hpcHMgPSBwbGF5ZXIyLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYygyOTUsIDIxLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRleHQgPSAnMTAnO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB4MSArPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgeTEgKz0gZHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0dXJuICUgMyA9PT0gMikge1xuICAgICAgICAgICAgICAgIGlmICh0aW1lID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMy5jaGlwcyA9IHBsYXllcjMuY2hpcHMgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKDMyMCwgMjAsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRleHQgPSAnMTAnO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB4MSArPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgeTEgKz0gZHk7XG4gICAgICAgICAgICAgICAgICAgIGJldFR1cm4gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjMuY2hpcHMgPSBwbGF5ZXIzLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYygzMDUsIDI0LCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgeDEgKz0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHkxICs9IGR5O1xuICAgICAgICAgICAgICAgICAgICBiZXRUdXJuICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1pZGRsZWNhcmRzLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2FyZFBvb2wucHVzaChtaWRkbGVjYXJkc1ttaWRkbGVjYXJkcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jYXJkUG9vbC5wdXNoKG1pZGRsZWNhcmRzW21pZGRsZWNhcmRzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNhcmRQb29sLnB1c2gobWlkZGxlY2FyZHNbbWlkZGxlY2FyZHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIGNhcmRzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCcuZmxvcGNhcmRzJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KCcjZmxvcGNhcmQtYW5jaG9yJykuc2VsZWN0QWxsKCdzcGFuJylcbiAgICAgICAgICAgICAgICAuZGF0YShtaWRkbGVjYXJkcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3NwYW4nKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7cmV0dXJuIGR9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ2Zsb3BjYXJkcycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0dXJuICs9IDE7XG4gICAgICAgICAgICBwb3QuY2hpcHMgKz0gMTA7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVybmFtZXNcIikucmVtb3ZlKCk7XG5cblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2NoaXBjb3VudFwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEodGhlRGF0YSlcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSArIFwiIDogXCIgKyBkLmNoaXBzOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwbGF5ZXJuYW1lc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChiZXRUdXJuID09PSAzKSB7XG4gICAgICAgICAgICBsZXQgaGFuZDEgPSBIYW5kLnNvbHZlKHBsYXllcjEuY2FyZFBvb2wpO1xuICAgICAgICAgICAgbGV0IGhhbmQyID0gSGFuZC5zb2x2ZShwbGF5ZXIyLmNhcmRQb29sKTtcbiAgICAgICAgICAgIGxldCBoYW5kMyA9IEhhbmQuc29sdmUocGxheWVyMy5jYXJkUG9vbCk7XG4gICAgICAgICAgICBsZXQgaGFuZHMgPSBbaGFuZDEsIGhhbmQyLCBoYW5kM107XG4gICAgICAgICAgICBsZXQgd2lubmVyID0gSGFuZC53aW5uZXJzKGhhbmRzKTtcbiAgICAgICAgICAgIGxldCBjaGFtcDtcbiAgICAgICAgICAgIGlmIChoYW5kMS5jYXJkUG9vbCA9PT0gd2lubmVyWzBdLmNhcmRQb29sKSB7XG4gICAgICAgICAgICAgICAgY2hhbXAgPSBwbGF5ZXIxXG4gICAgICAgICAgICAgICAgcGxheWVyMS5jaGlwcyArPSBwb3QuY2hpcHM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhbmQyLmNhcmRQb29sID09PSB3aW5uZXJbMF0uY2FyZFBvb2wpIHtcbiAgICAgICAgICAgICAgICBjaGFtcCA9IHBsYXllcjJcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmNoaXBzICs9IHBvdC5jaGlwcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hhbXAgPSBwbGF5ZXIzXG4gICAgICAgICAgICAgICAgcGxheWVyMy5jaGlwcyArPSBwb3QuY2hpcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFtcClcbiAgICAgICAgICAgIC8vIGxldCB2aWN0b3IgPSBbY2hhbXBdXG4gICAgICAgICAgICAvLyBjaGFtcCBpcyBhIHN0cmluZyBvZiB0aGUgd2lubmVyJ3MgbmFtZVxuICAgICAgICAgICAgbGV0IGNoYW1waW9uID0gW3tuYW1lOiBjaGFtcC5uYW1lfV07XG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIud2lubmVyXCIpLnNlbGVjdEFsbCgncCcpXG4gICAgICAgICAgICAuZGF0YShjaGFtcGlvbilcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtyZXR1cm4gIGQubmFtZSArICcgd2lucyB0aGUgcG90JyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYW1wXCIpXG4gICAgICAgICAgICBiZXRUdXJuICs9IDFcblxuICAgICAgICB9XG4gICAgfSBcbn1cbmV4cG9ydCBkZWZhdWx0IHNjb3JlYm9hcmQ7XG5cbiIsImNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gICAgdmFyIHBvdCA9IHsgbmFtZTogJ1BvdCcsIGNoaXBzOiAwIH1cbiAgICBsZXQgbWlkZGxlY2FyZHMgPSBbXTtcbiAgICBsZXQgYztcbiAgICBsZXQgbnVtO1xuICAgIGNvbnN0IHZhbHVlcyA9IFsnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJ1QnLCAnSicsICdRJywgJ0snLCAnQSddO1xuICAgIGNvbnN0IHN1aXRzID0gWydzJywgJ2MnLCAnaCcsICdkJ107XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IGNhcmRzID0gW107XG4gICAgbGV0IHgxID0gMjcwO1xuICAgIGxldCB5MSA9IDE1O1xuICAgIGxldCB4MiA9IDI2NTtcbiAgICBsZXQgeTIgPSAyMTtcbiAgICBsZXQgeDMgPSAyOTA7XG4gICAgbGV0IHkzID0gMjA7XG4gICAgbGV0IHBsYXllcjEgPSB7XG4gICAgICAgIG5hbWU6ICdNaWtlIE1jRGVybW90dCcsXG4gICAgICAgIGNoaXBzOiAxMDAsXG4gICAgICAgIGNhcmRQb29sOiBbXSxcbiAgICAgICAgaG9sZWNhcmRzOiBbXSxcbiAgICAgICAgc2hvd0NhcmRzOiB7fSxcbiAgICAgICAgc3RhdHVzOiB0cnVlXG4gICAgfVxuICAgIGxldCBwbGF5ZXIyID0ge1xuICAgICAgICBuYW1lOiAnVG9tIER3YW4nLFxuICAgICAgICBjaGlwczogMTAwLFxuICAgICAgICBjYXJkUG9vbDogW10sXG4gICAgICAgIGhvbGVjYXJkczogW10sXG4gICAgICAgIHNob3dDYXJkczoge30sXG4gICAgICAgIHN0YXR1czogdHJ1ZVxuICAgIH1cbiAgICBsZXQgcGxheWVyMyA9IHtcbiAgICAgICAgbmFtZTogJ1BoaWwgSXZleScsXG4gICAgICAgIGNoaXBzOiAxMDAsXG4gICAgICAgIGNhcmRQb29sOiBbXSxcbiAgICAgICAgaG9sZWNhcmRzOiBbXSxcbiAgICAgICAgc2hvd0NhcmRzOiB7fSxcbiAgICAgICAgc3RhdHVzOiB0cnVlXG4gICAgfVxuICAgIHZhciB0aGVEYXRhID0gW3BsYXllcjEsIHBsYXllcjIsIHBsYXllcjMsIHBvdF07XG4gICAgbGV0IHBsYXllcnMgPSBbcGxheWVyMSwgcGxheWVyMiwgcGxheWVyM107XG5cblxuICAgIGQzLnNlbGVjdChcIiNjaGlwY291bnRcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAuZGF0YSh0aGVEYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lICsgXCIgOiBcIiArIGQuY2hpcHM7IH0pXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwbGF5ZXJuYW1lc1wiKTtcblxuICAgIGxldCB0dXJuID0gMDtcbiAgICBsZXQgYmV0VHVybiA9IDA7XG4gICAgbGV0IGRlYWxUdXJuID0gMDtcbiAgICBsZXQgcGxheWVydHJhY2tlciA9IDA7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFuZHMnKS5vbmNsaWNrID0gZnVuY3Rpb24gZGVhbENhcmRzKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY2FyZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3VpdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlID0gdmFsdWVzW2ldLmNvbmNhdChzdWl0c1tqXSk7XG4gICAgICAgICAgICAgICAgY2FyZHMucHVzaChlbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBpLCBqLCB0ZW1wO1xuICAgICAgICBmb3IgKGkgPSBjYXJkcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICB0ZW1wID0gY2FyZHNbaV07XG4gICAgICAgICAgICBjYXJkc1tpXSA9IGNhcmRzW2pdO1xuICAgICAgICAgICAgY2FyZHNbal0gPSB0ZW1wO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZGVhbFR1cm4gPT09IDApIHtcbiAgICAgICAgICAgIGRlYWxUdXJuICs9IDE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIHBsYXllcjEuaG9sZWNhcmRzLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2FyZFBvb2wucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgY2FyZHMuc2hpZnQoKVxuICAgICAgICAgICAgICAgIHBsYXllcjIuaG9sZWNhcmRzLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIHBsYXllcjIuY2FyZFBvb2wucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgY2FyZHMuc2hpZnQoKVxuICAgICAgICAgICAgICAgIHBsYXllcjMuaG9sZWNhcmRzLnB1c2goY2FyZHNbMF0pO1xuICAgICAgICAgICAgICAgIHBsYXllcjMuY2FyZFBvb2wucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgY2FyZHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIjcGxheWVyMWNhcmRkaXZcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHBsYXllcjEuaG9sZWNhcmRzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgncCcpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsICdwbGF5ZXIxY2FyZHMnKVxuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIjcGxheWVyMmNhcmRkaXZcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHBsYXllcjIuaG9sZWNhcmRzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgncCcpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsICdwbGF5ZXIyY2FyZHMnKVxuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIjcGxheWVyM2NhcmRkaXZcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHBsYXllcjMuaG9sZWNhcmRzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgncCcpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsICdwbGF5ZXIzY2FyZHMnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheWVycyA9IFtwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIzXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBsYXllcnNbaV0uY2FyZFBvb2wgPSBbXTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzW2ldLmhvbGVjYXJkcyA9IFtdO1xuICAgICAgICAgICAgICAgIHBsYXllcnNbaV0uc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5ob2xlY2FyZHMucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5jYXJkUG9vbC5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBjYXJkcy5zaGlmdCgpXG4gICAgICAgICAgICAgICAgcGxheWVyMi5ob2xlY2FyZHMucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5jYXJkUG9vbC5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBjYXJkcy5zaGlmdCgpXG4gICAgICAgICAgICAgICAgcGxheWVyMy5ob2xlY2FyZHMucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMy5jYXJkUG9vbC5wdXNoKGNhcmRzWzBdKTtcbiAgICAgICAgICAgICAgICBjYXJkcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0dXJuID0gMDtcbiAgICAgICAgICAgIGJldFR1cm4gPSAwO1xuICAgICAgICAgICAgbWlkZGxlY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIHBvdC5jaGlwcyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChwbGF5ZXIxLmNoaXBzIDwgMzApIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmNoaXBzID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsYXllcjIuY2hpcHMgPCAzMCkge1xuICAgICAgICAgICAgICAgIHBsYXllcjIuY2hpcHMgPSAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyMy5jaGlwcyA8IDMwKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyMy5jaGlwcyA9IDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcjFjYXJkc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIyY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVyM2NhcmRzXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgLy8gZDMuc2VsZWN0QWxsKFwiLmZsb3BjYXJkc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXJuYW1lc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIGQzLnNlbGVjdEFsbChcIi5jaGFtcFwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2NoaXBjb3VudFwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEodGhlRGF0YSlcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQubmFtZSArIFwiIDogXCIgKyBkLmNoaXBzOyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwbGF5ZXJuYW1lc1wiKTtcblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI3BsYXllcjFjYXJkZGl2XCIpLnNlbGVjdEFsbChcInBcIilcbiAgICAgICAgICAgICAgICAuZGF0YShwbGF5ZXIxLmhvbGVjYXJkcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3AnKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAncGxheWVyMWNhcmRzJylcblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI3BsYXllcjJjYXJkZGl2XCIpLnNlbGVjdEFsbChcInBcIilcbiAgICAgICAgICAgICAgICAuZGF0YShwbGF5ZXIyLmhvbGVjYXJkcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3AnKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAncGxheWVyMmNhcmRzJylcblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI3BsYXllcjNjYXJkZGl2XCIpLnNlbGVjdEFsbChcInBcIilcbiAgICAgICAgICAgICAgICAuZGF0YShwbGF5ZXIzLmhvbGVjYXJkcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3AnKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAncGxheWVyM2NhcmRzJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgZmlyc3Q7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2xkXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiBmb2xkQ2FyZHMoKSB7XG4gICAgICAgIHBsYXllcnRyYWNrZXIgKz0gMVxuICAgICAgICBpZiAocGxheWVyc1swXSA9PT0gcGxheWVyMSkge1xuICAgICAgICAgICAgcGxheWVyMS5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHBsYXllcnMuc2hpZnQoKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIxY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyc1swXSA9PT0gcGxheWVyMikge1xuICAgICAgICAgICAgcGxheWVyMi5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIyY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBwbGF5ZXJzLnNoaWZ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyc1swXSA9PT0gcGxheWVyMykge1xuICAgICAgICAgICAgcGxheWVyMy5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIzY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBwbGF5ZXJzLnNoaWZ0KCk7XG4gICAgICAgIH0gICBcbiAgICAgICAgaWYgKHBsYXllcnRyYWNrZXIgJSBwbGF5ZXJzLmxlbmd0aCA9PT0gMCAmJiB0dXJuID09PSAwICYmIHBsYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIG51bSA9IHBsYXllcnMubGVuZ3RoO1xuICAgICAgICAgICAgdHVybiArPSAxO1xuICAgICAgICAgICAgcGxheWVydHJhY2tlciA9IDA7XG4gICAgICAgICAgICBjID0gY2FyZHMuc2xpY2UoMCwgMylcbiAgICAgICAgICAgIG1pZGRsZWNhcmRzID0gbWlkZGxlY2FyZHMuY29uY2F0KGMpO1xuICAgICAgICAgICAgcGxheWVyMS5jYXJkUG9vbCA9IHBsYXllcjEuY2FyZFBvb2wuY29uY2F0KG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgcGxheWVyMi5jYXJkUG9vbCA9IHBsYXllcjIuY2FyZFBvb2wuY29uY2F0KG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgcGxheWVyMy5jYXJkUG9vbCA9IHBsYXllcjMuY2FyZFBvb2wuY29uY2F0KG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgY2FyZHMgPSBjYXJkcy5zbGljZSgzLCA0Nik7XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNmbG9wY2FyZC1hbmNob3JcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInBcIilcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJmbG9wY2FyZHNcIilcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXJzLnNoaWZ0KCk7XG4gICAgICAgIGJldFR1cm4gKz0gMTtcbiAgICAgICAgaWYgKHBsYXllcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJzWzBdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZXRidXR0b25cIikub25jbGljayA9IGZ1bmN0aW9uIHBsYWNlQmV0KCkge1xuICAgICAgICBwbGF5ZXJ0cmFja2VyICs9IDE7XG4gICAgICAgIGlmIChiZXRUdXJuIDwgMykge1xuICAgICAgICAgICAgaWYgKHBsYXllcnNbMF0gPT09IHBsYXllcjEpIHtcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmMoMzAwLCAyMCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ0b21hdG9cIjtcbiAgICAgICAgICAgICAgICBjdHgudGV4dCA9ICcxMCc7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmNoaXBzID0gcGxheWVyMS5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgIHBsYXllcnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyMSk7XG4gICAgICAgICAgICAgICAgcG90LmNoaXBzICs9IDEwO1xuICAgICAgICAgICAgICAgIGJldFR1cm4gKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyc1swXSA9PT0gcGxheWVyMikge1xuICAgICAgICAgICAgICAgIHBsYXllcjIuY2hpcHMgPSBwbGF5ZXIyLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmMoMjYwLCAyMCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgICAgICBjdHgudGV4dCA9ICcxMCc7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgcGxheWVycy5wdXNoKHBsYXllcjIpO1xuICAgICAgICAgICAgICAgIHBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgICAgICAgICBiZXRUdXJuICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllcnNbMF0gPT09IHBsYXllcjMpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNoaXBzID0gcGxheWVyMy5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKDI3MCwgMjAsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHBsYXllcnMuc2hpZnQocGxheWVyMyk7XG4gICAgICAgICAgICAgICAgcGxheWVycy5wdXNoKHBsYXllcjMpO1xuICAgICAgICAgICAgICAgIHBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgICAgICAgICBiZXRUdXJuICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVydHJhY2tlciAlIHBsYXllcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGxheWVydHJhY2tlciA9IDA7XG4gICAgICAgICAgICAgICAgYyA9IGNhcmRzLnNsaWNlKDAsIDMpXG4gICAgICAgICAgICAgICAgbWlkZGxlY2FyZHMgPSBtaWRkbGVjYXJkcy5jb25jYXQoYyk7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5jYXJkUG9vbCA9IHBsYXllcjEuY2FyZFBvb2wuY29uY2F0KG1pZGRsZWNhcmRzKVxuICAgICAgICAgICAgICAgIHBsYXllcjIuY2FyZFBvb2wgPSBwbGF5ZXIyLmNhcmRQb29sLmNvbmNhdChtaWRkbGVjYXJkcylcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNhcmRQb29sID0gcGxheWVyMy5jYXJkUG9vbC5jb25jYXQobWlkZGxlY2FyZHMpXG4gICAgICAgICAgICAgICAgY2FyZHMgPSBjYXJkcy5zbGljZSgzLCA0Nik7XG4gICAgICAgICAgICAgICAgbnVtID0gcGxheWVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QoXCIjZmxvcGNhcmQtYW5jaG9yXCIpLnNlbGVjdEFsbChcInBcIilcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEobWlkZGxlY2FyZHMpXG4gICAgICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJmbG9wY2FyZHNcIilcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVybmFtZXNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIjY2hpcGNvdW50XCIpLnNlbGVjdEFsbChcInBcIilcbiAgICAgICAgICAgICAgICAuZGF0YSh0aGVEYXRhKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInBcIilcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lICsgXCIgOiBcIiArIGQuY2hpcHM7IH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBsYXllcm5hbWVzXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGJldFR1cm4gPj0gMyApIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJzWzBdID09PSBwbGF5ZXIxKSB7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmMoeDEsIHkxLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInRvbWF0b1wiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHBsYXllcjEuY2hpcHMgPSBwbGF5ZXIxLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgcGxheWVycy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICBwb3QuY2hpcHMgKz0gMTA7XG4gICAgICAgICAgICAgICAgeDEgKz0gMTA7XG4gICAgICAgICAgICAgICAgeTEgKz0gMjtcbiAgICAgICAgICAgICAgICBudW0gLT0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyc1swXSA9PT0gcGxheWVyMikge1xuICAgICAgICAgICAgICAgIHBsYXllcjIuY2hpcHMgPSBwbGF5ZXIyLmNoaXBzIC0gMTA7XG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmMoeDIsIHkyLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIHBsYXllcnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyMik7XG4gICAgICAgICAgICAgICAgcG90LmNoaXBzICs9IDEwO1xuICAgICAgICAgICAgICAgIHgyIC09IDE1O1xuICAgICAgICAgICAgICAgIHkyICs9IDI7XG4gICAgICAgICAgICAgICAgbnVtIC09IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllcnNbMF0gPT09IHBsYXllcjMpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIzLmNoaXBzID0gcGxheWVyMy5jaGlwcyAtIDEwO1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKHgzLCB5MywgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICAgICAgY3R4LnRleHQgPSAnMTAnO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgcGxheWVycy5zaGlmdChwbGF5ZXIzKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyMyk7XG4gICAgICAgICAgICAgICAgcG90LmNoaXBzICs9IDEwO1xuICAgICAgICAgICAgICAgIHgzIC09IDEyO1xuICAgICAgICAgICAgICAgIHkzICs9IDI7XG4gICAgICAgICAgICAgICAgbnVtIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobnVtID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbWlkZGxlY2FyZHMucHVzaChjYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5jYXJkUG9vbC5wdXNoKG1pZGRsZWNhcmRzW21pZGRsZWNhcmRzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIyLmNhcmRQb29sLnB1c2gobWlkZGxlY2FyZHNbbWlkZGxlY2FyZHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIHBsYXllcjMuY2FyZFBvb2wucHVzaChtaWRkbGVjYXJkc1ttaWRkbGVjYXJkcy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgY2FyZHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoJy5mbG9wY2FyZHMnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QoJyNmbG9wY2FyZC1hbmNob3InKS5zZWxlY3RBbGwoJ3NwYW4nKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YShtaWRkbGVjYXJkcylcbiAgICAgICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnc3BhbicpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ2Zsb3BjYXJkcycpXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcm5hbWVzXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdChcIiNjaGlwY291bnRcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YSh0aGVEYXRhKVxuICAgICAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwicFwiKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lICsgXCIgOiBcIiArIGQuY2hpcHM7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwbGF5ZXJuYW1lc1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7IiwiXG5pbXBvcnQgc2NvcmVib2FyZCBmcm9tICcuLi9qYXZhc2NyaXB0L2pzL3Njb3JlYm9hcmQnO1xuaW1wb3J0IHRhYmxlIGZyb20gJy4uL2phdmFzY3JpcHQvanMvdGFibGUnXG5pbXBvcnQgcGxheWVyX2NoaXBzIGZyb20gJy4uL2phdmFzY3JpcHQvanMvcGxheWVyX2NoaXBzJztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAvLyBzY29yZWJvYXJkKCk7XG4gICAgdGFibGUoKTtcbiAgICAvLyBwbGF5ZXJfY2hpcHMoKTtcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==