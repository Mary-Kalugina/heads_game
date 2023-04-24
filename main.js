/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nC": () => (/* binding */ container),
  "CV": () => (/* binding */ countMonster),
  "YT": () => (/* binding */ oldCellControl),
  "St": () => (/* binding */ scoreControl),
  "Iw": () => (/* binding */ setCountMonster)
});

;// CONCATENATED MODULE: ./src/js/MonsterControl.js

class MonsterControl {
  constructor() {
    this.randomCell = this.randomCell.bind(this);
    this.changeCell = this.changeCell.bind(this);
  }
  renderBoard() {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      container.appendChild(cell);
    }
  }
  randomCell() {
    const cells = document.querySelectorAll(".cell");
    const randomCell = cells[Math.floor(Math.random() * 15)];
    return randomCell;
  }
  changeCell() {
    let generatedCell;
    do {
      generatedCell = this.randomCell();
    } while (generatedCell === oldCellControl.oldCell);
    this.removeMonster();
    this.addMonster(generatedCell);
    this.countMonsters();
    oldCellControl.oldCell = generatedCell;
  }
  addMonster(cell) {
    cell.classList.add("monster");
  }
  removeMonster() {
    const cell = document.querySelector(".monster");
    if (!cell) {
      return;
    }
    cell.classList.remove("monster");
  }
  countMonsters() {
    setCountMonster(countMonster + 1);
    if (countMonster === 5) {
      setCountMonster(0);
      alert("Game is over!");
      location.reload();
    }
  }
}
;// CONCATENATED MODULE: ./src/js/InteractiveGoblin.js


class InteractiveGoblin {
  constructor() {
    this.monsterControl = new MonsterControl();
  }
  monsterHit(e) {
    if (e.target.classList.contains("monster")) {
      this.hitCounter();
      e.target.classList.remove("monster");
      this.monsterControl.addMonster(this.monsterControl.randomCell());
      clearTimeout(this.timeoutId);
      this.startTimer();
    }
  }
  startTimer() {
    this.timeoutId = setTimeout(() => {
      this.monsterControl.changeCell();
      this.startTimer();
    }, 1000);
  }
  hitCounter() {
    scoreControl.score++;
    setCountMonster(0);
  }
}
;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/index.js




const container = document.querySelector(".container");
// let oldCell = null;
const oldCellControl = {
  _oldCell: null,
  set oldCell(cell) {
    this._oldCell = cell;
  },
  get oldCell() {
    return this._oldCell;
  }
};
const scoreControl = {
  get score() {
    return this._score;
  },
  set score(value) {
    this._score = value;
  }
};
let countMonster = 0;
function setCountMonster(value) {
  countMonster = value;
}
document.addEventListener("DOMContentLoaded", () => {
  const monsterControl = new MonsterControl();
  const goblin = new InteractiveGoblin();
  window.onload = () => {
    monsterControl.renderBoard();
    oldCellControl.oldCell = monsterControl.randomCell();
    monsterControl.addMonster(oldCellControl.oldCell);
    goblin.startTimer();
  };
  container.addEventListener("click", e => goblin.monsterHit(e));
});
/******/ })()
;
//# sourceMappingURL=main.js.map