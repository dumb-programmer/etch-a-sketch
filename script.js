const container = document.querySelector(".container")

function makeGrid(squares) {
    container.style.gridTemplateColumns = `repeat(${squares},1fr)`;
    container.style.gridTemplateRows = `repeat(${squares},1fr)`;
    for (let i = 1; i <= (squares * squares); i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'child')
        container.appendChild(div);
    }
    attachEvent()
}

function clearGrid() {
    let divs = document.querySelectorAll("#child");
    divs = [...divs]
    divs.forEach(div => {
        div.parentNode.removeChild(div);
    })
}


// Make a 16x16 grid when the page loads
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

const btn = document.querySelector("#reset");

btn.addEventListener('click', () => {
    clearGrid();
    let squares = +prompt("How many squares per side to make the new grid(0-100)?");
    while (squares <= 0 || squares > 100) {
        squares = +prompt("How many squares per side to make the new grid(0-100)?");
    }
    makeGrid(squares)
})