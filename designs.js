// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();

    makeGrid();

});

function makeGrid() {
    // Your code goes here!
    const mainTable = document.getElementById('pixelCanvas');
    mainTable.innerHTML = '';
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    const newTable = document.createElement('table');
    for (var r = 0; r < height; r++) {
        var row = document.createElement('tr');
        for (var c = 0; c < width; c++) {
            var cellInRow = document.createElement('td');
            row.appendChild(cellInRow);
            newTable.addEventListener('click', function(event) {
                event.target.style.backgroundColor = document.getElementById('colorPicker').value;
            });

        }

        newTable.appendChild(row);
    }
    mainTable.appendChild(newTable);
}