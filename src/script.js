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
const gridContainer = document.querySelector(".grid-container")

let isMouseDown = false;

for (let i = 0; i < 16 * 16; i++){
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
};

let isErase = false;

//erase, check and set change background color.
const erase = document.getElementById("erase")
erase.addEventListener("click", function(){
    isErase = !isErase;
    if (isErase){
        color =gridContainer.style.backgroundColor;
        erase.style.boxShadow = "inset 2px 5px 1px rgba (0, 0, 0, 0.6)";
    } else {
        color = colorSelected.value;
        erase.style.boxShadow = "2px 5px 1px rgba (0, 0, 0, 0.6)";
    }
})

//reset, if button clicked page refresh = reset colors.
const reset = document.getElementById("reset");

reset.addEventListener("click", function(){
    location.reload();
})
