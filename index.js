let tableboard = document.getElementById('tableboard');
let cells = tableboard.getElementsByTagName('td');

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (cells[i * 3].textContent && cells[i * 3].textContent == cells[i * 3 + 1].textContent && cells[i * 3 + 1].textContent == cells[i * 3 + 2].textContent) {
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (cells[i].textContent && cells[i].textContent == cells[i + 3].textContent && cells[i + 3].textContent == cells[i + 6].textContent) {
            return true;
        }
    }

    if (cells[0].textContent && cells[0].textContent == cells[4].textContent && cells[4].textContent == cells[8].textContent) {
        return true;
    }

    if (cells[2].textContent && cells[2].textContent == cells[4].textContent && cells[4].textContent == cells[6].textContent) {
        return true;
    }

    return false;
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
        if (this.textContent) {
            this.textContent = (this.textContent == 'X') ? 'O' : '';
        } else {
            this.textContent = 'X';
        }

        if (checkWin()) {
            alert('You won!');
        }
    });
}
