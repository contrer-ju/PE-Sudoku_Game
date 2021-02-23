function exportCellID(tdID) {
  if(store.previous_selected_cellID.length === 0){
    store.previous_selected_cellID.push(tdID);
  }
  if(store.previous_selected_cellID.length === 1){
    store.previous_selected_cellID[1] = tdID;
  }
  if(store.previous_selected_cellID.length > 1){
    store.previous_selected_cellID.push(tdID);
    store.previous_selected_cellID.shift();
  }
  
  store.selected_cellID = tdID;
  return;
}