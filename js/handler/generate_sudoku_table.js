function newTable() {
  store.selected_cellID = "";
  let sudokuBoard = selectDifficulty();
  let table   = document.createElement("table");
  let tableBody = document.createElement("tbody");

  for (let i = 0; i < 9; i++) {
    let row = document.createElement("tr");
    let textCell;
    for (let j = 0; j < 9; j++) {
      let cell = document.createElement("td");
      cell.setAttribute("id", "H"+i+"V"+j);
      if(sudokuBoard[i][j] === undefined){
        textCell = document.createTextNode(" ");
        cell.setAttribute("class", "writable");
        store.write_permission["H"+i+"V"+j] = true;
      } else {
        textCell = document.createTextNode(sudokuBoard[i][j]);
        cell.setAttribute("class", "read_only");
        store.write_permission["H"+i+"V"+j] = false;
      }
      cell.appendChild(textCell);
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);
  let oldTable = document.getElementsByTagName("table")[0];
  let newTable = oldTable.parentNode;
  newTable.replaceChild(table, oldTable);
}


//https://developer.mozilla.org/es/docs/Trazado_de_una_tabla_HTML_mediante_JavaScript_y_la_Interface_DOM
//Origen del codigo

//https://developer.mozilla.org/es/docs/Web/API/Node/replaceChild
//Otra parte del codigo