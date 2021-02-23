function replaceCell(value) {
  let newValue=$(`#${value}`).text();
  if(store.write_permission[store.selected_cellID]){
    if(value !== "buttom_X"){
      $("#"+store.selected_cellID).text(newValue);
    } else {
      $("#"+store.selected_cellID).text(" ");
    }
  }
  
  /* (value !== "buttom_X")?
  $("#"+store.selected_cellID).text(newValue)
  :
  $("#"+store.selected_cellID).text(" ");
   */
  //$(`#${store.selected_cellID}`).text("15");
  
  /* let cell = document.createElement("td");
  let textCell = document.createTextNode("15");
  cell.setAttribute("id",store.selected_cellID);
  cell.appendChild(textCell);

  let oldTD = document.getElementById(store.selected_cellID);
  let newTD = oldTD.parentNode;
  newTD.replaceChild(cell, oldTD); */
}
