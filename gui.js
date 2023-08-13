const divBox = document.querySelector('.container');
const gridSize = 16;
totalBoxes = gridSize * gridSize;


let cell;


for (i = 1; i <= totalBoxes; i++) {
  cell = document.createElement('div');
  cell.classList.add('cell');
  divBox.appendChild(cell);
  // console.log(i);
}

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


const sizeButton = document.querySelector('.custom');
let customSize;
sizeButton.addEventListener('click',()=>{
  customSize=askForSize();

  console.log(customSize);
})
/*
  WHAT I NEED TO FIGURE OUT NEXT:
  -How to set the grid properly 
  -Ask user for input on gridSize(MAX is 100)
  -Have the same size in the same grid area
*/

