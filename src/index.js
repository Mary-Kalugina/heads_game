import MonsterControl from "./js/MonsterControl";
import InteractiveGoblin from "./js/InteractiveGoblin";
import "./css/style.css";
import "./img/goblin.png";

export const container = document.querySelector(".container");
// let oldCell = null;
export const oldCellControl = {
  _oldCell: null,
  set oldCell(cell) {
    this._oldCell = cell;
  },
  get oldCell() {
    return this._oldCell;
  }
};
export const scoreControl = {  
  get score() {
    return this._score;
  },
  set score(value) {
    this._score = value;
  }
}
export let countMonster = 0;
export function setCountMonster(value) {
  countMonster = value;
}

document.addEventListener("DOMContentLoaded", () => {
    window.onload = () => {
      const monsterControl = new MonsterControl();
      
      monsterControl.renderBoard();
      oldCellControl.oldCell = monsterControl.randomCell();
      monsterControl.addMonster(oldCellControl.oldCell);
      setInterval(monsterControl.changeCell, 1000);
    };

    const goblin = new InteractiveGoblin();
    container.addEventListener("click", (e) => goblin.monsterHit(e));
});
