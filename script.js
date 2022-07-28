const container = document.querySelector("#container");
let rows;
let columns;
let slider = document.getElementById("myRange");
let sliderValue = document.getElementById("sliderValue");

function drawGrid(rows, columns) {

    let userGridInput = slider.value;
    sliderValue.innerHTML = "Grid size: " + slider.value;
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
        container.appendChild(cell);

        let colorSelection = document.getElementById("selectColor")
        cell.addEventListener("mouseover", function() {
            // cell.classList.add("mouseOver");
            cell.style.backgroundColor = colorSelection.value;
        })
    }

}

// const drawGridButton = document.querySelector("#drawGrid");
// drawGridButton.addEventListener("click", () => drawGrid())

drawGrid(rows, columns);


 const resetButton = document.querySelector("#resetButton");
 resetButton.addEventListener("click", () => {
    let cellRemove = document.getElementById("container")
    while (cellRemove.firstChild) {
        cellRemove.removeChild(cellRemove.firstChild);
    }
    drawGrid()
})


