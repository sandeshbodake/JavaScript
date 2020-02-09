
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');



// setup canvas

const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'roud';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// start drawing

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y );
ctx.stroke();

function draw({key}){
  ctx.beginPath();
  ctx.moveTo(x, y);

  x -= 10;
  y -= 10;

  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e){
  console.log(e.key);
  if(e.key.includes('Arrow')){
    e.preventDefault();
    draw({ key: e.key })
  }
}

window.addEventListener('keydown', handleKey)
