const container = document.querySelector(".container")

function makeGrid(squares) {
    container.style.gridTemplateColumns = `repeat(${squares},1fr)`;
    container.style.gridTemplateRows = `repeat(${squares},1fr)`;
    console.log(container.style.gridTemplateColumns)
    console.log(container.style.gridTemplateRows)
    for (let i = 1; i <= (squares * squares); i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'child')
        container.appendChild(div);
    }

    console.log(document.querySelectorAll("#child").length)
}

function clearGrid() {
    let divs = document.querySelectorAll("#child");
    divs = [...divs]
    divs.forEach(div => {
        div.parentNode.removeChild(div);
    })
}

makeGrid(16);

function attachEvent() {


    let divs = document.querySelectorAll("#child")
    divs = Array.from(divs)


    divs.forEach(element => {
        element.addEventListener('mouseleave', () => {
            element.style.backgroundColor = "red";
        })
    });
}

attachEvent()


const btn = document.querySelector("#reset");

btn.addEventListener('click', () => {
    clearGrid();
    const squares = +prompt("How many squares?");
    if(0 < squares && squares < 101){
        makeGrid(squares)
        attachEvent()
    }
    else{
        container.textContent = "Can't compute such a large grid"
    }
})