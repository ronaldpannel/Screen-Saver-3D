class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath;
  }
  update() {
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
  edges() {
    if (this.x + this.size >= canvas.width || this.x - this.size <= 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
    }
  }
  collision() {
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let dx = particlesArray[a].x + particlesArray[b].x;
        let dy = particlesArray[a].y + particlesArray[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance >= particlesArray[a].size + particlesArray[b].size) {
        ctx.beginPath()
        ctx.strokeStyle = 'white'
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke()
        

        }
      }
    }
  }
}
