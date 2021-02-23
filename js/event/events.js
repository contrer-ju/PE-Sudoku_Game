
$(document).ready(function() {
    $("#buttom_New").click(function() {
        newTable()
    });
    $("#buttom_Clear").click(function() {
        defaultTable();
    });
    $("#buttom_Validate").click(function() {
        validateTable();
    });
    $(document).on("click","td",function(tdID) {            //lectura de elementos actuales despues del rederizado de la pagina
        exportCellID(tdID.target.id);
        $(this).css("background", "#7598c2");
        colorCell();
    });
    $(".buttom_number").click(function() {
        replaceCell(this.id)
    });
    $(".radio_buttom").click(function() {
        exportRadioValue(this.value);
    });    
});


//con el boton validate leer la tabla actual para luego crear el array en funcion de la tabla (proceso inverso de la creacion de la tabla inicial)
// comparan los dos array, generar mensaje de alert con resultado de la solucion