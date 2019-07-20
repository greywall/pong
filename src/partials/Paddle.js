import { SVG_NS, KEYS } from "../settings";

export default class Paddle {
  constructor(
    boardHeight,
    width,
    height,
    x,
    y,
    color = "green",
    upKey,
    downKey,
    id
  ) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.score = 0;
    this.color = color;
    this.upKey = upKey;
    this.downKey = downKey;

    this.id = id;
    // this.playerName = playerName;

    this.keyState = {};

    document.addEventListener("keydown", event => {
      this.keyState[event.key] = true;
    });

    document.addEventListener("keyup", event => {
      this.keyState[event.key] = false;
    });

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }
    });
  }

  up() {
    // this.y = this.y - this.speed;
    console.log("move up");
    this.y = Math.max(0, this.y - this.speed);
  }

  down() {
    // this.y = this.y + this.speed;
    console.log("move down");
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
  }

  render(svg) {
    if (this.keyState[KEYS.a] && this.upKey === KEYS.a) {
      this.up();
    }

    if (this.keyState[KEYS.z] && this.downKey === KEYS.z) {
      this.down();
    }

    if (this.keyState[KEYS.up] && this.upKey === KEYS.up) {
      this.up();
    }

    if (this.keyState[KEYS.down] && this.downKey === KEYS.down) {
      this.down();
    }

    let rect = document.createElementNS(SVG_NS, "rect");
    // rect.setAttributeNS(null, "fill", "white");
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "x", this.x);
    rect.setAttributeNS(null, "y", this.y);
    rect.setAttributeNS(null, "fill", this.color);

    svg.appendChild(rect); //append passes svg to parent.
  }
}
