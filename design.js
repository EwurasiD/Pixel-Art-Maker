// Select color input
// Select size input
let height, width, color;

function makeGrid(x, y) {
    // removes tr from table
    $('tr').remove();
    

    for (let i = 1; i <= x; i++) {
        // adds tr to table
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (let j = 1; j <= y; j++) {
            // adds td to table
            $('#table' + i).append('<td></td>');
        }
    }

    //addColor when clicked
    $('td').click(function addColor() {
        // selects color
        color = $('#colorPicker').val();
        
        // adds and removes color added when clicked
        if ($(this).attr('style')) {
            $(this).removeAttr('style'); 
        }
        else {
            $(this).css('background-color', color);
        }
          
    })
    
    // resets to enter new width and height
    $('#reset').click(function empty() {
        document.getElementById('pixelCanvas').remove();
        //reloads page after reset is clicked to help input new height and width
        document.location.reload(true);
    })
    
}


// Call makeGrid() when size is submitted
$('#sizePicker').submit(function (event) {
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
    event.preventDefault(); // Stops default action of height and width from happening
})

