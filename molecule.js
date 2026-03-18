const canvas=document.getElementById("molecule-canvas");

const ctx=canvas.getContext("2d");

canvas.width=800;
canvas.height=600;

let atoms=[];

canvas.onclick=(e)=>{

atoms.push({
x:e.offsetX,
y:e.offsetY
});

draw();

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

atoms.forEach(a=>{
ctx.beginPath();
ctx.arc(a.x,a.y,15,0,Math.PI*2);
ctx.fill();
});

}
