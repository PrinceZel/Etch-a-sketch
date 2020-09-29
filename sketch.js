const container = document.querySelector(`#div`);
container.style.width = "960px";
container.style.height = "500px";
container.style.marginTop = "50px";

function createGrid(size) {
    for (let i = 1; i <= size*size; i++){
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('grid');
    }
    container.style.display = 'grid';
    let String = "";
    for (let i = 0; i < size; i++){
        String+= "auto ";
    }
    container.style.gridTemplateColumns = String;
    color();
}

function clear() {
    const grids = Array.from(document.querySelectorAll('.grid'));
    grids.forEach(grid => grid.style.backgroundColor = "transparent");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    const size = prompt("How many squares per side?")

    createGrid(size);
}

function addTrans(e){
    e.target.classList.remove('grid');
    e.target.classList.add('hovering');
    const hover = document.querySelector(".hovering");
    hover.style.backgroundColor = "black";
}

function removeTrans(e){
    e.target.classList.remove('hovering');
    e.target.classList.add('grid');
}

function color(){
    const divs = Array.from(document.querySelectorAll('.grid'));
    divs.forEach(div => div.addEventListener('mouseenter', addTrans));
    divs.forEach(div => div.addEventListener('mouseleave', removeTrans))
}

const btn = document.querySelector('#btn');
btn.style.marginTop = "30px";
btn.style.marginLeft = "460px";
btn.addEventListener('click', clear);

createGrid(4);


