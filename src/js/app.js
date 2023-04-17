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
    document.querySelector(".container").insertAdjacentHTML("afterbegin", `<div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div>`)
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
