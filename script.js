/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

function init() {
  particlesArray = [];
  //let numberParticles = Math.floor((canvas.width * canvas.height) / 100000);
  let numberParticles = 4
  for (let i = 0; i < numberParticles; i++) {
    let size = 0;
    let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
    let directionX = Math.random() * 5 - 2.5;
    let directionY = Math.random() * 5 - 2.5;
    let color = "#8c5523";
    particlesArray.push(
      new Particle(x, y, directionX, directionY, size, color)
    );
  }
}

init();
console.log(particlesArray.length);

function animate() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++){
    particlesArray[i].update()
    particlesArray[i].edges()
    particlesArray[i].collision();
  }
  
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init()
});
