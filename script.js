var windowHeight = window.innerHeight 
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var container = document.getElementById("container");
var currColor;

function clearGrid(){
    pixels = document.getElementsByClassName('square');
    for(i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = "white";
    }
}

function updateSize(){
    sizeDisplay = document.getElementById("sizeDisplay");
    dimensions = document.getElementById("size").value;
    sizeDisplay.innerHTML = `${dimensions}x${dimensions}`;
}
updateSize();
function createGrid(){
    var dimensions = document.getElementById("size").value;
    var squareDim = windowHeight*.85/dimensions;
    container.innerHTML = "";
    container.style.width = `${windowHeight *.85}px`;
    container.style.height = `${windowHeight*.85}px`;
    container.style.gridTemplateColumns = `repeat(${dimensions}, ${squareDim}px)`;
    container.style.gridTemplateColumns = `repeat(${dimensions}, ${squareDim}px)`;
    console.log("create Grid");
    console.log(dimensions);

    for(let i = 0; i < dimensions; i++){
        for(let ii = 0 ; ii < dimensions; ii++){
            currDiv = document.createElement('div');
            currDiv.classList.add("square");
            currDiv.style.width = `${squareDim}px`;
            currDiv.style.height = `${squareDim}px`;
            container.appendChild(currDiv);
        }
    }
    draw();
}
createGrid();
function updateColor(){
    currColor = document.getElementById("color").value;
}
isMouseDown = false;
function draw(){
    pixels = document.getElementsByClassName('square');
    updateColor();
    for(let i = 0; i < pixels.length; i++){
        pixels[i].addEventListener("mouseover", function(){
            if(isMouseDown){
                pixels[i].style.backgroundColor = currColor;
            }
        })
        pixels[i].addEventListener("click", function(){
            pixels[i].style.backgroundColor = currColor;
        })
        pixels[i].addEventListener("mousedown", function(){
            isMouseDown = true;
        })
        pixels[i].addEventListener("mouseup", function(){
            isMouseDown = false;
        })
    }
}