const mainDiv = document.getElementById("mainDiv");


let gridSize = 16;
let grid_width = 900;


function createGridCells(gridSize){
    if(gridSize < 1){
        gridSize = 1;
    }

    if(gridSize > 100){
        gridSize = 100;
    }

    mainDiv.replaceChildren();

    for(let i = 0; i < gridSize; i++){
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        mainDiv.appendChild(rowDiv);
        for(let j = 0; j < gridSize; j++){
            const columnDiv = document.createElement('div');
            columnDiv.className = "sketchDiv";
            columnDiv.style.width = (grid_width / gridSize) + "px";
            columnDiv.style.height = (grid_width / gridSize) + "px";
            rowDiv.appendChild(columnDiv);
        }
    }


    let sketchDivs = document.querySelectorAll(".sketchDiv");

    sketchDivs.forEach(div => {
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "gray";
        })
    })
}

createGridCells(gridSize);

const gridBtn = document.getElementById("gridBtn");

gridBtn.addEventListener('click', () => {
    let gridSize = window.prompt("Enter grid size (1 - 100)");

    createGridCells(gridSize);
})
