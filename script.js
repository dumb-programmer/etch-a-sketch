const container = document.querySelector(".container")

for (let i = 0; i < 17; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'child')
    container.appendChild(div);
}

let divs = document.querySelectorAll("#child")
divs = Array.from(divs)
console.log(divs)
divs.forEach(element => {
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = "red";
    })
});