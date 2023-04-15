document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  let oldCell;

  window.onload = () => {
    oldCell = cells[Math.floor(Math.random() * 15)];
    oldCell.classList.add("monster");
    setInterval(changeCell, 1000);
  };

  function changeCell() {
    let generatedCell = cells[Math.floor(Math.random() * 15)];
    if (generatedCell === oldCell) {
      generatedCell = cells[Math.floor(Math.random() * 15)];
    }
    removeMonster(oldCell);
    putMonster(generatedCell);
    oldCell = generatedCell;
  }

  function putMonster(cell) {
    cell.classList.add("monster");
  }

  function removeMonster(cell) {
    cell.classList.remove("monster");
  }
});
