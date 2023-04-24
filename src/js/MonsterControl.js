import {
  container,
  countMonster,
  oldCellControl,
  setCountMonster,
} from "../index";

export default class MonsterControl {
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
