

// this works kind of but only when I leave the window and come back. I need it to constantly update. 

// document.addEventListener('mouseover', (event)=> {
//     let mousex = event.clientX
//     let mousey = event.clientY;
//     let coord = mousex + "\ " + mousey;
//     return console.log(coord);
// } )

//this works!!

// document.addEventListener('mousemove', (event)=> {
//     let mousex = event.clientX
//     let mousey = event.clientY;
//     let coord = mousex + "\ " + mousey;
//     return coord;
// })

// this works as well though I had to make some mistakes to get it to work.
// for one if I use a variable I have to tie it to a element or object I believe.
// 2. I can't put a function defined outside inside. I need to write the function within here. 
// 3. I tried to be fancy and ended up being dumb by getting the event to read the mousemove function when it could read the coordinates itself with no change in code. 

// document.addEventListener("mousedown", (event) => {
//         let mousex = event.clientX
//         let mousey = event.clientY;
//         let coord = mousex + "\ " + mousey;
//         return  coord;
// });

// document.addEventListener('mousedown', (event)=> {
    
//     let mousex = event.clientX
//     let mousey = event.clientY;
//     let coordInfo  = event.button
//     // i tried to use event.button but it is read only. 
//       return console.log(coordInfo)
// })

// document.addEventListener("mousedown", (event) => {
//     let mousex = event.clientX
//     let mousey = event.clientY;
//     document.create
//     return  coord;

// });

//section Large TODO LIST
/**
  
  *done: add pencil icon and functionality
  *done: re-style the pencil-size button and form 
  *done: remove change background button
    //can add back in later
  *done: add in website title think about other elements
  *done: outside of this app add todo completed and notes
    // for longer thoughts and explanations
  *done: add mousedown mouse up animation for buttons.(like swatches)
*/

//section: NOTEPAD CODE

let canvas = document.getElementById("canva");
let background = document.getElementById('background')
let background2 = document.getElementById('background2')
let loadedBkg = background

let ctx = canvas.getContext('2d');

// //Background Change//
// bkgButton = document.getElementById('change-bkgnd')
// // bkgButton2 = document.getElementById('save')
// window.onload = function() {ctx.drawImage(background,0,0, 400,400)}

// bkgButton.addEventListener("click", () => {
//     ctx.drawImage(background2,0,0, 400,400)
//     loadedBkg = background2
// })

// bkgButton2.addEventListener("click", () => {
//   ctx.drawImage(background,0,0, 400,400)
//   loadedBkg = background
// })

//Section: DRAWING

let pencil = true;
let drawing = false;
let pencilButton = document.getElementById("pencil")
let pencilIcon = document.getElementById("pencil-icon")

function activatePencil(){
    if (eraser == true){
    eraser = false;
    pencil = true;
  }
}

function startDrawing(e) {
  if (e.pressure > 0) { drawing= true && pencil == true;
    let x = e.offsetX
    let y = e.offsetY
    ctx.moveTo(x,y);
   } else if (eraser == true){
    eraser = false;
    pencil = true;
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

canvas.addEventListener('pointerdown', startDrawing)

canvas.addEventListener('pointermove',drawingFunction);

canvas.addEventListener('pointerup', stopDrawing)

canvas.addEventListener('mouseleave', stopDrawing)

canvas.addEventListener('pointerleave', stopDrawing)

pencilButton.addEventListener("click", activatePencil)



//section: ERASER// refactored

let eraser = false;
let erasing = false;
eraseButton = document.getElementById('eraser');
let eraseIcon = document.getElementById('erase-icon')

function activateEraser(){
  if(eraser == false) {
    eraser = true;
    pencil = false;
  }
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
  ctx.clearRect(x-12,y-12,25,25) 
  ctx.beginPath();
  }
}

function stopEraser(){
  erasing = false;
}

eraseButton.addEventListener("click", activateEraser);

canvas.addEventListener('mousedown', startErasing);

canvas.addEventListener('pointerdown', startErasing);

canvas.addEventListener('mousemove', erasingFunction);

canvas.addEventListener('pointermove', erasingFunction);

canvas.addEventListener('mouseup',stopEraser);

canvas.addEventListener('pointerup', stopEraser);

canvas.addEventListener("mouseleave", stopEraser);

canvas.addEventListener("pointerleave", stopEraser);

//section: CLEAR CANVAS//
//need to add functionality to restore background. Better I will place the canvas over the background.
//Though this might make downloading impossible.

clearButton = document.getElementById('clear');
function clearFunc(){
  ctx.clearRect(0,0,700,500)
  ctx.beginPath()
  pencil = true;
  eraser = false
}

clearButton.addEventListener("click", clearFunc)

//section Save to Computer// looked this one up. 

// This just didn't work for some reason

// saveButton = document.getElementById('save');
// saveAnchor = document.getElementsByClassName('dlink')

// document.getElementById('save').addEventListener('click', function(e) {
//   let download = canvas.toDataURL();
//   saveAnchor.href = download;
//   saveAnchor.click()
// });

document.getElementById('save').addEventListener('click', function(e) {
  let canvasUrl = canvas.toDataURL("image/jpeg", 0.5);
  console.log(canvasUrl);
  const createEl = document.createElement('a');
  createEl.href = canvasUrl;
  createEl.download = "Notepad";
  createEl.click();
  createEl.remove();
});

//section Adjust Stroke Size 
  //note Refactored

let strokeVal = document.getElementById("stroke-value");

function changeBrushSize(e) {
  let key = e.key;
  if (strokeVal.value <= 50 && key === "Enter"){ 
    e.preventDefault()
    ctx.beginPath()
    return ctx.lineWidth = strokeVal.value;
  } else if ( strokeVal.value <= 50 ) {
    ctx.beginPath()
    return ctx.lineWidth = strokeVal.value;
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
}

for (var i = 0; i <swatchBtn.length; i++) {
  swatchBtn[i].addEventListener("click", swatchPick)
}

//section: Just FOR PAGE DIAGNOSTICS

document.addEventListener("mousedown", (e) => {
 let x = e.clientX;
 let y = e.clientY;
 let coords = x + "," + y
 console.log(coords)
})

//section:Icon Animation

let iconBtn = document.getElementsByClassName("icon")
let icons = document.getElementsByClassName("icon-img")

//section Lightness Slider

let colorpickermenu = document.getElementById("color-picker-menu")

let swatch3 = document.getElementById('swatch-3')
let swatch4 = document.getElementById('swatch-4')
let swatch5 = document.getElementById('swatch-5')
let swatch6 = document.getElementById('swatch-6')
let swatch7 = document.getElementById('swatch-7')
let swatch8 = document.getElementById('swatch-8')

console.log(colorpickermenu.childElementCount)

let lightSlider = document.getElementById('lightness');
let satSlider = document.getElementById('saturation')

 lightSlider.oninput = function() {

swatch3.style.backgroundColor = 'hsl(0,' + satSlider.value + '%, ' + lightSlider.value + '%)'
swatch4.style.backgroundColor = 'hsl(240,' + satSlider.value + '%, ' + lightSlider.value + '%)'
swatch5.style.backgroundColor = 'hsl(120,' + satSlider.value + '%, ' + lightSlider.value + '%)'
swatch6.style.backgroundColor = 'hsl(39,' + satSlider.value + '%, ' + lightSlider.value + '%)'
swatch7.style.backgroundColor = 'hsl(60,' + satSlider.value + '%, ' + lightSlider.value + '%)'
swatch8.style.backgroundColor = 'hsl(330,' + satSlider.value + '%,' + lightSlider.value + '%)'
 
  for (i = 3; i < colorpickermenu.childElementCount; i++) {
  let swatchi = document.getElementById('swatch-'+[i])
  console.log(swatchi.firstElementChild.value = swatchi.style.backgroundColor)
 
  }
}

satSlider.oninput = function() {

  swatch3.style.backgroundColor = 'hsl(0,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch4.style.backgroundColor = 'hsl(240,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch5.style.backgroundColor = 'hsl(120,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch6.style.backgroundColor = 'hsl(39,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch7.style.backgroundColor = 'hsl(60,' + satSlider.value + '%, ' + lightSlider.value + '%)'
  swatch8.style.backgroundColor = 'hsl(330,' + satSlider.value + '%,' + lightSlider.value + '%)'
   
    for (i = 3; i < colorpickermenu.childElementCount; i++) {
    let swatchi = document.getElementById('swatch-'+[i])
    console.log(swatchi.firstElementChild.value = swatchi.style.backgroundColor)
   
    }
  }







