'use strict';
let drawings = document.getElementById('drawings');
let drawingsArr = [];
drawingsArr.push('img/drawings/Unknown.png');
drawingsArr.push('img/drawings/image2.png');
drawingsArr.push('img/drawings/image3.png');
drawingsArr.push('img/drawings/image4.png');
drawingsArr.push('img/drawings/image5.png');
drawingsArr.push('img/drawings/image6.png');

function getRandomIndex() {
  return Math.floor(Math.random() * drawingsArr.length);
}

function renderdrawings(){
  let index = getRandomIndex();
  let img = document.createElement('img');
  drawings.appendChild(img);
  img.src= drawingsArr[index];
}

renderdrawings();




