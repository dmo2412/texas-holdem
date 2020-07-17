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

/***/ "./javascript/js/betting.js":
/*!**********************************!*\
  !*** ./javascript/js/betting.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Betting; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var deck = __webpack_require__(/*! ./deck */ "./javascript/js/deck.js");

var preflop = __webpack_require__(/*! ./preflop */ "./javascript/js/preflop.js");

var nextcard = __webpack_require__(/*! ./nextcard */ "./javascript/js/nextcard.js");

var Betting = /*#__PURE__*/function () {
  function Betting() {
    _classCallCheck(this, Betting);

    this.count = 0;
  }

  _createClass(Betting, [{
    key: "preflopBet",
    value: function preflopBet() {
      if (window.betRound === 0) {
        if (window.players[0] === window.player1 && window.count === 0) {
          window.player1.chips -= 10;
          window.pot.chips += 10;
          var first = window.players[0];
          window.players.shift();
          window.players.push(first); // this.count += 1;
        } else if (window.players[0] === window.player2 && window.count === 0) {
          window.player2.chips -= 10;
          window.pot.chips += 10;
          var _first = window.players[0];
          window.players.shift();
          window.players.push(_first); // this.count += 1;
        } else if (window.players[0] === window.player3 && window.count === 0) {
          window.player3.chips -= 10;
          window.pot.chips += 10;
          var _first2 = window.players[0];
          window.players.shift();
          window.players.push(_first2); // this.count += 1;
        }

        if (window.count === 1) {
          if (window.players[0] === window.player1) {
            window.player1.chips -= 5;
            window.pot.chips += 5; // this.count += 1;
          } else if (window.players[0] === window.player2) {
            window.player2.chips -= 5;
            window.pot.chips += 5; // this.count += 1;
          } else if (window.players[0] === window.player3) {
            window.player3.chips -= 5;
            window.pot.chips += 5; // this.count += 1;
          }
        }
      }
    }
  }, {
    key: "postflopBet",
    value: function postflopBet() {
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
        var first = window.players[0];
        window.players.shift();
        window.players.push(first);
      }
    }
  }, {
    key: "postturnBet",
    value: function postturnBet() {
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
        var first = window.players[0];
        window.players.shift();
        window.players.push(first);
        window.turnCount += 1;
      }
    }
  }, {
    key: "postriverBet",
    value: function postriverBet() {
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

        var first = window.players[0];
        window.players.shift();
        window.players.push(first);
        window.lastBet += 1;
      }
    }
  }]);

  return Betting;
}(); // player() {
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




/***/ }),

/***/ "./javascript/js/check.js":
/*!********************************!*\
  !*** ./javascript/js/check.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Check; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var deck = __webpack_require__(/*! ./deck */ "./javascript/js/deck.js");

var preflop = __webpack_require__(/*! ./preflop */ "./javascript/js/preflop.js");

var Check = /*#__PURE__*/function () {
  function Check() {
    _classCallCheck(this, Check);
  }

  _createClass(Check, [{
    key: "checkTurn",
    value: function checkTurn() {
      var player;

      if (window.players.length === 2) {
        if (window.players[0].currentBet >= window.players[1].currentBet) {
          player = window.players[0];
          window.players.shift();
          window.players.push(player);
          window.playerTurn += 1;
        }
      } else if (window.players.length === 3) {
        if (window.players[0].currentBet >= window.players[1].currentBet && window.players[0].currentBet >= window.players[2].currentBet) {
          player = window.players[0];
          window.players.shift();
          window.players.push(player);
          window.playerTurn += 1;
        }
      }
    }
  }]);

  return Check;
}();



/***/ }),

/***/ "./javascript/js/deck.js":
/*!*******************************!*\
  !*** ./javascript/js/deck.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Deck; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Deck = /*#__PURE__*/function () {
  function Deck() {
    _classCallCheck(this, Deck);

    // this.suits = ['s', 'c', 'h', 'd'];
    // this.values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    this.cards = [];
  }

  _createClass(Deck, [{
    key: "createCards",
    value: function createCards() {
      var suits = ['s', 'c', 'h', 'd'];
      var values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
      var i, j, temp;

      for (var _i = 0; _i < values.length; _i++) {
        for (var _j = 0; _j < suits.length; _j++) {
          var ele = values[_i].concat(suits[_j]);

          this.cards.push(ele);
        }
      }

      this.shuffleCards(this.cards); // for (i = this.cards.length - 1; i > 0; i--) {
      //     j = Math.floor(Math.random() * (i + 1));
      //     temp = this.cards[i];
      //     this.cards[i] = this.cards[j];
      //     this.cards[j] = temp;
      // };
    }
  }, {
    key: "shuffleCards",
    value: function shuffleCards() {
      var i, j, temp;

      for (i = this.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }

      ;
      return this.cards;
    }
  }, {
    key: "retainCards",
    value: function retainCards() {
      return this.cards;
    }
  }, {
    key: "resetCards",
    value: function resetCards() {
      this.createCards(this.cards);
    }
  }]);

  return Deck;
}(); // export default Shuffle;




/***/ }),

/***/ "./javascript/js/fold.js":
/*!*******************************!*\
  !*** ./javascript/js/fold.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fold; });
/* harmony import */ var _preflop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preflop */ "./javascript/js/preflop.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Fold = /*#__PURE__*/function () {
  function Fold() {
    _classCallCheck(this, Fold);
  }

  _createClass(Fold, [{
    key: "removePlayer",
    value: function removePlayer() {
      window.players.shift();
      this.removeCards();
    }
  }, {
    key: "removeCards",
    value: function removeCards() {
      if (window.players[0] === window.player1) {
        d3.selectAll(".player3cards").remove();
      } else if (window.players[0] === window.player2) {
        d3.selectAll(".player1cards").remove();
      } else if (window.players[0] === window.player3) {
        d3.selectAll(".player3cards").remove();
      }
    }
  }]);

  return Fold;
}();



/***/ }),

/***/ "./javascript/js/game.js":
/*!*******************************!*\
  !*** ./javascript/js/game.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck */ "./javascript/js/deck.js");
/* harmony import */ var _preflop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preflop */ "./javascript/js/preflop.js");
/* harmony import */ var _nextcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nextcard */ "./javascript/js/nextcard.js");
/* harmony import */ var _betting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./betting */ "./javascript/js/betting.js");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result */ "./javascript/js/result.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var deck = __webpack_require__(/*! ./deck */ "./javascript/js/deck.js");

var cards = __webpack_require__(/*! ./preflop */ "./javascript/js/preflop.js");

var bet = __webpack_require__(/*! ./betting */ "./javascript/js/betting.js");

var nextCard = __webpack_require__(/*! ./nextcard */ "./javascript/js/nextcard.js");

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.deck = new _deck__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.cards = new _preflop__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.nextCard = new _nextcard__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.bet = new _betting__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.solveHand = new _result__WEBPACK_IMPORTED_MODULE_4__["default"]();
    window.count = 0;
  }

  _createClass(Game, [{
    key: "createGame",
    value: function createGame() {
      this.cards.startScoreboard(); // this.cards.placeBet();
      // this.cards.dealCards();
      // this.cards.setBlinds();
      // debugger
      // this.deck.retainCards();
      // debugger
    }
  }, {
    key: "call",
    value: function call() {
      this.bet.preflopBet();
      this.bet.postflopBet();
      this.bet.postturnBet();
      this.bet.postriverBet();
      this.cards.startScoreboard(); // let first = window.players[0];
      // window.players.shift();
      // window.players.push(first);

      window.flopCount += 1;
      this.nextCard.postFlop();
      this.nextCard.postTurn();
      this.nextCard.postRiver();
      this.solveHand.solveHands();
    }
  }, {
    key: "fold",
    value: function fold() {
      window.flopCount += 1;
      this.nextCard.postFlop();
      this.nextCard.postTurn();
      this.nextCard.postRiver();
      this.solveHand.solveHands();
    }
  }, {
    key: "resetGame",
    value: function resetGame() {
      var player = window.playerList[0];
      window.playerList.shift();
      window.playerList.push(player);
      window.players = window.playerList;
      window.deck = new _deck__WEBPACK_IMPORTED_MODULE_0__["default"]();
      d3.selectAll(".player3cards").remove();
      d3.selectAll(".player1cards").remove();
      d3.selectAll(".player2cards").remove(); // window.pot.chips = 0;

      for (var i = 0; i < window.players.length; i++) {
        window.players[i].deadmoney = 0;
        window.players[i].currentBet = 0;
        window.players[i].cardPool = [];
        window.players[i].showCards = {};
      }
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./javascript/js/nextcard.js":
/*!***********************************!*\
  !*** ./javascript/js/nextcard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NextCard; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var deck = __webpack_require__(/*! ./deck */ "./javascript/js/deck.js");

var preflop = __webpack_require__(/*! ./preflop */ "./javascript/js/preflop.js");

var check = __webpack_require__(/*! ./check */ "./javascript/js/check.js");

var NextCard = /*#__PURE__*/function () {
  function NextCard() {
    _classCallCheck(this, NextCard);
  }

  _createClass(NextCard, [{
    key: "postFlop",
    value: function postFlop() {
      if (window.flopCount === 2) {
        // window.playerTurn = 0;
        var c = window.deck.cards.slice(0, 3);
        window.middleCards = window.middleCards.concat(c);

        for (var i = 0; i < window.players.length; i++) {
          window.players[i].cardPool.push(window.deck.cards[0]);
          window.players[i].cardPool.push(window.deck.cards[1]);
          window.players[i].cardPool.push(window.deck.cards[2]);
        }

        window.deck.cards = window.deck.cards.slice(3);
        window.betRound += 1;
        window.flopCount += 1;
        window.numPlayers = window.players.length;
        d3.select("#flopcard-anchor").selectAll("p").data(window.middleCards).enter().append("p").text(function (d) {
          return d;
        }).attr("class", "flopcards");
      }
    }
  }, {
    key: "postTurn",
    value: function postTurn() {
      if (window.betCount === window.players.length) {
        var c = window.deck.cards[0];
        window.playerTurn = 2;
        window.middleCards[3] = c;

        for (var i = 0; i < window.players.length; i++) {
          window.players[i].cardPool.push(c);
        }

        window.deck.cards = window.deck.cards.slice(1);
        d3.select("#flopcard-anchor").selectAll("p").data(window.middleCards).enter().append("p").text(function (d) {
          return d;
        }).attr("class", "flopcards");
        window.betRound += 1;
        window.numPlayers = window.players.length;
        window.betCount += 1; // let first = window.players[0];
        // window.players.shift();
        // window.players.push(first);
      }
    }
  }, {
    key: "postRiver",
    value: function postRiver() {
      if (window.turnCount === window.players.length) {
        var c = window.deck.cards[0];
        window.playerTurn = 3;
        window.middleCards[4] = c;

        for (var i = 0; i < window.players.length; i++) {
          window.players[i].cardPool.push(c);
        }

        window.deck.cards = window.deck.cards.slice(1);
        d3.select("#flopcard-anchor").selectAll("p").data(window.middleCards).enter().append("p").text(function (d) {
          return d;
        }).attr("class", "flopcards");
        window.betRound += 1;
        window.turnCount += 1;
      }
    }
  }]);

  return NextCard;
}();



/***/ }),

/***/ "./javascript/js/preflop.js":
/*!**********************************!*\
  !*** ./javascript/js/preflop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck */ "./javascript/js/deck.js");
/* harmony import */ var _betting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./betting */ "./javascript/js/betting.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // const deck = require('./deck');

var Cards = /*#__PURE__*/function () {
  function Cards() {
    _classCallCheck(this, Cards);

    this.betting = new _betting__WEBPACK_IMPORTED_MODULE_1__["default"]();
    window.player1 = {
      name: 'Mike McDermott',
      chips: 1000,
      deadmoney: 0,
      currentBet: 0,
      cardPool: [],
      holecards: [],
      showCards: {},
      status: true
    };
    window.player2 = {
      name: 'Tom Dwan',
      chips: 1000,
      deadmoney: 0,
      currentBet: 0,
      cardPool: [],
      holecards: [],
      showCards: {},
      status: true
    };
    window.player3 = {
      name: 'Phil Ivey',
      chips: 1000,
      deadmoney: 0,
      currentBet: 0,
      cardPool: [],
      holecards: [],
      showCards: {},
      status: true
    };
    window.middleCards = [];
    window.pot = {
      name: 'Pot',
      chips: 0
    };
    window.players = [window.player3, window.player1, window.player2];
    window.theData = [window.player1, window.player2, window.player3, window.pot];
    window.deck = new _deck__WEBPACK_IMPORTED_MODULE_0__["default"]();
    window.playerList = [window.player3, window.player1, window.player2];
    window.handCount = 0;
    window.flopCount = 0;
    window.turnCount = 0;
    window.riverCount = 0; // window.betRound = 0;

    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d"); // sessionStorage.setItem('player1', this.player1)
  }

  _createClass(Cards, [{
    key: "setOrder",
    value: function setOrder() {
      var player0 = window.players[0];
      window.players.shift();
      window.players.push(player0);
    }
  }, {
    key: "dealCards",
    value: function dealCards() {
      if (window.handCount === 0) {
        this.setOrder();
        this.placeBlinds();
        window.deck.createCards(); // let cards = this.deck.cards;

        for (var i = 0; i < 2; i++) {
          window.players[0].holecards.push(window.deck.cards[0]);
          window.players[0].cardPool.push(window.deck.cards[0]);
          window.deck.cards.shift();
          window.players[1].holecards.push(window.deck.cards[0]);
          window.players[1].cardPool.push(window.deck.cards[0]);
          window.deck.cards.shift();
          window.players[2].holecards.push(window.deck.cards[0]);
          window.players[2].cardPool.push(window.deck.cards[0]);
          window.deck.cards.shift();
        }

        d3.select("#player1carddiv").selectAll("p").data(window.player1.holecards).enter().append('p').text(function (d) {
          return d;
        }).attr("class", 'player1cards');
        d3.select("#player2carddiv").selectAll("p").data(window.player2.holecards).enter().append('p').text(function (d) {
          return d;
        }).attr("class", 'player2cards');
        d3.select("#player3carddiv").selectAll("p").data(window.player3.holecards).enter().append('p').text(function (d) {
          return d;
        }).attr("class", 'player3cards');
      }

      window.handCount += 1;
      window.pot.chips = 15; // console.log(window.player1)
    }
  }, {
    key: "retainCards",
    value: function retainCards() {
      return window.deck;
    }
  }, {
    key: "placeBlinds",
    value: function placeBlinds() {
      var first;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // this.ctx.beginPath();
      // var arr = window.players.slice(0,2);

      debugger;

      if (window.players[0] === window.player1) {
        window.player1.chips -= 5;
        window.player1.deadmoney += 5;
        window.player1.currentBet += 5; // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.beginPath();
        this.ctx.arc(300, 20, 10, 0, Math.PI * 2);
        this.ctx.fillStyle = "tomato";
        this.ctx.text = '10';
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        first = window.players[0];
        window.players.shift();
        window.players.push(first);
        window.player2.chips -= 10;
        window.player2.deadmoney += 10;
        window.player2.currentBet += 10;
        this.ctx.beginPath();
        this.ctx.arc(260, 20, 10, 0, Math.PI * 2);
        this.ctx.fillStyle = "yellow";
        this.ctx.text = '10';
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        first = window.players[0];
        window.players.shift();
        window.players.push(first);
      } else if (window.players[0] === window.player2) {
        window.player2.chips -= 5;
        window.player2.deadmoney += 5;
        window.player2.currentBet += 5;
        this.ctx.beginPath();
        this.ctx.arc(260, 20, 10, 0, Math.PI * 2);
        this.ctx.fillStyle = "yellow";
        this.ctx.text = '10';
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        window.player3.chips -= 10;
        window.player3.deadmoney += 10;
        window.player3.currentBet += 10;
        first = window.players[0];
        window.players.shift();
        window.players.push(first);
        this.ctx.beginPath();
        this.ctx.arc(270, 20, 10, 0, Math.PI * 2);
        this.ctx.fillStyle = "blue";
        this.ctx.text = '10';
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        first = window.players[0];
        window.players.shift();
        window.players.push(first);
      } else if (window.players[0] === window.player3) {
        window.player1.chips -= 10;
        window.player1.deadmoney += 10;
        window.player1.currentBet += 10;
        this.ctx.beginPath();
        this.ctx.arc(300, 20, 10, 0, Math.PI * 2);
        this.ctx.fillStyle = "tomato";
        this.ctx.text = '10';
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        first = window.players[0];
        window.players.shift();
        window.players.push(first);
        window.player3.chips -= 5;
        window.player3.deadmoney += 5;
        window.player3.currentBet += 5;
        this.ctx.beginPath();
        this.ctx.arc(270, 20, 10, 0, Math.PI * 2);
        this.ctx.fillStyle = "blue";
        this.ctx.text = '10';
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        first = window.players[0];
        window.players.shift();
        window.players.push(first);
      }

      window.pot.chips += 15;
      d3.selectAll(".playernames").remove();
      this.startScoreboard();
    }
  }, {
    key: "startScoreboard",
    value: function startScoreboard() {
      d3.selectAll(".playernames").remove();
      d3.select("#chipcount").selectAll("p").data(window.theData).enter().append("p").text(function (d) {
        return d.name + " : " + d.chips;
      }).attr("class", "playernames");
    } // placeBet() {
    //     // console.log(this.player1)
    //     this.betting.player();
    // }

  }]);

  return Cards;
}(); // class Person {
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




/***/ }),

/***/ "./javascript/js/result.js":
/*!*********************************!*\
  !*** ./javascript/js/result.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SolveHand; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SolveHand = /*#__PURE__*/function () {
  function SolveHand() {
    _classCallCheck(this, SolveHand);
  }

  _createClass(SolveHand, [{
    key: "solveHands",
    value: function solveHands() {
      var Hand = __webpack_require__(/*! pokersolver */ "./node_modules/pokersolver/pokersolver.js").Hand;

      var playerHands = [];
      var rez;

      if (window.lastBet === window.players.length) {
        for (var i = 0; i < window.players.length; i++) {
          // debugger
          rez = Hand.solve(window.players[i].cardPool); // debugger

          playerHands.push(rez);
        } // console.log(playerHands);


        window.winner = Hand.winners(playerHands); // console.log(window.winner);
        // debugger
        // this.returnWinner();

        this.setCardPool();
        this.returnWinner();
        window.lastBet += 4;
        var first = window.playerList[0];
        window.playerList.shift(1);
        window.playerList.push(first);
        window.players = window.playerList;
        window.handCount = 0;
        window.deck.cards = [];
        window.betRound = -1;
        window.count = 0;
        d3.select("#pokertable").selectAll('h3').data(window.winningPlayerName).enter().append("h3").text(function (d) {
          return d + " wins pot with " + window.winner[0].descr;
        }).attr("class", "winnerName");
      }
    }
  }, {
    key: "returnWinner",
    value: function returnWinner() {
      for (var i = 0; i < players.length; i++) {
        if (JSON.stringify(window.players[i].cardPool.sort()) === JSON.stringify(window.winningHand)) {
          console.log(window.players[i].name);
          window.players[i].chips += window.pot.chips;
          window.pot.chips = 0;
          window.winningPlayerName = [window.players[i].name];
        }
      }
    }
  }, {
    key: "setCardPool",
    value: function setCardPool() {
      window.winningHand = [];
      var val;
      var suit;
      var card;

      for (var i = 0; i < 7; i++) {
        val = window.winner[0].cardPool[i].value;
        suit = window.winner[0].cardPool[i].suit;
        card = val.concat(suit);
        window.winningHand.push(card);
      }

      window.winningHand = window.winningHand.sort(); // console.log(window.winningHand)
    }
  }]);

  return SolveHand;
}();



/***/ }),

/***/ "./node_modules/pokersolver/pokersolver.js":
/*!*************************************************!*\
  !*** ./node_modules/pokersolver/pokersolver.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * pokersolver v2.1.2
 * Copyright (c) 2016, James Simpson of GoldFire Studios
 * http://goldfirestudios.com
 */
(function () {
  'use strict'; // NOTE: The 'joker' will be denoted with a value of 'O' and any suit.

  var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  /**
   * Base Card class that defines a single card.
   */

  class Card {
    constructor(str) {
      this.value = str.substr(0, 1);
      this.suit = str.substr(1, 1).toLowerCase();
      this.rank = values.indexOf(this.value);
      this.wildValue = str.substr(0, 1);
    } // TODO: Add a parameter to leave out the suit and update the this.descr calls.


    toString() {
      return this.wildValue.replace('T', '10') + this.suit;
    }

    static sort(a, b) {
      if (a.rank > b.rank) {
        return -1;
      } else if (a.rank < b.rank) {
        return 1;
      } else {
        return 0;
      }
    }

  }
  /**
   * Base Hand class that handles comparisons of full hands.
   */


  class Hand {
    constructor(cards, name, game, canDisqualify) {
      this.cardPool = [];
      this.cards = [];
      this.suits = {};
      this.values = [];
      this.wilds = [];
      this.name = name;
      this.game = game;
      this.sfLength = 0;
      this.alwaysQualifies = true; // Qualification rules apply for dealer's hand.
      // Also applies for single player games, like video poker.

      if (canDisqualify && this.game.lowestQualified) {
        this.alwaysQualifies = false;
      } // Get rank based on game.


      var handRank = this.game.handValues.length;

      for (var i = 0; i < this.game.handValues.length; i++) {
        if (this.game.handValues[i] === this.constructor) {
          break;
        }
      }

      this.rank = handRank - i; // Set up the pool of cards.

      this.cardPool = cards.map(function (c) {
        return typeof c === 'string' ? new Card(c) : c;
      }); // Fix the card ranks for wild cards, and sort.

      for (var i = 0; i < this.cardPool.length; i++) {
        card = this.cardPool[i];

        if (card.value === this.game.wildValue) {
          card.rank = -1;
        }
      }

      this.cardPool = this.cardPool.sort(Card.sort); // Create the arrays of suits and values.

      var obj, obj1, key, key1, card;

      for (var i = 0; i < this.cardPool.length; i++) {
        // Make sure this value already exists in the object.
        card = this.cardPool[i]; // We do something special if this is a wild card.

        if (card.rank === -1) {
          this.wilds.push(card);
        } else {
          (obj = this.suits)[key = card.suit] || (obj[key] = []);
          (obj1 = this.values)[key1 = card.rank] || (obj1[key1] = []); // Add the value to the array for that type in the object.

          this.suits[card.suit].push(card);
          this.values[card.rank].push(card);
        }
      }

      this.values.reverse();
      this.isPossible = this.solve();
    }
    /**
     * Compare current hand with another to determine which is the winner.
     * @param  {Hand} a Hand to compare to.
     * @return {Number}
     */


    compare(a) {
      if (this.rank < a.rank) {
        return 1;
      } else if (this.rank > a.rank) {
        return -1;
      }

      var result = 0;

      for (var i = 0; i <= 4; i++) {
        if (this.cards[i] && a.cards[i] && this.cards[i].rank < a.cards[i].rank) {
          result = 1;
          break;
        } else if (this.cards[i] && a.cards[i] && this.cards[i].rank > a.cards[i].rank) {
          result = -1;
          break;
        }
      }

      return result;
    }
    /**
     * Determine whether a hand loses to another.
     * @param  {Hand} hand Hand to compare to.
     * @return {Boolean}
     */


    loseTo(hand) {
      return this.compare(hand) > 0;
    }
    /**
     * Determine the number of cards in a hand of a rank.
     * @param  {Number} val Index of this.values.
     * @return {Number} Number of cards having the rank, including wild cards.
     */


    getNumCardsByRank(val) {
      var cards = this.values[val];
      var checkCardsLength = cards ? cards.length : 0;

      for (var i = 0; i < this.wilds.length; i++) {
        if (this.wilds[i].rank > -1) {
          continue;
        } else if (cards) {
          if (this.game.wildStatus === 1 || cards[0].rank === values.length - 1) {
            checkCardsLength += 1;
          }
        } else if (this.game.wildStatus === 1 || val === values.length - 1) {
          checkCardsLength += 1;
        }
      }

      return checkCardsLength;
    }
    /**
     * Determine the cards in a suit for a flush.
     * @param  {String} suit Key for this.suits.
     * @param  {Boolean} setRanks Whether to set the ranks for the wild cards.
     * @return {Array} Cards having the suit, including wild cards.
     */


    getCardsForFlush(suit, setRanks) {
      var cards = (this.suits[suit] || []).sort(Card.sort);

      for (var i = 0; i < this.wilds.length; i++) {
        var wild = this.wilds[i];

        if (setRanks) {
          var j = 0;

          while (j < values.length && j < cards.length) {
            if (cards[j].rank === values.length - 1 - j) {
              j += 1;
            } else {
              break;
            }
          }

          wild.rank = values.length - 1 - j;
          wild.wildValue = values[wild.rank];
        }

        cards.push(wild);
        cards = cards.sort(Card.sort);
      }

      return cards;
    }
    /**
     * Resets the rank and wild values of the wild cards.
     */


    resetWildCards() {
      for (var i = 0; i < this.wilds.length; i++) {
        this.wilds[i].rank = -1;
        this.wilds[i].wildValue = this.wilds[i].value;
      }
    }
    /**
     * Highest card comparison.
     * @return {Array} Highest cards
     */


    nextHighest() {
      var picks;
      var excluding = [];
      excluding = excluding.concat(this.cards);
      picks = this.cardPool.filter(function (card) {
        if (excluding.indexOf(card) < 0) {
          return true;
        }
      }); // Account for remaining wild card when it must be ace.

      if (this.game.wildStatus === 0) {
        for (var i = 0; i < picks.length; i++) {
          var card = picks[i];

          if (card.rank === -1) {
            card.wildValue = 'A';
            card.rank = values.length - 1;
          }
        }

        picks = picks.sort(Card.sort);
      }

      return picks;
    }
    /**
     * Return list of contained cards in human readable format.
     * @return {String}
     */


    toString() {
      var cards = this.cards.map(function (c) {
        return c.toString();
      });
      return cards.join(', ');
    }
    /**
     * Return array of contained cards.
     * @return {Array}
     */


    toArray() {
      var cards = this.cards.map(function (c) {
        return c.toString();
      });
      return cards;
    }
    /**
     * Determine if qualifying hand.
     * @return {Boolean}
     */


    qualifiesHigh() {
      if (!this.game.lowestQualified || this.alwaysQualifies) {
        return true;
      }

      return this.compare(Hand.solve(this.game.lowestQualified, this.game)) <= 0;
    }
    /**
     * Find highest ranked hands and remove any that don't qualify or lose to another hand.
     * @param  {Array} hands Hands to evaluate.
     * @return {Array}       Winning hands.
     */


    static winners(hands) {
      hands = hands.filter(function (h) {
        return h.qualifiesHigh();
      });
      var highestRank = Math.max.apply(Math, hands.map(function (h) {
        return h.rank;
      }));
      hands = hands.filter(function (h) {
        return h.rank === highestRank;
      });
      hands = hands.filter(function (h) {
        var lose = false;

        for (var i = 0; i < hands.length; i++) {
          lose = h.loseTo(hands[i]);

          if (lose) {
            break;
          }
        }

        return !lose;
      });
      return hands;
    }
    /**
     * Build and return the best hand.
     * @param  {Array} cards Array of cards (['Ad', '3c', 'Th', ...]).
     * @param  {String} game Game being played.
     * @param  {Boolean} canDisqualify Check for a qualified hand.
     * @return {Hand}       Best hand.
     */


    static solve(cards, game, canDisqualify) {
      game = game || 'standard';
      game = typeof game === 'string' ? new Game(game) : game;
      cards = cards || [''];
      var hands = game.handValues;
      var result = null;

      for (var i = 0; i < hands.length; i++) {
        result = new hands[i](cards, game, canDisqualify);

        if (result.isPossible) {
          break;
        }
      }

      return result;
    }
    /**
     * Separate cards based on if they are wild cards.
     * @param  {Array} cards Array of cards (['Ad', '3c', 'Th', ...]).
     * @param  {Game} game Game being played.
     * @return {Array} [wilds, nonWilds] Wild and non-Wild Cards.
     */


    static stripWilds(cards, game) {
      var card, wilds, nonWilds;
      cards = cards || [''];
      wilds = [];
      nonWilds = [];

      for (var i = 0; i < cards.length; i++) {
        card = cards[i];

        if (card.rank === -1) {
          wilds.push(cards[i]);
        } else {
          nonWilds.push(cards[i]);
        }
      }

      return [wilds, nonWilds];
    }

  }

  class StraightFlush extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Straight Flush', game, canDisqualify);
    }

    solve() {
      var cards;
      this.resetWildCards();
      var possibleStraight = null;
      var nonCards = [];

      for (var suit in this.suits) {
        cards = this.getCardsForFlush(suit, false);

        if (cards && cards.length >= this.game.sfQualify) {
          possibleStraight = cards;
          break;
        }
      }

      if (possibleStraight) {
        if (this.game.descr !== 'standard') {
          for (var suit in this.suits) {
            if (possibleStraight[0].suit !== suit) {
              nonCards = nonCards.concat(this.suits[suit] || []);
              nonCards = Hand.stripWilds(nonCards, this.game)[1];
            }
          }
        }

        var straight = new Straight(possibleStraight, this.game);

        if (straight.isPossible) {
          this.cards = straight.cards;
          this.cards = this.cards.concat(nonCards);
          this.sfLength = straight.sfLength;
        }
      }

      if (this.cards[0] && this.cards[0].rank === 13) {
        this.descr = 'Royal Flush';
      } else if (this.cards.length >= this.game.sfQualify) {
        this.descr = this.name + ', ' + this.cards[0].toString().slice(0, -1) + suit + ' High';
      }

      return this.cards.length >= this.game.sfQualify;
    }

  }

  class RoyalFlush extends StraightFlush {
    constructor(cards, game, canDisqualify) {
      super(cards, game, canDisqualify);
    }

    solve() {
      this.resetWildCards();
      var result = super.solve();
      return result && this.descr === 'Royal Flush';
    }

  }

  class NaturalRoyalFlush extends RoyalFlush {
    constructor(cards, game, canDisqualify) {
      super(cards, game, canDisqualify);
    }

    solve() {
      var i = 0;
      this.resetWildCards();
      var result = super.solve();

      if (result && this.cards) {
        for (i = 0; i < this.game.sfQualify && i < this.cards.length; i++) {
          if (this.cards[i].value === this.game.wildValue) {
            result = false;
            this.descr = 'Wild Royal Flush';
            break;
          }
        }

        if (i === this.game.sfQualify) {
          this.descr = 'Royal Flush';
        }
      }

      return result;
    }

  }

  class WildRoyalFlush extends RoyalFlush {
    constructor(cards, game, canDisqualify) {
      super(cards, game, canDisqualify);
    }

    solve() {
      var i = 0;
      this.resetWildCards();
      var result = super.solve();

      if (result && this.cards) {
        for (i = 0; i < this.game.sfQualify && i < this.cards.length; i++) {
          if (this.cards[i].value === this.game.wildValue) {
            this.descr = 'Wild Royal Flush';
            break;
          }
        }

        if (i === this.game.sfQualify) {
          result = false;
          this.descr = 'Royal Flush';
        }
      }

      return result;
    }

  }

  class FiveOfAKind extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Five of a Kind', game, canDisqualify);
    }

    solve() {
      this.resetWildCards();

      for (var i = 0; i < this.values.length; i++) {
        if (this.getNumCardsByRank(i) === 5) {
          this.cards = this.values[i] || [];

          for (var j = 0; j < this.wilds.length && this.cards.length < 5; j++) {
            var wild = this.wilds[j];

            if (this.cards) {
              wild.rank = this.cards[0].rank;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }

          this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - 5));
          break;
        }
      }

      if (this.cards.length >= 5) {
        this.descr = this.name + ', ' + this.cards[0].toString().slice(0, -1) + '\'s';
      }

      return this.cards.length >= 5;
    }

  }

  class FourOfAKindPairPlus extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Four of a Kind with Pair or Better', game, canDisqualify);
    }

    solve() {
      var cards;
      this.resetWildCards();

      for (var i = 0; i < this.values.length; i++) {
        if (this.getNumCardsByRank(i) === 4) {
          this.cards = this.values[i] || [];

          for (var j = 0; j < this.wilds.length && this.cards.length < 4; j++) {
            var wild = this.wilds[j];

            if (this.cards) {
              wild.rank = this.cards[0].rank;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }

          break;
        }
      }

      if (this.cards.length === 4) {
        for (i = 0; i < this.values.length; i++) {
          cards = this.values[i];

          if (cards && this.cards[0].wildValue === cards[0].wildValue) {
            continue;
          }

          if (this.getNumCardsByRank(i) >= 2) {
            this.cards = this.cards.concat(cards || []);

            for (var j = 0; j < this.wilds.length; j++) {
              var wild = this.wilds[j];

              if (wild.rank !== -1) {
                continue;
              }

              if (cards) {
                wild.rank = cards[0].rank;
              } else if (this.cards[0].rank === values.length - 1 && this.game.wildStatus === 1) {
                wild.rank = values.length - 2;
              } else {
                wild.rank = values.length - 1;
              }

              wild.wildValue = values[wild.rank];
              this.cards.push(wild);
            }

            this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - 6));
            break;
          }
        }
      }

      if (this.cards.length >= 6) {
        var type = this.cards[0].toString().slice(0, -1) + '\'s over ' + this.cards[4].toString().slice(0, -1) + '\'s';
        this.descr = this.name + ', ' + type;
      }

      return this.cards.length >= 6;
    }

  }

  class FourOfAKind extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Four of a Kind', game, canDisqualify);
    }

    solve() {
      this.resetWildCards();

      for (var i = 0; i < this.values.length; i++) {
        if (this.getNumCardsByRank(i) === 4) {
          this.cards = this.values[i] || [];

          for (var j = 0; j < this.wilds.length && this.cards.length < 4; j++) {
            var wild = this.wilds[j];

            if (this.cards) {
              wild.rank = this.cards[0].rank;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }

          this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - 4));
          break;
        }
      }

      if (this.cards.length >= 4) {
        if (this.game.noKickers) {
          this.cards.length = 4;
        }

        this.descr = this.name + ', ' + this.cards[0].toString().slice(0, -1) + '\'s';
      }

      return this.cards.length >= 4;
    }

  }

  class FourWilds extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Four Wild Cards', game, canDisqualify);
    }

    solve() {
      if (this.wilds.length === 4) {
        this.cards = this.wilds;
        this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - 4));
      }

      if (this.cards.length >= 4) {
        if (this.game.noKickers) {
          this.cards.length = 4;
        }

        this.descr = this.name;
      }

      return this.cards.length >= 4;
    }

  }

  class ThreeOfAKindTwoPair extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Three of a Kind with Two Pair', game, canDisqualify);
    }

    solve() {
      var cards;
      this.resetWildCards();

      for (var i = 0; i < this.values.length; i++) {
        if (this.getNumCardsByRank(i) === 3) {
          this.cards = this.values[i] || [];

          for (var j = 0; j < this.wilds.length && this.cards.length < 3; j++) {
            var wild = this.wilds[j];

            if (this.cards) {
              wild.rank = this.cards[0].rank;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }

          break;
        }
      }

      if (this.cards.length === 3) {
        for (var i = 0; i < this.values.length; i++) {
          var cards = this.values[i];

          if (cards && this.cards[0].wildValue === cards[0].wildValue) {
            continue;
          }

          if (this.cards.length > 5 && this.getNumCardsByRank(i) === 2) {
            this.cards = this.cards.concat(cards || []);

            for (var j = 0; j < this.wilds.length; j++) {
              var wild = this.wilds[j];

              if (wild.rank !== -1) {
                continue;
              }

              if (cards) {
                wild.rank = cards[0].rank;
              } else if (this.cards[0].rank === values.length - 1 && this.game.wildStatus === 1) {
                wild.rank = values.length - 2;
              } else {
                wild.rank = values.length - 1;
              }

              wild.wildValue = values[wild.rank];
              this.cards.push(wild);
            }

            this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - 4));
            break;
          } else if (this.getNumCardsByRank(i) === 2) {
            this.cards = this.cards.concat(cards);

            for (var j = 0; j < this.wilds.length; j++) {
              var wild = this.wilds[j];

              if (wild.rank !== -1) {
                continue;
              }

              if (cards) {
                wild.rank = cards[0].rank;
              } else if (this.cards[0].rank === values.length - 1 && this.game.wildStatus === 1) {
                wild.rank = values.length - 2;
              } else {
                wild.rank = values.length - 1;
              }

              wild.wildValue = values[wild.rank];
              this.cards.push(wild);
            }
          }
        }
      }

      if (this.cards.length >= 7) {
        var type = this.cards[0].toString().slice(0, -1) + '\'s over ' + this.cards[3].toString().slice(0, -1) + '\'s & ' + this.cards[5].value + '\'s';
        this.descr = this.name + ', ' + type;
      }

      return this.cards.length >= 7;
    }

  }

  class FullHouse extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Full House', game, canDisqualify);
    }

    solve() {
      var cards;
      this.resetWildCards();

      for (var i = 0; i < this.values.length; i++) {
        if (this.getNumCardsByRank(i) === 3) {
          this.cards = this.values[i] || [];

          for (var j = 0; j < this.wilds.length && this.cards.length < 3; j++) {
            var wild = this.wilds[j];

            if (this.cards) {
              wild.rank = this.cards[0].rank;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }

          break;
        }
      }

      if (this.cards.length === 3) {
        for (i = 0; i < this.values.length; i++) {
          cards = this.values[i];

          if (cards && this.cards[0].wildValue === cards[0].wildValue) {
            continue;
          }

          if (this.getNumCardsByRank(i) >= 2) {
            this.cards = this.cards.concat(cards || []);

            for (var j = 0; j < this.wilds.length; j++) {
              var wild = this.wilds[j];

              if (wild.rank !== -1) {
                continue;
              }

              if (cards) {
                wild.rank = cards[0].rank;
              } else if (this.cards[0].rank === values.length - 1 && this.game.wildStatus === 1) {
                wild.rank = values.length - 2;
              } else {
                wild.rank = values.length - 1;
              }

              wild.wildValue = values[wild.rank];
              this.cards.push(wild);
            }

            this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - 5));
            break;
          }
        }
      }

      if (this.cards.length >= 5) {
        var type = this.cards[0].toString().slice(0, -1) + '\'s over ' + this.cards[3].toString().slice(0, -1) + '\'s';
        this.descr = this.name + ', ' + type;
      }

      return this.cards.length >= 5;
    }

  }

  class Flush extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Flush', game, canDisqualify);
    }

    solve() {
      this.sfLength = 0;
      this.resetWildCards();

      for (var suit in this.suits) {
        var cards = this.getCardsForFlush(suit, true);

        if (cards.length >= this.game.sfQualify) {
          this.cards = cards;
          break;
        }
      }

      if (this.cards.length >= this.game.sfQualify) {
        this.descr = this.name + ', ' + this.cards[0].toString().slice(0, -1) + suit + ' High';
        this.sfLength = this.cards.length;

        if (this.cards.length < this.game.cardsInHand) {
          this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - this.cards.length));
        }
      }

      return this.cards.length >= this.game.sfQualify;
    }

  }

  class Straight extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Straight', game, canDisqualify);
    }

    solve() {
      var card, checkCards;
      this.resetWildCards(); // There are still some games that count the wheel as second highest.
      // These games do not have enough cards/wilds to make AKQJT and 5432A both possible.

      if (this.game.wheelStatus === 1) {
        this.cards = this.getWheel();

        if (this.cards.length) {
          var wildCount = 0;

          for (var i = 0; i < this.cards.length; i++) {
            card = this.cards[i];

            if (card.value === this.game.wildValue) {
              wildCount += 1;
            }

            if (card.rank === 0) {
              card.rank = values.indexOf('A');
              card.wildValue = 'A';

              if (card.value === '1') {
                card.value = 'A';
              }
            }
          }

          this.cards = this.cards.sort(Card.sort);

          for (; wildCount < this.wilds.length && this.cards.length < this.game.cardsInHand; wildCount++) {
            card = this.wilds[wildCount];
            card.rank = values.indexOf('A');
            card.wildValue = 'A';
            this.cards.push(card);
          }

          this.descr = this.name + ', Wheel';
          this.sfLength = this.sfQualify;

          if (this.cards[0].value === 'A') {
            this.cards = this.cards.concat(this.nextHighest().slice(1, this.game.cardsInHand - this.cards.length + 1));
          } else {
            this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - this.cards.length));
          }

          return true;
        }

        this.resetWildCards();
      }

      this.cards = this.getGaps(); // Now add the wild cards, if any, and set the appropriate ranks

      for (var i = 0; i < this.wilds.length; i++) {
        card = this.wilds[i];
        checkCards = this.getGaps(this.cards.length);

        if (this.cards.length === checkCards.length) {
          // This is an "open-ended" straight, the high rank is the highest possible rank.
          if (this.cards[0].rank < values.length - 1) {
            card.rank = this.cards[0].rank + 1;
            card.wildValue = values[card.rank];
            this.cards.push(card);
          } else {
            card.rank = this.cards[this.cards.length - 1].rank - 1;
            card.wildValue = values[card.rank];
            this.cards.push(card);
          }
        } else {
          // This is an "inside" straight, the high card doesn't change.
          for (var j = 1; j < this.cards.length; j++) {
            if (this.cards[j - 1].rank - this.cards[j].rank > 1) {
              card.rank = this.cards[j - 1].rank - 1;
              card.wildValue = values[card.rank];
              this.cards.push(card);
              break;
            }
          }
        }

        this.cards = this.cards.sort(Card.sort);
      }

      if (this.cards.length >= this.game.sfQualify) {
        this.descr = this.name + ', ' + this.cards[0].toString().slice(0, -1) + ' High';
        this.cards = this.cards.slice(0, this.game.cardsInHand);
        this.sfLength = this.cards.length;

        if (this.cards.length < this.game.cardsInHand) {
          if (this.cards[this.sfLength - 1].rank === 0) {
            this.cards = this.cards.concat(this.nextHighest().slice(1, this.game.cardsInHand - this.cards.length + 1));
          } else {
            this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - this.cards.length));
          }
        }
      }

      return this.cards.length >= this.game.sfQualify;
    }
    /**
     * Get the number of gaps in the straight.
     * @return {Array} Highest potential straight with fewest number of gaps.
     */


    getGaps(checkHandLength) {
      var wildCards, cardsToCheck, i, card, gapCards, cardsList, gapCount, prevCard, diff;
      var stripReturn = Hand.stripWilds(this.cardPool, this.game);
      wildCards = stripReturn[0];
      cardsToCheck = stripReturn[1];

      for (i = 0; i < cardsToCheck.length; i++) {
        card = cardsToCheck[i];

        if (card.wildValue === 'A') {
          cardsToCheck.push(new Card('1' + card.suit));
        }
      }

      cardsToCheck = cardsToCheck.sort(Card.sort);

      if (checkHandLength) {
        i = cardsToCheck[0].rank + 1;
      } else {
        checkHandLength = this.game.sfQualify;
        i = values.length;
      }

      gapCards = [];

      for (; i > 0; i--) {
        cardsList = [];
        gapCount = 0;

        for (var j = 0; j < cardsToCheck.length; j++) {
          card = cardsToCheck[j];

          if (card.rank > i) {
            continue;
          }

          prevCard = cardsList[cardsList.length - 1];
          diff = prevCard ? prevCard.rank - card.rank : i - card.rank;

          if (diff === null) {
            cardsList.push(card);
          } else if (checkHandLength < gapCount + diff + cardsList.length) {
            break;
          } else if (diff > 0) {
            cardsList.push(card);
            gapCount += diff - 1;
          }
        }

        if (cardsList.length > gapCards.length) {
          gapCards = cardsList.slice();
        }

        if (this.game.sfQualify - gapCards.length <= wildCards.length) {
          break;
        }
      }

      return gapCards;
    }

    getWheel() {
      var wildCards, cardsToCheck, i, card, wheelCards, wildCount, cardFound;
      var stripReturn = Hand.stripWilds(this.cardPool, this.game);
      wildCards = stripReturn[0];
      cardsToCheck = stripReturn[1];

      for (i = 0; i < cardsToCheck.length; i++) {
        card = cardsToCheck[i];

        if (card.wildValue === 'A') {
          cardsToCheck.push(new Card('1' + card.suit));
        }
      }

      cardsToCheck = cardsToCheck.sort(Card.sort);
      wheelCards = [];
      wildCount = 0;

      for (i = this.game.sfQualify - 1; i >= 0; i--) {
        cardFound = false;

        for (var j = 0; j < cardsToCheck.length; j++) {
          card = cardsToCheck[j];

          if (card.rank > i) {
            continue;
          }

          if (card.rank < i) {
            break;
          }

          wheelCards.push(card);
          cardFound = true;
          break;
        }

        if (!cardFound) {
          if (wildCount < wildCards.length) {
            wildCards[wildCount].rank = i;
            wildCards[wildCount].wildValue = values[i];
            wheelCards.push(wildCards[wildCount]);
            wildCount += 1;
          } else {
            return [];
          }
        }
      }

      return wheelCards;
    }

  }

  class TwoThreeOfAKind extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Two Three Of a Kind', game, canDisqualify);
    }

    solve() {
      this.resetWildCards();

      for (var i = 0; i < this.values.length; i++) {
        var cards = this.values[i];

        if (this.cards.length > 0 && this.getNumCardsByRank(i) === 3) {
          this.cards = this.cards.concat(cards || []);

          for (var j = 0; j < this.wilds.length; j++) {
            var wild = this.wilds[j];

            if (wild.rank !== -1) {
              continue;
            }

            if (cards) {
              wild.rank = cards[0].rank;
            } else if (this.cards[0].rank === values.length - 1 && this.game.wildStatus === 1) {
              wild.rank = values.length - 2;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }

          this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - 6));
          break;
        } else if (this.getNumCardsByRank(i) === 3) {
          this.cards = this.cards.concat(cards);

          for (var j = 0; j < this.wilds.length; j++) {
            var wild = this.wilds[j];

            if (wild.rank !== -1) {
              continue;
            }

            if (cards) {
              wild.rank = cards[0].rank;
            } else if (this.cards[0].rank === values.length - 1 && this.game.wildStatus === 1) {
              wild.rank = values.length - 2;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }
        }
      }

      if (this.cards.length >= 6) {
        var type = this.cards[0].toString().slice(0, -1) + '\'s & ' + this.cards[3].toString().slice(0, -1) + '\'s';
        this.descr = this.name + ', ' + type;
      }

      return this.cards.length >= 6;
    }

  }

  class ThreeOfAKind extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Three of a Kind', game, canDisqualify);
    }

    solve() {
      this.resetWildCards();

      for (var i = 0; i < this.values.length; i++) {
        if (this.getNumCardsByRank(i) === 3) {
          this.cards = this.values[i] || [];

          for (var j = 0; j < this.wilds.length && this.cards.length < 3; j++) {
            var wild = this.wilds[j];

            if (this.cards) {
              wild.rank = this.cards[0].rank;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }

          this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - 3));
          break;
        }
      }

      if (this.cards.length >= 3) {
        if (this.game.noKickers) {
          this.cards.length = 3;
        }

        this.descr = this.name + ', ' + this.cards[0].toString().slice(0, -1) + '\'s';
      }

      return this.cards.length >= 3;
    }

  }

  class ThreePair extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Three Pair', game, canDisqualify);
    }

    solve() {
      this.resetWildCards();

      for (var i = 0; i < this.values.length; i++) {
        var cards = this.values[i];

        if (this.cards.length > 2 && this.getNumCardsByRank(i) === 2) {
          this.cards = this.cards.concat(cards || []);

          for (var j = 0; j < this.wilds.length; j++) {
            var wild = this.wilds[j];

            if (wild.rank !== -1) {
              continue;
            }

            if (cards) {
              wild.rank = cards[0].rank;
            } else if (this.cards[0].rank === values.length - 1 && this.game.wildStatus === 1) {
              wild.rank = values.length - 2;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }

          this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - 6));
          break;
        } else if (this.cards.length > 0 && this.getNumCardsByRank(i) === 2) {
          this.cards = this.cards.concat(cards || []);

          for (var j = 0; j < this.wilds.length; j++) {
            var wild = this.wilds[j];

            if (wild.rank !== -1) {
              continue;
            }

            if (cards) {
              wild.rank = cards[0].rank;
            } else if (this.cards[0].rank === values.length - 1 && this.game.wildStatus === 1) {
              wild.rank = values.length - 2;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }
        } else if (this.getNumCardsByRank(i) === 2) {
          this.cards = this.cards.concat(cards);

          for (var j = 0; j < this.wilds.length; j++) {
            var wild = this.wilds[j];

            if (wild.rank !== -1) {
              continue;
            }

            if (cards) {
              wild.rank = cards[0].rank;
            } else if (this.cards[0].rank === values.length - 1 && this.game.wildStatus === 1) {
              wild.rank = values.length - 2;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }
        }
      }

      if (this.cards.length >= 6) {
        var type = this.cards[0].toString().slice(0, -1) + '\'s & ' + this.cards[2].toString().slice(0, -1) + '\'s & ' + this.cards[4].toString().slice(0, -1) + '\'s';
        this.descr = this.name + ', ' + type;
      }

      return this.cards.length >= 6;
    }

  }

  class TwoPair extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Two Pair', game, canDisqualify);
    }

    solve() {
      this.resetWildCards();

      for (var i = 0; i < this.values.length; i++) {
        var cards = this.values[i];

        if (this.cards.length > 0 && this.getNumCardsByRank(i) === 2) {
          this.cards = this.cards.concat(cards || []);

          for (var j = 0; j < this.wilds.length; j++) {
            var wild = this.wilds[j];

            if (wild.rank !== -1) {
              continue;
            }

            if (cards) {
              wild.rank = cards[0].rank;
            } else if (this.cards[0].rank === values.length - 1 && this.game.wildStatus === 1) {
              wild.rank = values.length - 2;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }

          this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - 4));
          break;
        } else if (this.getNumCardsByRank(i) === 2) {
          this.cards = this.cards.concat(cards);

          for (var j = 0; j < this.wilds.length; j++) {
            var wild = this.wilds[j];

            if (wild.rank !== -1) {
              continue;
            }

            if (cards) {
              wild.rank = cards[0].rank;
            } else if (this.cards[0].rank === values.length - 1 && this.game.wildStatus === 1) {
              wild.rank = values.length - 2;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }
        }
      }

      if (this.cards.length >= 4) {
        if (this.game.noKickers) {
          this.cards.length = 4;
        }

        var type = this.cards[0].toString().slice(0, -1) + '\'s & ' + this.cards[2].toString().slice(0, -1) + '\'s';
        this.descr = this.name + ', ' + type;
      }

      return this.cards.length >= 4;
    }

  }

  class OnePair extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'Pair', game, canDisqualify);
    }

    solve() {
      this.resetWildCards();

      for (var i = 0; i < this.values.length; i++) {
        if (this.getNumCardsByRank(i) === 2) {
          this.cards = this.cards.concat(this.values[i] || []);

          for (var j = 0; j < this.wilds.length && this.cards.length < 2; j++) {
            var wild = this.wilds[j];

            if (this.cards) {
              wild.rank = this.cards[0].rank;
            } else {
              wild.rank = values.length - 1;
            }

            wild.wildValue = values[wild.rank];
            this.cards.push(wild);
          }

          this.cards = this.cards.concat(this.nextHighest().slice(0, this.game.cardsInHand - 2));
          break;
        }
      }

      if (this.cards.length >= 2) {
        if (this.game.noKickers) {
          this.cards.length = 2;
        }

        this.descr = this.name + ', ' + this.cards[0].toString().slice(0, -1) + '\'s';
      }

      return this.cards.length >= 2;
    }

  }

  class HighCard extends Hand {
    constructor(cards, game, canDisqualify) {
      super(cards, 'High Card', game, canDisqualify);
    }

    solve() {
      this.cards = this.cardPool.slice(0, this.game.cardsInHand);

      for (var i = 0; i < this.cards.length; i++) {
        var card = this.cards[i];

        if (this.cards[i].value === this.game.wildValue) {
          this.cards[i].wildValue = 'A';
          this.cards[i].rank = values.indexOf('A');
        }
      }

      if (this.game.noKickers) {
        this.cards.length = 1;
      }

      this.cards = this.cards.sort(Card.sort);
      this.descr = this.cards[0].toString().slice(0, -1) + ' High';
      return true;
    }

  }
  /*
   * Base class for handling Pai Gow Poker hands.
   * House Way is in accordance with the MGM Grand Casino, Las Vegas NV.
   * http://wizardofodds.com/games/pai-gow-poker/house-way/mgm/
   * EXCEPTION: With Four of a Kind and S/F, preserve the S/F, just like Three of a Kind.
   */


  class PaiGowPokerHelper {
    /*
     * Constructor class.
     * @param {Hand} hand Solved hand against Game 'paigowpokerfull'.
     */
    constructor(hand) {
      this.baseHand = null;
      this.hiHand = null;
      this.loHand = null;
      this.game = null;
      this.loGame = new Game('paigowpokerlo');
      this.hiGame = new Game('paigowpokerhi');

      if (Array.isArray(hand)) {
        this.baseHand = Hand.solve(hand, new Game('paigowpokerfull'));
      } else {
        this.baseHand = hand;
      }

      this.game = this.baseHand.game;
    }
    /*
     * Set a full hand into high and low hands, according to House Way.
     */


    splitHouseWay() {
      var hiCards, loCards;
      var rank = this.game.handValues.length - this.baseHand.rank;
      var handValue = this.game.handValues[rank];

      if (handValue === FiveOfAKind) {
        if (this.baseHand.cards[5].value === 'K' && this.baseHand.cards[6].value === 'K') {
          loCards = this.baseHand.cards.slice(5, 7);
          hiCards = this.baseHand.cards.slice(0, 5);
        } else {
          loCards = this.baseHand.cards.slice(0, 2);
          hiCards = this.baseHand.cards.slice(2, 7);
        }
      } else if (handValue === FourOfAKindPairPlus) {
        if (this.baseHand.cards[0].wildValue === 'A' && this.baseHand.cards[4].value !== 'K') {
          hiCards = this.baseHand.cards.slice(0, 2);
          loCards = this.baseHand.cards.slice(2, 4);
          hiCards = hiCards.concat(this.baseHand.cards.slice(4, 7));
        } else {
          hiCards = this.baseHand.cards.slice(0, 4);
          loCards = this.baseHand.cards.slice(4, 6);
          hiCards.push(this.baseHand.cards[6]);
        }
      } else if (handValue === StraightFlush || handValue === Flush || handValue === Straight) {
        var sfReturn;
        var altGame = new Game('paigowpokeralt');
        var altHand = Hand.solve(this.baseHand.cards, altGame);
        var altRank = altGame.handValues.length - altHand.rank;

        if (altGame.handValues[altRank] === FourOfAKind) {
          sfReturn = this.getSFData(altHand.cards);
          hiCards = sfReturn[0];
          loCards = sfReturn[1];
        } else if (altGame.handValues[altRank] === FullHouse) {
          hiCards = altHand.cards.slice(0, 3);
          loCards = altHand.cards.slice(3, 5);
          hiCards = hiCards.concat(altHand.cards.slice(5, 7));
        } else if (altGame.handValues[altRank] === ThreeOfAKind) {
          sfReturn = this.getSFData(altHand.cards);
          hiCards = sfReturn[0];
          loCards = sfReturn[1];
        } else if (altGame.handValues[altRank] === ThreePair) {
          loCards = altHand.cards.slice(0, 2);
          hiCards = altHand.cards.slice(2, 7);
        } else if (altGame.handValues[altRank] === TwoPair) {
          if (altHand.cards[0].rank < 6) {
            if (altHand.cards[4].wildValue === 'A') {
              hiCards = altHand.cards.slice(0, 4);
              loCards = altHand.cards.slice(4, 6);
              hiCards.push(altHand.cards[6]);
            } else {
              sfReturn = this.getSFData(altHand.cards);
              hiCards = sfReturn[0];
              loCards = sfReturn[1];
            }
          } else if (altHand.cards[0].rank < 10) {
            if (altHand.cards[4].wildValue === 'A') {
              hiCards = altHand.cards.slice(0, 4);
              loCards = altHand.cards.slice(4, 6);
              hiCards.push(altHand.cards[6]);
            } else {
              hiCards = altHand.cards.slice(0, 2);
              loCards = altHand.cards.slice(2, 4);
              hiCards = hiCards.concat(altHand.cards.slice(4, 7));
            }
          } else if (altHand.cards[0].wildValue !== 'A' && altHand.cards[2].rank < 6 && altHand.cards[4].wildValue === 'A') {
            hiCards = altHand.cards.slice(0, 4);
            loCards = altHand.cards.slice(4, 6);
            hiCards.push(altHand.cards[6]);
          } else {
            hiCards = altHand.cards.slice(0, 2);
            loCards = altHand.cards.slice(2, 4);
            hiCards = hiCards.concat(altHand.cards.slice(4, 7));
          }
        } else if (altGame.handValues[altRank] === OnePair) {
          if (altHand.cards[0].rank >= values.indexOf('T') && altHand.cards[0].rank <= values.indexOf('K') && altHand.cards[2].wildValue === 'A') {
            var possibleSF = altHand.cards.slice(0, 2);
            possibleSF = possibleSF.concat(altHand.cards.slice(3, 7));
            sfReturn = this.getSFData(possibleSF);

            if (sfReturn[0]) {
              hiCards = sfReturn[0];
              loCards = sfReturn[1];
              loCards.push(altHand.cards[2]);
            } else {
              hiCards = altHand.cards.slice(0, 2);
              loCards = altHand.cards.slice(2, 4);
              hiCards = hiCards.concat(altHand.cards.slice(4, 7));
            }
          } else {
            sfReturn = this.getSFData(altHand.cards.slice(2, 7));

            if (sfReturn[0]) {
              hiCards = sfReturn[0];
              loCards = altHand.cards.slice(0, 2);
            } else {
              sfReturn = this.getSFData(altHand.cards);
              hiCards = sfReturn[0];
              loCards = sfReturn[1];
            }
          }
        } else {
          sfReturn = this.getSFData(altHand.cards);
          hiCards = sfReturn[0];
          loCards = sfReturn[1];
        }
      } else if (handValue === FourOfAKind) {
        if (this.baseHand.cards[0].rank < 6) {
          hiCards = this.baseHand.cards.slice(0, 4);
          loCards = this.baseHand.cards.slice(4, 6);
          hiCards.push(this.baseHand.cards[6]);
        } else if (this.baseHand.cards[0].rank < 10 && this.baseHand.cards[4].wildValue === 'A') {
          hiCards = this.baseHand.cards.slice(0, 4);
          loCards = this.baseHand.cards.slice(4, 6);
          hiCards.push(this.baseHand.cards[6]);
        } else {
          hiCards = this.baseHand.cards.slice(0, 2);
          loCards = this.baseHand.cards.slice(2, 4);
          hiCards = hiCards.concat(this.baseHand.cards.slice(4, 7));
        }
      } else if (handValue === TwoThreeOfAKind) {
        loCards = this.baseHand.cards.slice(0, 2);
        hiCards = this.baseHand.cards.slice(3, 6);
        hiCards.push(this.baseHand.cards[2]);
        hiCards.push(this.baseHand.cards[6]);
      } else if (handValue === ThreeOfAKindTwoPair) {
        hiCards = this.baseHand.cards.slice(0, 3);
        loCards = this.baseHand.cards.slice(3, 5);
        hiCards = hiCards.concat(this.baseHand.cards.slice(5, 7));
      } else if (handValue === FullHouse) {
        if (this.baseHand.cards[3].wildValue === '2' && this.baseHand.cards[5].wildValue === 'A' && this.baseHand.cards[6].wildValue === 'K') {
          hiCards = this.baseHand.cards.slice(0, 5);
          loCards = this.baseHand.cards.slice(5, 7);
        } else {
          hiCards = this.baseHand.cards.slice(0, 3);
          loCards = this.baseHand.cards.slice(3, 5);
          hiCards = hiCards.concat(this.baseHand.cards.slice(5, 7));
        }
      } else if (handValue === ThreeOfAKind) {
        if (this.baseHand.cards[0].wildValue === 'A') {
          hiCards = this.baseHand.cards.slice(0, 2);
          loCards = this.baseHand.cards.slice(2, 4);
          hiCards = hiCards.concat(this.baseHand.cards.slice(4, 7));
        } else {
          hiCards = this.baseHand.cards.slice(0, 3);
          loCards = this.baseHand.cards.slice(3, 5);
          hiCards = hiCards.concat(this.baseHand.cards.slice(5, 7));
        }
      } else if (handValue === ThreePair) {
        loCards = this.baseHand.cards.slice(0, 2);
        hiCards = this.baseHand.cards.slice(2, 7);
      } else if (handValue === TwoPair) {
        if (this.baseHand.cards[0].rank < 6) {
          hiCards = this.baseHand.cards.slice(0, 4);
          loCards = this.baseHand.cards.slice(4, 6);
          hiCards.push(this.baseHand.cards[6]);
        } else if (this.baseHand.cards[0].rank < 10) {
          if (this.baseHand.cards[4].wildValue === 'A') {
            hiCards = this.baseHand.cards.slice(0, 4);
            loCards = this.baseHand.cards.slice(4, 6);
            hiCards.push(this.baseHand.cards[6]);
          } else {
            hiCards = this.baseHand.cards.slice(0, 2);
            loCards = this.baseHand.cards.slice(2, 4);
            hiCards = hiCards.concat(this.baseHand.cards.slice(4, 7));
          }
        } else if (this.baseHand.cards[0].wildValue !== 'A' && this.baseHand.cards[2].rank < 6 && this.baseHand.cards[4].wildValue === 'A') {
          hiCards = this.baseHand.cards.slice(0, 4);
          loCards = this.baseHand.cards.slice(4, 6);
          hiCards.push(this.baseHand.cards[6]);
        } else {
          hiCards = this.baseHand.cards.slice(0, 2);
          loCards = this.baseHand.cards.slice(2, 4);
          hiCards = hiCards.concat(this.baseHand.cards.slice(4, 7));
        }
      } else if (handValue === OnePair) {
        hiCards = this.baseHand.cards.slice(0, 2);
        loCards = this.baseHand.cards.slice(2, 4);
        hiCards = hiCards.concat(this.baseHand.cards.slice(4, 7));
      } else {
        hiCards = [this.baseHand.cards[0]];
        loCards = this.baseHand.cards.slice(1, 3);
        hiCards = hiCards.concat(this.baseHand.cards.slice(3, 7));
      }

      this.hiHand = Hand.solve(hiCards, this.hiGame);
      this.loHand = Hand.solve(loCards, this.loGame);
    }
    /*
     * Determine the best possible Straight and/or Flush.
     * @param  {Array} cards 5-7 Card objects to check.
     * @return {Array} [hiCards, loCards] High and Low components, if any.
     */


    getSFData(cards) {
      var hiCards, possibleLoCards, bestLoCards, bestHand;
      var handsToCheck = [new StraightFlush(cards, new Game('paigowpokersf7')), new StraightFlush(cards, new Game('paigowpokersf6')), new StraightFlush(cards, this.game), new Flush(cards, new Game('paigowpokersf7')), new Flush(cards, new Game('paigowpokersf6')), new Flush(cards, this.game), new Straight(cards, new Game('paigowpokersf7')), new Straight(cards, new Game('paigowpokersf6')), new Straight(cards, this.game)];

      for (var i = 0; i < handsToCheck.length; i++) {
        var hand = handsToCheck[i];

        if (hand.isPossible) {
          if (hand.sfLength === 7) {
            possibleLoCards = [hand.cards[0], hand.cards[1]];
          } else if (hand.sfLength === 6) {
            possibleLoCards = [hand.cards[0]];

            if (cards.length > 6) {
              possibleLoCards.push(hand.cards[6]);
            }
          } else if (cards.length > 5) {
            possibleLoCards = [hand.cards[5]];

            if (cards.length > 6) {
              possibleLoCards.push(hand.cards[6]);
            }
          }

          if (possibleLoCards) {
            possibleLoCards = possibleLoCards.sort(Card.sort);

            if (!bestLoCards || bestLoCards[0].rank < possibleLoCards[0].rank || bestLoCards.length > 1 && bestLoCards[0].rank === possibleLoCards[0].rank && bestLoCards[1].rank < possibleLoCards[1].rank) {
              bestLoCards = possibleLoCards;
              bestHand = hand;
            }
          } else if (!bestHand) {
            bestHand = hand;
            break;
          }
        }
      }

      if (bestHand) {
        if (bestHand.sfLength === 7) {
          hiCards = bestHand.cards.slice(2, 7);
        } else if (bestHand.sfLength === 6) {
          hiCards = bestHand.cards.slice(1, 6);
        } else {
          hiCards = bestHand.cards.slice(0, 5);
        }
      }

      return [hiCards, bestLoCards];
    }
    /*
     * Determine if the setting of the hands is valid. Hi must be higher than lo.
     * @return {Boolean}
     */


    qualifiesValid() {
      var compareHands = Hand.winners([this.hiHand, this.loHand]);
      return !(compareHands.length === 1 && compareHands[0] === this.loHand);
    }
    /**
     * Find which of two split hands is best, according to rules.
     * @param  {PaiGowPokerHelper} player Player hand to evaluate. Must be set.
     * @param  {PaiGowPokerHelper} banker Banker hand to evaluate. Must be set.
     * @param  {int}               winner Winning party, if any.
     *                                    Player = 1, Banker = -1, Push = 0
     */


    static winners(player, banker) {
      if (!player.qualifiesValid()) {
        if (banker.qualifiesValid()) {
          return -1;
        } // Probably shouldn't get here because the dealer must set house way.
        // However, we'll still have it as a sanity check, just in case.


        return 0;
      }

      if (!banker.qualifiesValid()) {
        return 1;
      }

      var hiWinner = Hand.winners([player.hiHand, banker.hiHand]);
      var loWinner = Hand.winners([player.loHand, banker.loHand]); // In Pai Gow Poker, Banker takes any equal valued hands.

      if (hiWinner.length === 1 && hiWinner[0] === player.hiHand) {
        if (loWinner.length === 1 && loWinner[0] === player.loHand) {
          // Player wins both; player wins
          return 1;
        } // Player wins hi, Banker wins lo; push


        return 0;
      }

      if (loWinner.length === 1 && loWinner[0] === player.loHand) {
        // Banker wins hi, Player wins lo; push
        return 0;
      } // Banker wins both; banker wins


      return -1;
    }
    /*
     * Set a full hand into high and low hands, according to manual input.
     * @param  {Array} hiHand       High hand to specify.
     *                              Can also be {Hand} with game of 'paigowpokerhi'.
     * @param  {Array} loHand       Low hand to specify.
     *                              Can also be {Hand} with game of 'paigowpokerlo'.
     * @return {PaiGowPokerHelper}  Object with split hands.
     */


    static setHands(hiHand, loHand) {
      var fullHand = [];

      if (Array.isArray(hiHand)) {
        hiHand = Hand.solve(hiHand, new Game('paigowpokerhi'));
      }

      fullHand = fullHand.concat(hiHand.cardPool);

      if (Array.isArray(loHand)) {
        loHand = Hand.solve(loHand, new Game('paigowpokerlo'));
      }

      fullHand = fullHand.concat(loHand.cardPool);
      var result = new PaiGowPokerHelper(fullHand);
      result.hiHand = hiHand;
      result.loHand = loHand;
      return result;
    }
    /**
     * Build and return PaiGowPokerHelper object with hands split House Way.
     * @param  {Array} fullHand    Array of cards (['Ad', '3c', 'Th', ...]).
     *                             Can also be {Hand} with game of 'paigowpokerfull'.
     * @return {PaiGowPokerHelper} Object with split hands.
     */


    static solve(fullHand) {
      var result = new PaiGowPokerHelper(fullHand = fullHand || ['']);
      result.splitHouseWay();
      return result;
    }

  }

  var gameRules = {
    'standard': {
      'cardsInHand': 5,
      'handValues': [StraightFlush, FourOfAKind, FullHouse, Flush, Straight, ThreeOfAKind, TwoPair, OnePair, HighCard],
      'wildValue': null,
      'wildStatus': 1,
      'wheelStatus': 0,
      'sfQualify': 5,
      'lowestQualified': null,
      "noKickers": false
    },
    'jacksbetter': {
      'cardsInHand': 5,
      'handValues': [StraightFlush, FourOfAKind, FullHouse, Flush, Straight, ThreeOfAKind, TwoPair, OnePair, HighCard],
      'wildValue': null,
      'wildStatus': 1,
      'wheelStatus': 0,
      'sfQualify': 5,
      'lowestQualified': ['Jc', 'Jd', '4h', '3s', '2c'],
      "noKickers": true
    },
    'joker': {
      'cardsInHand': 5,
      'handValues': [NaturalRoyalFlush, FiveOfAKind, WildRoyalFlush, StraightFlush, FourOfAKind, FullHouse, Flush, Straight, ThreeOfAKind, TwoPair, HighCard],
      'wildValue': 'O',
      'wildStatus': 1,
      'wheelStatus': 0,
      'sfQualify': 5,
      'lowestQualified': ['4c', '3d', '3h', '2s', '2c'],
      "noKickers": true
    },
    'deuceswild': {
      'cardsInHand': 5,
      'handValues': [NaturalRoyalFlush, FourWilds, WildRoyalFlush, FiveOfAKind, StraightFlush, FourOfAKind, FullHouse, Flush, Straight, ThreeOfAKind, HighCard],
      'wildValue': '2',
      'wildStatus': 1,
      'wheelStatus': 0,
      'sfQualify': 5,
      'lowestQualified': ['5c', '4d', '3h', '3s', '3c'],
      "noKickers": true
    },
    'threecard': {
      'cardsInHand': 3,
      'handValues': [StraightFlush, ThreeOfAKind, Straight, Flush, OnePair, HighCard],
      'wildValue': null,
      'wildStatus': 1,
      'wheelStatus': 0,
      'sfQualify': 3,
      'lowestQualified': ['Qh', '3s', '2c'],
      "noKickers": false
    },
    'fourcard': {
      'cardsInHand': 4,
      'handValues': [FourOfAKind, StraightFlush, ThreeOfAKind, Flush, Straight, TwoPair, OnePair, HighCard],
      'wildValue': null,
      'wildStatus': 1,
      'wheelStatus': 0,
      'sfQualify': 4,
      'lowestQualified': null,
      "noKickers": true
    },
    'fourcardbonus': {
      'cardsInHand': 4,
      'handValues': [FourOfAKind, StraightFlush, ThreeOfAKind, Flush, Straight, TwoPair, OnePair, HighCard],
      'wildValue': null,
      'wildStatus': 1,
      'wheelStatus': 0,
      'sfQualify': 4,
      'lowestQualified': ['Ac', 'Ad', '3h', '2s'],
      "noKickers": true
    },
    'paigowpokerfull': {
      'cardsInHand': 7,
      'handValues': [FiveOfAKind, FourOfAKindPairPlus, StraightFlush, Flush, Straight, FourOfAKind, TwoThreeOfAKind, ThreeOfAKindTwoPair, FullHouse, ThreeOfAKind, ThreePair, TwoPair, OnePair, HighCard],
      'wildValue': 'O',
      'wildStatus': 0,
      'wheelStatus': 1,
      'sfQualify': 5,
      'lowestQualified': null
    },
    'paigowpokeralt': {
      'cardsInHand': 7,
      'handValues': [FourOfAKind, FullHouse, ThreeOfAKind, ThreePair, TwoPair, OnePair, HighCard],
      'wildValue': 'O',
      'wildStatus': 0,
      'wheelStatus': 1,
      'sfQualify': 5,
      'lowestQualified': null
    },
    'paigowpokersf6': {
      'cardsInHand': 7,
      'handValues': [StraightFlush, Flush, Straight],
      'wildValue': 'O',
      'wildStatus': 0,
      'wheelStatus': 1,
      'sfQualify': 6,
      'lowestQualified': null
    },
    'paigowpokersf7': {
      'cardsInHand': 7,
      'handValues': [StraightFlush, Flush, Straight],
      'wildValue': 'O',
      'wildStatus': 0,
      'wheelStatus': 1,
      'sfQualify': 7,
      'lowestQualified': null
    },
    'paigowpokerhi': {
      'cardsInHand': 5,
      'handValues': [FiveOfAKind, StraightFlush, FourOfAKind, FullHouse, Flush, Straight, ThreeOfAKind, TwoPair, OnePair, HighCard],
      'wildValue': 'O',
      'wildStatus': 0,
      'wheelStatus': 1,
      'sfQualify': 5,
      'lowestQualified': null
    },
    'paigowpokerlo': {
      'cardsInHand': 2,
      'handValues': [OnePair, HighCard],
      'wildValue': 'O',
      'wildStatus': 0,
      'wheelStatus': 1,
      'sfQualify': 5,
      'lowestQualified': null
    }
  };
  /**
   * Base Game class that defines the rules of the game.
   */

  class Game {
    constructor(descr) {
      this.descr = descr;
      this.cardsInHand = 0;
      this.handValues = [];
      this.wildValue = null;
      this.wildStatus = 0;
      this.wheelStatus = 0;
      this.sfQualify = 5;
      this.lowestQualified = null;
      this.noKickers = null; // Set values based on the game rules.

      if (!this.descr || !gameRules[this.descr]) {
        this.descr = 'standard';
      }

      this.cardsInHand = gameRules[this.descr]['cardsInHand'];
      this.handValues = gameRules[this.descr]['handValues'];
      this.wildValue = gameRules[this.descr]['wildValue'];
      this.wildStatus = gameRules[this.descr]['wildStatus'];
      this.wheelStatus = gameRules[this.descr]['wheelStatus'];
      this.sfQualify = gameRules[this.descr]['sfQualify'];
      this.lowestQualified = gameRules[this.descr]['lowestQualified'];
      this.noKickers = gameRules[this.descr]['noKickers'];
    }

  }

  function exportToGlobal(global) {
    global.Card = Card;
    global.Hand = Hand;
    global.Game = Game;
    global.RoyalFlush = RoyalFlush;
    global.NaturalRoyalFlush = NaturalRoyalFlush;
    global.WildRoyalFlush = WildRoyalFlush;
    global.FiveOfAKind = FiveOfAKind;
    global.StraightFlush = StraightFlush;
    global.FourOfAKindPairPlus = FourOfAKindPairPlus;
    global.FourOfAKind = FourOfAKind;
    global.FourWilds = FourWilds;
    global.TwoThreeOfAKind = TwoThreeOfAKind;
    global.ThreeOfAKindTwoPair = ThreeOfAKindTwoPair;
    global.FullHouse = FullHouse;
    global.Flush = Flush;
    global.Straight = Straight;
    global.ThreeOfAKind = ThreeOfAKind;
    global.ThreePair = ThreePair;
    global.TwoPair = TwoPair;
    global.OnePair = OnePair;
    global.HighCard = HighCard;
    global.PaiGowPokerHelper = PaiGowPokerHelper;
  } // Export the classes for node.js use.


  if (true) {
    exportToGlobal(exports);
  } // Add the classes to the window for browser use.


  if (typeof window !== 'undefined') {
    exportToGlobal(window);
  }
})();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _javascript_js_deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../javascript/js/deck */ "./javascript/js/deck.js");
/* harmony import */ var _javascript_js_preflop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../javascript/js/preflop */ "./javascript/js/preflop.js");
/* harmony import */ var _javascript_js_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../javascript/js/game */ "./javascript/js/game.js");
/* harmony import */ var _javascript_js_betting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../javascript/js/betting */ "./javascript/js/betting.js");
/* harmony import */ var _javascript_js_fold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../javascript/js/fold */ "./javascript/js/fold.js");
/* harmony import */ var _javascript_js_nextcard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../javascript/js/nextcard */ "./javascript/js/nextcard.js");
// import scoreboard from '../javascript/js-old/scoreboard';
// import table from '../javascript/js-old/table'
// import player_chips from '../javascript/js-old/player_chips';
// import shuffle from '../javascript/js/shuffle'





 // const shuffle = require('shuffle');

document.addEventListener("DOMContentLoaded", function () {
  // table();
  // shuffle()
  var deal = new _javascript_js_preflop__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var game = new _javascript_js_game__WEBPACK_IMPORTED_MODULE_2__["default"](); // const bet = new Betting();

  game.createGame();
  var playerShift = 0;
  window.betCount = 0;
  window.riverTurn = 0;
  window.lastBet = 0;

  document.getElementById('hands').onclick = function dealTheCards() {
    var players = [window.player3, window.player1, window.player2];
    d3.selectAll(".player3cards").remove();
    d3.selectAll(".player1cards").remove();
    d3.selectAll(".player2cards").remove();
    d3.selectAll(".flopcards").remove();
    d3.selectAll(".winnerName").remove();
    var first;

    for (var i = 0; i < playerShift; i++) {
      first = players[0];
      players.shift(1);
      players.push(first);
      debugger;
    }

    window.players = players;
    playerShift += 1;

    for (var _i = 0; _i < window.players.length; _i++) {
      window.players[_i].cardPool = [];
      window.players[_i].holecards = [];
      window.players[_i].currentBet = 0;
      window.players[_i].deadmoney = 0;
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
    deal.dealCards(); // bet.placeBet();
  };

  document.getElementById('fold').onclick = function foldYourCards() {
    var fold = new _javascript_js_fold__WEBPACK_IMPORTED_MODULE_4__["default"]();
    fold.removePlayer();
    window.count += 1; // window.flopCount += 1;

    game.fold(); // game.playerTurn();
    // game.resetGame();
  };

  document.getElementById('betbutton').onclick = function placeYourBet() {
    var bet = new _javascript_js_betting__WEBPACK_IMPORTED_MODULE_3__["default"]();
    deal.startScoreboard();
    game.call();
    window.count += 1;
  };
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9iZXR0aW5nLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvanMvY2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9kZWNrLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvanMvZm9sZC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9uZXh0Y2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2pzL3ByZWZsb3AuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9qcy9yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Bva2Vyc29sdmVyL3Bva2Vyc29sdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWNrIiwicmVxdWlyZSIsInByZWZsb3AiLCJuZXh0Y2FyZCIsIkJldHRpbmciLCJjb3VudCIsIndpbmRvdyIsImJldFJvdW5kIiwicGxheWVycyIsInBsYXllcjEiLCJjaGlwcyIsInBvdCIsImZpcnN0Iiwic2hpZnQiLCJwdXNoIiwicGxheWVyMiIsInBsYXllcjMiLCJiZXRDb3VudCIsInR1cm5Db3VudCIsImxhc3RCZXQiLCJsZW5ndGgiLCJDaGVjayIsInBsYXllciIsImN1cnJlbnRCZXQiLCJwbGF5ZXJUdXJuIiwiRGVjayIsImNhcmRzIiwic3VpdHMiLCJ2YWx1ZXMiLCJpIiwiaiIsInRlbXAiLCJlbGUiLCJjb25jYXQiLCJzaHVmZmxlQ2FyZHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjcmVhdGVDYXJkcyIsIkZvbGQiLCJyZW1vdmVDYXJkcyIsImQzIiwic2VsZWN0QWxsIiwicmVtb3ZlIiwiYmV0IiwibmV4dENhcmQiLCJHYW1lIiwiUHJlZmxvcCIsIk5leHRDYXJkIiwic29sdmVIYW5kIiwiU29sdmVIYW5kIiwic3RhcnRTY29yZWJvYXJkIiwicHJlZmxvcEJldCIsInBvc3RmbG9wQmV0IiwicG9zdHR1cm5CZXQiLCJwb3N0cml2ZXJCZXQiLCJmbG9wQ291bnQiLCJwb3N0RmxvcCIsInBvc3RUdXJuIiwicG9zdFJpdmVyIiwic29sdmVIYW5kcyIsInBsYXllckxpc3QiLCJkZWFkbW9uZXkiLCJjYXJkUG9vbCIsInNob3dDYXJkcyIsImNoZWNrIiwiYyIsInNsaWNlIiwibWlkZGxlQ2FyZHMiLCJudW1QbGF5ZXJzIiwic2VsZWN0IiwiZGF0YSIsImVudGVyIiwiYXBwZW5kIiwidGV4dCIsImQiLCJhdHRyIiwiQ2FyZHMiLCJiZXR0aW5nIiwibmFtZSIsImhvbGVjYXJkcyIsInN0YXR1cyIsInRoZURhdGEiLCJoYW5kQ291bnQiLCJyaXZlckNvdW50IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJwbGF5ZXIwIiwic2V0T3JkZXIiLCJwbGFjZUJsaW5kcyIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJIYW5kIiwicGxheWVySGFuZHMiLCJyZXoiLCJzb2x2ZSIsIndpbm5lciIsIndpbm5lcnMiLCJzZXRDYXJkUG9vbCIsInJldHVybldpbm5lciIsIndpbm5pbmdQbGF5ZXJOYW1lIiwiZGVzY3IiLCJKU09OIiwic3RyaW5naWZ5Iiwic29ydCIsIndpbm5pbmdIYW5kIiwiY29uc29sZSIsImxvZyIsInZhbCIsInN1aXQiLCJjYXJkIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVhbCIsImdhbWUiLCJjcmVhdGVHYW1lIiwicGxheWVyU2hpZnQiLCJyaXZlclR1cm4iLCJvbmNsaWNrIiwiZGVhbFRoZUNhcmRzIiwiZGVhbENhcmRzIiwiZm9sZFlvdXJDYXJk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QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEIsZ0JBQWdCLE1BQU07QUFDdEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIseUJBQXlCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEMsZ0JBQWdCLGtCQUFrQjtBQUNsQyxnQkFBZ0IsSUFBSTtBQUNwQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0U7O0FBRWxFO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxTQUFTLG1DQUFtQzs7O0FBRzVDO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxPQUFPLHFCQUFxQjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEIsaURBQWlELEtBQUs7QUFDdEQsZ0JBQWdCLE1BQU07QUFDdEIsaURBQWlELEtBQUs7QUFDdEQsZ0JBQWdCLGtCQUFrQjtBQUNsQzs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QixnREFBZ0QsS0FBSztBQUNyRCxnQkFBZ0Isa0JBQWtCO0FBQ2xDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgZGVjayA9IHJlcXVpcmUoJy4vZGVjaycpO1xuY29uc3QgcHJlZmxvcCA9IHJlcXVpcmUoJy4vcHJlZmxvcCcpO1xuY29uc3QgbmV4dGNhcmQgPSByZXF1aXJlKCcuL25leHRjYXJkJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmV0dGluZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgIH1cbiAgICBcbiAgICBwcmVmbG9wQmV0KCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKHdpbmRvdy5iZXRSb3VuZCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wbGF5ZXJzWzBdID09PSB3aW5kb3cucGxheWVyMSAmJiB3aW5kb3cuY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGxheWVyMS5jaGlwcyAtPSAxMDtcbiAgICAgICAgICAgICAgICB3aW5kb3cucG90LmNoaXBzICs9IDEwO1xuICAgICAgICAgICAgICAgIGxldCBmaXJzdCA9IHdpbmRvdy5wbGF5ZXJzWzBdO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcnMucHVzaChmaXJzdCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb3VudCArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cucGxheWVyc1swXSA9PT0gd2luZG93LnBsYXllcjIgJiYgd2luZG93LmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcjIuY2hpcHMgLT0gMTA7XG4gICAgICAgICAgICAgICAgd2luZG93LnBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3QgPSB3aW5kb3cucGxheWVyc1swXTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGxheWVycy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzLnB1c2goZmlyc3QpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBsYXllcnNbMF0gPT09IHdpbmRvdy5wbGF5ZXIzICYmIHdpbmRvdy5jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXIzLmNoaXBzIC09IDEwO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wb3QuY2hpcHMgKz0gMTA7XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0ID0gd2luZG93LnBsYXllcnNbMF07XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGxheWVycy5wdXNoKGZpcnN0KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2luZG93LmNvdW50ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5wbGF5ZXJzWzBdID09PSB3aW5kb3cucGxheWVyMSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucGxheWVyMS5jaGlwcyAtPSA1OyAgICAgIFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucG90LmNoaXBzICs9IDU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBsYXllcnNbMF0gPT09IHdpbmRvdy5wbGF5ZXIyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXIyLmNoaXBzIC09IDU7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wb3QuY2hpcHMgKz0gNVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBsYXllcnNbMF0gPT09IHdpbmRvdy5wbGF5ZXIzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXIzLmNoaXBzIC09IDU7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wb3QuY2hpcHMgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcG9zdGZsb3BCZXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuYmV0Um91bmQgPT09IDEpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDE7XG4gICAgICAgICAgICBpZiAod2luZG93LnBsYXllcnNbMF0gPT09IHdpbmRvdy5wbGF5ZXIxKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcjEuY2hpcHMgLT0gMTA7XG4gICAgICAgICAgICAgICAgd2luZG93LnBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBsYXllcnNbMF0gPT09IHdpbmRvdy5wbGF5ZXIyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcjIuY2hpcHMgLT0gMTA7XG4gICAgICAgICAgICAgICAgd2luZG93LnBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBsYXllcnNbMF0gPT09IHdpbmRvdy5wbGF5ZXIzKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcjMuY2hpcHMgLT0gMTA7XG4gICAgICAgICAgICAgICAgd2luZG93LnBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5iZXRDb3VudCArPSAxO1xuICAgICAgICAgICAgbGV0IGZpcnN0ID0gd2luZG93LnBsYXllcnNbMF07XG4gICAgICAgICAgICB3aW5kb3cucGxheWVycy5zaGlmdCgpO1xuICAgICAgICAgICAgd2luZG93LnBsYXllcnMucHVzaChmaXJzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0dHVybkJldCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5iZXRSb3VuZCA9PT0gMikge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wbGF5ZXJzWzBdID09PSB3aW5kb3cucGxheWVyMSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXIxLmNoaXBzIC09IDEwO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wb3QuY2hpcHMgKz0gMTA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5wbGF5ZXJzWzBdID09PSB3aW5kb3cucGxheWVyMikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXIyLmNoaXBzIC09IDEwO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wb3QuY2hpcHMgKz0gMTA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5wbGF5ZXJzWzBdID09PSB3aW5kb3cucGxheWVyMykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXIzLmNoaXBzIC09IDEwO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wb3QuY2hpcHMgKz0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYmV0Q291bnQgKz0gMTtcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHdpbmRvdy5wbGF5ZXJzWzBdO1xuICAgICAgICAgICAgd2luZG93LnBsYXllcnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzLnB1c2goZmlyc3QpO1xuICAgICAgICAgICAgd2luZG93LnR1cm5Db3VudCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdHJpdmVyQmV0KCkge1xuICAgICAgICBpZiAod2luZG93LmJldFJvdW5kID09PSAzICYmIHdpbmRvdy5sYXN0QmV0IDwgd2luZG93LnBsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnBsYXllcnNbMF0gPT09IHdpbmRvdy5wbGF5ZXIxKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcjEuY2hpcHMgLT0gMTA7XG4gICAgICAgICAgICAgICAgd2luZG93LnBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBsYXllcnNbMF0gPT09IHdpbmRvdy5wbGF5ZXIyKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcjIuY2hpcHMgLT0gMTA7XG4gICAgICAgICAgICAgICAgd2luZG93LnBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBsYXllcnNbMF0gPT09IHdpbmRvdy5wbGF5ZXIzKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcjMuY2hpcHMgLT0gMTA7XG4gICAgICAgICAgICAgICAgd2luZG93LnBvdC5jaGlwcyArPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHdpbmRvdy5wbGF5ZXJzWzBdO1xuICAgICAgICAgICAgd2luZG93LnBsYXllcnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzLnB1c2goZmlyc3QpO1xuICAgICAgICAgICAgd2luZG93Lmxhc3RCZXQgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuXG59XG4gICAgICAgIC8vIHBsYXllcigpIHtcbiAgICAgICAgLy8gICAgIHdpbmRvdy5wbGF5ZXIxLmNoaXBzIC09IDEwO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cod2luZG93LnBsYXllcjEpXG4gICAgICAgIC8vIH1cblxuLy8gY2xhc3MgUGVyc29uIHtcblxuLy8gICAgIGdldCBuYW1lKCkge1xuLy8gICAgICAgICByZXR1cm4gdGhpcy5fbmFtZSArICchISEnXG4vLyAgICAgfVxuXG4vLyAgICAgc2V0IG5hbWUobmV3VmFsdWUpIHtcbi8vICAgICAgICAgdGhpcy5fbmFtZSA9IG5ld1ZhbHVlXG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3RydWN0b3IobmFtZSkge1xuLy8gICAgICAgICB0aGlzLl9uYW1lID0gbmFtZVxuLy8gICAgIH1cbi8vIH1cblxuLy8gY29uc3QgbWUgPSBuZXcgUGVyc29uKCdaYWNoJylcbi8vIGNvbnNvbGUubG9nKG1lLm5hbWUpICAgICAgICAgICAgLy8gWmFjaCEhIVxuXG4vLyBtZS5uYW1lID0gJ0phY29iJ1xuLy8gY29uc29sZS5sb2cobWUubmFtZSkgICAgICAgICAgICAvLyBKYWNvYiEhIVxuXG4vLyAvLyBPZiBjb3Vyc2UsIF9uYW1lIGlzIG5vdCBhY3R1YWxseSBwcml2YXRlLlxuLy8gY29uc29sZS5sb2cobWUuX25hbWUpICAgICAgICAgICAvLyBKYWNvYiIsImNvbnN0IGRlY2sgPSByZXF1aXJlKCcuL2RlY2snKTtcbmNvbnN0IHByZWZsb3AgPSByZXF1aXJlKCcuL3ByZWZsb3AnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2sge1xuICAgIGNoZWNrVHVybigpIHtcbiAgICAgICAgbGV0IHBsYXllcjtcbiAgICAgICAgaWYgKHdpbmRvdy5wbGF5ZXJzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wbGF5ZXJzWzBdLmN1cnJlbnRCZXQgPj0gd2luZG93LnBsYXllcnNbMV0uY3VycmVudEJldCkge1xuICAgICAgICAgICAgICAgIHBsYXllciA9IHdpbmRvdy5wbGF5ZXJzWzBdO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJUdXJuICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBsYXllcnMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnBsYXllcnNbMF0uY3VycmVudEJldCA+PSB3aW5kb3cucGxheWVyc1sxXS5jdXJyZW50QmV0ICYmIHdpbmRvdy5wbGF5ZXJzWzBdLmN1cnJlbnRCZXQgPj0gd2luZG93LnBsYXllcnNbMl0uY3VycmVudEJldCkge1xuICAgICAgICAgICAgICAgIHBsYXllciA9IHdpbmRvdy5wbGF5ZXJzWzBdO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcnMucHVzaChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJUdXJuICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjayB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHRoaXMuc3VpdHMgPSBbJ3MnLCAnYycsICdoJywgJ2QnXTtcbiAgICAgICAgLy8gdGhpcy52YWx1ZXMgPSBbJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICdUJywgJ0onLCAnUScsICdLJywgJ0EnXTtcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhcmRzKCkge1xuICAgICAgICBsZXQgc3VpdHMgPSBbJ3MnLCAnYycsICdoJywgJ2QnXTtcbiAgICAgICAgbGV0IHZhbHVlcyA9IFsnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJ1QnLCAnSicsICdRJywgJ0snLCAnQSddO1xuICAgICAgICB2YXIgaSwgaiwgdGVtcDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3VpdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlID0gdmFsdWVzW2ldLmNvbmNhdChzdWl0c1tqXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaHVmZmxlQ2FyZHModGhpcy5jYXJkcylcbiAgICAgICAgLy8gZm9yIChpID0gdGhpcy5jYXJkcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIC8vICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgIC8vICAgICB0ZW1wID0gdGhpcy5jYXJkc1tpXTtcbiAgICAgICAgLy8gICAgIHRoaXMuY2FyZHNbaV0gPSB0aGlzLmNhcmRzW2pdO1xuICAgICAgICAvLyAgICAgdGhpcy5jYXJkc1tqXSA9IHRlbXA7XG4gICAgICAgIC8vIH07XG4gICAgfVxuXG4gICAgc2h1ZmZsZUNhcmRzKCkge1xuICAgICAgICB2YXIgaSwgaiwgdGVtcDtcbiAgICAgICAgZm9yIChpID0gdGhpcy5jYXJkcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICB0ZW1wID0gdGhpcy5jYXJkc1tpXTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHNbaV0gPSB0aGlzLmNhcmRzW2pdO1xuICAgICAgICAgICAgdGhpcy5jYXJkc1tqXSA9IHRlbXA7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRzO1xuICAgICAgICBcbiAgICB9XG4gICAgcmV0YWluQ2FyZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRzO1xuICAgIH1cblxuICAgIHJlc2V0Q2FyZHMoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FyZHModGhpcy5jYXJkcyk7XG4gICAgfVxuXG5cbn1cbi8vIGV4cG9ydCBkZWZhdWx0IFNodWZmbGU7XG5cbiIsImltcG9ydCBwcmVmbG9wIGZyb20gJy4vcHJlZmxvcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGQge1xuICAgIHJlbW92ZVBsYXllcigpIHtcbiAgICAgICAgd2luZG93LnBsYXllcnMuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDYXJkcygpO1xuICAgIH1cblxuICAgIHJlbW92ZUNhcmRzKCkge1xuICAgICAgICBpZiAod2luZG93LnBsYXllcnNbMF0gPT09IHdpbmRvdy5wbGF5ZXIxKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVyM2NhcmRzXCIpLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5wbGF5ZXJzWzBdID09PSB3aW5kb3cucGxheWVyMikge1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcjFjYXJkc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cucGxheWVyc1swXSA9PT0gd2luZG93LnBsYXllcjMpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIzY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IERlY2sgZnJvbSAnLi9kZWNrJztcbmltcG9ydCBQcmVmbG9wIGZyb20gJy4vcHJlZmxvcCc7XG5pbXBvcnQgTmV4dENhcmQgZnJvbSAnLi9uZXh0Y2FyZCc7XG5pbXBvcnQgQmV0dGluZyBmcm9tICcuL2JldHRpbmcnO1xuaW1wb3J0IFNvbHZlSGFuZCBmcm9tICcuL3Jlc3VsdCc7XG5cbmNvbnN0IGRlY2sgPSByZXF1aXJlKCcuL2RlY2snKTtcbmNvbnN0IGNhcmRzID0gcmVxdWlyZSgnLi9wcmVmbG9wJyk7XG5jb25zdCBiZXQgPSByZXF1aXJlKCcuL2JldHRpbmcnKVxuY29uc3QgbmV4dENhcmQgPSByZXF1aXJlKCcuL25leHRjYXJkJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVjayA9IG5ldyBEZWNrKCk7XG4gICAgICAgIHRoaXMuY2FyZHMgPSBuZXcgUHJlZmxvcCgpO1xuICAgICAgICB0aGlzLm5leHRDYXJkID0gbmV3IE5leHRDYXJkKCk7XG4gICAgICAgIHRoaXMuYmV0ID0gbmV3IEJldHRpbmcoKTtcbiAgICAgICAgdGhpcy5zb2x2ZUhhbmQgPSBuZXcgU29sdmVIYW5kKCk7XG4gICAgICAgIHdpbmRvdy5jb3VudCA9IDA7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNyZWF0ZUdhbWUoKSB7XG4gICAgICAgIHRoaXMuY2FyZHMuc3RhcnRTY29yZWJvYXJkKCk7XG4gICAgICAgIC8vIHRoaXMuY2FyZHMucGxhY2VCZXQoKTtcbiAgICAgICAgLy8gdGhpcy5jYXJkcy5kZWFsQ2FyZHMoKTtcbiAgICAgICAgLy8gdGhpcy5jYXJkcy5zZXRCbGluZHMoKTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gdGhpcy5kZWNrLnJldGFpbkNhcmRzKCk7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgfVxuICAgIFxuICAgIGNhbGwoKSB7XG4gICAgICAgIHRoaXMuYmV0LnByZWZsb3BCZXQoKTtcbiAgICAgICAgdGhpcy5iZXQucG9zdGZsb3BCZXQoKTtcbiAgICAgICAgdGhpcy5iZXQucG9zdHR1cm5CZXQoKTtcbiAgICAgICAgdGhpcy5iZXQucG9zdHJpdmVyQmV0KCk7XG4gICAgICAgIHRoaXMuY2FyZHMuc3RhcnRTY29yZWJvYXJkKCk7XG4gICAgICAgIC8vIGxldCBmaXJzdCA9IHdpbmRvdy5wbGF5ZXJzWzBdO1xuICAgICAgICAvLyB3aW5kb3cucGxheWVycy5zaGlmdCgpO1xuICAgICAgICAvLyB3aW5kb3cucGxheWVycy5wdXNoKGZpcnN0KTtcbiAgICAgICAgd2luZG93LmZsb3BDb3VudCArPSAxO1xuICAgICAgICB0aGlzLm5leHRDYXJkLnBvc3RGbG9wKCk7XG4gICAgICAgIHRoaXMubmV4dENhcmQucG9zdFR1cm4oKTtcbiAgICAgICAgdGhpcy5uZXh0Q2FyZC5wb3N0Uml2ZXIoKTtcbiAgICAgICAgdGhpcy5zb2x2ZUhhbmQuc29sdmVIYW5kcygpO1xuICAgIH1cblxuICAgIGZvbGQoKSB7XG4gICAgICAgIHdpbmRvdy5mbG9wQ291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5uZXh0Q2FyZC5wb3N0RmxvcCgpO1xuICAgICAgICB0aGlzLm5leHRDYXJkLnBvc3RUdXJuKCk7XG4gICAgICAgIHRoaXMubmV4dENhcmQucG9zdFJpdmVyKCk7XG4gICAgICAgIHRoaXMuc29sdmVIYW5kLnNvbHZlSGFuZHMoKTtcbiAgICB9XG5cbiAgICByZXNldEdhbWUoKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB3aW5kb3cucGxheWVyTGlzdFswXTtcbiAgICAgICAgd2luZG93LnBsYXllckxpc3Quc2hpZnQoKTtcbiAgICAgICAgd2luZG93LnBsYXllckxpc3QucHVzaChwbGF5ZXIpO1xuICAgICAgICB3aW5kb3cucGxheWVycyA9IHdpbmRvdy5wbGF5ZXJMaXN0O1xuICAgICAgICB3aW5kb3cuZGVjayA9IG5ldyBEZWNrKCk7XG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIzY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIxY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIyY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgIC8vIHdpbmRvdy5wb3QuY2hpcHMgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzW2ldLmRlYWRtb25leSA9IDA7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVyc1tpXS5jdXJyZW50QmV0ID0gMDtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzW2ldLmNhcmRQb29sID0gW107XG4gICAgICAgICAgICB3aW5kb3cucGxheWVyc1tpXS5zaG93Q2FyZHMgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImNvbnN0IGRlY2sgPSByZXF1aXJlKCcuL2RlY2snKTtcbmNvbnN0IHByZWZsb3AgPSByZXF1aXJlKCcuL3ByZWZsb3AnKTtcbmNvbnN0IGNoZWNrID0gcmVxdWlyZSgnLi9jaGVjaycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0Q2FyZCB7XG4gICAgcG9zdEZsb3AoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuZmxvcENvdW50ID09PSAyKSB7XG4gICAgICAgICAgICAvLyB3aW5kb3cucGxheWVyVHVybiA9IDA7XG4gICAgICAgICAgICBsZXQgYyA9IHdpbmRvdy5kZWNrLmNhcmRzLnNsaWNlKDAsMyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdpbmRvdy5taWRkbGVDYXJkcyA9IHdpbmRvdy5taWRkbGVDYXJkcy5jb25jYXQoYyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGxheWVyc1tpXS5jYXJkUG9vbC5wdXNoKHdpbmRvdy5kZWNrLmNhcmRzWzBdKVxuICAgICAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzW2ldLmNhcmRQb29sLnB1c2god2luZG93LmRlY2suY2FyZHNbMV0pXG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcnNbaV0uY2FyZFBvb2wucHVzaCh3aW5kb3cuZGVjay5jYXJkc1syXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5kZWNrLmNhcmRzID0gd2luZG93LmRlY2suY2FyZHMuc2xpY2UoMyk7XG4gICAgICAgICAgICB3aW5kb3cuYmV0Um91bmQgKz0gMTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LmZsb3BDb3VudCArPSAxO1xuICAgICAgICAgICAgd2luZG93Lm51bVBsYXllcnMgPSB3aW5kb3cucGxheWVycy5sZW5ndGg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNmbG9wY2FyZC1hbmNob3JcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHdpbmRvdy5taWRkbGVDYXJkcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZmxvcGNhcmRzXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0VHVybigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5iZXRDb3VudCA9PT0gd2luZG93LnBsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgYyA9IHdpbmRvdy5kZWNrLmNhcmRzWzBdXG4gICAgICAgICAgICB3aW5kb3cucGxheWVyVHVybiA9IDI7XG4gICAgICAgICAgICB3aW5kb3cubWlkZGxlQ2FyZHNbM10gPSBjO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcnNbaV0uY2FyZFBvb2wucHVzaChjKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmRlY2suY2FyZHMgPSB3aW5kb3cuZGVjay5jYXJkcy5zbGljZSgxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2Zsb3BjYXJkLWFuY2hvclwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEod2luZG93Lm1pZGRsZUNhcmRzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInBcIilcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJmbG9wY2FyZHNcIilcbiAgICAgICAgICAgICAgICB3aW5kb3cuYmV0Um91bmQgKz0gMTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubnVtUGxheWVycyA9IHdpbmRvdy5wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYmV0Q291bnQgKz0gMTtcblxuICAgICAgICAgICAgICAgIC8vIGxldCBmaXJzdCA9IHdpbmRvdy5wbGF5ZXJzWzBdO1xuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5wbGF5ZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93LnBsYXllcnMucHVzaChmaXJzdCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RSaXZlcigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy50dXJuQ291bnQgPT09IHdpbmRvdy5wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGMgPSB3aW5kb3cuZGVjay5jYXJkc1swXTtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJUdXJuID0gMztcbiAgICAgICAgICAgIHdpbmRvdy5taWRkbGVDYXJkc1s0XSA9IGM7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGxheWVyc1tpXS5jYXJkUG9vbC5wdXNoKGMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuZGVjay5jYXJkcyA9IHdpbmRvdy5kZWNrLmNhcmRzLnNsaWNlKDEpO1xuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI2Zsb3BjYXJkLWFuY2hvclwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEod2luZG93Lm1pZGRsZUNhcmRzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInBcIilcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJmbG9wY2FyZHNcIilcbiAgICAgICAgICAgICAgICB3aW5kb3cuYmV0Um91bmQgKz0gMTtcbiAgICAgICAgICAgICAgICB3aW5kb3cudHVybkNvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cblxufSIsImltcG9ydCBEZWNrIGZyb20gJy4vZGVjayc7XG5pbXBvcnQgYmV0dGluZyBmcm9tICcuL2JldHRpbmcnO1xuaW1wb3J0IEJldHRpbmcgZnJvbSAnLi9iZXR0aW5nJztcblxuLy8gY29uc3QgZGVjayA9IHJlcXVpcmUoJy4vZGVjaycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmV0dGluZyA9IG5ldyBCZXR0aW5nKCk7XG4gICAgICAgIHdpbmRvdy5wbGF5ZXIxID0ge1xuICAgICAgICAgICAgbmFtZTogJ01pa2UgTWNEZXJtb3R0JyxcbiAgICAgICAgICAgIGNoaXBzOiAxMDAwLFxuICAgICAgICAgICAgZGVhZG1vbmV5OiAwLFxuICAgICAgICAgICAgY3VycmVudEJldDogMCxcbiAgICAgICAgICAgIGNhcmRQb29sOiBbXSxcbiAgICAgICAgICAgIGhvbGVjYXJkczogW10sXG4gICAgICAgICAgICBzaG93Q2FyZHM6IHt9LFxuICAgICAgICAgICAgc3RhdHVzOiB0cnVlXG4gICAgICAgIH0gICBcbiAgICAgICAgd2luZG93LnBsYXllcjIgPSB7XG4gICAgICAgICAgICBuYW1lOiAnVG9tIER3YW4nLFxuICAgICAgICAgICAgY2hpcHM6IDEwMDAsXG4gICAgICAgICAgICBkZWFkbW9uZXk6IDAsXG4gICAgICAgICAgICBjdXJyZW50QmV0OiAwLFxuICAgICAgICAgICAgY2FyZFBvb2w6IFtdLFxuICAgICAgICAgICAgaG9sZWNhcmRzOiBbXSxcbiAgICAgICAgICAgIHNob3dDYXJkczoge30sXG4gICAgICAgICAgICBzdGF0dXM6IHRydWVcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cucGxheWVyMyA9IHtcbiAgICAgICAgICAgIG5hbWU6ICdQaGlsIEl2ZXknLFxuICAgICAgICAgICAgY2hpcHM6IDEwMDAsXG4gICAgICAgICAgICBkZWFkbW9uZXk6IDAsXG4gICAgICAgICAgICBjdXJyZW50QmV0OiAwLFxuICAgICAgICAgICAgY2FyZFBvb2w6IFtdLFxuICAgICAgICAgICAgaG9sZWNhcmRzOiBbXSxcbiAgICAgICAgICAgIHNob3dDYXJkczoge30sXG4gICAgICAgICAgICBzdGF0dXM6IHRydWVcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubWlkZGxlQ2FyZHMgPSBbXTtcbiAgICAgICAgd2luZG93LnBvdCA9IHsgbmFtZTogJ1BvdCcsIGNoaXBzOiAwIH1cbiAgICAgICAgd2luZG93LnBsYXllcnMgPSBbd2luZG93LnBsYXllcjMsIHdpbmRvdy5wbGF5ZXIxLCB3aW5kb3cucGxheWVyMl07XG4gICAgICAgIHdpbmRvdy50aGVEYXRhID0gW3dpbmRvdy5wbGF5ZXIxLCB3aW5kb3cucGxheWVyMiwgd2luZG93LnBsYXllcjMsIHdpbmRvdy5wb3RdO1xuICAgICAgICB3aW5kb3cuZGVjayA9IG5ldyBEZWNrKCk7XG4gICAgICAgIHdpbmRvdy5wbGF5ZXJMaXN0ID0gW3dpbmRvdy5wbGF5ZXIzLCB3aW5kb3cucGxheWVyMSwgd2luZG93LnBsYXllcjJdO1xuICAgICAgICB3aW5kb3cuaGFuZENvdW50ID0gMDtcbiAgICAgICAgd2luZG93LmZsb3BDb3VudCA9IDA7XG4gICAgICAgIHdpbmRvdy50dXJuQ291bnQgPSAwO1xuICAgICAgICB3aW5kb3cucml2ZXJDb3VudCA9IDA7XG4gICAgICAgIC8vIHdpbmRvdy5iZXRSb3VuZCA9IDA7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIC8vIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3BsYXllcjEnLCB0aGlzLnBsYXllcjEpXG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldE9yZGVyKCkge1xuICAgICAgICBsZXQgcGxheWVyMCA9IHdpbmRvdy5wbGF5ZXJzWzBdO1xuICAgICAgICB3aW5kb3cucGxheWVycy5zaGlmdCgpO1xuICAgICAgICB3aW5kb3cucGxheWVycy5wdXNoKHBsYXllcjApO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkZWFsQ2FyZHMoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaGFuZENvdW50ID09PSAwKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0T3JkZXIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wbGFjZUJsaW5kcygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cuZGVjay5jcmVhdGVDYXJkcygpO1xuICAgICAgICAgICAgLy8gbGV0IGNhcmRzID0gdGhpcy5kZWNrLmNhcmRzO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGxheWVyc1swXS5ob2xlY2FyZHMucHVzaCh3aW5kb3cuZGVjay5jYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcnNbMF0uY2FyZFBvb2wucHVzaCh3aW5kb3cuZGVjay5jYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmRlY2suY2FyZHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGxheWVyc1sxXS5ob2xlY2FyZHMucHVzaCh3aW5kb3cuZGVjay5jYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcnNbMV0uY2FyZFBvb2wucHVzaCh3aW5kb3cuZGVjay5jYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmRlY2suY2FyZHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucGxheWVyc1syXS5ob2xlY2FyZHMucHVzaCh3aW5kb3cuZGVjay5jYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcnNbMl0uY2FyZFBvb2wucHVzaCh3aW5kb3cuZGVjay5jYXJkc1swXSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmRlY2suY2FyZHMuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwbGF5ZXIxY2FyZGRpdlwiKS5zZWxlY3RBbGwoXCJwXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEod2luZG93LnBsYXllcjEuaG9sZWNhcmRzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgncCcpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsICdwbGF5ZXIxY2FyZHMnKVxuXG4gICAgICAgICAgICBkMy5zZWxlY3QoXCIjcGxheWVyMmNhcmRkaXZcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHdpbmRvdy5wbGF5ZXIyLmhvbGVjYXJkcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3AnKVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAncGxheWVyMmNhcmRzJylcblxuICAgICAgICAgICAgZDMuc2VsZWN0KFwiI3BsYXllcjNjYXJkZGl2XCIpLnNlbGVjdEFsbChcInBcIilcbiAgICAgICAgICAgICAgICAuZGF0YSh3aW5kb3cucGxheWVyMy5ob2xlY2FyZHMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwJylcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgJ3BsYXllcjNjYXJkcycpXG4gICAgICAgIH0gICBcbiAgICAgICAgd2luZG93LmhhbmRDb3VudCArPSAxO1xuICAgICAgICB3aW5kb3cucG90LmNoaXBzID0gMTU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5wbGF5ZXIxKVxuICAgIH1cblxuICAgIHJldGFpbkNhcmRzKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmRlY2s7XG4gICAgfVxuXG4gICAgcGxhY2VCbGluZHMoKSB7XG4gICAgICAgIGxldCBmaXJzdDtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gdmFyIGFyciA9IHdpbmRvdy5wbGF5ZXJzLnNsaWNlKDAsMik7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGlmICh3aW5kb3cucGxheWVyc1swXSA9PT0gd2luZG93LnBsYXllcjEpIHtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXIxLmNoaXBzIC09IDU7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVyMS5kZWFkbW9uZXkgKz0gNTtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXIxLmN1cnJlbnRCZXQgKz0gNTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguYXJjKDMwMCwgMjAsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInRvbWF0b1wiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dCA9ICcxMCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGZpcnN0ID0gd2luZG93LnBsYXllcnNbMF1cbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVycy5wdXNoKGZpcnN0KTtcblxuICAgICAgICAgICAgd2luZG93LnBsYXllcjIuY2hpcHMgLT0gMTA7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVyMi5kZWFkbW9uZXkgKz0gMTA7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVyMi5jdXJyZW50QmV0ICs9IDEwO1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5hcmMoMjYwLCAyMCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgZmlyc3QgPSB3aW5kb3cucGxheWVyc1swXVxuICAgICAgICAgICAgd2luZG93LnBsYXllcnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzLnB1c2goZmlyc3QpO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5wbGF5ZXJzWzBdID09PSB3aW5kb3cucGxheWVyMikge1xuICAgICAgICAgICAgd2luZG93LnBsYXllcjIuY2hpcHMgLT0gNTtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXIyLmRlYWRtb25leSArPSA1O1xuICAgICAgICAgICAgd2luZG93LnBsYXllcjIuY3VycmVudEJldCArPSA1O1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5hcmMoMjYwLCAyMCwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LnBsYXllcjMuY2hpcHMgLT0gMTA7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVyMy5kZWFkbW9uZXkgKz0gMTA7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVyMy5jdXJyZW50QmV0ICs9IDEwO1xuXG4gICAgICAgICAgICBmaXJzdCA9IHdpbmRvdy5wbGF5ZXJzWzBdXG4gICAgICAgICAgICB3aW5kb3cucGxheWVycy5zaGlmdCgpO1xuICAgICAgICAgICAgd2luZG93LnBsYXllcnMucHVzaChmaXJzdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguYXJjKDI3MCwgMjAsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHQgPSAnMTAnO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBmaXJzdCA9IHdpbmRvdy5wbGF5ZXJzWzBdXG4gICAgICAgICAgICB3aW5kb3cucGxheWVycy5zaGlmdCgpO1xuICAgICAgICAgICAgd2luZG93LnBsYXllcnMucHVzaChmaXJzdCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cucGxheWVyc1swXSA9PT0gd2luZG93LnBsYXllcjMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXIxLmNoaXBzIC09IDEwO1xuICAgICAgICAgICAgd2luZG93LnBsYXllcjEuZGVhZG1vbmV5ICs9IDEwO1xuICAgICAgICAgICAgd2luZG93LnBsYXllcjEuY3VycmVudEJldCArPSAxMDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguYXJjKDMwMCwgMjAsIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInRvbWF0b1wiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dCA9ICcxMCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGZpcnN0ID0gd2luZG93LnBsYXllcnNbMF1cbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzLnNoaWZ0KCk7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVycy5wdXNoKGZpcnN0KTtcblxuICAgICAgICAgICAgd2luZG93LnBsYXllcjMuY2hpcHMgLT0gNTtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXIzLmRlYWRtb25leSArPSA1O1xuICAgICAgICAgICAgd2luZG93LnBsYXllcjMuY3VycmVudEJldCArPSA1O1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmFyYygyNzAsIDIwLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0ID0gJzEwJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgZmlyc3QgPSB3aW5kb3cucGxheWVyc1swXVxuICAgICAgICAgICAgd2luZG93LnBsYXllcnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzLnB1c2goZmlyc3QpO1xuXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnBvdC5jaGlwcyArPSAxNTtcbiAgICAgICAgZDMuc2VsZWN0QWxsKFwiLnBsYXllcm5hbWVzXCIpLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnN0YXJ0U2NvcmVib2FyZCgpO1xuXG4gICAgfVxuXG4gICAgc3RhcnRTY29yZWJvYXJkKCkge1xuICAgICAgICBkMy5zZWxlY3RBbGwoXCIucGxheWVybmFtZXNcIikucmVtb3ZlKCk7XG4gICAgICAgIGQzLnNlbGVjdChcIiNjaGlwY291bnRcIikuc2VsZWN0QWxsKFwicFwiKVxuICAgICAgICAgICAgLmRhdGEod2luZG93LnRoZURhdGEpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZChcInBcIilcbiAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgKyBcIiA6IFwiICsgZC5jaGlwczsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwbGF5ZXJuYW1lc1wiKTtcbiAgICB9XG5cbiAgICAvLyBwbGFjZUJldCgpIHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5wbGF5ZXIxKVxuICAgIC8vICAgICB0aGlzLmJldHRpbmcucGxheWVyKCk7XG4gICAgLy8gfVxufVxuXG4vLyBjbGFzcyBQZXJzb24ge1xuXG4vLyAgICAgZ2V0IG5hbWUoKSB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lICsgJyEhISdcbi8vICAgICB9XG5cbi8vICAgICBzZXQgbmFtZShuZXdWYWx1ZSkge1xuLy8gICAgICAgICB0aGlzLl9uYW1lID0gbmV3VmFsdWVcbi8vICAgICB9XG5cbi8vICAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4vLyAgICAgICAgIHRoaXMuX25hbWUgPSBuYW1lXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zdCBtZSA9IG5ldyBQZXJzb24oJ1phY2gnKVxuLy8gY29uc29sZS5sb2cobWUubmFtZSkgICAgICAgICAgICAvLyBaYWNoISEhXG5cbi8vIG1lLm5hbWUgPSAnSmFjb2InXG4vLyBjb25zb2xlLmxvZyhtZS5uYW1lKSAgICAgICAgICAgIC8vIEphY29iISEhXG5cbi8vIC8vIE9mIGNvdXJzZSwgX25hbWUgaXMgbm90IGFjdHVhbGx5IHByaXZhdGUuXG4vLyBjb25zb2xlLmxvZyhtZS5fbmFtZSkgICAgICAgICAgIC8vIEphY29iIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2x2ZUhhbmQge1xuICAgIHNvbHZlSGFuZHMoKSB7XG4gICAgICAgIHZhciBIYW5kID0gcmVxdWlyZShcInBva2Vyc29sdmVyXCIpLkhhbmQ7XG4gICAgICAgIGxldCBwbGF5ZXJIYW5kcyA9IFtdO1xuICAgICAgICBsZXQgcmV6O1xuICAgICAgICBpZiAod2luZG93Lmxhc3RCZXQgPT09IHdpbmRvdy5wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgcmV6ID0gSGFuZC5zb2x2ZSh3aW5kb3cucGxheWVyc1tpXS5jYXJkUG9vbClcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgIHBsYXllckhhbmRzLnB1c2gocmV6KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVySGFuZHMpO1xuICAgICAgICAgICAgd2luZG93Lndpbm5lciA9IEhhbmQud2lubmVycyhwbGF5ZXJIYW5kcylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy53aW5uZXIpO1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIC8vIHRoaXMucmV0dXJuV2lubmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNldENhcmRQb29sKCk7XG4gICAgICAgICAgICB0aGlzLnJldHVybldpbm5lcigpO1xuICAgICAgICAgICAgd2luZG93Lmxhc3RCZXQgKz0gNDtcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHdpbmRvdy5wbGF5ZXJMaXN0WzBdO1xuICAgICAgICAgICAgd2luZG93LnBsYXllckxpc3Quc2hpZnQoMSk7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVyTGlzdC5wdXNoKGZpcnN0KTtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzID0gd2luZG93LnBsYXllckxpc3Q7XG4gICAgICAgICAgICB3aW5kb3cuaGFuZENvdW50ID0gMDtcbiAgICAgICAgICAgIHdpbmRvdy5kZWNrLmNhcmRzID0gW107XG4gICAgICAgICAgICB3aW5kb3cuYmV0Um91bmQgPSAtMTtcbiAgICAgICAgICAgIHdpbmRvdy5jb3VudCA9IDA7XG5cbiAgICAgICAgICAgIGQzLnNlbGVjdChcIiNwb2tlcnRhYmxlXCIpLnNlbGVjdEFsbCgnaDMnKVxuICAgICAgICAgICAgLmRhdGEod2luZG93Lndpbm5pbmdQbGF5ZXJOYW1lKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoXCJoM1wiKVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtyZXR1cm4gZCArIFwiIHdpbnMgcG90IHdpdGggXCIgKyB3aW5kb3cud2lubmVyWzBdLmRlc2NyfSlcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ3aW5uZXJOYW1lXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybldpbm5lcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkod2luZG93LnBsYXllcnNbaV0uY2FyZFBvb2wuc29ydCgpKSA9PT0gSlNPTi5zdHJpbmdpZnkod2luZG93Lndpbm5pbmdIYW5kKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5wbGF5ZXJzW2ldLm5hbWUpXG4gICAgICAgICAgICAgICAgd2luZG93LnBsYXllcnNbaV0uY2hpcHMgKz0gd2luZG93LnBvdC5jaGlwcztcbiAgICAgICAgICAgICAgICB3aW5kb3cucG90LmNoaXBzID0gMDtcbiAgICAgICAgICAgICAgICB3aW5kb3cud2lubmluZ1BsYXllck5hbWUgPSBbd2luZG93LnBsYXllcnNbaV0ubmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldENhcmRQb29sKCkge1xuICAgICAgICB3aW5kb3cud2lubmluZ0hhbmQgPSBbXTtcbiAgICAgICAgbGV0IHZhbDtcbiAgICAgICAgbGV0IHN1aXQ7XG4gICAgICAgIGxldCBjYXJkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgdmFsID0gd2luZG93Lndpbm5lclswXS5jYXJkUG9vbFtpXS52YWx1ZTtcbiAgICAgICAgICAgIHN1aXQgPSB3aW5kb3cud2lubmVyWzBdLmNhcmRQb29sW2ldLnN1aXQ7XG4gICAgICAgICAgICBjYXJkID0gdmFsLmNvbmNhdChzdWl0KVxuICAgICAgICAgICAgd2luZG93Lndpbm5pbmdIYW5kLnB1c2goY2FyZClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy53aW5uaW5nSGFuZCA9IHdpbmRvdy53aW5uaW5nSGFuZC5zb3J0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy53aW5uaW5nSGFuZClcbiAgICB9XG5cbiAgICBcbn0iLCIvKipcbiAqIHBva2Vyc29sdmVyIHYyLjEuMlxuICogQ29weXJpZ2h0IChjKSAyMDE2LCBKYW1lcyBTaW1wc29uIG9mIEdvbGRGaXJlIFN0dWRpb3NcbiAqIGh0dHA6Ly9nb2xkZmlyZXN0dWRpb3MuY29tXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JzsgLy8gTk9URTogVGhlICdqb2tlcicgd2lsbCBiZSBkZW5vdGVkIHdpdGggYSB2YWx1ZSBvZiAnTycgYW5kIGFueSBzdWl0LlxuXG4gIHZhciB2YWx1ZXMgPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJ1QnLCAnSicsICdRJywgJ0snLCAnQSddO1xuICAvKipcbiAgICogQmFzZSBDYXJkIGNsYXNzIHRoYXQgZGVmaW5lcyBhIHNpbmdsZSBjYXJkLlxuICAgKi9cblxuICBjbGFzcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihzdHIpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBzdHIuc3Vic3RyKDAsIDEpO1xuICAgICAgdGhpcy5zdWl0ID0gc3RyLnN1YnN0cigxLCAxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5yYW5rID0gdmFsdWVzLmluZGV4T2YodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLndpbGRWYWx1ZSA9IHN0ci5zdWJzdHIoMCwgMSk7XG4gICAgfSAvLyBUT0RPOiBBZGQgYSBwYXJhbWV0ZXIgdG8gbGVhdmUgb3V0IHRoZSBzdWl0IGFuZCB1cGRhdGUgdGhlIHRoaXMuZGVzY3IgY2FsbHMuXG5cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMud2lsZFZhbHVlLnJlcGxhY2UoJ1QnLCAnMTAnKSArIHRoaXMuc3VpdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgc29ydChhLCBiKSB7XG4gICAgICBpZiAoYS5yYW5rID4gYi5yYW5rKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoYS5yYW5rIDwgYi5yYW5rKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgLyoqXG4gICAqIEJhc2UgSGFuZCBjbGFzcyB0aGF0IGhhbmRsZXMgY29tcGFyaXNvbnMgb2YgZnVsbCBoYW5kcy5cbiAgICovXG5cblxuICBjbGFzcyBIYW5kIHtcbiAgICBjb25zdHJ1Y3RvcihjYXJkcywgbmFtZSwgZ2FtZSwgY2FuRGlzcXVhbGlmeSkge1xuICAgICAgdGhpcy5jYXJkUG9vbCA9IFtdO1xuICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgdGhpcy5zdWl0cyA9IHt9O1xuICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgIHRoaXMud2lsZHMgPSBbXTtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgdGhpcy5zZkxlbmd0aCA9IDA7XG4gICAgICB0aGlzLmFsd2F5c1F1YWxpZmllcyA9IHRydWU7IC8vIFF1YWxpZmljYXRpb24gcnVsZXMgYXBwbHkgZm9yIGRlYWxlcidzIGhhbmQuXG4gICAgICAvLyBBbHNvIGFwcGxpZXMgZm9yIHNpbmdsZSBwbGF5ZXIgZ2FtZXMsIGxpa2UgdmlkZW8gcG9rZXIuXG5cbiAgICAgIGlmIChjYW5EaXNxdWFsaWZ5ICYmIHRoaXMuZ2FtZS5sb3dlc3RRdWFsaWZpZWQpIHtcbiAgICAgICAgdGhpcy5hbHdheXNRdWFsaWZpZXMgPSBmYWxzZTtcbiAgICAgIH0gLy8gR2V0IHJhbmsgYmFzZWQgb24gZ2FtZS5cblxuXG4gICAgICB2YXIgaGFuZFJhbmsgPSB0aGlzLmdhbWUuaGFuZFZhbHVlcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lLmhhbmRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5oYW5kVmFsdWVzW2ldID09PSB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5yYW5rID0gaGFuZFJhbmsgLSBpOyAvLyBTZXQgdXAgdGhlIHBvb2wgb2YgY2FyZHMuXG5cbiAgICAgIHRoaXMuY2FyZFBvb2wgPSBjYXJkcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjID09PSAnc3RyaW5nJyA/IG5ldyBDYXJkKGMpIDogYztcbiAgICAgIH0pOyAvLyBGaXggdGhlIGNhcmQgcmFua3MgZm9yIHdpbGQgY2FyZHMsIGFuZCBzb3J0LlxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2FyZFBvb2wubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FyZCA9IHRoaXMuY2FyZFBvb2xbaV07XG5cbiAgICAgICAgaWYgKGNhcmQudmFsdWUgPT09IHRoaXMuZ2FtZS53aWxkVmFsdWUpIHtcbiAgICAgICAgICBjYXJkLnJhbmsgPSAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhcmRQb29sID0gdGhpcy5jYXJkUG9vbC5zb3J0KENhcmQuc29ydCk7IC8vIENyZWF0ZSB0aGUgYXJyYXlzIG9mIHN1aXRzIGFuZCB2YWx1ZXMuXG5cbiAgICAgIHZhciBvYmosIG9iajEsIGtleSwga2V5MSwgY2FyZDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNhcmRQb29sLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGlzIHZhbHVlIGFscmVhZHkgZXhpc3RzIGluIHRoZSBvYmplY3QuXG4gICAgICAgIGNhcmQgPSB0aGlzLmNhcmRQb29sW2ldOyAvLyBXZSBkbyBzb21ldGhpbmcgc3BlY2lhbCBpZiB0aGlzIGlzIGEgd2lsZCBjYXJkLlxuXG4gICAgICAgIGlmIChjYXJkLnJhbmsgPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy53aWxkcy5wdXNoKGNhcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIChvYmogPSB0aGlzLnN1aXRzKVtrZXkgPSBjYXJkLnN1aXRdIHx8IChvYmpba2V5XSA9IFtdKTtcbiAgICAgICAgICAob2JqMSA9IHRoaXMudmFsdWVzKVtrZXkxID0gY2FyZC5yYW5rXSB8fCAob2JqMVtrZXkxXSA9IFtdKTsgLy8gQWRkIHRoZSB2YWx1ZSB0byB0aGUgYXJyYXkgZm9yIHRoYXQgdHlwZSBpbiB0aGUgb2JqZWN0LlxuXG4gICAgICAgICAgdGhpcy5zdWl0c1tjYXJkLnN1aXRdLnB1c2goY2FyZCk7XG4gICAgICAgICAgdGhpcy52YWx1ZXNbY2FyZC5yYW5rXS5wdXNoKGNhcmQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMudmFsdWVzLnJldmVyc2UoKTtcbiAgICAgIHRoaXMuaXNQb3NzaWJsZSA9IHRoaXMuc29sdmUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcGFyZSBjdXJyZW50IGhhbmQgd2l0aCBhbm90aGVyIHRvIGRldGVybWluZSB3aGljaCBpcyB0aGUgd2lubmVyLlxuICAgICAqIEBwYXJhbSAge0hhbmR9IGEgSGFuZCB0byBjb21wYXJlIHRvLlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cblxuXG4gICAgY29tcGFyZShhKSB7XG4gICAgICBpZiAodGhpcy5yYW5rIDwgYS5yYW5rKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmsgPiBhLnJhbmspIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzdWx0ID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmNhcmRzW2ldICYmIGEuY2FyZHNbaV0gJiYgdGhpcy5jYXJkc1tpXS5yYW5rIDwgYS5jYXJkc1tpXS5yYW5rKSB7XG4gICAgICAgICAgcmVzdWx0ID0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhcmRzW2ldICYmIGEuY2FyZHNbaV0gJiYgdGhpcy5jYXJkc1tpXS5yYW5rID4gYS5jYXJkc1tpXS5yYW5rKSB7XG4gICAgICAgICAgcmVzdWx0ID0gLTE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgYSBoYW5kIGxvc2VzIHRvIGFub3RoZXIuXG4gICAgICogQHBhcmFtICB7SGFuZH0gaGFuZCBIYW5kIHRvIGNvbXBhcmUgdG8uXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgbG9zZVRvKGhhbmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUoaGFuZCkgPiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgdGhlIG51bWJlciBvZiBjYXJkcyBpbiBhIGhhbmQgb2YgYSByYW5rLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdmFsIEluZGV4IG9mIHRoaXMudmFsdWVzLlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gTnVtYmVyIG9mIGNhcmRzIGhhdmluZyB0aGUgcmFuaywgaW5jbHVkaW5nIHdpbGQgY2FyZHMuXG4gICAgICovXG5cblxuICAgIGdldE51bUNhcmRzQnlSYW5rKHZhbCkge1xuICAgICAgdmFyIGNhcmRzID0gdGhpcy52YWx1ZXNbdmFsXTtcbiAgICAgIHZhciBjaGVja0NhcmRzTGVuZ3RoID0gY2FyZHMgPyBjYXJkcy5sZW5ndGggOiAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2lsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMud2lsZHNbaV0ucmFuayA+IC0xKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FyZHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5nYW1lLndpbGRTdGF0dXMgPT09IDEgfHwgY2FyZHNbMF0ucmFuayA9PT0gdmFsdWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNoZWNrQ2FyZHNMZW5ndGggKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lLndpbGRTdGF0dXMgPT09IDEgfHwgdmFsID09PSB2YWx1ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNoZWNrQ2FyZHNMZW5ndGggKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hlY2tDYXJkc0xlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHRoZSBjYXJkcyBpbiBhIHN1aXQgZm9yIGEgZmx1c2guXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBzdWl0IEtleSBmb3IgdGhpcy5zdWl0cy5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBzZXRSYW5rcyBXaGV0aGVyIHRvIHNldCB0aGUgcmFua3MgZm9yIHRoZSB3aWxkIGNhcmRzLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSBDYXJkcyBoYXZpbmcgdGhlIHN1aXQsIGluY2x1ZGluZyB3aWxkIGNhcmRzLlxuICAgICAqL1xuXG5cbiAgICBnZXRDYXJkc0ZvckZsdXNoKHN1aXQsIHNldFJhbmtzKSB7XG4gICAgICB2YXIgY2FyZHMgPSAodGhpcy5zdWl0c1tzdWl0XSB8fCBbXSkuc29ydChDYXJkLnNvcnQpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2lsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHdpbGQgPSB0aGlzLndpbGRzW2ldO1xuXG4gICAgICAgIGlmIChzZXRSYW5rcykge1xuICAgICAgICAgIHZhciBqID0gMDtcblxuICAgICAgICAgIHdoaWxlIChqIDwgdmFsdWVzLmxlbmd0aCAmJiBqIDwgY2FyZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoY2FyZHNbal0ucmFuayA9PT0gdmFsdWVzLmxlbmd0aCAtIDEgLSBqKSB7XG4gICAgICAgICAgICAgIGogKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbGQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAxIC0gajtcbiAgICAgICAgICB3aWxkLndpbGRWYWx1ZSA9IHZhbHVlc1t3aWxkLnJhbmtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FyZHMucHVzaCh3aWxkKTtcbiAgICAgICAgY2FyZHMgPSBjYXJkcy5zb3J0KENhcmQuc29ydCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYXJkcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSByYW5rIGFuZCB3aWxkIHZhbHVlcyBvZiB0aGUgd2lsZCBjYXJkcy5cbiAgICAgKi9cblxuXG4gICAgcmVzZXRXaWxkQ2FyZHMoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2lsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy53aWxkc1tpXS5yYW5rID0gLTE7XG4gICAgICAgIHRoaXMud2lsZHNbaV0ud2lsZFZhbHVlID0gdGhpcy53aWxkc1tpXS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSGlnaGVzdCBjYXJkIGNvbXBhcmlzb24uXG4gICAgICogQHJldHVybiB7QXJyYXl9IEhpZ2hlc3QgY2FyZHNcbiAgICAgKi9cblxuXG4gICAgbmV4dEhpZ2hlc3QoKSB7XG4gICAgICB2YXIgcGlja3M7XG4gICAgICB2YXIgZXhjbHVkaW5nID0gW107XG4gICAgICBleGNsdWRpbmcgPSBleGNsdWRpbmcuY29uY2F0KHRoaXMuY2FyZHMpO1xuICAgICAgcGlja3MgPSB0aGlzLmNhcmRQb29sLmZpbHRlcihmdW5jdGlvbiAoY2FyZCkge1xuICAgICAgICBpZiAoZXhjbHVkaW5nLmluZGV4T2YoY2FyZCkgPCAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBBY2NvdW50IGZvciByZW1haW5pbmcgd2lsZCBjYXJkIHdoZW4gaXQgbXVzdCBiZSBhY2UuXG5cbiAgICAgIGlmICh0aGlzLmdhbWUud2lsZFN0YXR1cyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBpY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNhcmQgPSBwaWNrc1tpXTtcblxuICAgICAgICAgIGlmIChjYXJkLnJhbmsgPT09IC0xKSB7XG4gICAgICAgICAgICBjYXJkLndpbGRWYWx1ZSA9ICdBJztcbiAgICAgICAgICAgIGNhcmQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBpY2tzID0gcGlja3Muc29ydChDYXJkLnNvcnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGlja3M7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBsaXN0IG9mIGNvbnRhaW5lZCBjYXJkcyBpbiBodW1hbiByZWFkYWJsZSBmb3JtYXQuXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgIHZhciBjYXJkcyA9IHRoaXMuY2FyZHMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjYXJkcy5qb2luKCcsICcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYXJyYXkgb2YgY29udGFpbmVkIGNhcmRzLlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuXG5cbiAgICB0b0FycmF5KCkge1xuICAgICAgdmFyIGNhcmRzID0gdGhpcy5jYXJkcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGMudG9TdHJpbmcoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNhcmRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgaWYgcXVhbGlmeWluZyBoYW5kLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG5cblxuICAgIHF1YWxpZmllc0hpZ2goKSB7XG4gICAgICBpZiAoIXRoaXMuZ2FtZS5sb3dlc3RRdWFsaWZpZWQgfHwgdGhpcy5hbHdheXNRdWFsaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUoSGFuZC5zb2x2ZSh0aGlzLmdhbWUubG93ZXN0UXVhbGlmaWVkLCB0aGlzLmdhbWUpKSA8PSAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaW5kIGhpZ2hlc3QgcmFua2VkIGhhbmRzIGFuZCByZW1vdmUgYW55IHRoYXQgZG9uJ3QgcXVhbGlmeSBvciBsb3NlIHRvIGFub3RoZXIgaGFuZC5cbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gaGFuZHMgSGFuZHMgdG8gZXZhbHVhdGUuXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgICAgIFdpbm5pbmcgaGFuZHMuXG4gICAgICovXG5cblxuICAgIHN0YXRpYyB3aW5uZXJzKGhhbmRzKSB7XG4gICAgICBoYW5kcyA9IGhhbmRzLmZpbHRlcihmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gaC5xdWFsaWZpZXNIaWdoKCk7XG4gICAgICB9KTtcbiAgICAgIHZhciBoaWdoZXN0UmFuayA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIGhhbmRzLm1hcChmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gaC5yYW5rO1xuICAgICAgfSkpO1xuICAgICAgaGFuZHMgPSBoYW5kcy5maWx0ZXIoZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIGgucmFuayA9PT0gaGlnaGVzdFJhbms7XG4gICAgICB9KTtcbiAgICAgIGhhbmRzID0gaGFuZHMuZmlsdGVyKGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIHZhciBsb3NlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxvc2UgPSBoLmxvc2VUbyhoYW5kc1tpXSk7XG5cbiAgICAgICAgICBpZiAobG9zZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICFsb3NlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGFuZHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGFuZCByZXR1cm4gdGhlIGJlc3QgaGFuZC5cbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gY2FyZHMgQXJyYXkgb2YgY2FyZHMgKFsnQWQnLCAnM2MnLCAnVGgnLCAuLi5dKS5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGdhbWUgR2FtZSBiZWluZyBwbGF5ZWQuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gY2FuRGlzcXVhbGlmeSBDaGVjayBmb3IgYSBxdWFsaWZpZWQgaGFuZC5cbiAgICAgKiBAcmV0dXJuIHtIYW5kfSAgICAgICBCZXN0IGhhbmQuXG4gICAgICovXG5cblxuICAgIHN0YXRpYyBzb2x2ZShjYXJkcywgZ2FtZSwgY2FuRGlzcXVhbGlmeSkge1xuICAgICAgZ2FtZSA9IGdhbWUgfHwgJ3N0YW5kYXJkJztcbiAgICAgIGdhbWUgPSB0eXBlb2YgZ2FtZSA9PT0gJ3N0cmluZycgPyBuZXcgR2FtZShnYW1lKSA6IGdhbWU7XG4gICAgICBjYXJkcyA9IGNhcmRzIHx8IFsnJ107XG4gICAgICB2YXIgaGFuZHMgPSBnYW1lLmhhbmRWYWx1ZXM7XG4gICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSBuZXcgaGFuZHNbaV0oY2FyZHMsIGdhbWUsIGNhbkRpc3F1YWxpZnkpO1xuXG4gICAgICAgIGlmIChyZXN1bHQuaXNQb3NzaWJsZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlcGFyYXRlIGNhcmRzIGJhc2VkIG9uIGlmIHRoZXkgYXJlIHdpbGQgY2FyZHMuXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGNhcmRzIEFycmF5IG9mIGNhcmRzIChbJ0FkJywgJzNjJywgJ1RoJywgLi4uXSkuXG4gICAgICogQHBhcmFtICB7R2FtZX0gZ2FtZSBHYW1lIGJlaW5nIHBsYXllZC5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gW3dpbGRzLCBub25XaWxkc10gV2lsZCBhbmQgbm9uLVdpbGQgQ2FyZHMuXG4gICAgICovXG5cblxuICAgIHN0YXRpYyBzdHJpcFdpbGRzKGNhcmRzLCBnYW1lKSB7XG4gICAgICB2YXIgY2FyZCwgd2lsZHMsIG5vbldpbGRzO1xuICAgICAgY2FyZHMgPSBjYXJkcyB8fCBbJyddO1xuICAgICAgd2lsZHMgPSBbXTtcbiAgICAgIG5vbldpbGRzID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FyZCA9IGNhcmRzW2ldO1xuXG4gICAgICAgIGlmIChjYXJkLnJhbmsgPT09IC0xKSB7XG4gICAgICAgICAgd2lsZHMucHVzaChjYXJkc1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9uV2lsZHMucHVzaChjYXJkc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFt3aWxkcywgbm9uV2lsZHNdO1xuICAgIH1cblxuICB9XG5cbiAgY2xhc3MgU3RyYWlnaHRGbHVzaCBleHRlbmRzIEhhbmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KSB7XG4gICAgICBzdXBlcihjYXJkcywgJ1N0cmFpZ2h0IEZsdXNoJywgZ2FtZSwgY2FuRGlzcXVhbGlmeSk7XG4gICAgfVxuXG4gICAgc29sdmUoKSB7XG4gICAgICB2YXIgY2FyZHM7XG4gICAgICB0aGlzLnJlc2V0V2lsZENhcmRzKCk7XG4gICAgICB2YXIgcG9zc2libGVTdHJhaWdodCA9IG51bGw7XG4gICAgICB2YXIgbm9uQ2FyZHMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgc3VpdCBpbiB0aGlzLnN1aXRzKSB7XG4gICAgICAgIGNhcmRzID0gdGhpcy5nZXRDYXJkc0ZvckZsdXNoKHN1aXQsIGZhbHNlKTtcblxuICAgICAgICBpZiAoY2FyZHMgJiYgY2FyZHMubGVuZ3RoID49IHRoaXMuZ2FtZS5zZlF1YWxpZnkpIHtcbiAgICAgICAgICBwb3NzaWJsZVN0cmFpZ2h0ID0gY2FyZHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBvc3NpYmxlU3RyYWlnaHQpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5kZXNjciAhPT0gJ3N0YW5kYXJkJykge1xuICAgICAgICAgIGZvciAodmFyIHN1aXQgaW4gdGhpcy5zdWl0cykge1xuICAgICAgICAgICAgaWYgKHBvc3NpYmxlU3RyYWlnaHRbMF0uc3VpdCAhPT0gc3VpdCkge1xuICAgICAgICAgICAgICBub25DYXJkcyA9IG5vbkNhcmRzLmNvbmNhdCh0aGlzLnN1aXRzW3N1aXRdIHx8IFtdKTtcbiAgICAgICAgICAgICAgbm9uQ2FyZHMgPSBIYW5kLnN0cmlwV2lsZHMobm9uQ2FyZHMsIHRoaXMuZ2FtZSlbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0cmFpZ2h0ID0gbmV3IFN0cmFpZ2h0KHBvc3NpYmxlU3RyYWlnaHQsIHRoaXMuZ2FtZSk7XG5cbiAgICAgICAgaWYgKHN0cmFpZ2h0LmlzUG9zc2libGUpIHtcbiAgICAgICAgICB0aGlzLmNhcmRzID0gc3RyYWlnaHQuY2FyZHM7XG4gICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KG5vbkNhcmRzKTtcbiAgICAgICAgICB0aGlzLnNmTGVuZ3RoID0gc3RyYWlnaHQuc2ZMZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FyZHNbMF0gJiYgdGhpcy5jYXJkc1swXS5yYW5rID09PSAxMykge1xuICAgICAgICB0aGlzLmRlc2NyID0gJ1JveWFsIEZsdXNoJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jYXJkcy5sZW5ndGggPj0gdGhpcy5nYW1lLnNmUXVhbGlmeSkge1xuICAgICAgICB0aGlzLmRlc2NyID0gdGhpcy5uYW1lICsgJywgJyArIHRoaXMuY2FyZHNbMF0udG9TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyBzdWl0ICsgJyBIaWdoJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2FyZHMubGVuZ3RoID49IHRoaXMuZ2FtZS5zZlF1YWxpZnk7XG4gICAgfVxuXG4gIH1cblxuICBjbGFzcyBSb3lhbEZsdXNoIGV4dGVuZHMgU3RyYWlnaHRGbHVzaCB7XG4gICAgY29uc3RydWN0b3IoY2FyZHMsIGdhbWUsIGNhbkRpc3F1YWxpZnkpIHtcbiAgICAgIHN1cGVyKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KTtcbiAgICB9XG5cbiAgICBzb2x2ZSgpIHtcbiAgICAgIHRoaXMucmVzZXRXaWxkQ2FyZHMoKTtcbiAgICAgIHZhciByZXN1bHQgPSBzdXBlci5zb2x2ZSgpO1xuICAgICAgcmV0dXJuIHJlc3VsdCAmJiB0aGlzLmRlc2NyID09PSAnUm95YWwgRmx1c2gnO1xuICAgIH1cblxuICB9XG5cbiAgY2xhc3MgTmF0dXJhbFJveWFsRmx1c2ggZXh0ZW5kcyBSb3lhbEZsdXNoIHtcbiAgICBjb25zdHJ1Y3RvcihjYXJkcywgZ2FtZSwgY2FuRGlzcXVhbGlmeSkge1xuICAgICAgc3VwZXIoY2FyZHMsIGdhbWUsIGNhbkRpc3F1YWxpZnkpO1xuICAgIH1cblxuICAgIHNvbHZlKCkge1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdGhpcy5yZXNldFdpbGRDYXJkcygpO1xuICAgICAgdmFyIHJlc3VsdCA9IHN1cGVyLnNvbHZlKCk7XG5cbiAgICAgIGlmIChyZXN1bHQgJiYgdGhpcy5jYXJkcykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5nYW1lLnNmUXVhbGlmeSAmJiBpIDwgdGhpcy5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLmNhcmRzW2ldLnZhbHVlID09PSB0aGlzLmdhbWUud2lsZFZhbHVlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3IgPSAnV2lsZCBSb3lhbCBGbHVzaCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gdGhpcy5nYW1lLnNmUXVhbGlmeSkge1xuICAgICAgICAgIHRoaXMuZGVzY3IgPSAnUm95YWwgRmx1c2gnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gIH1cblxuICBjbGFzcyBXaWxkUm95YWxGbHVzaCBleHRlbmRzIFJveWFsRmx1c2gge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KSB7XG4gICAgICBzdXBlcihjYXJkcywgZ2FtZSwgY2FuRGlzcXVhbGlmeSk7XG4gICAgfVxuXG4gICAgc29sdmUoKSB7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB0aGlzLnJlc2V0V2lsZENhcmRzKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gc3VwZXIuc29sdmUoKTtcblxuICAgICAgaWYgKHJlc3VsdCAmJiB0aGlzLmNhcmRzKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmdhbWUuc2ZRdWFsaWZ5ICYmIGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2FyZHNbaV0udmFsdWUgPT09IHRoaXMuZ2FtZS53aWxkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzY3IgPSAnV2lsZCBSb3lhbCBGbHVzaCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSA9PT0gdGhpcy5nYW1lLnNmUXVhbGlmeSkge1xuICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGVzY3IgPSAnUm95YWwgRmx1c2gnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gIH1cblxuICBjbGFzcyBGaXZlT2ZBS2luZCBleHRlbmRzIEhhbmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KSB7XG4gICAgICBzdXBlcihjYXJkcywgJ0ZpdmUgb2YgYSBLaW5kJywgZ2FtZSwgY2FuRGlzcXVhbGlmeSk7XG4gICAgfVxuXG4gICAgc29sdmUoKSB7XG4gICAgICB0aGlzLnJlc2V0V2lsZENhcmRzKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TnVtQ2FyZHNCeVJhbmsoaSkgPT09IDUpIHtcbiAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy52YWx1ZXNbaV0gfHwgW107XG5cbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMud2lsZHMubGVuZ3RoICYmIHRoaXMuY2FyZHMubGVuZ3RoIDwgNTsgaisrKSB7XG4gICAgICAgICAgICB2YXIgd2lsZCA9IHRoaXMud2lsZHNbal07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNhcmRzKSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHRoaXMuY2FyZHNbMF0ucmFuaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aWxkLndpbGRWYWx1ZSA9IHZhbHVlc1t3aWxkLnJhbmtdO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKHdpbGQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLmNvbmNhdCh0aGlzLm5leHRIaWdoZXN0KCkuc2xpY2UoMCwgdGhpcy5nYW1lLmNhcmRzSW5IYW5kIC0gNSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgIHRoaXMuZGVzY3IgPSB0aGlzLm5hbWUgKyAnLCAnICsgdGhpcy5jYXJkc1swXS50b1N0cmluZygpLnNsaWNlKDAsIC0xKSArICdcXCdzJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2FyZHMubGVuZ3RoID49IDU7XG4gICAgfVxuXG4gIH1cblxuICBjbGFzcyBGb3VyT2ZBS2luZFBhaXJQbHVzIGV4dGVuZHMgSGFuZCB7XG4gICAgY29uc3RydWN0b3IoY2FyZHMsIGdhbWUsIGNhbkRpc3F1YWxpZnkpIHtcbiAgICAgIHN1cGVyKGNhcmRzLCAnRm91ciBvZiBhIEtpbmQgd2l0aCBQYWlyIG9yIEJldHRlcicsIGdhbWUsIGNhbkRpc3F1YWxpZnkpO1xuICAgIH1cblxuICAgIHNvbHZlKCkge1xuICAgICAgdmFyIGNhcmRzO1xuICAgICAgdGhpcy5yZXNldFdpbGRDYXJkcygpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmdldE51bUNhcmRzQnlSYW5rKGkpID09PSA0KSB7XG4gICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMudmFsdWVzW2ldIHx8IFtdO1xuXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLndpbGRzLmxlbmd0aCAmJiB0aGlzLmNhcmRzLmxlbmd0aCA8IDQ7IGorKykge1xuICAgICAgICAgICAgdmFyIHdpbGQgPSB0aGlzLndpbGRzW2pdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jYXJkcykge1xuICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB0aGlzLmNhcmRzWzBdLnJhbms7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB2YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2lsZC53aWxkVmFsdWUgPSB2YWx1ZXNbd2lsZC5yYW5rXTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaCh3aWxkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY2FyZHMgPSB0aGlzLnZhbHVlc1tpXTtcblxuICAgICAgICAgIGlmIChjYXJkcyAmJiB0aGlzLmNhcmRzWzBdLndpbGRWYWx1ZSA9PT0gY2FyZHNbMF0ud2lsZFZhbHVlKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5nZXROdW1DYXJkc0J5UmFuayhpKSA+PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5jYXJkcy5jb25jYXQoY2FyZHMgfHwgW10pO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMud2lsZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIHdpbGQgPSB0aGlzLndpbGRzW2pdO1xuXG4gICAgICAgICAgICAgIGlmICh3aWxkLnJhbmsgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY2FyZHMpIHtcbiAgICAgICAgICAgICAgICB3aWxkLnJhbmsgPSBjYXJkc1swXS5yYW5rO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FyZHNbMF0ucmFuayA9PT0gdmFsdWVzLmxlbmd0aCAtIDEgJiYgdGhpcy5nYW1lLndpbGRTdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB2YWx1ZXMubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB2YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHdpbGQud2lsZFZhbHVlID0gdmFsdWVzW3dpbGQucmFua107XG4gICAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaCh3aWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KHRoaXMubmV4dEhpZ2hlc3QoKS5zbGljZSgwLCB0aGlzLmdhbWUuY2FyZHNJbkhhbmQgLSA2KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID49IDYpIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0aGlzLmNhcmRzWzBdLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgJ1xcJ3Mgb3ZlciAnICsgdGhpcy5jYXJkc1s0XS50b1N0cmluZygpLnNsaWNlKDAsIC0xKSArICdcXCdzJztcbiAgICAgICAgdGhpcy5kZXNjciA9IHRoaXMubmFtZSArICcsICcgKyB0eXBlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jYXJkcy5sZW5ndGggPj0gNjtcbiAgICB9XG5cbiAgfVxuXG4gIGNsYXNzIEZvdXJPZkFLaW5kIGV4dGVuZHMgSGFuZCB7XG4gICAgY29uc3RydWN0b3IoY2FyZHMsIGdhbWUsIGNhbkRpc3F1YWxpZnkpIHtcbiAgICAgIHN1cGVyKGNhcmRzLCAnRm91ciBvZiBhIEtpbmQnLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KTtcbiAgICB9XG5cbiAgICBzb2x2ZSgpIHtcbiAgICAgIHRoaXMucmVzZXRXaWxkQ2FyZHMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nZXROdW1DYXJkc0J5UmFuayhpKSA9PT0gNCkge1xuICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLnZhbHVlc1tpXSB8fCBbXTtcblxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy53aWxkcy5sZW5ndGggJiYgdGhpcy5jYXJkcy5sZW5ndGggPCA0OyBqKyspIHtcbiAgICAgICAgICAgIHZhciB3aWxkID0gdGhpcy53aWxkc1tqXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2FyZHMpIHtcbiAgICAgICAgICAgICAgd2lsZC5yYW5rID0gdGhpcy5jYXJkc1swXS5yYW5rO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2lsZC5yYW5rID0gdmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbGQud2lsZFZhbHVlID0gdmFsdWVzW3dpbGQucmFua107XG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2god2lsZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KHRoaXMubmV4dEhpZ2hlc3QoKS5zbGljZSgwLCB0aGlzLmdhbWUuY2FyZHNJbkhhbmQgLSA0KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID49IDQpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5ub0tpY2tlcnMpIHtcbiAgICAgICAgICB0aGlzLmNhcmRzLmxlbmd0aCA9IDQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlc2NyID0gdGhpcy5uYW1lICsgJywgJyArIHRoaXMuY2FyZHNbMF0udG9TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyAnXFwncyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNhcmRzLmxlbmd0aCA+PSA0O1xuICAgIH1cblxuICB9XG5cbiAgY2xhc3MgRm91cldpbGRzIGV4dGVuZHMgSGFuZCB7XG4gICAgY29uc3RydWN0b3IoY2FyZHMsIGdhbWUsIGNhbkRpc3F1YWxpZnkpIHtcbiAgICAgIHN1cGVyKGNhcmRzLCAnRm91ciBXaWxkIENhcmRzJywgZ2FtZSwgY2FuRGlzcXVhbGlmeSk7XG4gICAgfVxuXG4gICAgc29sdmUoKSB7XG4gICAgICBpZiAodGhpcy53aWxkcy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMud2lsZHM7XG4gICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLmNvbmNhdCh0aGlzLm5leHRIaWdoZXN0KCkuc2xpY2UoMCwgdGhpcy5nYW1lLmNhcmRzSW5IYW5kIC0gNCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPj0gNCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lLm5vS2lja2Vycykge1xuICAgICAgICAgIHRoaXMuY2FyZHMubGVuZ3RoID0gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVzY3IgPSB0aGlzLm5hbWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNhcmRzLmxlbmd0aCA+PSA0O1xuICAgIH1cblxuICB9XG5cbiAgY2xhc3MgVGhyZWVPZkFLaW5kVHdvUGFpciBleHRlbmRzIEhhbmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KSB7XG4gICAgICBzdXBlcihjYXJkcywgJ1RocmVlIG9mIGEgS2luZCB3aXRoIFR3byBQYWlyJywgZ2FtZSwgY2FuRGlzcXVhbGlmeSk7XG4gICAgfVxuXG4gICAgc29sdmUoKSB7XG4gICAgICB2YXIgY2FyZHM7XG4gICAgICB0aGlzLnJlc2V0V2lsZENhcmRzKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TnVtQ2FyZHNCeVJhbmsoaSkgPT09IDMpIHtcbiAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy52YWx1ZXNbaV0gfHwgW107XG5cbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMud2lsZHMubGVuZ3RoICYmIHRoaXMuY2FyZHMubGVuZ3RoIDwgMzsgaisrKSB7XG4gICAgICAgICAgICB2YXIgd2lsZCA9IHRoaXMud2lsZHNbal07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNhcmRzKSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHRoaXMuY2FyZHNbMF0ucmFuaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aWxkLndpbGRWYWx1ZSA9IHZhbHVlc1t3aWxkLnJhbmtdO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKHdpbGQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNhcmRzID0gdGhpcy52YWx1ZXNbaV07XG5cbiAgICAgICAgICBpZiAoY2FyZHMgJiYgdGhpcy5jYXJkc1swXS53aWxkVmFsdWUgPT09IGNhcmRzWzBdLndpbGRWYWx1ZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID4gNSAmJiB0aGlzLmdldE51bUNhcmRzQnlSYW5rKGkpID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5jYXJkcy5jb25jYXQoY2FyZHMgfHwgW10pO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMud2lsZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIHdpbGQgPSB0aGlzLndpbGRzW2pdO1xuXG4gICAgICAgICAgICAgIGlmICh3aWxkLnJhbmsgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY2FyZHMpIHtcbiAgICAgICAgICAgICAgICB3aWxkLnJhbmsgPSBjYXJkc1swXS5yYW5rO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FyZHNbMF0ucmFuayA9PT0gdmFsdWVzLmxlbmd0aCAtIDEgJiYgdGhpcy5nYW1lLndpbGRTdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB2YWx1ZXMubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB2YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHdpbGQud2lsZFZhbHVlID0gdmFsdWVzW3dpbGQucmFua107XG4gICAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaCh3aWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KHRoaXMubmV4dEhpZ2hlc3QoKS5zbGljZSgwLCB0aGlzLmdhbWUuY2FyZHNJbkhhbmQgLSA0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0TnVtQ2FyZHNCeVJhbmsoaSkgPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLmNvbmNhdChjYXJkcyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy53aWxkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB2YXIgd2lsZCA9IHRoaXMud2lsZHNbal07XG5cbiAgICAgICAgICAgICAgaWYgKHdpbGQucmFuayAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjYXJkcykge1xuICAgICAgICAgICAgICAgIHdpbGQucmFuayA9IGNhcmRzWzBdLnJhbms7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYXJkc1swXS5yYW5rID09PSB2YWx1ZXMubGVuZ3RoIC0gMSAmJiB0aGlzLmdhbWUud2lsZFN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHdpbGQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbGQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgd2lsZC53aWxkVmFsdWUgPSB2YWx1ZXNbd2lsZC5yYW5rXTtcbiAgICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKHdpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPj0gNykge1xuICAgICAgICB2YXIgdHlwZSA9IHRoaXMuY2FyZHNbMF0udG9TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyAnXFwncyBvdmVyICcgKyB0aGlzLmNhcmRzWzNdLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgJ1xcJ3MgJiAnICsgdGhpcy5jYXJkc1s1XS52YWx1ZSArICdcXCdzJztcbiAgICAgICAgdGhpcy5kZXNjciA9IHRoaXMubmFtZSArICcsICcgKyB0eXBlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jYXJkcy5sZW5ndGggPj0gNztcbiAgICB9XG5cbiAgfVxuXG4gIGNsYXNzIEZ1bGxIb3VzZSBleHRlbmRzIEhhbmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KSB7XG4gICAgICBzdXBlcihjYXJkcywgJ0Z1bGwgSG91c2UnLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KTtcbiAgICB9XG5cbiAgICBzb2x2ZSgpIHtcbiAgICAgIHZhciBjYXJkcztcbiAgICAgIHRoaXMucmVzZXRXaWxkQ2FyZHMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nZXROdW1DYXJkc0J5UmFuayhpKSA9PT0gMykge1xuICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLnZhbHVlc1tpXSB8fCBbXTtcblxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy53aWxkcy5sZW5ndGggJiYgdGhpcy5jYXJkcy5sZW5ndGggPCAzOyBqKyspIHtcbiAgICAgICAgICAgIHZhciB3aWxkID0gdGhpcy53aWxkc1tqXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY2FyZHMpIHtcbiAgICAgICAgICAgICAgd2lsZC5yYW5rID0gdGhpcy5jYXJkc1swXS5yYW5rO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2lsZC5yYW5rID0gdmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbGQud2lsZFZhbHVlID0gdmFsdWVzW3dpbGQucmFua107XG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2god2lsZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNhcmRzID0gdGhpcy52YWx1ZXNbaV07XG5cbiAgICAgICAgICBpZiAoY2FyZHMgJiYgdGhpcy5jYXJkc1swXS53aWxkVmFsdWUgPT09IGNhcmRzWzBdLndpbGRWYWx1ZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuZ2V0TnVtQ2FyZHNCeVJhbmsoaSkgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KGNhcmRzIHx8IFtdKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLndpbGRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIHZhciB3aWxkID0gdGhpcy53aWxkc1tqXTtcblxuICAgICAgICAgICAgICBpZiAod2lsZC5yYW5rICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNhcmRzKSB7XG4gICAgICAgICAgICAgICAgd2lsZC5yYW5rID0gY2FyZHNbMF0ucmFuaztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhcmRzWzBdLnJhbmsgPT09IHZhbHVlcy5sZW5ndGggLSAxICYmIHRoaXMuZ2FtZS53aWxkU3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgd2lsZC5yYW5rID0gdmFsdWVzLmxlbmd0aCAtIDI7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2lsZC5yYW5rID0gdmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB3aWxkLndpbGRWYWx1ZSA9IHZhbHVlc1t3aWxkLnJhbmtdO1xuICAgICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2god2lsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLmNvbmNhdCh0aGlzLm5leHRIaWdoZXN0KCkuc2xpY2UoMCwgdGhpcy5nYW1lLmNhcmRzSW5IYW5kIC0gNSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgIHZhciB0eXBlID0gdGhpcy5jYXJkc1swXS50b1N0cmluZygpLnNsaWNlKDAsIC0xKSArICdcXCdzIG92ZXIgJyArIHRoaXMuY2FyZHNbM10udG9TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyAnXFwncyc7XG4gICAgICAgIHRoaXMuZGVzY3IgPSB0aGlzLm5hbWUgKyAnLCAnICsgdHlwZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2FyZHMubGVuZ3RoID49IDU7XG4gICAgfVxuXG4gIH1cblxuICBjbGFzcyBGbHVzaCBleHRlbmRzIEhhbmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KSB7XG4gICAgICBzdXBlcihjYXJkcywgJ0ZsdXNoJywgZ2FtZSwgY2FuRGlzcXVhbGlmeSk7XG4gICAgfVxuXG4gICAgc29sdmUoKSB7XG4gICAgICB0aGlzLnNmTGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucmVzZXRXaWxkQ2FyZHMoKTtcblxuICAgICAgZm9yICh2YXIgc3VpdCBpbiB0aGlzLnN1aXRzKSB7XG4gICAgICAgIHZhciBjYXJkcyA9IHRoaXMuZ2V0Q2FyZHNGb3JGbHVzaChzdWl0LCB0cnVlKTtcblxuICAgICAgICBpZiAoY2FyZHMubGVuZ3RoID49IHRoaXMuZ2FtZS5zZlF1YWxpZnkpIHtcbiAgICAgICAgICB0aGlzLmNhcmRzID0gY2FyZHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID49IHRoaXMuZ2FtZS5zZlF1YWxpZnkpIHtcbiAgICAgICAgdGhpcy5kZXNjciA9IHRoaXMubmFtZSArICcsICcgKyB0aGlzLmNhcmRzWzBdLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgc3VpdCArICcgSGlnaCc7XG4gICAgICAgIHRoaXMuc2ZMZW5ndGggPSB0aGlzLmNhcmRzLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPCB0aGlzLmdhbWUuY2FyZHNJbkhhbmQpIHtcbiAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5jYXJkcy5jb25jYXQodGhpcy5uZXh0SGlnaGVzdCgpLnNsaWNlKDAsIHRoaXMuZ2FtZS5jYXJkc0luSGFuZCAtIHRoaXMuY2FyZHMubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY2FyZHMubGVuZ3RoID49IHRoaXMuZ2FtZS5zZlF1YWxpZnk7XG4gICAgfVxuXG4gIH1cblxuICBjbGFzcyBTdHJhaWdodCBleHRlbmRzIEhhbmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KSB7XG4gICAgICBzdXBlcihjYXJkcywgJ1N0cmFpZ2h0JywgZ2FtZSwgY2FuRGlzcXVhbGlmeSk7XG4gICAgfVxuXG4gICAgc29sdmUoKSB7XG4gICAgICB2YXIgY2FyZCwgY2hlY2tDYXJkcztcbiAgICAgIHRoaXMucmVzZXRXaWxkQ2FyZHMoKTsgLy8gVGhlcmUgYXJlIHN0aWxsIHNvbWUgZ2FtZXMgdGhhdCBjb3VudCB0aGUgd2hlZWwgYXMgc2Vjb25kIGhpZ2hlc3QuXG4gICAgICAvLyBUaGVzZSBnYW1lcyBkbyBub3QgaGF2ZSBlbm91Z2ggY2FyZHMvd2lsZHMgdG8gbWFrZSBBS1FKVCBhbmQgNTQzMkEgYm90aCBwb3NzaWJsZS5cblxuICAgICAgaWYgKHRoaXMuZ2FtZS53aGVlbFN0YXR1cyA9PT0gMSkge1xuICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5nZXRXaGVlbCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCkge1xuICAgICAgICAgIHZhciB3aWxkQ291bnQgPSAwO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjYXJkID0gdGhpcy5jYXJkc1tpXTtcblxuICAgICAgICAgICAgaWYgKGNhcmQudmFsdWUgPT09IHRoaXMuZ2FtZS53aWxkVmFsdWUpIHtcbiAgICAgICAgICAgICAgd2lsZENvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYXJkLnJhbmsgPT09IDApIHtcbiAgICAgICAgICAgICAgY2FyZC5yYW5rID0gdmFsdWVzLmluZGV4T2YoJ0EnKTtcbiAgICAgICAgICAgICAgY2FyZC53aWxkVmFsdWUgPSAnQSc7XG5cbiAgICAgICAgICAgICAgaWYgKGNhcmQudmFsdWUgPT09ICcxJykge1xuICAgICAgICAgICAgICAgIGNhcmQudmFsdWUgPSAnQSc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5jYXJkcy5zb3J0KENhcmQuc29ydCk7XG5cbiAgICAgICAgICBmb3IgKDsgd2lsZENvdW50IDwgdGhpcy53aWxkcy5sZW5ndGggJiYgdGhpcy5jYXJkcy5sZW5ndGggPCB0aGlzLmdhbWUuY2FyZHNJbkhhbmQ7IHdpbGRDb3VudCsrKSB7XG4gICAgICAgICAgICBjYXJkID0gdGhpcy53aWxkc1t3aWxkQ291bnRdO1xuICAgICAgICAgICAgY2FyZC5yYW5rID0gdmFsdWVzLmluZGV4T2YoJ0EnKTtcbiAgICAgICAgICAgIGNhcmQud2lsZFZhbHVlID0gJ0EnO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuZGVzY3IgPSB0aGlzLm5hbWUgKyAnLCBXaGVlbCc7XG4gICAgICAgICAgdGhpcy5zZkxlbmd0aCA9IHRoaXMuc2ZRdWFsaWZ5O1xuXG4gICAgICAgICAgaWYgKHRoaXMuY2FyZHNbMF0udmFsdWUgPT09ICdBJykge1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KHRoaXMubmV4dEhpZ2hlc3QoKS5zbGljZSgxLCB0aGlzLmdhbWUuY2FyZHNJbkhhbmQgLSB0aGlzLmNhcmRzLmxlbmd0aCArIDEpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KHRoaXMubmV4dEhpZ2hlc3QoKS5zbGljZSgwLCB0aGlzLmdhbWUuY2FyZHNJbkhhbmQgLSB0aGlzLmNhcmRzLmxlbmd0aCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldFdpbGRDYXJkcygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNhcmRzID0gdGhpcy5nZXRHYXBzKCk7IC8vIE5vdyBhZGQgdGhlIHdpbGQgY2FyZHMsIGlmIGFueSwgYW5kIHNldCB0aGUgYXBwcm9wcmlhdGUgcmFua3NcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndpbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhcmQgPSB0aGlzLndpbGRzW2ldO1xuICAgICAgICBjaGVja0NhcmRzID0gdGhpcy5nZXRHYXBzKHRoaXMuY2FyZHMubGVuZ3RoKTtcblxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPT09IGNoZWNrQ2FyZHMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBhbiBcIm9wZW4tZW5kZWRcIiBzdHJhaWdodCwgdGhlIGhpZ2ggcmFuayBpcyB0aGUgaGlnaGVzdCBwb3NzaWJsZSByYW5rLlxuICAgICAgICAgIGlmICh0aGlzLmNhcmRzWzBdLnJhbmsgPCB2YWx1ZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgY2FyZC5yYW5rID0gdGhpcy5jYXJkc1swXS5yYW5rICsgMTtcbiAgICAgICAgICAgIGNhcmQud2lsZFZhbHVlID0gdmFsdWVzW2NhcmQucmFua107XG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhcmQucmFuayA9IHRoaXMuY2FyZHNbdGhpcy5jYXJkcy5sZW5ndGggLSAxXS5yYW5rIC0gMTtcbiAgICAgICAgICAgIGNhcmQud2lsZFZhbHVlID0gdmFsdWVzW2NhcmQucmFua107XG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoaXMgaXMgYW4gXCJpbnNpZGVcIiBzdHJhaWdodCwgdGhlIGhpZ2ggY2FyZCBkb2Vzbid0IGNoYW5nZS5cbiAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHRoaXMuY2FyZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcmRzW2ogLSAxXS5yYW5rIC0gdGhpcy5jYXJkc1tqXS5yYW5rID4gMSkge1xuICAgICAgICAgICAgICBjYXJkLnJhbmsgPSB0aGlzLmNhcmRzW2ogLSAxXS5yYW5rIC0gMTtcbiAgICAgICAgICAgICAgY2FyZC53aWxkVmFsdWUgPSB2YWx1ZXNbY2FyZC5yYW5rXTtcbiAgICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5jYXJkcy5zb3J0KENhcmQuc29ydCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA+PSB0aGlzLmdhbWUuc2ZRdWFsaWZ5KSB7XG4gICAgICAgIHRoaXMuZGVzY3IgPSB0aGlzLm5hbWUgKyAnLCAnICsgdGhpcy5jYXJkc1swXS50b1N0cmluZygpLnNsaWNlKDAsIC0xKSArICcgSGlnaCc7XG4gICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLnNsaWNlKDAsIHRoaXMuZ2FtZS5jYXJkc0luSGFuZCk7XG4gICAgICAgIHRoaXMuc2ZMZW5ndGggPSB0aGlzLmNhcmRzLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPCB0aGlzLmdhbWUuY2FyZHNJbkhhbmQpIHtcbiAgICAgICAgICBpZiAodGhpcy5jYXJkc1t0aGlzLnNmTGVuZ3RoIC0gMV0ucmFuayA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KHRoaXMubmV4dEhpZ2hlc3QoKS5zbGljZSgxLCB0aGlzLmdhbWUuY2FyZHNJbkhhbmQgLSB0aGlzLmNhcmRzLmxlbmd0aCArIDEpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KHRoaXMubmV4dEhpZ2hlc3QoKS5zbGljZSgwLCB0aGlzLmdhbWUuY2FyZHNJbkhhbmQgLSB0aGlzLmNhcmRzLmxlbmd0aCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jYXJkcy5sZW5ndGggPj0gdGhpcy5nYW1lLnNmUXVhbGlmeTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBudW1iZXIgb2YgZ2FwcyBpbiB0aGUgc3RyYWlnaHQuXG4gICAgICogQHJldHVybiB7QXJyYXl9IEhpZ2hlc3QgcG90ZW50aWFsIHN0cmFpZ2h0IHdpdGggZmV3ZXN0IG51bWJlciBvZiBnYXBzLlxuICAgICAqL1xuXG5cbiAgICBnZXRHYXBzKGNoZWNrSGFuZExlbmd0aCkge1xuICAgICAgdmFyIHdpbGRDYXJkcywgY2FyZHNUb0NoZWNrLCBpLCBjYXJkLCBnYXBDYXJkcywgY2FyZHNMaXN0LCBnYXBDb3VudCwgcHJldkNhcmQsIGRpZmY7XG4gICAgICB2YXIgc3RyaXBSZXR1cm4gPSBIYW5kLnN0cmlwV2lsZHModGhpcy5jYXJkUG9vbCwgdGhpcy5nYW1lKTtcbiAgICAgIHdpbGRDYXJkcyA9IHN0cmlwUmV0dXJuWzBdO1xuICAgICAgY2FyZHNUb0NoZWNrID0gc3RyaXBSZXR1cm5bMV07XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYXJkc1RvQ2hlY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2FyZCA9IGNhcmRzVG9DaGVja1tpXTtcblxuICAgICAgICBpZiAoY2FyZC53aWxkVmFsdWUgPT09ICdBJykge1xuICAgICAgICAgIGNhcmRzVG9DaGVjay5wdXNoKG5ldyBDYXJkKCcxJyArIGNhcmQuc3VpdCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhcmRzVG9DaGVjayA9IGNhcmRzVG9DaGVjay5zb3J0KENhcmQuc29ydCk7XG5cbiAgICAgIGlmIChjaGVja0hhbmRMZW5ndGgpIHtcbiAgICAgICAgaSA9IGNhcmRzVG9DaGVja1swXS5yYW5rICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrSGFuZExlbmd0aCA9IHRoaXMuZ2FtZS5zZlF1YWxpZnk7XG4gICAgICAgIGkgPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBnYXBDYXJkcyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaSA+IDA7IGktLSkge1xuICAgICAgICBjYXJkc0xpc3QgPSBbXTtcbiAgICAgICAgZ2FwQ291bnQgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2FyZHNUb0NoZWNrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY2FyZCA9IGNhcmRzVG9DaGVja1tqXTtcblxuICAgICAgICAgIGlmIChjYXJkLnJhbmsgPiBpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcmV2Q2FyZCA9IGNhcmRzTGlzdFtjYXJkc0xpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgICAgZGlmZiA9IHByZXZDYXJkID8gcHJldkNhcmQucmFuayAtIGNhcmQucmFuayA6IGkgLSBjYXJkLnJhbms7XG5cbiAgICAgICAgICBpZiAoZGlmZiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY2FyZHNMaXN0LnB1c2goY2FyZCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGVja0hhbmRMZW5ndGggPCBnYXBDb3VudCArIGRpZmYgKyBjYXJkc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgICAgICAgICBjYXJkc0xpc3QucHVzaChjYXJkKTtcbiAgICAgICAgICAgIGdhcENvdW50ICs9IGRpZmYgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXJkc0xpc3QubGVuZ3RoID4gZ2FwQ2FyZHMubGVuZ3RoKSB7XG4gICAgICAgICAgZ2FwQ2FyZHMgPSBjYXJkc0xpc3Quc2xpY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWUuc2ZRdWFsaWZ5IC0gZ2FwQ2FyZHMubGVuZ3RoIDw9IHdpbGRDYXJkcy5sZW5ndGgpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2FwQ2FyZHM7XG4gICAgfVxuXG4gICAgZ2V0V2hlZWwoKSB7XG4gICAgICB2YXIgd2lsZENhcmRzLCBjYXJkc1RvQ2hlY2ssIGksIGNhcmQsIHdoZWVsQ2FyZHMsIHdpbGRDb3VudCwgY2FyZEZvdW5kO1xuICAgICAgdmFyIHN0cmlwUmV0dXJuID0gSGFuZC5zdHJpcFdpbGRzKHRoaXMuY2FyZFBvb2wsIHRoaXMuZ2FtZSk7XG4gICAgICB3aWxkQ2FyZHMgPSBzdHJpcFJldHVyblswXTtcbiAgICAgIGNhcmRzVG9DaGVjayA9IHN0cmlwUmV0dXJuWzFdO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2FyZHNUb0NoZWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhcmQgPSBjYXJkc1RvQ2hlY2tbaV07XG5cbiAgICAgICAgaWYgKGNhcmQud2lsZFZhbHVlID09PSAnQScpIHtcbiAgICAgICAgICBjYXJkc1RvQ2hlY2sucHVzaChuZXcgQ2FyZCgnMScgKyBjYXJkLnN1aXQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYXJkc1RvQ2hlY2sgPSBjYXJkc1RvQ2hlY2suc29ydChDYXJkLnNvcnQpO1xuICAgICAgd2hlZWxDYXJkcyA9IFtdO1xuICAgICAgd2lsZENvdW50ID0gMDtcblxuICAgICAgZm9yIChpID0gdGhpcy5nYW1lLnNmUXVhbGlmeSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNhcmRGb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2FyZHNUb0NoZWNrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY2FyZCA9IGNhcmRzVG9DaGVja1tqXTtcblxuICAgICAgICAgIGlmIChjYXJkLnJhbmsgPiBpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2FyZC5yYW5rIDwgaSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2hlZWxDYXJkcy5wdXNoKGNhcmQpO1xuICAgICAgICAgIGNhcmRGb3VuZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNhcmRGb3VuZCkge1xuICAgICAgICAgIGlmICh3aWxkQ291bnQgPCB3aWxkQ2FyZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aWxkQ2FyZHNbd2lsZENvdW50XS5yYW5rID0gaTtcbiAgICAgICAgICAgIHdpbGRDYXJkc1t3aWxkQ291bnRdLndpbGRWYWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgIHdoZWVsQ2FyZHMucHVzaCh3aWxkQ2FyZHNbd2lsZENvdW50XSk7XG4gICAgICAgICAgICB3aWxkQ291bnQgKz0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2hlZWxDYXJkcztcbiAgICB9XG5cbiAgfVxuXG4gIGNsYXNzIFR3b1RocmVlT2ZBS2luZCBleHRlbmRzIEhhbmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KSB7XG4gICAgICBzdXBlcihjYXJkcywgJ1R3byBUaHJlZSBPZiBhIEtpbmQnLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KTtcbiAgICB9XG5cbiAgICBzb2x2ZSgpIHtcbiAgICAgIHRoaXMucmVzZXRXaWxkQ2FyZHMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2FyZHMgPSB0aGlzLnZhbHVlc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPiAwICYmIHRoaXMuZ2V0TnVtQ2FyZHNCeVJhbmsoaSkgPT09IDMpIHtcbiAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5jYXJkcy5jb25jYXQoY2FyZHMgfHwgW10pO1xuXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLndpbGRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgd2lsZCA9IHRoaXMud2lsZHNbal07XG5cbiAgICAgICAgICAgIGlmICh3aWxkLnJhbmsgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FyZHMpIHtcbiAgICAgICAgICAgICAgd2lsZC5yYW5rID0gY2FyZHNbMF0ucmFuaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYXJkc1swXS5yYW5rID09PSB2YWx1ZXMubGVuZ3RoIC0gMSAmJiB0aGlzLmdhbWUud2lsZFN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB2YWx1ZXMubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aWxkLndpbGRWYWx1ZSA9IHZhbHVlc1t3aWxkLnJhbmtdO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKHdpbGQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLmNvbmNhdCh0aGlzLm5leHRIaWdoZXN0KCkuc2xpY2UoMCwgdGhpcy5nYW1lLmNhcmRzSW5IYW5kIC0gNikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0TnVtQ2FyZHNCeVJhbmsoaSkgPT09IDMpIHtcbiAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5jYXJkcy5jb25jYXQoY2FyZHMpO1xuXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLndpbGRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgd2lsZCA9IHRoaXMud2lsZHNbal07XG5cbiAgICAgICAgICAgIGlmICh3aWxkLnJhbmsgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FyZHMpIHtcbiAgICAgICAgICAgICAgd2lsZC5yYW5rID0gY2FyZHNbMF0ucmFuaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYXJkc1swXS5yYW5rID09PSB2YWx1ZXMubGVuZ3RoIC0gMSAmJiB0aGlzLmdhbWUud2lsZFN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB2YWx1ZXMubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aWxkLndpbGRWYWx1ZSA9IHZhbHVlc1t3aWxkLnJhbmtdO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKHdpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPj0gNikge1xuICAgICAgICB2YXIgdHlwZSA9IHRoaXMuY2FyZHNbMF0udG9TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyAnXFwncyAmICcgKyB0aGlzLmNhcmRzWzNdLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgJ1xcJ3MnO1xuICAgICAgICB0aGlzLmRlc2NyID0gdGhpcy5uYW1lICsgJywgJyArIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNhcmRzLmxlbmd0aCA+PSA2O1xuICAgIH1cblxuICB9XG5cbiAgY2xhc3MgVGhyZWVPZkFLaW5kIGV4dGVuZHMgSGFuZCB7XG4gICAgY29uc3RydWN0b3IoY2FyZHMsIGdhbWUsIGNhbkRpc3F1YWxpZnkpIHtcbiAgICAgIHN1cGVyKGNhcmRzLCAnVGhyZWUgb2YgYSBLaW5kJywgZ2FtZSwgY2FuRGlzcXVhbGlmeSk7XG4gICAgfVxuXG4gICAgc29sdmUoKSB7XG4gICAgICB0aGlzLnJlc2V0V2lsZENhcmRzKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TnVtQ2FyZHNCeVJhbmsoaSkgPT09IDMpIHtcbiAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy52YWx1ZXNbaV0gfHwgW107XG5cbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMud2lsZHMubGVuZ3RoICYmIHRoaXMuY2FyZHMubGVuZ3RoIDwgMzsgaisrKSB7XG4gICAgICAgICAgICB2YXIgd2lsZCA9IHRoaXMud2lsZHNbal07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNhcmRzKSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHRoaXMuY2FyZHNbMF0ucmFuaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aWxkLndpbGRWYWx1ZSA9IHZhbHVlc1t3aWxkLnJhbmtdO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKHdpbGQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLmNvbmNhdCh0aGlzLm5leHRIaWdoZXN0KCkuc2xpY2UoMCwgdGhpcy5nYW1lLmNhcmRzSW5IYW5kIC0gMykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUubm9LaWNrZXJzKSB7XG4gICAgICAgICAgdGhpcy5jYXJkcy5sZW5ndGggPSAzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXNjciA9IHRoaXMubmFtZSArICcsICcgKyB0aGlzLmNhcmRzWzBdLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgJ1xcJ3MnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jYXJkcy5sZW5ndGggPj0gMztcbiAgICB9XG5cbiAgfVxuXG4gIGNsYXNzIFRocmVlUGFpciBleHRlbmRzIEhhbmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KSB7XG4gICAgICBzdXBlcihjYXJkcywgJ1RocmVlIFBhaXInLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KTtcbiAgICB9XG5cbiAgICBzb2x2ZSgpIHtcbiAgICAgIHRoaXMucmVzZXRXaWxkQ2FyZHMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2FyZHMgPSB0aGlzLnZhbHVlc1tpXTtcblxuICAgICAgICBpZiAodGhpcy5jYXJkcy5sZW5ndGggPiAyICYmIHRoaXMuZ2V0TnVtQ2FyZHNCeVJhbmsoaSkgPT09IDIpIHtcbiAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5jYXJkcy5jb25jYXQoY2FyZHMgfHwgW10pO1xuXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLndpbGRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgd2lsZCA9IHRoaXMud2lsZHNbal07XG5cbiAgICAgICAgICAgIGlmICh3aWxkLnJhbmsgIT09IC0xKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FyZHMpIHtcbiAgICAgICAgICAgICAgd2lsZC5yYW5rID0gY2FyZHNbMF0ucmFuaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYXJkc1swXS5yYW5rID09PSB2YWx1ZXMubGVuZ3RoIC0gMSAmJiB0aGlzLmdhbWUud2lsZFN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB2YWx1ZXMubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aWxkLndpbGRWYWx1ZSA9IHZhbHVlc1t3aWxkLnJhbmtdO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKHdpbGQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLmNvbmNhdCh0aGlzLm5leHRIaWdoZXN0KCkuc2xpY2UoMCwgdGhpcy5nYW1lLmNhcmRzSW5IYW5kIC0gNikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID4gMCAmJiB0aGlzLmdldE51bUNhcmRzQnlSYW5rKGkpID09PSAyKSB7XG4gICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KGNhcmRzIHx8IFtdKTtcblxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy53aWxkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIHdpbGQgPSB0aGlzLndpbGRzW2pdO1xuXG4gICAgICAgICAgICBpZiAod2lsZC5yYW5rICE9PSAtMSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhcmRzKSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IGNhcmRzWzBdLnJhbms7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FyZHNbMF0ucmFuayA9PT0gdmFsdWVzLmxlbmd0aCAtIDEgJiYgdGhpcy5nYW1lLndpbGRTdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgd2lsZC5yYW5rID0gdmFsdWVzLmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB2YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2lsZC53aWxkVmFsdWUgPSB2YWx1ZXNbd2lsZC5yYW5rXTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaCh3aWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXROdW1DYXJkc0J5UmFuayhpKSA9PT0gMikge1xuICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLmNvbmNhdChjYXJkcyk7XG5cbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMud2lsZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHZhciB3aWxkID0gdGhpcy53aWxkc1tqXTtcblxuICAgICAgICAgICAgaWYgKHdpbGQucmFuayAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYXJkcykge1xuICAgICAgICAgICAgICB3aWxkLnJhbmsgPSBjYXJkc1swXS5yYW5rO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhcmRzWzBdLnJhbmsgPT09IHZhbHVlcy5sZW5ndGggLSAxICYmIHRoaXMuZ2FtZS53aWxkU3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2lsZC5yYW5rID0gdmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbGQud2lsZFZhbHVlID0gdmFsdWVzW3dpbGQucmFua107XG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2god2lsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA+PSA2KSB7XG4gICAgICAgIHZhciB0eXBlID0gdGhpcy5jYXJkc1swXS50b1N0cmluZygpLnNsaWNlKDAsIC0xKSArICdcXCdzICYgJyArIHRoaXMuY2FyZHNbMl0udG9TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyAnXFwncyAmICcgKyB0aGlzLmNhcmRzWzRdLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgJ1xcJ3MnO1xuICAgICAgICB0aGlzLmRlc2NyID0gdGhpcy5uYW1lICsgJywgJyArIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNhcmRzLmxlbmd0aCA+PSA2O1xuICAgIH1cblxuICB9XG5cbiAgY2xhc3MgVHdvUGFpciBleHRlbmRzIEhhbmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KSB7XG4gICAgICBzdXBlcihjYXJkcywgJ1R3byBQYWlyJywgZ2FtZSwgY2FuRGlzcXVhbGlmeSk7XG4gICAgfVxuXG4gICAgc29sdmUoKSB7XG4gICAgICB0aGlzLnJlc2V0V2lsZENhcmRzKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNhcmRzID0gdGhpcy52YWx1ZXNbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID4gMCAmJiB0aGlzLmdldE51bUNhcmRzQnlSYW5rKGkpID09PSAyKSB7XG4gICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KGNhcmRzIHx8IFtdKTtcblxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy53aWxkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIHdpbGQgPSB0aGlzLndpbGRzW2pdO1xuXG4gICAgICAgICAgICBpZiAod2lsZC5yYW5rICE9PSAtMSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhcmRzKSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IGNhcmRzWzBdLnJhbms7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FyZHNbMF0ucmFuayA9PT0gdmFsdWVzLmxlbmd0aCAtIDEgJiYgdGhpcy5nYW1lLndpbGRTdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgd2lsZC5yYW5rID0gdmFsdWVzLmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB2YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2lsZC53aWxkVmFsdWUgPSB2YWx1ZXNbd2lsZC5yYW5rXTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaCh3aWxkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5jYXJkcy5jb25jYXQodGhpcy5uZXh0SGlnaGVzdCgpLnNsaWNlKDAsIHRoaXMuZ2FtZS5jYXJkc0luSGFuZCAtIDQpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldE51bUNhcmRzQnlSYW5rKGkpID09PSAyKSB7XG4gICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY2FyZHMuY29uY2F0KGNhcmRzKTtcblxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy53aWxkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIHdpbGQgPSB0aGlzLndpbGRzW2pdO1xuXG4gICAgICAgICAgICBpZiAod2lsZC5yYW5rICE9PSAtMSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhcmRzKSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IGNhcmRzWzBdLnJhbms7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FyZHNbMF0ucmFuayA9PT0gdmFsdWVzLmxlbmd0aCAtIDEgJiYgdGhpcy5nYW1lLndpbGRTdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgd2lsZC5yYW5rID0gdmFsdWVzLmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aWxkLnJhbmsgPSB2YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2lsZC53aWxkVmFsdWUgPSB2YWx1ZXNbd2lsZC5yYW5rXTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaCh3aWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FyZHMubGVuZ3RoID49IDQpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5ub0tpY2tlcnMpIHtcbiAgICAgICAgICB0aGlzLmNhcmRzLmxlbmd0aCA9IDQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHlwZSA9IHRoaXMuY2FyZHNbMF0udG9TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyAnXFwncyAmICcgKyB0aGlzLmNhcmRzWzJdLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgJ1xcJ3MnO1xuICAgICAgICB0aGlzLmRlc2NyID0gdGhpcy5uYW1lICsgJywgJyArIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNhcmRzLmxlbmd0aCA+PSA0O1xuICAgIH1cblxuICB9XG5cbiAgY2xhc3MgT25lUGFpciBleHRlbmRzIEhhbmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRzLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KSB7XG4gICAgICBzdXBlcihjYXJkcywgJ1BhaXInLCBnYW1lLCBjYW5EaXNxdWFsaWZ5KTtcbiAgICB9XG5cbiAgICBzb2x2ZSgpIHtcbiAgICAgIHRoaXMucmVzZXRXaWxkQ2FyZHMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nZXROdW1DYXJkc0J5UmFuayhpKSA9PT0gMikge1xuICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLmNvbmNhdCh0aGlzLnZhbHVlc1tpXSB8fCBbXSk7XG5cbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMud2lsZHMubGVuZ3RoICYmIHRoaXMuY2FyZHMubGVuZ3RoIDwgMjsgaisrKSB7XG4gICAgICAgICAgICB2YXIgd2lsZCA9IHRoaXMud2lsZHNbal07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNhcmRzKSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHRoaXMuY2FyZHNbMF0ucmFuaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpbGQucmFuayA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aWxkLndpbGRWYWx1ZSA9IHZhbHVlc1t3aWxkLnJhbmtdO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKHdpbGQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLmNvbmNhdCh0aGlzLm5leHRIaWdoZXN0KCkuc2xpY2UoMCwgdGhpcy5nYW1lLmNhcmRzSW5IYW5kIC0gMikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhcmRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUubm9LaWNrZXJzKSB7XG4gICAgICAgICAgdGhpcy5jYXJkcy5sZW5ndGggPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXNjciA9IHRoaXMubmFtZSArICcsICcgKyB0aGlzLmNhcmRzWzBdLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgJ1xcJ3MnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jYXJkcy5sZW5ndGggPj0gMjtcbiAgICB9XG5cbiAgfVxuXG4gIGNsYXNzIEhpZ2hDYXJkIGV4dGVuZHMgSGFuZCB7XG4gICAgY29uc3RydWN0b3IoY2FyZHMsIGdhbWUsIGNhbkRpc3F1YWxpZnkpIHtcbiAgICAgIHN1cGVyKGNhcmRzLCAnSGlnaCBDYXJkJywgZ2FtZSwgY2FuRGlzcXVhbGlmeSk7XG4gICAgfVxuXG4gICAgc29sdmUoKSB7XG4gICAgICB0aGlzLmNhcmRzID0gdGhpcy5jYXJkUG9vbC5zbGljZSgwLCB0aGlzLmdhbWUuY2FyZHNJbkhhbmQpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNhcmQgPSB0aGlzLmNhcmRzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmNhcmRzW2ldLnZhbHVlID09PSB0aGlzLmdhbWUud2lsZFZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5jYXJkc1tpXS53aWxkVmFsdWUgPSAnQSc7XG4gICAgICAgICAgdGhpcy5jYXJkc1tpXS5yYW5rID0gdmFsdWVzLmluZGV4T2YoJ0EnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5nYW1lLm5vS2lja2Vycykge1xuICAgICAgICB0aGlzLmNhcmRzLmxlbmd0aCA9IDE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2FyZHMgPSB0aGlzLmNhcmRzLnNvcnQoQ2FyZC5zb3J0KTtcbiAgICAgIHRoaXMuZGVzY3IgPSB0aGlzLmNhcmRzWzBdLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgJyBIaWdoJztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICB9XG4gIC8qXG4gICAqIEJhc2UgY2xhc3MgZm9yIGhhbmRsaW5nIFBhaSBHb3cgUG9rZXIgaGFuZHMuXG4gICAqIEhvdXNlIFdheSBpcyBpbiBhY2NvcmRhbmNlIHdpdGggdGhlIE1HTSBHcmFuZCBDYXNpbm8sIExhcyBWZWdhcyBOVi5cbiAgICogaHR0cDovL3dpemFyZG9mb2Rkcy5jb20vZ2FtZXMvcGFpLWdvdy1wb2tlci9ob3VzZS13YXkvbWdtL1xuICAgKiBFWENFUFRJT046IFdpdGggRm91ciBvZiBhIEtpbmQgYW5kIFMvRiwgcHJlc2VydmUgdGhlIFMvRiwganVzdCBsaWtlIFRocmVlIG9mIGEgS2luZC5cbiAgICovXG5cblxuICBjbGFzcyBQYWlHb3dQb2tlckhlbHBlciB7XG4gICAgLypcbiAgICAgKiBDb25zdHJ1Y3RvciBjbGFzcy5cbiAgICAgKiBAcGFyYW0ge0hhbmR9IGhhbmQgU29sdmVkIGhhbmQgYWdhaW5zdCBHYW1lICdwYWlnb3dwb2tlcmZ1bGwnLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGhhbmQpIHtcbiAgICAgIHRoaXMuYmFzZUhhbmQgPSBudWxsO1xuICAgICAgdGhpcy5oaUhhbmQgPSBudWxsO1xuICAgICAgdGhpcy5sb0hhbmQgPSBudWxsO1xuICAgICAgdGhpcy5nYW1lID0gbnVsbDtcbiAgICAgIHRoaXMubG9HYW1lID0gbmV3IEdhbWUoJ3BhaWdvd3Bva2VybG8nKTtcbiAgICAgIHRoaXMuaGlHYW1lID0gbmV3IEdhbWUoJ3BhaWdvd3Bva2VyaGknKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGFuZCkpIHtcbiAgICAgICAgdGhpcy5iYXNlSGFuZCA9IEhhbmQuc29sdmUoaGFuZCwgbmV3IEdhbWUoJ3BhaWdvd3Bva2VyZnVsbCcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmFzZUhhbmQgPSBoYW5kO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmdhbWUgPSB0aGlzLmJhc2VIYW5kLmdhbWU7XG4gICAgfVxuICAgIC8qXG4gICAgICogU2V0IGEgZnVsbCBoYW5kIGludG8gaGlnaCBhbmQgbG93IGhhbmRzLCBhY2NvcmRpbmcgdG8gSG91c2UgV2F5LlxuICAgICAqL1xuXG5cbiAgICBzcGxpdEhvdXNlV2F5KCkge1xuICAgICAgdmFyIGhpQ2FyZHMsIGxvQ2FyZHM7XG4gICAgICB2YXIgcmFuayA9IHRoaXMuZ2FtZS5oYW5kVmFsdWVzLmxlbmd0aCAtIHRoaXMuYmFzZUhhbmQucmFuaztcbiAgICAgIHZhciBoYW5kVmFsdWUgPSB0aGlzLmdhbWUuaGFuZFZhbHVlc1tyYW5rXTtcblxuICAgICAgaWYgKGhhbmRWYWx1ZSA9PT0gRml2ZU9mQUtpbmQpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFzZUhhbmQuY2FyZHNbNV0udmFsdWUgPT09ICdLJyAmJiB0aGlzLmJhc2VIYW5kLmNhcmRzWzZdLnZhbHVlID09PSAnSycpIHtcbiAgICAgICAgICBsb0NhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSg1LCA3KTtcbiAgICAgICAgICBoaUNhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSgwLCA1KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb0NhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSgwLCAyKTtcbiAgICAgICAgICBoaUNhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSgyLCA3KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChoYW5kVmFsdWUgPT09IEZvdXJPZkFLaW5kUGFpclBsdXMpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFzZUhhbmQuY2FyZHNbMF0ud2lsZFZhbHVlID09PSAnQScgJiYgdGhpcy5iYXNlSGFuZC5jYXJkc1s0XS52YWx1ZSAhPT0gJ0snKSB7XG4gICAgICAgICAgaGlDYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoMCwgMik7XG4gICAgICAgICAgbG9DYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoMiwgNCk7XG4gICAgICAgICAgaGlDYXJkcyA9IGhpQ2FyZHMuY29uY2F0KHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoNCwgNykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhpQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDAsIDQpO1xuICAgICAgICAgIGxvQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDQsIDYpO1xuICAgICAgICAgIGhpQ2FyZHMucHVzaCh0aGlzLmJhc2VIYW5kLmNhcmRzWzZdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChoYW5kVmFsdWUgPT09IFN0cmFpZ2h0Rmx1c2ggfHwgaGFuZFZhbHVlID09PSBGbHVzaCB8fCBoYW5kVmFsdWUgPT09IFN0cmFpZ2h0KSB7XG4gICAgICAgIHZhciBzZlJldHVybjtcbiAgICAgICAgdmFyIGFsdEdhbWUgPSBuZXcgR2FtZSgncGFpZ293cG9rZXJhbHQnKTtcbiAgICAgICAgdmFyIGFsdEhhbmQgPSBIYW5kLnNvbHZlKHRoaXMuYmFzZUhhbmQuY2FyZHMsIGFsdEdhbWUpO1xuICAgICAgICB2YXIgYWx0UmFuayA9IGFsdEdhbWUuaGFuZFZhbHVlcy5sZW5ndGggLSBhbHRIYW5kLnJhbms7XG5cbiAgICAgICAgaWYgKGFsdEdhbWUuaGFuZFZhbHVlc1thbHRSYW5rXSA9PT0gRm91ck9mQUtpbmQpIHtcbiAgICAgICAgICBzZlJldHVybiA9IHRoaXMuZ2V0U0ZEYXRhKGFsdEhhbmQuY2FyZHMpO1xuICAgICAgICAgIGhpQ2FyZHMgPSBzZlJldHVyblswXTtcbiAgICAgICAgICBsb0NhcmRzID0gc2ZSZXR1cm5bMV07XG4gICAgICAgIH0gZWxzZSBpZiAoYWx0R2FtZS5oYW5kVmFsdWVzW2FsdFJhbmtdID09PSBGdWxsSG91c2UpIHtcbiAgICAgICAgICBoaUNhcmRzID0gYWx0SGFuZC5jYXJkcy5zbGljZSgwLCAzKTtcbiAgICAgICAgICBsb0NhcmRzID0gYWx0SGFuZC5jYXJkcy5zbGljZSgzLCA1KTtcbiAgICAgICAgICBoaUNhcmRzID0gaGlDYXJkcy5jb25jYXQoYWx0SGFuZC5jYXJkcy5zbGljZSg1LCA3KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWx0R2FtZS5oYW5kVmFsdWVzW2FsdFJhbmtdID09PSBUaHJlZU9mQUtpbmQpIHtcbiAgICAgICAgICBzZlJldHVybiA9IHRoaXMuZ2V0U0ZEYXRhKGFsdEhhbmQuY2FyZHMpO1xuICAgICAgICAgIGhpQ2FyZHMgPSBzZlJldHVyblswXTtcbiAgICAgICAgICBsb0NhcmRzID0gc2ZSZXR1cm5bMV07XG4gICAgICAgIH0gZWxzZSBpZiAoYWx0R2FtZS5oYW5kVmFsdWVzW2FsdFJhbmtdID09PSBUaHJlZVBhaXIpIHtcbiAgICAgICAgICBsb0NhcmRzID0gYWx0SGFuZC5jYXJkcy5zbGljZSgwLCAyKTtcbiAgICAgICAgICBoaUNhcmRzID0gYWx0SGFuZC5jYXJkcy5zbGljZSgyLCA3KTtcbiAgICAgICAgfSBlbHNlIGlmIChhbHRHYW1lLmhhbmRWYWx1ZXNbYWx0UmFua10gPT09IFR3b1BhaXIpIHtcbiAgICAgICAgICBpZiAoYWx0SGFuZC5jYXJkc1swXS5yYW5rIDwgNikge1xuICAgICAgICAgICAgaWYgKGFsdEhhbmQuY2FyZHNbNF0ud2lsZFZhbHVlID09PSAnQScpIHtcbiAgICAgICAgICAgICAgaGlDYXJkcyA9IGFsdEhhbmQuY2FyZHMuc2xpY2UoMCwgNCk7XG4gICAgICAgICAgICAgIGxvQ2FyZHMgPSBhbHRIYW5kLmNhcmRzLnNsaWNlKDQsIDYpO1xuICAgICAgICAgICAgICBoaUNhcmRzLnB1c2goYWx0SGFuZC5jYXJkc1s2XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZlJldHVybiA9IHRoaXMuZ2V0U0ZEYXRhKGFsdEhhbmQuY2FyZHMpO1xuICAgICAgICAgICAgICBoaUNhcmRzID0gc2ZSZXR1cm5bMF07XG4gICAgICAgICAgICAgIGxvQ2FyZHMgPSBzZlJldHVyblsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGFsdEhhbmQuY2FyZHNbMF0ucmFuayA8IDEwKSB7XG4gICAgICAgICAgICBpZiAoYWx0SGFuZC5jYXJkc1s0XS53aWxkVmFsdWUgPT09ICdBJykge1xuICAgICAgICAgICAgICBoaUNhcmRzID0gYWx0SGFuZC5jYXJkcy5zbGljZSgwLCA0KTtcbiAgICAgICAgICAgICAgbG9DYXJkcyA9IGFsdEhhbmQuY2FyZHMuc2xpY2UoNCwgNik7XG4gICAgICAgICAgICAgIGhpQ2FyZHMucHVzaChhbHRIYW5kLmNhcmRzWzZdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhpQ2FyZHMgPSBhbHRIYW5kLmNhcmRzLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgICBsb0NhcmRzID0gYWx0SGFuZC5jYXJkcy5zbGljZSgyLCA0KTtcbiAgICAgICAgICAgICAgaGlDYXJkcyA9IGhpQ2FyZHMuY29uY2F0KGFsdEhhbmQuY2FyZHMuc2xpY2UoNCwgNykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoYWx0SGFuZC5jYXJkc1swXS53aWxkVmFsdWUgIT09ICdBJyAmJiBhbHRIYW5kLmNhcmRzWzJdLnJhbmsgPCA2ICYmIGFsdEhhbmQuY2FyZHNbNF0ud2lsZFZhbHVlID09PSAnQScpIHtcbiAgICAgICAgICAgIGhpQ2FyZHMgPSBhbHRIYW5kLmNhcmRzLnNsaWNlKDAsIDQpO1xuICAgICAgICAgICAgbG9DYXJkcyA9IGFsdEhhbmQuY2FyZHMuc2xpY2UoNCwgNik7XG4gICAgICAgICAgICBoaUNhcmRzLnB1c2goYWx0SGFuZC5jYXJkc1s2XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhpQ2FyZHMgPSBhbHRIYW5kLmNhcmRzLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgbG9DYXJkcyA9IGFsdEhhbmQuY2FyZHMuc2xpY2UoMiwgNCk7XG4gICAgICAgICAgICBoaUNhcmRzID0gaGlDYXJkcy5jb25jYXQoYWx0SGFuZC5jYXJkcy5zbGljZSg0LCA3KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGFsdEdhbWUuaGFuZFZhbHVlc1thbHRSYW5rXSA9PT0gT25lUGFpcikge1xuICAgICAgICAgIGlmIChhbHRIYW5kLmNhcmRzWzBdLnJhbmsgPj0gdmFsdWVzLmluZGV4T2YoJ1QnKSAmJiBhbHRIYW5kLmNhcmRzWzBdLnJhbmsgPD0gdmFsdWVzLmluZGV4T2YoJ0snKSAmJiBhbHRIYW5kLmNhcmRzWzJdLndpbGRWYWx1ZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgICB2YXIgcG9zc2libGVTRiA9IGFsdEhhbmQuY2FyZHMuc2xpY2UoMCwgMik7XG4gICAgICAgICAgICBwb3NzaWJsZVNGID0gcG9zc2libGVTRi5jb25jYXQoYWx0SGFuZC5jYXJkcy5zbGljZSgzLCA3KSk7XG4gICAgICAgICAgICBzZlJldHVybiA9IHRoaXMuZ2V0U0ZEYXRhKHBvc3NpYmxlU0YpO1xuXG4gICAgICAgICAgICBpZiAoc2ZSZXR1cm5bMF0pIHtcbiAgICAgICAgICAgICAgaGlDYXJkcyA9IHNmUmV0dXJuWzBdO1xuICAgICAgICAgICAgICBsb0NhcmRzID0gc2ZSZXR1cm5bMV07XG4gICAgICAgICAgICAgIGxvQ2FyZHMucHVzaChhbHRIYW5kLmNhcmRzWzJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhpQ2FyZHMgPSBhbHRIYW5kLmNhcmRzLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgICBsb0NhcmRzID0gYWx0SGFuZC5jYXJkcy5zbGljZSgyLCA0KTtcbiAgICAgICAgICAgICAgaGlDYXJkcyA9IGhpQ2FyZHMuY29uY2F0KGFsdEhhbmQuY2FyZHMuc2xpY2UoNCwgNykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZlJldHVybiA9IHRoaXMuZ2V0U0ZEYXRhKGFsdEhhbmQuY2FyZHMuc2xpY2UoMiwgNykpO1xuXG4gICAgICAgICAgICBpZiAoc2ZSZXR1cm5bMF0pIHtcbiAgICAgICAgICAgICAgaGlDYXJkcyA9IHNmUmV0dXJuWzBdO1xuICAgICAgICAgICAgICBsb0NhcmRzID0gYWx0SGFuZC5jYXJkcy5zbGljZSgwLCAyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNmUmV0dXJuID0gdGhpcy5nZXRTRkRhdGEoYWx0SGFuZC5jYXJkcyk7XG4gICAgICAgICAgICAgIGhpQ2FyZHMgPSBzZlJldHVyblswXTtcbiAgICAgICAgICAgICAgbG9DYXJkcyA9IHNmUmV0dXJuWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZlJldHVybiA9IHRoaXMuZ2V0U0ZEYXRhKGFsdEhhbmQuY2FyZHMpO1xuICAgICAgICAgIGhpQ2FyZHMgPSBzZlJldHVyblswXTtcbiAgICAgICAgICBsb0NhcmRzID0gc2ZSZXR1cm5bMV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaGFuZFZhbHVlID09PSBGb3VyT2ZBS2luZCkge1xuICAgICAgICBpZiAodGhpcy5iYXNlSGFuZC5jYXJkc1swXS5yYW5rIDwgNikge1xuICAgICAgICAgIGhpQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDAsIDQpO1xuICAgICAgICAgIGxvQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDQsIDYpO1xuICAgICAgICAgIGhpQ2FyZHMucHVzaCh0aGlzLmJhc2VIYW5kLmNhcmRzWzZdKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhc2VIYW5kLmNhcmRzWzBdLnJhbmsgPCAxMCAmJiB0aGlzLmJhc2VIYW5kLmNhcmRzWzRdLndpbGRWYWx1ZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgaGlDYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoMCwgNCk7XG4gICAgICAgICAgbG9DYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoNCwgNik7XG4gICAgICAgICAgaGlDYXJkcy5wdXNoKHRoaXMuYmFzZUhhbmQuY2FyZHNbNl0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhpQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDAsIDIpO1xuICAgICAgICAgIGxvQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDIsIDQpO1xuICAgICAgICAgIGhpQ2FyZHMgPSBoaUNhcmRzLmNvbmNhdCh0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDQsIDcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChoYW5kVmFsdWUgPT09IFR3b1RocmVlT2ZBS2luZCkge1xuICAgICAgICBsb0NhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSgwLCAyKTtcbiAgICAgICAgaGlDYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoMywgNik7XG4gICAgICAgIGhpQ2FyZHMucHVzaCh0aGlzLmJhc2VIYW5kLmNhcmRzWzJdKTtcbiAgICAgICAgaGlDYXJkcy5wdXNoKHRoaXMuYmFzZUhhbmQuY2FyZHNbNl0pO1xuICAgICAgfSBlbHNlIGlmIChoYW5kVmFsdWUgPT09IFRocmVlT2ZBS2luZFR3b1BhaXIpIHtcbiAgICAgICAgaGlDYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoMCwgMyk7XG4gICAgICAgIGxvQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDMsIDUpO1xuICAgICAgICBoaUNhcmRzID0gaGlDYXJkcy5jb25jYXQodGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSg1LCA3KSk7XG4gICAgICB9IGVsc2UgaWYgKGhhbmRWYWx1ZSA9PT0gRnVsbEhvdXNlKSB7XG4gICAgICAgIGlmICh0aGlzLmJhc2VIYW5kLmNhcmRzWzNdLndpbGRWYWx1ZSA9PT0gJzInICYmIHRoaXMuYmFzZUhhbmQuY2FyZHNbNV0ud2lsZFZhbHVlID09PSAnQScgJiYgdGhpcy5iYXNlSGFuZC5jYXJkc1s2XS53aWxkVmFsdWUgPT09ICdLJykge1xuICAgICAgICAgIGhpQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDAsIDUpO1xuICAgICAgICAgIGxvQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDUsIDcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhpQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDAsIDMpO1xuICAgICAgICAgIGxvQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDMsIDUpO1xuICAgICAgICAgIGhpQ2FyZHMgPSBoaUNhcmRzLmNvbmNhdCh0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDUsIDcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChoYW5kVmFsdWUgPT09IFRocmVlT2ZBS2luZCkge1xuICAgICAgICBpZiAodGhpcy5iYXNlSGFuZC5jYXJkc1swXS53aWxkVmFsdWUgPT09ICdBJykge1xuICAgICAgICAgIGhpQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDAsIDIpO1xuICAgICAgICAgIGxvQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDIsIDQpO1xuICAgICAgICAgIGhpQ2FyZHMgPSBoaUNhcmRzLmNvbmNhdCh0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDQsIDcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoaUNhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSgwLCAzKTtcbiAgICAgICAgICBsb0NhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSgzLCA1KTtcbiAgICAgICAgICBoaUNhcmRzID0gaGlDYXJkcy5jb25jYXQodGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSg1LCA3KSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaGFuZFZhbHVlID09PSBUaHJlZVBhaXIpIHtcbiAgICAgICAgbG9DYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoMCwgMik7XG4gICAgICAgIGhpQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDIsIDcpO1xuICAgICAgfSBlbHNlIGlmIChoYW5kVmFsdWUgPT09IFR3b1BhaXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFzZUhhbmQuY2FyZHNbMF0ucmFuayA8IDYpIHtcbiAgICAgICAgICBoaUNhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSgwLCA0KTtcbiAgICAgICAgICBsb0NhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSg0LCA2KTtcbiAgICAgICAgICBoaUNhcmRzLnB1c2godGhpcy5iYXNlSGFuZC5jYXJkc1s2XSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYXNlSGFuZC5jYXJkc1swXS5yYW5rIDwgMTApIHtcbiAgICAgICAgICBpZiAodGhpcy5iYXNlSGFuZC5jYXJkc1s0XS53aWxkVmFsdWUgPT09ICdBJykge1xuICAgICAgICAgICAgaGlDYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoMCwgNCk7XG4gICAgICAgICAgICBsb0NhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSg0LCA2KTtcbiAgICAgICAgICAgIGhpQ2FyZHMucHVzaCh0aGlzLmJhc2VIYW5kLmNhcmRzWzZdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGlDYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoMCwgMik7XG4gICAgICAgICAgICBsb0NhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSgyLCA0KTtcbiAgICAgICAgICAgIGhpQ2FyZHMgPSBoaUNhcmRzLmNvbmNhdCh0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDQsIDcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYXNlSGFuZC5jYXJkc1swXS53aWxkVmFsdWUgIT09ICdBJyAmJiB0aGlzLmJhc2VIYW5kLmNhcmRzWzJdLnJhbmsgPCA2ICYmIHRoaXMuYmFzZUhhbmQuY2FyZHNbNF0ud2lsZFZhbHVlID09PSAnQScpIHtcbiAgICAgICAgICBoaUNhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSgwLCA0KTtcbiAgICAgICAgICBsb0NhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSg0LCA2KTtcbiAgICAgICAgICBoaUNhcmRzLnB1c2godGhpcy5iYXNlSGFuZC5jYXJkc1s2XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGlDYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoMCwgMik7XG4gICAgICAgICAgbG9DYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoMiwgNCk7XG4gICAgICAgICAgaGlDYXJkcyA9IGhpQ2FyZHMuY29uY2F0KHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoNCwgNykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGhhbmRWYWx1ZSA9PT0gT25lUGFpcikge1xuICAgICAgICBoaUNhcmRzID0gdGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSgwLCAyKTtcbiAgICAgICAgbG9DYXJkcyA9IHRoaXMuYmFzZUhhbmQuY2FyZHMuc2xpY2UoMiwgNCk7XG4gICAgICAgIGhpQ2FyZHMgPSBoaUNhcmRzLmNvbmNhdCh0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDQsIDcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpQ2FyZHMgPSBbdGhpcy5iYXNlSGFuZC5jYXJkc1swXV07XG4gICAgICAgIGxvQ2FyZHMgPSB0aGlzLmJhc2VIYW5kLmNhcmRzLnNsaWNlKDEsIDMpO1xuICAgICAgICBoaUNhcmRzID0gaGlDYXJkcy5jb25jYXQodGhpcy5iYXNlSGFuZC5jYXJkcy5zbGljZSgzLCA3KSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGlIYW5kID0gSGFuZC5zb2x2ZShoaUNhcmRzLCB0aGlzLmhpR2FtZSk7XG4gICAgICB0aGlzLmxvSGFuZCA9IEhhbmQuc29sdmUobG9DYXJkcywgdGhpcy5sb0dhbWUpO1xuICAgIH1cbiAgICAvKlxuICAgICAqIERldGVybWluZSB0aGUgYmVzdCBwb3NzaWJsZSBTdHJhaWdodCBhbmQvb3IgRmx1c2guXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGNhcmRzIDUtNyBDYXJkIG9iamVjdHMgdG8gY2hlY2suXG4gICAgICogQHJldHVybiB7QXJyYXl9IFtoaUNhcmRzLCBsb0NhcmRzXSBIaWdoIGFuZCBMb3cgY29tcG9uZW50cywgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBnZXRTRkRhdGEoY2FyZHMpIHtcbiAgICAgIHZhciBoaUNhcmRzLCBwb3NzaWJsZUxvQ2FyZHMsIGJlc3RMb0NhcmRzLCBiZXN0SGFuZDtcbiAgICAgIHZhciBoYW5kc1RvQ2hlY2sgPSBbbmV3IFN0cmFpZ2h0Rmx1c2goY2FyZHMsIG5ldyBHYW1lKCdwYWlnb3dwb2tlcnNmNycpKSwgbmV3IFN0cmFpZ2h0Rmx1c2goY2FyZHMsIG5ldyBHYW1lKCdwYWlnb3dwb2tlcnNmNicpKSwgbmV3IFN0cmFpZ2h0Rmx1c2goY2FyZHMsIHRoaXMuZ2FtZSksIG5ldyBGbHVzaChjYXJkcywgbmV3IEdhbWUoJ3BhaWdvd3Bva2Vyc2Y3JykpLCBuZXcgRmx1c2goY2FyZHMsIG5ldyBHYW1lKCdwYWlnb3dwb2tlcnNmNicpKSwgbmV3IEZsdXNoKGNhcmRzLCB0aGlzLmdhbWUpLCBuZXcgU3RyYWlnaHQoY2FyZHMsIG5ldyBHYW1lKCdwYWlnb3dwb2tlcnNmNycpKSwgbmV3IFN0cmFpZ2h0KGNhcmRzLCBuZXcgR2FtZSgncGFpZ293cG9rZXJzZjYnKSksIG5ldyBTdHJhaWdodChjYXJkcywgdGhpcy5nYW1lKV07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZHNUb0NoZWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBoYW5kID0gaGFuZHNUb0NoZWNrW2ldO1xuXG4gICAgICAgIGlmIChoYW5kLmlzUG9zc2libGUpIHtcbiAgICAgICAgICBpZiAoaGFuZC5zZkxlbmd0aCA9PT0gNykge1xuICAgICAgICAgICAgcG9zc2libGVMb0NhcmRzID0gW2hhbmQuY2FyZHNbMF0sIGhhbmQuY2FyZHNbMV1dO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFuZC5zZkxlbmd0aCA9PT0gNikge1xuICAgICAgICAgICAgcG9zc2libGVMb0NhcmRzID0gW2hhbmQuY2FyZHNbMF1dO1xuXG4gICAgICAgICAgICBpZiAoY2FyZHMubGVuZ3RoID4gNikge1xuICAgICAgICAgICAgICBwb3NzaWJsZUxvQ2FyZHMucHVzaChoYW5kLmNhcmRzWzZdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGNhcmRzLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgICAgIHBvc3NpYmxlTG9DYXJkcyA9IFtoYW5kLmNhcmRzWzVdXTtcblxuICAgICAgICAgICAgaWYgKGNhcmRzLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICAgICAgcG9zc2libGVMb0NhcmRzLnB1c2goaGFuZC5jYXJkc1s2XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHBvc3NpYmxlTG9DYXJkcykge1xuICAgICAgICAgICAgcG9zc2libGVMb0NhcmRzID0gcG9zc2libGVMb0NhcmRzLnNvcnQoQ2FyZC5zb3J0KTtcblxuICAgICAgICAgICAgaWYgKCFiZXN0TG9DYXJkcyB8fCBiZXN0TG9DYXJkc1swXS5yYW5rIDwgcG9zc2libGVMb0NhcmRzWzBdLnJhbmsgfHwgYmVzdExvQ2FyZHMubGVuZ3RoID4gMSAmJiBiZXN0TG9DYXJkc1swXS5yYW5rID09PSBwb3NzaWJsZUxvQ2FyZHNbMF0ucmFuayAmJiBiZXN0TG9DYXJkc1sxXS5yYW5rIDwgcG9zc2libGVMb0NhcmRzWzFdLnJhbmspIHtcbiAgICAgICAgICAgICAgYmVzdExvQ2FyZHMgPSBwb3NzaWJsZUxvQ2FyZHM7XG4gICAgICAgICAgICAgIGJlc3RIYW5kID0gaGFuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCFiZXN0SGFuZCkge1xuICAgICAgICAgICAgYmVzdEhhbmQgPSBoYW5kO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChiZXN0SGFuZCkge1xuICAgICAgICBpZiAoYmVzdEhhbmQuc2ZMZW5ndGggPT09IDcpIHtcbiAgICAgICAgICBoaUNhcmRzID0gYmVzdEhhbmQuY2FyZHMuc2xpY2UoMiwgNyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYmVzdEhhbmQuc2ZMZW5ndGggPT09IDYpIHtcbiAgICAgICAgICBoaUNhcmRzID0gYmVzdEhhbmQuY2FyZHMuc2xpY2UoMSwgNik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGlDYXJkcyA9IGJlc3RIYW5kLmNhcmRzLnNsaWNlKDAsIDUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbaGlDYXJkcywgYmVzdExvQ2FyZHNdO1xuICAgIH1cbiAgICAvKlxuICAgICAqIERldGVybWluZSBpZiB0aGUgc2V0dGluZyBvZiB0aGUgaGFuZHMgaXMgdmFsaWQuIEhpIG11c3QgYmUgaGlnaGVyIHRoYW4gbG8uXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgcXVhbGlmaWVzVmFsaWQoKSB7XG4gICAgICB2YXIgY29tcGFyZUhhbmRzID0gSGFuZC53aW5uZXJzKFt0aGlzLmhpSGFuZCwgdGhpcy5sb0hhbmRdKTtcbiAgICAgIHJldHVybiAhKGNvbXBhcmVIYW5kcy5sZW5ndGggPT09IDEgJiYgY29tcGFyZUhhbmRzWzBdID09PSB0aGlzLmxvSGFuZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmQgd2hpY2ggb2YgdHdvIHNwbGl0IGhhbmRzIGlzIGJlc3QsIGFjY29yZGluZyB0byBydWxlcy5cbiAgICAgKiBAcGFyYW0gIHtQYWlHb3dQb2tlckhlbHBlcn0gcGxheWVyIFBsYXllciBoYW5kIHRvIGV2YWx1YXRlLiBNdXN0IGJlIHNldC5cbiAgICAgKiBAcGFyYW0gIHtQYWlHb3dQb2tlckhlbHBlcn0gYmFua2VyIEJhbmtlciBoYW5kIHRvIGV2YWx1YXRlLiBNdXN0IGJlIHNldC5cbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICAgICAgICAgICAgd2lubmVyIFdpbm5pbmcgcGFydHksIGlmIGFueS5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllciA9IDEsIEJhbmtlciA9IC0xLCBQdXNoID0gMFxuICAgICAqL1xuXG5cbiAgICBzdGF0aWMgd2lubmVycyhwbGF5ZXIsIGJhbmtlcikge1xuICAgICAgaWYgKCFwbGF5ZXIucXVhbGlmaWVzVmFsaWQoKSkge1xuICAgICAgICBpZiAoYmFua2VyLnF1YWxpZmllc1ZhbGlkKCkpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gLy8gUHJvYmFibHkgc2hvdWxkbid0IGdldCBoZXJlIGJlY2F1c2UgdGhlIGRlYWxlciBtdXN0IHNldCBob3VzZSB3YXkuXG4gICAgICAgIC8vIEhvd2V2ZXIsIHdlJ2xsIHN0aWxsIGhhdmUgaXQgYXMgYSBzYW5pdHkgY2hlY2ssIGp1c3QgaW4gY2FzZS5cblxuXG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWJhbmtlci5xdWFsaWZpZXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGlXaW5uZXIgPSBIYW5kLndpbm5lcnMoW3BsYXllci5oaUhhbmQsIGJhbmtlci5oaUhhbmRdKTtcbiAgICAgIHZhciBsb1dpbm5lciA9IEhhbmQud2lubmVycyhbcGxheWVyLmxvSGFuZCwgYmFua2VyLmxvSGFuZF0pOyAvLyBJbiBQYWkgR293IFBva2VyLCBCYW5rZXIgdGFrZXMgYW55IGVxdWFsIHZhbHVlZCBoYW5kcy5cblxuICAgICAgaWYgKGhpV2lubmVyLmxlbmd0aCA9PT0gMSAmJiBoaVdpbm5lclswXSA9PT0gcGxheWVyLmhpSGFuZCkge1xuICAgICAgICBpZiAobG9XaW5uZXIubGVuZ3RoID09PSAxICYmIGxvV2lubmVyWzBdID09PSBwbGF5ZXIubG9IYW5kKSB7XG4gICAgICAgICAgLy8gUGxheWVyIHdpbnMgYm90aDsgcGxheWVyIHdpbnNcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSAvLyBQbGF5ZXIgd2lucyBoaSwgQmFua2VyIHdpbnMgbG87IHB1c2hcblxuXG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAobG9XaW5uZXIubGVuZ3RoID09PSAxICYmIGxvV2lubmVyWzBdID09PSBwbGF5ZXIubG9IYW5kKSB7XG4gICAgICAgIC8vIEJhbmtlciB3aW5zIGhpLCBQbGF5ZXIgd2lucyBsbzsgcHVzaFxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gLy8gQmFua2VyIHdpbnMgYm90aDsgYmFua2VyIHdpbnNcblxuXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIC8qXG4gICAgICogU2V0IGEgZnVsbCBoYW5kIGludG8gaGlnaCBhbmQgbG93IGhhbmRzLCBhY2NvcmRpbmcgdG8gbWFudWFsIGlucHV0LlxuICAgICAqIEBwYXJhbSAge0FycmF5fSBoaUhhbmQgICAgICAgSGlnaCBoYW5kIHRvIHNwZWNpZnkuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW4gYWxzbyBiZSB7SGFuZH0gd2l0aCBnYW1lIG9mICdwYWlnb3dwb2tlcmhpJy5cbiAgICAgKiBAcGFyYW0gIHtBcnJheX0gbG9IYW5kICAgICAgIExvdyBoYW5kIHRvIHNwZWNpZnkuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW4gYWxzbyBiZSB7SGFuZH0gd2l0aCBnYW1lIG9mICdwYWlnb3dwb2tlcmxvJy5cbiAgICAgKiBAcmV0dXJuIHtQYWlHb3dQb2tlckhlbHBlcn0gIE9iamVjdCB3aXRoIHNwbGl0IGhhbmRzLlxuICAgICAqL1xuXG5cbiAgICBzdGF0aWMgc2V0SGFuZHMoaGlIYW5kLCBsb0hhbmQpIHtcbiAgICAgIHZhciBmdWxsSGFuZCA9IFtdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShoaUhhbmQpKSB7XG4gICAgICAgIGhpSGFuZCA9IEhhbmQuc29sdmUoaGlIYW5kLCBuZXcgR2FtZSgncGFpZ293cG9rZXJoaScpKTtcbiAgICAgIH1cblxuICAgICAgZnVsbEhhbmQgPSBmdWxsSGFuZC5jb25jYXQoaGlIYW5kLmNhcmRQb29sKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobG9IYW5kKSkge1xuICAgICAgICBsb0hhbmQgPSBIYW5kLnNvbHZlKGxvSGFuZCwgbmV3IEdhbWUoJ3BhaWdvd3Bva2VybG8nKSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bGxIYW5kID0gZnVsbEhhbmQuY29uY2F0KGxvSGFuZC5jYXJkUG9vbCk7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IFBhaUdvd1Bva2VySGVscGVyKGZ1bGxIYW5kKTtcbiAgICAgIHJlc3VsdC5oaUhhbmQgPSBoaUhhbmQ7XG4gICAgICByZXN1bHQubG9IYW5kID0gbG9IYW5kO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgYW5kIHJldHVybiBQYWlHb3dQb2tlckhlbHBlciBvYmplY3Qgd2l0aCBoYW5kcyBzcGxpdCBIb3VzZSBXYXkuXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGZ1bGxIYW5kICAgIEFycmF5IG9mIGNhcmRzIChbJ0FkJywgJzNjJywgJ1RoJywgLi4uXSkuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbiBhbHNvIGJlIHtIYW5kfSB3aXRoIGdhbWUgb2YgJ3BhaWdvd3Bva2VyZnVsbCcuXG4gICAgICogQHJldHVybiB7UGFpR293UG9rZXJIZWxwZXJ9IE9iamVjdCB3aXRoIHNwbGl0IGhhbmRzLlxuICAgICAqL1xuXG5cbiAgICBzdGF0aWMgc29sdmUoZnVsbEhhbmQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgUGFpR293UG9rZXJIZWxwZXIoZnVsbEhhbmQgPSBmdWxsSGFuZCB8fCBbJyddKTtcbiAgICAgIHJlc3VsdC5zcGxpdEhvdXNlV2F5KCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICB9XG5cbiAgdmFyIGdhbWVSdWxlcyA9IHtcbiAgICAnc3RhbmRhcmQnOiB7XG4gICAgICAnY2FyZHNJbkhhbmQnOiA1LFxuICAgICAgJ2hhbmRWYWx1ZXMnOiBbU3RyYWlnaHRGbHVzaCwgRm91ck9mQUtpbmQsIEZ1bGxIb3VzZSwgRmx1c2gsIFN0cmFpZ2h0LCBUaHJlZU9mQUtpbmQsIFR3b1BhaXIsIE9uZVBhaXIsIEhpZ2hDYXJkXSxcbiAgICAgICd3aWxkVmFsdWUnOiBudWxsLFxuICAgICAgJ3dpbGRTdGF0dXMnOiAxLFxuICAgICAgJ3doZWVsU3RhdHVzJzogMCxcbiAgICAgICdzZlF1YWxpZnknOiA1LFxuICAgICAgJ2xvd2VzdFF1YWxpZmllZCc6IG51bGwsXG4gICAgICBcIm5vS2lja2Vyc1wiOiBmYWxzZVxuICAgIH0sXG4gICAgJ2phY2tzYmV0dGVyJzoge1xuICAgICAgJ2NhcmRzSW5IYW5kJzogNSxcbiAgICAgICdoYW5kVmFsdWVzJzogW1N0cmFpZ2h0Rmx1c2gsIEZvdXJPZkFLaW5kLCBGdWxsSG91c2UsIEZsdXNoLCBTdHJhaWdodCwgVGhyZWVPZkFLaW5kLCBUd29QYWlyLCBPbmVQYWlyLCBIaWdoQ2FyZF0sXG4gICAgICAnd2lsZFZhbHVlJzogbnVsbCxcbiAgICAgICd3aWxkU3RhdHVzJzogMSxcbiAgICAgICd3aGVlbFN0YXR1cyc6IDAsXG4gICAgICAnc2ZRdWFsaWZ5JzogNSxcbiAgICAgICdsb3dlc3RRdWFsaWZpZWQnOiBbJ0pjJywgJ0pkJywgJzRoJywgJzNzJywgJzJjJ10sXG4gICAgICBcIm5vS2lja2Vyc1wiOiB0cnVlXG4gICAgfSxcbiAgICAnam9rZXInOiB7XG4gICAgICAnY2FyZHNJbkhhbmQnOiA1LFxuICAgICAgJ2hhbmRWYWx1ZXMnOiBbTmF0dXJhbFJveWFsRmx1c2gsIEZpdmVPZkFLaW5kLCBXaWxkUm95YWxGbHVzaCwgU3RyYWlnaHRGbHVzaCwgRm91ck9mQUtpbmQsIEZ1bGxIb3VzZSwgRmx1c2gsIFN0cmFpZ2h0LCBUaHJlZU9mQUtpbmQsIFR3b1BhaXIsIEhpZ2hDYXJkXSxcbiAgICAgICd3aWxkVmFsdWUnOiAnTycsXG4gICAgICAnd2lsZFN0YXR1cyc6IDEsXG4gICAgICAnd2hlZWxTdGF0dXMnOiAwLFxuICAgICAgJ3NmUXVhbGlmeSc6IDUsXG4gICAgICAnbG93ZXN0UXVhbGlmaWVkJzogWyc0YycsICczZCcsICczaCcsICcycycsICcyYyddLFxuICAgICAgXCJub0tpY2tlcnNcIjogdHJ1ZVxuICAgIH0sXG4gICAgJ2RldWNlc3dpbGQnOiB7XG4gICAgICAnY2FyZHNJbkhhbmQnOiA1LFxuICAgICAgJ2hhbmRWYWx1ZXMnOiBbTmF0dXJhbFJveWFsRmx1c2gsIEZvdXJXaWxkcywgV2lsZFJveWFsRmx1c2gsIEZpdmVPZkFLaW5kLCBTdHJhaWdodEZsdXNoLCBGb3VyT2ZBS2luZCwgRnVsbEhvdXNlLCBGbHVzaCwgU3RyYWlnaHQsIFRocmVlT2ZBS2luZCwgSGlnaENhcmRdLFxuICAgICAgJ3dpbGRWYWx1ZSc6ICcyJyxcbiAgICAgICd3aWxkU3RhdHVzJzogMSxcbiAgICAgICd3aGVlbFN0YXR1cyc6IDAsXG4gICAgICAnc2ZRdWFsaWZ5JzogNSxcbiAgICAgICdsb3dlc3RRdWFsaWZpZWQnOiBbJzVjJywgJzRkJywgJzNoJywgJzNzJywgJzNjJ10sXG4gICAgICBcIm5vS2lja2Vyc1wiOiB0cnVlXG4gICAgfSxcbiAgICAndGhyZWVjYXJkJzoge1xuICAgICAgJ2NhcmRzSW5IYW5kJzogMyxcbiAgICAgICdoYW5kVmFsdWVzJzogW1N0cmFpZ2h0Rmx1c2gsIFRocmVlT2ZBS2luZCwgU3RyYWlnaHQsIEZsdXNoLCBPbmVQYWlyLCBIaWdoQ2FyZF0sXG4gICAgICAnd2lsZFZhbHVlJzogbnVsbCxcbiAgICAgICd3aWxkU3RhdHVzJzogMSxcbiAgICAgICd3aGVlbFN0YXR1cyc6IDAsXG4gICAgICAnc2ZRdWFsaWZ5JzogMyxcbiAgICAgICdsb3dlc3RRdWFsaWZpZWQnOiBbJ1FoJywgJzNzJywgJzJjJ10sXG4gICAgICBcIm5vS2lja2Vyc1wiOiBmYWxzZVxuICAgIH0sXG4gICAgJ2ZvdXJjYXJkJzoge1xuICAgICAgJ2NhcmRzSW5IYW5kJzogNCxcbiAgICAgICdoYW5kVmFsdWVzJzogW0ZvdXJPZkFLaW5kLCBTdHJhaWdodEZsdXNoLCBUaHJlZU9mQUtpbmQsIEZsdXNoLCBTdHJhaWdodCwgVHdvUGFpciwgT25lUGFpciwgSGlnaENhcmRdLFxuICAgICAgJ3dpbGRWYWx1ZSc6IG51bGwsXG4gICAgICAnd2lsZFN0YXR1cyc6IDEsXG4gICAgICAnd2hlZWxTdGF0dXMnOiAwLFxuICAgICAgJ3NmUXVhbGlmeSc6IDQsXG4gICAgICAnbG93ZXN0UXVhbGlmaWVkJzogbnVsbCxcbiAgICAgIFwibm9LaWNrZXJzXCI6IHRydWVcbiAgICB9LFxuICAgICdmb3VyY2FyZGJvbnVzJzoge1xuICAgICAgJ2NhcmRzSW5IYW5kJzogNCxcbiAgICAgICdoYW5kVmFsdWVzJzogW0ZvdXJPZkFLaW5kLCBTdHJhaWdodEZsdXNoLCBUaHJlZU9mQUtpbmQsIEZsdXNoLCBTdHJhaWdodCwgVHdvUGFpciwgT25lUGFpciwgSGlnaENhcmRdLFxuICAgICAgJ3dpbGRWYWx1ZSc6IG51bGwsXG4gICAgICAnd2lsZFN0YXR1cyc6IDEsXG4gICAgICAnd2hlZWxTdGF0dXMnOiAwLFxuICAgICAgJ3NmUXVhbGlmeSc6IDQsXG4gICAgICAnbG93ZXN0UXVhbGlmaWVkJzogWydBYycsICdBZCcsICczaCcsICcycyddLFxuICAgICAgXCJub0tpY2tlcnNcIjogdHJ1ZVxuICAgIH0sXG4gICAgJ3BhaWdvd3Bva2VyZnVsbCc6IHtcbiAgICAgICdjYXJkc0luSGFuZCc6IDcsXG4gICAgICAnaGFuZFZhbHVlcyc6IFtGaXZlT2ZBS2luZCwgRm91ck9mQUtpbmRQYWlyUGx1cywgU3RyYWlnaHRGbHVzaCwgRmx1c2gsIFN0cmFpZ2h0LCBGb3VyT2ZBS2luZCwgVHdvVGhyZWVPZkFLaW5kLCBUaHJlZU9mQUtpbmRUd29QYWlyLCBGdWxsSG91c2UsIFRocmVlT2ZBS2luZCwgVGhyZWVQYWlyLCBUd29QYWlyLCBPbmVQYWlyLCBIaWdoQ2FyZF0sXG4gICAgICAnd2lsZFZhbHVlJzogJ08nLFxuICAgICAgJ3dpbGRTdGF0dXMnOiAwLFxuICAgICAgJ3doZWVsU3RhdHVzJzogMSxcbiAgICAgICdzZlF1YWxpZnknOiA1LFxuICAgICAgJ2xvd2VzdFF1YWxpZmllZCc6IG51bGxcbiAgICB9LFxuICAgICdwYWlnb3dwb2tlcmFsdCc6IHtcbiAgICAgICdjYXJkc0luSGFuZCc6IDcsXG4gICAgICAnaGFuZFZhbHVlcyc6IFtGb3VyT2ZBS2luZCwgRnVsbEhvdXNlLCBUaHJlZU9mQUtpbmQsIFRocmVlUGFpciwgVHdvUGFpciwgT25lUGFpciwgSGlnaENhcmRdLFxuICAgICAgJ3dpbGRWYWx1ZSc6ICdPJyxcbiAgICAgICd3aWxkU3RhdHVzJzogMCxcbiAgICAgICd3aGVlbFN0YXR1cyc6IDEsXG4gICAgICAnc2ZRdWFsaWZ5JzogNSxcbiAgICAgICdsb3dlc3RRdWFsaWZpZWQnOiBudWxsXG4gICAgfSxcbiAgICAncGFpZ293cG9rZXJzZjYnOiB7XG4gICAgICAnY2FyZHNJbkhhbmQnOiA3LFxuICAgICAgJ2hhbmRWYWx1ZXMnOiBbU3RyYWlnaHRGbHVzaCwgRmx1c2gsIFN0cmFpZ2h0XSxcbiAgICAgICd3aWxkVmFsdWUnOiAnTycsXG4gICAgICAnd2lsZFN0YXR1cyc6IDAsXG4gICAgICAnd2hlZWxTdGF0dXMnOiAxLFxuICAgICAgJ3NmUXVhbGlmeSc6IDYsXG4gICAgICAnbG93ZXN0UXVhbGlmaWVkJzogbnVsbFxuICAgIH0sXG4gICAgJ3BhaWdvd3Bva2Vyc2Y3Jzoge1xuICAgICAgJ2NhcmRzSW5IYW5kJzogNyxcbiAgICAgICdoYW5kVmFsdWVzJzogW1N0cmFpZ2h0Rmx1c2gsIEZsdXNoLCBTdHJhaWdodF0sXG4gICAgICAnd2lsZFZhbHVlJzogJ08nLFxuICAgICAgJ3dpbGRTdGF0dXMnOiAwLFxuICAgICAgJ3doZWVsU3RhdHVzJzogMSxcbiAgICAgICdzZlF1YWxpZnknOiA3LFxuICAgICAgJ2xvd2VzdFF1YWxpZmllZCc6IG51bGxcbiAgICB9LFxuICAgICdwYWlnb3dwb2tlcmhpJzoge1xuICAgICAgJ2NhcmRzSW5IYW5kJzogNSxcbiAgICAgICdoYW5kVmFsdWVzJzogW0ZpdmVPZkFLaW5kLCBTdHJhaWdodEZsdXNoLCBGb3VyT2ZBS2luZCwgRnVsbEhvdXNlLCBGbHVzaCwgU3RyYWlnaHQsIFRocmVlT2ZBS2luZCwgVHdvUGFpciwgT25lUGFpciwgSGlnaENhcmRdLFxuICAgICAgJ3dpbGRWYWx1ZSc6ICdPJyxcbiAgICAgICd3aWxkU3RhdHVzJzogMCxcbiAgICAgICd3aGVlbFN0YXR1cyc6IDEsXG4gICAgICAnc2ZRdWFsaWZ5JzogNSxcbiAgICAgICdsb3dlc3RRdWFsaWZpZWQnOiBudWxsXG4gICAgfSxcbiAgICAncGFpZ293cG9rZXJsbyc6IHtcbiAgICAgICdjYXJkc0luSGFuZCc6IDIsXG4gICAgICAnaGFuZFZhbHVlcyc6IFtPbmVQYWlyLCBIaWdoQ2FyZF0sXG4gICAgICAnd2lsZFZhbHVlJzogJ08nLFxuICAgICAgJ3dpbGRTdGF0dXMnOiAwLFxuICAgICAgJ3doZWVsU3RhdHVzJzogMSxcbiAgICAgICdzZlF1YWxpZnknOiA1LFxuICAgICAgJ2xvd2VzdFF1YWxpZmllZCc6IG51bGxcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBCYXNlIEdhbWUgY2xhc3MgdGhhdCBkZWZpbmVzIHRoZSBydWxlcyBvZiB0aGUgZ2FtZS5cbiAgICovXG5cbiAgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoZGVzY3IpIHtcbiAgICAgIHRoaXMuZGVzY3IgPSBkZXNjcjtcbiAgICAgIHRoaXMuY2FyZHNJbkhhbmQgPSAwO1xuICAgICAgdGhpcy5oYW5kVmFsdWVzID0gW107XG4gICAgICB0aGlzLndpbGRWYWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLndpbGRTdGF0dXMgPSAwO1xuICAgICAgdGhpcy53aGVlbFN0YXR1cyA9IDA7XG4gICAgICB0aGlzLnNmUXVhbGlmeSA9IDU7XG4gICAgICB0aGlzLmxvd2VzdFF1YWxpZmllZCA9IG51bGw7XG4gICAgICB0aGlzLm5vS2lja2VycyA9IG51bGw7IC8vIFNldCB2YWx1ZXMgYmFzZWQgb24gdGhlIGdhbWUgcnVsZXMuXG5cbiAgICAgIGlmICghdGhpcy5kZXNjciB8fCAhZ2FtZVJ1bGVzW3RoaXMuZGVzY3JdKSB7XG4gICAgICAgIHRoaXMuZGVzY3IgPSAnc3RhbmRhcmQnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNhcmRzSW5IYW5kID0gZ2FtZVJ1bGVzW3RoaXMuZGVzY3JdWydjYXJkc0luSGFuZCddO1xuICAgICAgdGhpcy5oYW5kVmFsdWVzID0gZ2FtZVJ1bGVzW3RoaXMuZGVzY3JdWydoYW5kVmFsdWVzJ107XG4gICAgICB0aGlzLndpbGRWYWx1ZSA9IGdhbWVSdWxlc1t0aGlzLmRlc2NyXVsnd2lsZFZhbHVlJ107XG4gICAgICB0aGlzLndpbGRTdGF0dXMgPSBnYW1lUnVsZXNbdGhpcy5kZXNjcl1bJ3dpbGRTdGF0dXMnXTtcbiAgICAgIHRoaXMud2hlZWxTdGF0dXMgPSBnYW1lUnVsZXNbdGhpcy5kZXNjcl1bJ3doZWVsU3RhdHVzJ107XG4gICAgICB0aGlzLnNmUXVhbGlmeSA9IGdhbWVSdWxlc1t0aGlzLmRlc2NyXVsnc2ZRdWFsaWZ5J107XG4gICAgICB0aGlzLmxvd2VzdFF1YWxpZmllZCA9IGdhbWVSdWxlc1t0aGlzLmRlc2NyXVsnbG93ZXN0UXVhbGlmaWVkJ107XG4gICAgICB0aGlzLm5vS2lja2VycyA9IGdhbWVSdWxlc1t0aGlzLmRlc2NyXVsnbm9LaWNrZXJzJ107XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBleHBvcnRUb0dsb2JhbChnbG9iYWwpIHtcbiAgICBnbG9iYWwuQ2FyZCA9IENhcmQ7XG4gICAgZ2xvYmFsLkhhbmQgPSBIYW5kO1xuICAgIGdsb2JhbC5HYW1lID0gR2FtZTtcbiAgICBnbG9iYWwuUm95YWxGbHVzaCA9IFJveWFsRmx1c2g7XG4gICAgZ2xvYmFsLk5hdHVyYWxSb3lhbEZsdXNoID0gTmF0dXJhbFJveWFsRmx1c2g7XG4gICAgZ2xvYmFsLldpbGRSb3lhbEZsdXNoID0gV2lsZFJveWFsRmx1c2g7XG4gICAgZ2xvYmFsLkZpdmVPZkFLaW5kID0gRml2ZU9mQUtpbmQ7XG4gICAgZ2xvYmFsLlN0cmFpZ2h0Rmx1c2ggPSBTdHJhaWdodEZsdXNoO1xuICAgIGdsb2JhbC5Gb3VyT2ZBS2luZFBhaXJQbHVzID0gRm91ck9mQUtpbmRQYWlyUGx1cztcbiAgICBnbG9iYWwuRm91ck9mQUtpbmQgPSBGb3VyT2ZBS2luZDtcbiAgICBnbG9iYWwuRm91cldpbGRzID0gRm91cldpbGRzO1xuICAgIGdsb2JhbC5Ud29UaHJlZU9mQUtpbmQgPSBUd29UaHJlZU9mQUtpbmQ7XG4gICAgZ2xvYmFsLlRocmVlT2ZBS2luZFR3b1BhaXIgPSBUaHJlZU9mQUtpbmRUd29QYWlyO1xuICAgIGdsb2JhbC5GdWxsSG91c2UgPSBGdWxsSG91c2U7XG4gICAgZ2xvYmFsLkZsdXNoID0gRmx1c2g7XG4gICAgZ2xvYmFsLlN0cmFpZ2h0ID0gU3RyYWlnaHQ7XG4gICAgZ2xvYmFsLlRocmVlT2ZBS2luZCA9IFRocmVlT2ZBS2luZDtcbiAgICBnbG9iYWwuVGhyZWVQYWlyID0gVGhyZWVQYWlyO1xuICAgIGdsb2JhbC5Ud29QYWlyID0gVHdvUGFpcjtcbiAgICBnbG9iYWwuT25lUGFpciA9IE9uZVBhaXI7XG4gICAgZ2xvYmFsLkhpZ2hDYXJkID0gSGlnaENhcmQ7XG4gICAgZ2xvYmFsLlBhaUdvd1Bva2VySGVscGVyID0gUGFpR293UG9rZXJIZWxwZXI7XG4gIH0gLy8gRXhwb3J0IHRoZSBjbGFzc2VzIGZvciBub2RlLmpzIHVzZS5cblxuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBleHBvcnRUb0dsb2JhbChleHBvcnRzKTtcbiAgfSAvLyBBZGQgdGhlIGNsYXNzZXMgdG8gdGhlIHdpbmRvdyBmb3IgYnJvd3NlciB1c2UuXG5cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBleHBvcnRUb0dsb2JhbCh3aW5kb3cpO1xuICB9XG59KSgpOyIsIlxuLy8gaW1wb3J0IHNjb3JlYm9hcmQgZnJvbSAnLi4vamF2YXNjcmlwdC9qcy1vbGQvc2NvcmVib2FyZCc7XG4vLyBpbXBvcnQgdGFibGUgZnJvbSAnLi4vamF2YXNjcmlwdC9qcy1vbGQvdGFibGUnXG4vLyBpbXBvcnQgcGxheWVyX2NoaXBzIGZyb20gJy4uL2phdmFzY3JpcHQvanMtb2xkL3BsYXllcl9jaGlwcyc7XG4vLyBpbXBvcnQgc2h1ZmZsZSBmcm9tICcuLi9qYXZhc2NyaXB0L2pzL3NodWZmbGUnXG5pbXBvcnQgRGVjayBmcm9tICcuLi9qYXZhc2NyaXB0L2pzL2RlY2snXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi4vamF2YXNjcmlwdC9qcy9wcmVmbG9wJztcbmltcG9ydCBHYW1lIGZyb20gJy4uL2phdmFzY3JpcHQvanMvZ2FtZSc7XG5pbXBvcnQgQmV0dGluZyBmcm9tICcuLi9qYXZhc2NyaXB0L2pzL2JldHRpbmcnO1xuaW1wb3J0IEZvbGQgZnJvbSAnLi4vamF2YXNjcmlwdC9qcy9mb2xkJztcbmltcG9ydCBOZXh0Q2FyZCBmcm9tICcuLi9qYXZhc2NyaXB0L2pzL25leHRjYXJkJztcbi8vIGNvbnN0IHNodWZmbGUgPSByZXF1aXJlKCdzaHVmZmxlJyk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gdGFibGUoKTtcbiAgICAvLyBzaHVmZmxlKClcbiAgICBjb25zdCBkZWFsID0gbmV3IENhcmRzKCk7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgLy8gY29uc3QgYmV0ID0gbmV3IEJldHRpbmcoKTtcbiAgICBnYW1lLmNyZWF0ZUdhbWUoKTtcbiAgICBsZXQgcGxheWVyU2hpZnQgPSAwO1xuICAgIFxuICAgIHdpbmRvdy5iZXRDb3VudCA9IDA7XG4gICAgd2luZG93LnJpdmVyVHVybiA9IDA7XG4gICAgd2luZG93Lmxhc3RCZXQgPSAwO1xuICAgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW5kcycpLm9uY2xpY2sgPSBmdW5jdGlvbiBkZWFsVGhlQ2FyZHMoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllcnMgPSBbd2luZG93LnBsYXllcjMsIHdpbmRvdy5wbGF5ZXIxLCB3aW5kb3cucGxheWVyMl07XG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIzY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIxY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5wbGF5ZXIyY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi5mbG9wY2FyZHNcIikucmVtb3ZlKCk7XG4gICAgICAgIGQzLnNlbGVjdEFsbChcIi53aW5uZXJOYW1lXCIpLnJlbW92ZSgpO1xuICAgICAgICBsZXQgZmlyc3Q7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyU2hpZnQ7IGkrKykge1xuICAgICAgICAgICAgZmlyc3QgPSBwbGF5ZXJzWzBdO1xuICAgICAgICAgICAgcGxheWVycy5zaGlmdCgxKTtcbiAgICAgICAgICAgIHBsYXllcnMucHVzaChmaXJzdClcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnBsYXllcnMgPSBwbGF5ZXJzXG4gICAgICAgIHBsYXllclNoaWZ0ICs9IDE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgd2luZG93LnBsYXllcnNbaV0uY2FyZFBvb2wgPSBbXTtcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5ZXJzW2ldLmhvbGVjYXJkcyA9IFtdO1xuICAgICAgICAgICAgd2luZG93LnBsYXllcnNbaV0uY3VycmVudEJldCA9IDA7XG4gICAgICAgICAgICB3aW5kb3cucGxheWVyc1tpXS5kZWFkbW9uZXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5iZXRSb3VuZCA9IC0xO1xuICAgICAgICB3aW5kb3cuYmV0Um91bmQgKz0gMTtcbiAgICAgICAgd2luZG93LmNvdW50ID0gMDtcbiAgICAgICAgd2luZG93LmZsb3BDb3VudCA9IDA7XG4gICAgICAgIHdpbmRvdy5taWRkbGVDYXJkcyA9IFtdO1xuICAgICAgICB3aW5kb3cucGxheWVyVHVybiA9IDI7XG4gICAgICAgIHdpbmRvdy50dXJuQ291bnQgPSAwO1xuICAgICAgICB3aW5kb3cuYmV0Q291bnQgPSAwO1xuICAgICAgICB3aW5kb3cuaGFuZENvdW50ID0gMDtcbiAgICAgICAgd2luZG93Lmxhc3RCZXQgPSAwO1xuICAgICAgICBkZWFsLmRlYWxDYXJkcygpO1xuICAgIFxuXG5cbiAgICAgICAgLy8gYmV0LnBsYWNlQmV0KCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGQnKS5vbmNsaWNrID0gZnVuY3Rpb24gZm9sZFlvdXJDYXJkcygpIHtcbiAgICAgICAgY29uc3QgZm9sZCA9IG5ldyBGb2xkKCk7XG4gICAgICAgIGZvbGQucmVtb3ZlUGxheWVyKCk7XG4gICAgICAgIHdpbmRvdy5jb3VudCArPSAxO1xuICAgICAgICAvLyB3aW5kb3cuZmxvcENvdW50ICs9IDE7XG4gICAgICAgIGdhbWUuZm9sZCgpO1xuICAgICAgICAvLyBnYW1lLnBsYXllclR1cm4oKTtcbiAgICAgICAgLy8gZ2FtZS5yZXNldEdhbWUoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmV0YnV0dG9uJykub25jbGljayA9IGZ1bmN0aW9uIHBsYWNlWW91ckJldCgpIHtcbiAgICAgICAgY29uc3QgYmV0ID0gbmV3IEJldHRpbmcoKTtcbiAgICAgICAgZGVhbC5zdGFydFNjb3JlYm9hcmQoKTtcbiAgICAgICAgZ2FtZS5jYWxsKCk7XG4gICAgICAgIHdpbmRvdy5jb3VudCArPSAxO1xuICAgICAgICBcbiAgICB9XG4gICAgXG59KSJdLCJzb3VyY2VSb290IjoiIn0=