// Select color input
// Select size input



function makeGrid() {

 const gridHeight = $("#inputHeight").val(), gridWidth = $("#inputWeight").val();
    for(let H = 0; H < gridHeight; H++) {
        $("#pixelCanvas").append("<tr></tr>");
    }
    
    const rows = $("tr");
    
    for(let W = 0; W < gridWidth; W++) {
        rows.append("<td></td>");
    }
    
    
const cell = $("#pixelCanvas").find("td");

cell.click(function() {
    const colour = $("#colorPicker").val();
      $(this).css("background-color", colour);
});

}


const submitButton = $('input[type="submit"]');

submitButton.click(function(event) {
    event.preventDefault();
    makeGrid();
});
    


