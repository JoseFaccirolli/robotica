let sudoku = [
    [0, 0, 0, 1],
    [2, 1, 3, 4],
    [0, 0, 0, 0],
    [0, 0, 4, 2],
]

let escolha = [1, 2, 3, 4]


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

/* Lendo os blocos */

