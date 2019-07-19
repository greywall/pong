import { SVG_NS } from "../settings";

export default class Ball {
  constructor(radius, boardWidth, boardHeight, color = "white") {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.color = color;

    this.reset();
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    console.log("vy", this.vy);

    this.vx = this.direction * (6 - Math.abs(this.vy));
    console.log("vx", this.vx);
  }

  wallCollision() {
    const hitleft = this.x - this.radius <= 0;
    const hitright = this.x + this.radius >= this.boardWidth;
    const hittop = this.y - this.radius <= 0;
    const hitbottom = this.y + this.radius >= this.boardHeight;

    if (hitleft || hitright) {
      // this.vx = -this.vx;
      this.vx *= -1;
      // this.ax *= -1;
    } else if (hittop || hitbottom) {
      this.vy *= -1;
    }
  }

  render(svg) {
    this.x += this.vx; //+= this.ax
    this.y += this.vy;

    this.wallCollision();

    let circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttributeNS(null, "r", this.radius);
    circle.setAttributeNS(null, "cx", this.x);
    circle.setAttributeNS(null, "cy", this.y);
    circle.setAttributeNS(null, "fill", this.color);
    svg.appendChild(circle); //append passes svg to parent.
  }
}
