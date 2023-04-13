document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    let newCell;
    let oldCell;

    window.onload = () => {
        oldCell = cells[Math.floor(Math.random() * 15)];
        oldCell.classList.add("monster");
        setInterval(changeCell, 1000);
    } 

    function changeCell() {
        console.log(cells)
        generatedCell = cells[Math.floor(Math.random() * 15)];
        if (generatedCell === oldCell) {
            generatedCell = cells[Math.floor(Math.random() * 15)];
        }
        console.log(generatedCell, newCell)
        newCell = generatedCell;
        removeMonster(oldCell);
        putMonster(newCell);
        oldCell = newCell;
    }

    function putMonster(cell) {
        console.log(cell)
        cell.classList.add("monster");
    }

    function removeMonster(cell) {
        cell.classList.remove("monster");
    }

     
})

    

