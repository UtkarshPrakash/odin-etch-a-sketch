const container = document.querySelector(".container");
const slider = document.querySelector("#myslider");

drawGrid();
enableHover();

slider.addEventListener("mousedown", () => {
    let oldBoxes = document.getElementsByClassName("box");
    while (oldBoxes.length > 0) {
        oldBoxes[0].parentNode.removeChild(oldBoxes[0]);
    }
})

slider.addEventListener("click", () => {
    drawGrid();
    enableHover();
})

var mouseDown = 0;

document.body.onmousedown = function() { 
  ++mouseDown;
}

document.body.onmouseup = function() {
  --mouseDown;
}

function enableHover() {
    let boxes = document.querySelectorAll(".box");
    
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            if (true)
            box.classList.add("box-hover");
        })
    })
}

function drawGrid() {
    const val = slider.value;
    let size = 80 / val;
    for (let i=0; i<val*val; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = `height: ${size}vh; width: ${size}vh`;
    
        container.appendChild(box);
    }
}