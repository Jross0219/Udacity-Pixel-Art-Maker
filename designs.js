

// Your code goes here!


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
  event.preventDefault();
  var height = document.getElementById('inputHeight');
  var width = document.getElementById('inputWidth');
  makeGrid(height.value, width.value);
  
});

// Select size input, call colorSquare()
function makeGrid(width,height) {
  $('tr').remove();
  for(var row=1; row<=width; row++)
    {
      $('#pixelCanvas').append('<tr id=table' +row+ '></tr>');
  for(var cell=1; cell<=height; cell++)
    {
      $('#table' + row).append('<td></td>');
    }
    }
    colorSquare();


// Select color input
function colorSquare() {
  $('td').click(function changeColor()
  {
    color = $('#colorPicker').val();
    $(this).prop('style','background-color:'+color);
    })
  }
}