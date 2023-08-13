const divBox = document.querySelector('.container');
const divBoxSize=350;

const gridSize = 16;
totalBoxes = gridSize * gridSize;


let cell;

function createGrid(gridSize,divBoxSize){
  totalBoxes=gridSize*gridSize;
  let cellSize=divBoxSize/gridSize;
  //we now have the size of each individual cell
  //we create each box
  for (i = 1; i <= totalBoxes; i++) {
    cell = document.createElement('div');
    cell.classList.add('cell');

    cell.style.width=cellSize+'px';
    cell.style.height=cellSize+'px';
    divBox.appendChild(cell);
    // console.log(i);
  }
    console.log('Grid of '+totalBoxes+' created');
    console.log('Each cell is '+cellSize)
}

createGrid(gridSize,divBoxSize);




// for (i = 1; i <= totalBoxes; i++) {
//   cell = document.createElement('div');
//   cell.classList.add('cell');
//   divBox.appendChild(cell);
//   // console.log(i);
// }

//now when being hovered on,
//change color and be green

const mPlacement = document.querySelectorAll('.cell');


mPlacement.forEach(unit => {
  unit.addEventListener('mouseover', () => {
    unit.classList.add('hover');
    console.log('hovered');
  })
})

const clearPad = document.querySelector('.reset');
clearPad.addEventListener('click', () => {
  mPlacement.forEach(unit => {
    unit.classList.remove('hover');

  })
  console.log('cleared pad');
})

function askForSize() {
  let err = 1,size;
  while (err == 1) {
    size = prompt('Enter custom grid size (upto 100):');
    size=parseInt(size);
    if ((typeof(size)=='number')&&(size<=100))
    err=0;

    else
    console.log('Enter the correct values');
  }
  return size;
}

// function createCustomGrid(size) {
//   let containerSize, newCellSize;

//   newCellSize=containerSize/size;

//   //Apply this to each cell created
//   //remove previous cells created

//   const newCell=document.querySelectorAll('.cell');

//   newCell.forEach((unitCell)=>{
//     unitCell.

//   })

// }


const sizeButton = document.querySelector('.custom');
let customSize;
sizeButton.addEventListener('click',()=>{
  customSize=askForSize();

  console.log(customSize);
})
/*
  WHAT I NEED TO FIGURE OUT NEXT:
  -How to set the grid properly 
  -Ask user for input on gridSize(MAX is 100)     DONE!!
  -Have the same size in the same grid area


  EXTRA CREDIT WORK:
  -HAVE EACH HOVER BE A RANDOM RGB VALUE
  -DARKENING EFFECT THAT MAKES EACH HOVER ON A
   SINGLE CELL 10% DARKER
*/

