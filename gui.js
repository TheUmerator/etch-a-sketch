const divBox = document.querySelector('container');
const gridSize = 16;
totalBoxes = gridSize * gridSize;

 let boxArray=[];
for (i = 0; i < totalBoxes; i++) 
  {
    boxArray[i]=document.createElement('div');
    boxArray[i]=boxArray[i].classList.add('box');
    console.log(boxArray[i]);
  }
  // boxArray[i]=document.createElement(div);