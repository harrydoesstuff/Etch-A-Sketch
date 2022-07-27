const container = document.querySelector("#container");
let rows;
let columns;

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
        container.appendChild(cell);

        cell.addEventListener("mouseover", function() {
            cell.classList.add("mouseOver");
        })
    }

}


drawGrid(rows, columns);


 const resetButton = document.querySelector("#resetButton");
 resetButton.addEventListener("click", () => {
    document.querySelectorAll(".mouseOver").forEach(e => e.classList.remove("mouseOver"));
    rows = 0;
    columns = 0;
    drawGrid();
})



