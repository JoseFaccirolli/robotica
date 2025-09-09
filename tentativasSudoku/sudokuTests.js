let sudoku = [
    [0, 0, 0, 1],
    [2, 1, 3, 4],
    [0, 0, 0, 0],
    [0, 0, 4, 2],
]

let escolha = [1, 2, 3, 4]

function linhasColunas(){
    /* Lendo todas as casas do sudoku */
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(`Linha ${i}, Coluna ${j}: ${sudoku[i][j]}`)
        }
    }

    /* Lendo as linhas */
    for (let i = 0; i < 4; i++) {
        console.log(sudoku[i])
    }

    /* Lendo as colunas */
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(sudoku[j][i])
        }
        console.log()
    }
}


/* Lendo os blocos */
function getQuadrado(i, j) {
    bloco = []
    bloco.push(sudoku[i][j], sudoku[i][j+1], sudoku[i+1][j], sudoku[i+1][j+1])
    console.log(bloco)
}

/* getQuadrado(0,0) */

function getAnySquare(i, j) {
    bloco = []
    i = Math.floor(i / 2) * 2
    j = Math.floor(j / 2) * 2
    bloco.push(sudoku[i][j], sudoku[i][j+1], sudoku[i+1][j], sudoku[i+1][j+1])
    console.log(bloco)
}

getAnySquare(2, 3)