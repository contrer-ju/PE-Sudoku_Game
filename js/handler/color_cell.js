function colorCell() {
    if(store.previous_selected_cellID[0] === H0V3 || store.previous_selected_cellID[0] === H0V4 || store.previous_selected_cellID[0] === H0V5 || store.previous_selected_cellID[0] === H1V3 || store.previous_selected_cellID[0] === H1V4 || store.previous_selected_cellID[0] === H1V5 || store.previous_selected_cellID[0] === H2V3 || store.previous_selected_cellID[0] === H2V4 || store.previous_selected_cellID[0] === H2V5 || store.previous_selected_cellID[0] === H3V6 || store.previous_selected_cellID[0] === H3V7 || store.previous_selected_cellID[0] === H3V8 || store.previous_selected_cellID[0] === H4V6 || store.previous_selected_cellID[0] === H4V7 || store.previous_selected_cellID[0] === H4V8 || store.previous_selected_cellID[0] === H5V6 || store.previous_selected_cellID[0] === H5V7 || store.previous_selected_cellID[0] === H5V8 || store.previous_selected_cellID[0] === H6V3 || store.previous_selected_cellID[0] === H6V4 || store.previous_selected_cellID[0] === H6V5 || store.previous_selected_cellID[0] === H7V3 || store.previous_selected_cellID[0] === H7V4 || store.previous_selected_cellID[0] === H7V5 || store.previous_selected_cellID[0] === H8V3 || store.previous_selected_cellID[0] === H8V4 || store.previous_selected_cellID[0] === H8V5 || store.previous_selected_cellID[0] === H3V0 || store.previous_selected_cellID[0] === H3V1 || store.previous_selected_cellID[0] === H3V2 || store.previous_selected_cellID[0] === H4V0 || store.previous_selected_cellID[0] === H4V1 || store.previous_selected_cellID[0] === H4V2 || store.previous_selected_cellID[0] === H5V0 || store.previous_selected_cellID[0] === H5V1 || store.previous_selected_cellID[0] === H5V2){
        $("#"+store.previous_selected_cellID[0]).css("background", "#0a0a23");
    } else {
        $("#"+store.previous_selected_cellID[0]).css("background", "#2a2b40");
    } 
}