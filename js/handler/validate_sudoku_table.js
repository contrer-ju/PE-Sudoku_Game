function validateTable() {
    let cellValue = "em";
    let solveSudoku = [[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,],[,,,,,,,,]];
    let k = 0;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            cellValue=$(`#${"H"+i+"V"+j}`).text();
            solveSudoku[i][j] = parseInt(cellValue);
            if(solveSudoku[i][j] !== store.selectedSudoku[i][j]){
                k++;
            }
        }
    }
    console.log(store.selectedSudoku)
    console.log(k)
    
    switch(k) {
        case 0:
            alert("Puzzle Solved!!");
            break;
        case 81:
            alert("Please start the puzzle.");
            break;
        default:
            alert("Try again, contains "+k+" errors.");
    }

}