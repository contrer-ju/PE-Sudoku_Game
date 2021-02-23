function selectDifficulty(){
    let horizontalPosition = [];
    let verticalPosition = [];
    let sudokuBoard = newBoard();
    let difficultyBoard = [[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,]];
    let difficultyValue = store.selected_radio_value;

    for(let i = 0; i < 6; i++){
        let temporalHorizontalPosition = newArray();
        let temporalVerticalPosition = newArray();
        for (j = 0; j < 9; j++){
            horizontalPosition.push(temporalHorizontalPosition[j]);
            verticalPosition.push(temporalVerticalPosition[j]);
        } 
    }

    for(let i = 0; i <= difficultyValue; i++){
        difficultyBoard[horizontalPosition[i]][verticalPosition[i]] = sudokuBoard[horizontalPosition[i]][verticalPosition[i]];
    }

    return difficultyBoard;
}