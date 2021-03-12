document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
})

function reset() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''];
    playerTime = 0;
    gameOver = false;
    console.log(board)
    updateSquares();
}

function addPlayersName() {
    let inputName = document.getElementById("name");
    let playerName = document.getElementById("playerName");
    let names = document.getElementsByClassName("names");
    let buttonsRemove = document.getElementsByClassName("remove");

    if (inputName.value != '' && names.length < 2) {
        playerName.innerHTML += `<div class="names"><span>${inputName.value}</span> <button class="remove">Remover</button></div>`;
        inputName.value = '';
    }

    for (let i = 0; i < buttonsRemove.length; i++) {
        buttonsRemove[i].addEventListener("click", remove);
    }
}

function remove() {
    let playerName = document.getElementById("playerName");
    playerName.removeChild(this.parentElement) == '';
}


function handleClick(event) {
    console.log(board)
    let square = event.target;
    let position = square.id;
    let spanName = document.getElementsByTagName("span");
    let winnerName;

    if (typeof spanName[1] != "undefined") {
        if (playerTime == 0) {
            winnerName = spanName[0].textContent;
        } else {
            winnerName = spanName[1].textContent;
        }

        if (handleMove(position)) {
            setTimeout(() => {
                alert(`Parabéns ${winnerName} pela vitória!`);
            }, 10)
        };
        updateSquare(position);
    }
    else {
        alert("Por favor, insira pelo menos dois nomes");
    }
}

function updateSquare(position) {
    let square = document.getElementById(position.toString())

    let symbol = board[position]
    if (typeof symbol != "undefined") {
        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    }
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.innerHTML = ''
    })
}