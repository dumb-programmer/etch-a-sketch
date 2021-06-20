const container = document.querySelector(".container")

for (let i = 0; i < 17; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'child')
    container.appendChild(div);
}