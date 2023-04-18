document.addEventListener("DOMContentLoaded", () => {
  let oldCell;
  let cells;

  window.onload = () => {
    renderBoard();
    oldCell = randomCell();
    addMonster(oldCell);
    setInterval(changeCell, 1000);
  };



  function renderBoard() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        container.appendChild(cell);
    }
  }

  function randomCell() {
    cells = document.querySelectorAll(".cell");
    return cells[Math.floor(Math.random() * 15)];
  }

  function changeCell() {
    let generatedCell = randomCell();
    if (generatedCell === oldCell) {
      generatedCell = randomCell();
    }
    removeMonster(oldCell);
    addMonster(generatedCell);
    oldCell = generatedCell;
  }

  function addMonster(cell) {
    cell.classList.add("monster");
  }

  function removeMonster(cell) {
    cell.classList.remove("monster");
  }
});
