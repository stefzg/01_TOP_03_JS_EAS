const dom_canvas = document.querySelector(".canvas");
drawCanvas(16);

const easButton = document.querySelector('#promptSideLength');
easButton.addEventListener('click', () => {
  promptSideLength();
});
  
function promptSideLength () {
  let intSideLength = prompt("Please enter a value from 2 to 100 for number of pixels per side", 16);
  drawCanvas(intSideLength);
}

function drawCanvas(intSideLength) {
  document.querySelector(".canvas").innerHTML = ""; 
  for (let i = 0; i < (intSideLength * intSideLength); i++) {
    drawCanvasElement(intSideLength, i);
  }
}

function drawCanvasElement(intSideLength, intId) {
  if (!(intSideLength > 1 && intSideLength <= 100)) {
    return;
  }
  const dom_pixel = document.createElement("div");
  const strStyleWidth = "width:" + (100 / intSideLength) + "%;";
  dom_canvas.appendChild(dom_pixel);
  dom_pixel.classList.add("pixel");
  dom_pixel.style = strStyleWidth;
  dom_pixel.id = "pixel_" + intId;
  dom_pixel.addEventListener('click', () => {
    togglePainted("pixel_" + intId);
  })
  dom_pixel.addEventListener('mousedown', () => {
    togglePainted("pixel_" + intId);
  })
  dom_pixel.addEventListener('mousemove', () => {
    togglePainted("pixel_" + intId);
  })
}

function togglePainted(strId) {
  const source = document.querySelector("#"+strId);
  source.classList.add("painted");
}