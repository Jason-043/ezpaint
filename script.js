var windowHeight = window.innerHeight 
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var windowWidth = window.innerWidth 
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var container = document.getElementById("container");

console.log(windowHeight);
console.log(windowWidth);

function calculateSizes(){
    container.width = windowHeight 
}

function createGrid(){
    var dimensions = document.getElementById("size").value;
    var squareDim = windowHeight * .85/dimensions;
    container.innerHTML = "";
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
}
createGrid();
function updateColor(){
    newColor = document.getElementById("color").value;
    console.log(newColor);
}