
const canvas=document.querySelector(".canvas");
const btn=document.querySelector(".reset");

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

drawGrid(20, 20);

function fillBlack(e){
    let name=e.target.className;
    if (name == "cell"){
        e.target.style.backgroundColor="black";
    }
}

function clear(){
    var box=document.querySelectorAll(".cell");
    let length=box.length;
    for (i=0; i<length; i++){
        box[i].style.backgroundColor="white";
    }
}

btn.addEventListener('click', clear);
canvas.addEventListener('mouseup', fillBlack);

/*
var box=document.querySelectorAll(".cell");
//this gives array
console.log(box);

//this gets very first cell
var sample=box[0];
console.log(sample);

//this gives total amount of cells
let x=box.length;
console.log(x);
*/