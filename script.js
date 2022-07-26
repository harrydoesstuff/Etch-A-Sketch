const container = document.querySelector("#container");
let gridCount = 0;

// while (gridCount < 256) {
//     drawGrid();
// }

function drawGrid(rows, columns) {

    for (i=0; i < (rows*columns); i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid");
        container.appendChild(cell);

        cell.addEventListener("mouseover", function() {
            cell.classList.add("mouseOver");
        })
    }
}

drawGrid(16, 16);