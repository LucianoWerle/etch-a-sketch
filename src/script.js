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

// const backgroundColor = document.createElement("div")
// controlPanel.appendChild(backgroundColor)

// const bgColorText = document.createElement("p")
// bgColorText.textContent = "Pen Color"
// backgroundColor.appendChild(penColorText)

// const inputBgColor = document.createElement("input")
// inputColor.setAttribute("id", "bg-color-select")
// inputColor.setAttribute("type", "color")
// backgroundColor.appendChild(inputBgColor)

const eraseB = document.createElement("button");
eraseB.textContent = "Erase";
controlPanel.appendChild(eraseB);

const resetB = document.createElement("button");
resetB.textContent = "Reset";
controlPanel.appendChild(resetB);

const colorSelected = document.getElementById("color-select");
let color = colorSelected.value;

colorSelected.addEventListener("input", function(){
    color = colorSelected.value;
});

