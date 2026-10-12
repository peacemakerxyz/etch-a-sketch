const container = document.getElementById("container");
const resetBtn = document.getElementById("reset-btn");

function createGrid(squaresPerSide) {
    container.innerHTML = "";

    const totalSquares = squaresPerSide * squaresPerSide;
    const squarePercentage = 100 / squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-square");

        div.style.flex = `0 0 ${squarePercentage}%`;
        div.style.height = `${squarePercentage}%`;

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "#333333";
        });

        container.appendChild(div);
    }
}

resetBtn.addEventListener("click", () => {
    let input = prompt("Enter the number of squares per side (maximum 100):");

    if (input === null) return;

    const size = parseInt(input, 10);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(size);
    }
});

createGrid(16);