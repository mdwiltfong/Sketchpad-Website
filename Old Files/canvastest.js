let canvas = document.getElementById("canva");
let canvas2 = document.getElementById("canva2");

let ctx = canvas.getContext('2d');
let ctx2 = canvas2.getContext('2d');

// ctx.moveTo(0, 0);
// ctx.lineTo(150, 75 );
// ctx.stroke(); 

document.addEventListener("click", (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let pos = "" + x + "," + y
    return console.log(pos)
})

// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

let grd = ctx.createLinearGradient(0,0,25,50);
grd.addColorStop(0, 'red');
grd.addColorStop(1, "gold")

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 150, 75);

let grd2 = ctx.createLinearGradient(200,200,275,232);
grd2.addColorStop(0, 'red');
grd2.addColorStop(1, "gold")

ctx2.fillStyle = grd2;
ctx2.fillRect(200, 200, 350, 375);

// only one fill style per canvas

// ctx2.fillStyle = grd;
// ctx2.fillRect(0, 0, 150, 75);

// let grd3= ctx2.createRadialGradient(170,0,210,0);
// grd3.addColorStop(0, 'red');
// grd3.addColorStop(1, "gold")

function createRect(x1,y1,x2,y2) {
    ctx2.fillRect(x1,y1,x2,y2);
}

createRect(170,0,100, 75);
createRect(0,85,150, 75);

// Not possible to get location data of a rectangle inside of canvas without getting the whole canvas position. Not an element

// document.addEventListener("click", () => {
//     let imgData= ctx.getImageData(0,0,150,75)
//     let x = imgData.offsetX
//     let y = imgData.offsetY
//     let pos = "" + x + "," + y
//     return console.log(pos)
// });

ctx2.font = "10px Arial"
ctx2.textAlign = 'right';
ctx2.fillText("Hello World", canvas.width/2, canvas.height/2 )

ctx.moveTo(0,0)
ctx.lineTo(150,75);
ctx.stroke();


let drawing = false;

// This here can be the basis of my notepad app!

canvas.addEventListener('mousedown',(e) => {
    drawing= true;
    let x = e.offsetX
    let y = e.offsetY
    ctx.moveTo(x,y);
})



canvas.addEventListener('mouseup',(e) => {
    drawing = false;
})

canvas.addEventListener('mousemove',(e) => {
    if (drawing == true){
    let x = e.offsetX
    let y = e.offsetY
    ctx.lineTo(x,y);
    ctx.stroke();
    }
});

canvas.addEventListener('pointerdown',(e) => {
   if (e.pressure > 0) { drawing= true;
    let x = e.offsetX
    let y = e.offsetY
    ctx.moveTo(x,y);
   }
})

canvas.addEventListener('pointermove',(e) => {
    if (drawing == true){
    let x = e.offsetX
    let y = e.offsetY
    ctx.lineTo(x,y);
    ctx.stroke();
    }
});

canvas.addEventListener('pointerup',(e) => {
    drawing = false;
})

/*Early test of freehand line drawing.*/

// canvas.addEventListener('mouseup',(e) => {
//     let x = e.offsetX
//     let y = e.offsetY
//     ctx.lineTo(x,y);
//     ctx.stroke();
// });

// tried to add to just the canvas but canvas didn't recongize it. 
// the problem is that canvas isn't in focus by default and there are work arounds to make that so.

// document.addEventListener("keydown",(e)=>{
//     let x = e.offsetX
//     let y = e.offsetY
//     ctx.moveTo(x,y);
// })  

// document.addEventListener('keyup',(e) => {
//     let x = e.offsetX
//     let y = e.offsetY
//     ctx.lineTo(x,y);
//     ctx.stroke();
// });


