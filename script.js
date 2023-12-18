
var dimensions = document.getElementById("size").value;
var container = document.getElementById("container");
function createGrid(){
    console.log("create Grid");
    console.log(dimensions);
    for(let i = 0; i < dimensions; i++){
        for(let ii = 0 ; ii < dimensions; ii++){
            currDiv = document.createElement('div');
            currDiv.classList.add("square");
            container.appendChild(currDiv);
        }
    }
}
createGrid()
function updateColor(){
    newColor = document.getElementById("color").value;
    console.log(newColor);
}