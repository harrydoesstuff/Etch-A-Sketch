const container = document.querySelector("#container");


function drawGrid(rows, columns) {
    let userGridInput = prompt("please enter grid size: ");
    rows = userGridInput;
    columns = userGridInput;
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    container.style.width = "500px";
    container.style.height = "500px";
    container.style.overflow = "hidden";
    
    for (i=0; i < (rows*columns); i++) {
        
        const cell = document.createElement("div");
        cell.style.minHeight = "0";
        cell.style.minWidth = "0";
        cell.style.overflow = "hidden";
        cell.classList.add("grid");
        cell.setAttribute("id", "gridItems");
        container.appendChild(cell);

        cell.addEventListener("mouseover", function() {
            cell.classList.add("mouseOver");
        })
    }

    // reset();
}





let rows = 0;
let columns = 0;

drawGrid(rows, columns);


// function reset() {
    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", () => {
        document.querySelectorAll(".mouseOver").forEach(e => e.classList.remove("mouseOver"));
        // let userGridInput = prompt ("please enter a new grid size:");
        // rows = userGridInput;
        // columns = userGridInput;
        // drawGrid(rows, columns);
        drawGrid();
    })
// }

// function reset() {
//     grid.forEach(item => {
//         item.style.backgroundColor = "white";
//         drawGrid();
//     });
// }

// const grid = document.querySelector("#gridItems")
// const resetButton = document.querySelector("#resetButton");

// resetButton.addEventListener("click", drawGrid);

// document.querySelectorAll("mouseOver").forEach(e => e.remove());