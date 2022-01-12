const canvas=document.querySelector(".canvas");
const eBtn=document.querySelector(".erase");
const rBtn=document.querySelector(".reset");

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

function drawCustomGrid(){
    let y=prompt("Enter number of rows");
    let x=prompt("Enter number of columns");
    let h=500/y;
    let w=500/x;
    
    let a=h+"px";
    let b=w+"px";


    for (let i=0; i<y;i++){
        var row=document.createElement("div");
        row.style.display="flex";
        canvas.appendChild(row);
        canvas.style.flexDirection="column";

        for(let n=0; n<x; n++){
            var cell=document.createElement("div");
            cell.classList.add("cell");
            cell.style.height=a;
            cell.style.width=b;
            row.appendChild(cell);
            row.style.flexDirection="row";
        }
    }
}

drawCustomGrid();

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

eBtn.addEventListener('click', clear);
rBtn.addEventListener('click', function(){
    var el=document.querySelectorAll(".cell");
    let length=el.length;
    for (i=0; i<length; i++){
        el[i].parentNode.removeChild(el[i]);
    }
    console.log("workd");
});
canvas.addEventListener('mouseover', fillBlack);
