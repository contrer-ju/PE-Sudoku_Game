function defaultTable() {
  store.selected_cellID = "";
  let table   = document.createElement("table");
  let tableBody = document.createElement("tbody");
  
  for (let i = 0; i < 9; i++) {
    let row = document.createElement("tr");
    let textCell;
    for (let j = 0; j < 9; j++) {
      let cell = document.createElement("td");
      textCell = document.createTextNode("X");
      cell.setAttribute("class", "read_only");
      cell.setAttribute("id", "H"+i+"V"+j);
      store.write_permission["H"+i+"V"+j] = false;
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