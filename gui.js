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

const clearPad=document.querySelector('button');
clearPad.addEventListener('click',()=>{
  mPlacement.forEach(unit =>{
    unit.classList.remove('hover');
    
  })
  console.log('cleared pad');
})