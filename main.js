const canvas=document.querySelector(".canvas");
const cell=document.querySelectorAll(".cell");

/*
function drawGrid(size){
    for (let i=0;i<size;i++){
        var row=document.createElement("div");
        row.style.display="flex";
        canvas.appendChild(row);
        canvas.style.flexDirection="column";
        for(let n=0; n<size; n++){
            var cell=document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
            row.style.flexDirection="row";
        }
    }
}

drawGrid(10);
*/

function drawGrid(x, y){
    for (let i=0;i<y;i++){
        var row=document.createElement("div");
        row.style.display="flex";
        canvas.appendChild(row);
        canvas.style.flexDirection="column";

        for(let n=0; n<x; n++){
            var cell=document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
            row.style.flexDirection="row";
        }
    }
}

drawGrid(12, 12);

//var cell=document.querySelectorAll(".cell");

/*
function fillCell(){
    console.log(document.getElementsByClassName("cell"));
    document.getElementsByClassName("cell").style.color="black";
    
}

fillCell();
*/

console.log(cell);


/*
function drawRow(width){
    for (let i=0; i<width; i++){
        var childCell=document.createElement("div");
        childCell.classList.add("cell");
        cell.appendChild(childCell);
    }
}

drawRow(10);
*/



/*
function drawGrid(width, height){
    for (let i=0; i<height; i++){
        drawColumn(width);
    }
}

drawGrid(10, 10);
*/



/*
function drawCell(location){
    location.classList.add("cell");
    const cell=document.querySelector(".cell");
    cell.style.height="10px";
    cell.style.width="10px";
    cell.style.border= "1px solid black";
    console.log("success");
}

//drawCell(canvas);
*/

