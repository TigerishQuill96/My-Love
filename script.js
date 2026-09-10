const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.font = "bold 9px Arial";
ctx.textAlign = "center";
ctx.translate(canvas.width / 2, canvas.height / 2);

const colores = ["#ffb6c1", "#d8b4e2", "#ff8181"];        
let scale = 11;
let i = 0;

function dibujar() {
    if (scale < 17) {
        ctx.fillStyle = colores[(scale - 11) % colores.length];
        for (let j = 0; j < 2; j++) {
            if (i < 120) {
                let angle = i * (Math.PI * 2) / 120;
                let x = 16 * Math.pow(Math.sin(angle), 3) * scale;
                let y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle)) * scale;
                ctx.fillText("I love you ", x, y);
                i++;
            }
        }

    if (i >= 120) {
    i = 0;
    scale++;
}

requestAnimationFrame(dibujar);
            }
}
dibujar();