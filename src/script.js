const content = document.querySelector(".content");

const controlPanel = document.createElement("div"); 
controlPanel.attributes = "panelStyle";
content.appendChild(controlPanel);

const penColor = document.createElement("div")
controlPanel.appendChild(penColor)

const penColorText = document.createElement("p")
penColorText.textContent = "Pen Color:"
penColor.appendChild(penColorText)

const inputColor = document.createElement("input")
inputColor.setAttribute("id", "color-select")
inputColor.setAttribute("type", "color")
penColor.appendChild(inputColor)

const getGridSize = document.createElement("button");
getGridSize.textContent = "Choise grid size";
getGridSize.setAttribute("id", "grid-size")
controlPanel.appendChild(getGridSize);

const eraseB = document.createElement("button");
eraseB.textContent = "Erase";
eraseB.setAttribute("id", "erase");
controlPanel.appendChild(eraseB);

const resetB = document.createElement("button");
resetB.textContent = "Reset";
resetB.setAttribute("id", "reset");
controlPanel.appendChild(resetB);

const colorSelected = document.getElementById("color-select");
let color = colorSelected.value;

colorSelected.addEventListener("input", function(){
    color = colorSelected.value;
});

//build and config divs for receive color.
const gridContainer = document.querySelector(".grid-container");

let size = 16; // Define size variable.

let isMouseDown = false;

// Function to create grid cells.
function createGrid(size) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = ""; // Clear existing grid

    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Fix the typo in these lines
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        let gridCell = document.createElement("div");

        gridCell.classList.add("grid-cell");

        gridCell.addEventListener("mousedown", function(){
            isMouseDown = true;
            this.style.backgroundColor = color;
        });

        gridCell.addEventListener("mousemove", function(){
            if (isMouseDown){
                this.style.backgroundColor = color;
            };
        });

        gridCell.addEventListener("mouseup", function(){
            isMouseDown = false;
        });
        gridContainer.appendChild(gridCell);
    }
}

//Create initial grid without user input.
createGrid(size); 

//function to user choose grid size with button click.
getGridSize.onclick = function(){
    let size = parseInt(prompt("Choose grid size, between 1 and 100;"));

    while (isNaN(size) || size < 1 || size > 100){
        size = parseInt(prompt("Invalid input! Please choose grid size, between 1 and 100;"));
    }
    createGrid(size);
}

let isErase = false;

//erase, check and set change background color.
const erase = document.getElementById("erase");

erase.addEventListener("click", function(){
    isErase = !isErase;
    if (isErase){
        color =gridContainer.style.backgroundColor;
        erase.style.boxShadow = "inset 2px 5px 1px rgba (0, 0, 0, 0.6)";
    } else {
        color = colorSelected.value;
        erase.style.boxShadow = "2px 5px 1px rgba (0, 0, 0, 0.6)";
    }
});

//reset, if button clicked page refresh = reset colors.
const reset = document.getElementById("reset");

reset.addEventListener("click", function(){
    location.reload();
});