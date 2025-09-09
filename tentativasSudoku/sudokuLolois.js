const prompt = require('prompt-sync')();

let sudoku = [];

for (let i = 0; i < 4; i++) {
    let linha = [];

    for (let j = 0; j < 4; j++) {
        linha.push(Number(prompt(`Digite o número na posição [${i},${j}]: `)));
    }

    // se for linha ímpar, inverte
    if (i % 2 !== 0) {
        linha.reverse();
    }

    sudoku.push(linha);
}

/*
let sudoku = [
    [0, 0, 0, 1],
    [2, 1, 3, 4],
    [0, 0, 0, 0],
    [0, 0, 4, 2],
]
*/


