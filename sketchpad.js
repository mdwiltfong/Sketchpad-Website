

//section: On Load

document.body.onload = () => {
  lightSlider.value = 50
  satSlider.value = 100
  eraserVal.value = 25;
  strokeVal.value = ""
  pencilIcon.style.backgroundColor = "white"
  updatePencilColor()
}



//section: NOTEPAD CODE

let canvas = document.getElementById("canva");
let ctx = canvas.getContext('2d');



//Section: DRAWING

let pencil = true;
let drawing = false;
let pencilButton = document.getElementById("pencil")
let pencilIcon = document.getElementById("pencil-icon")

function activatePencil(){
    if (eraser == true || eyedropper == true ){
    eyedropper = false
    eraser = false;
    pencil = true;
  }
  
  eyeDropIcon.style.backgroundColor = "transparent"
  eraseIcon.style.backgroundColor = "transparent"
  pencilIcon.style.backgroundColor = "white"
}

function startDrawing(e) {
  if (e.pressure > 0 && pencil == true) { drawing= true;
    let x = e.offsetX
    let y = e.offsetY
    ctx.moveTo(x,y);
   } else if (pencil == true) {
    drawing = true
  }
};

function drawingFunction(e) {
  if (drawing == true && pencil == true){
    let x = e.offsetX
    let y = e.offsetY
    ctx.lineTo(x,y);
    ctx.stroke();
    }
}

function stopDrawing() {
  drawing = false;
}

canvas.addEventListener('mousedown', startDrawing)
canvas.addEventListener('mousemove', drawingFunction);
canvas.addEventListener('mouseup', stopDrawing)
canvas.addEventListener('mouseleave', stopDrawing)


canvas.addEventListener('pointerdown', startDrawing)
canvas.addEventListener('pointermove',drawingFunction);
canvas.addEventListener('pointerup', stopDrawing)
canvas.addEventListener('pointerleave', stopDrawing)

pencilButton.addEventListener("click", activatePencil)



//section: ERASER// refactored

let eraser = false;
let erasing = false;
eraseButton = document.getElementById('eraser');
let eraseIcon = document.getElementById('erase-icon')
let eraserVal = document.getElementById("eraser-value")

eraserVal.defaultValue = 25;
eraserVal.oninput = eraserVal.value

function activateEraser(){
    eraser = true;
    pencil = false;
    eyedropper = false

    eyeDropIcon.style.backgroundColor = "transparent"
    eraseIcon.style.backgroundColor = "White"
    pencilIcon.style.backgroundColor = "transparent"
}

function startErasing(){
  if (eraser == true){
    erasing = true;
    }
}

function erasingFunction(e) {
  if (erasing == true ){
  let x = e.offsetX
  let y = e.offsetY
  ctx.beginPath()
  ctx.clearRect(x-12,y-12,eraserVal.value,eraserVal.value)
  }
}

function stopEraser(){
  erasing = false;
}

eraseButton.addEventListener("click", activateEraser);

canvas.addEventListener('mousedown', startErasing);
canvas.addEventListener('mousemove', erasingFunction);
canvas.addEventListener('mouseup',stopEraser);
canvas.addEventListener("mouseleave", stopEraser);

canvas.addEventListener('pointerdown', startErasing);
canvas.addEventListener('pointermove', erasingFunction);
canvas.addEventListener('pointerup', stopEraser);
canvas.addEventListener("pointerleave", stopEraser);



//section: CLEAR CANVAS//

clearButton = document.getElementById('clear');
function clearFunc(){
  ctx.clearRect(0,0,700,500)
  ctx.beginPath()
  pencil = true;
  eraser = false
}

clearButton.addEventListener("click", clearFunc);



//section Save to Computer// looked this one up. 

document.getElementById('save').addEventListener('click', function(e) {
  let canvasUrl = canvas.toDataURL("image/jpeg", 0.5);
  console.log(canvasUrl);
  const createEl = document.createElement('a');
  createEl.href = canvasUrl;
  createEl.download = "Notepad";
  createEl.click();
  setTimeout(createEl.disabled = "true", 2)
  createEl.remove();
 
});



//section Adjust Stroke Size 
  
let strokeVal = document.getElementById("stroke-value");

function changeBrushSize(e) {
  let key = e.key;
  if (strokeVal.value <= 50 && key === "Enter"){ 
    e.preventDefault()
    ctx.beginPath()
    ctx.lineWidth = strokeVal.value;
  } else if ( strokeVal.value <= 50 ) {
    ctx.beginPath()
    ctx.lineWidth = strokeVal.value;
  } else if (strokeVal.value > 50) {
    alert("Only values 1 through 50 are accepted")
    strokeVal.value = "";
  } 
}

document.getElementById('brush-size').addEventListener('click', changeBrushSize) 
document.getElementById('brush-settings').addEventListener('keydown', changeBrushSize) 




//section Change Pencil Color

let blkSwatch = document.getElementById("swatch-1")
let swatchBtn = document.getElementsByClassName("swatch-btn")

let swatchPick = (e) => {
  
  ctx.strokeStyle = e.target.value
  ctx.beginPath()
  updatePencilColor()
}

for (var i = 0; i <swatchBtn.length; i++) {
  swatchBtn[i].addEventListener("click", swatchPick)
}




//section:Icon Animation

let iconBtn = document.getElementsByClassName("icon");
let icons = document.getElementsByClassName("icon-img");



//section Light and Saturation Sliders

let colorpickermenu = document.getElementById("color-picker-menu");

let swatch3 = document.getElementById('swatch-3')
let swatch4 = document.getElementById('swatch-4')
let swatch5 = document.getElementById('swatch-5')
let swatch6 = document.getElementById('swatch-6')
let swatch7 = document.getElementById('swatch-7')
let swatch8 = document.getElementById('swatch-8')

let lightSlider = document.getElementById('lightness');
let satSlider = document.getElementById('saturation')

lightSlider.defaultValue = 50
satSlider.defaultValue = 100

lightSlider.oninput = function() {

  swatch3.style.backgroundColor = 'hsl(0,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch4.style.backgroundColor = 'hsl(240,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch5.style.backgroundColor = 'hsl(120,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch6.style.backgroundColor = 'hsl(39,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch7.style.backgroundColor = 'hsl(60,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch8.style.backgroundColor = 'hsl(330,' + satSlider.value + '%,' + lightSlider.value + '%)'
  
  for (i = 3; i < colorpickermenu.childElementCount - 2; i++) {
    let swatchi = document.getElementById('swatch-'+[i])
    swatchi.firstElementChild.value = swatchi.style.backgroundColor
  
  }
}

satSlider.oninput = function() {

  swatch3.style.backgroundColor = 'hsl(0,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch4.style.backgroundColor = 'hsl(240,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch5.style.backgroundColor = 'hsl(120,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch6.style.backgroundColor = 'hsl(39,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch7.style.backgroundColor = 'hsl(60,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch8.style.backgroundColor = 'hsl(330,' + satSlider.value + '%,' + lightSlider.value + '%)'
   
    for (i = 3; i < colorpickermenu.childElementCount - 2; i++) {
    let swatchi = document.getElementById('swatch-'+[i])
    swatchi.firstElementChild.value = swatchi.style.backgroundColor
   
    }
}



//section Eyedropper Tool

let eyeDropBtn = document.getElementById('eye-btn');
let eyeDropIcon = document.getElementById('eyedrop-icon')
let eyedropper = false;
let beginPicking = false;

function activateEyeDropper () {
  pencil = false
  eraser = false
  eyedropper = true

  eyeDropIcon.style.backgroundColor = "white"
  eraseIcon.style.backgroundColor = "transparent"
  pencilIcon.style.backgroundColor = "transparent"
}

function startPickingColor () {
  if (eyedropper == true) {
    beginPicking = true
  }
}

function selectColor(e) {
  if (beginPicking == true) {
    let x = e.offsetX
    let y = e.offsetY
    let imageData = ctx.getImageData(x,y,1,1);
    let red= imageData.data[0];
    let green= imageData.data[1];
    let blue= imageData.data[2];
    let alpha= imageData.data[3];
    let colorValues = 'rgba('+ red + ',' + green + ',' + blue + ',' + alpha + ')';
    // if (colorValues == "rgba(0,0,0,0)") {
    //   alert('blank canvas defaults to a transparent color')
    // }
    ctx.beginPath()
    ctx.strokeStyle = colorValues
    updatePencilColor()
  }
}

function stopPickingColor () {
  beginPicking = false;
}

eyeDropBtn.addEventListener('click', activateEyeDropper);
canvas.addEventListener('mousedown', startPickingColor)
canvas.addEventListener('mousedown', selectColor)
canvas.addEventListener('mousemove', selectColor);
canvas.addEventListener('mouseup', stopPickingColor);

canvas.addEventListener('pointerdown', startPickingColor)
canvas.addEventListener('pointerdown', selectColor)
canvas.addEventListener('pointermove', selectColor);
canvas.addEventListener('pointerup', stopPickingColor);




//section: Current Color

let pencilContext = document.getElementById('currentcolor')

function updatePencilColor() {
  pencilContext.style.backgroundColor = ctx.strokeStyle
}







