const divBox = document.querySelector('.container');
const gridSize = 16;
totalBoxes = gridSize * gridSize;

let cell;


for (i = 1; i <= totalBoxes; i++) 
  {
    cell=document.createElement('div');
    cell.classList.add('cell');
    divBox.appendChild(cell);
    console.log(i);
  }