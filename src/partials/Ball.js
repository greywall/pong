import { SVG_NS } from "../settings";
import pingSound from "../../public/sounds/pong-01.wav";

export default class Ball {
  constructor(radius, boardWidth, boardHeight, color = "white") {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = -1;
    this.color = color;

    this.ping = new Audio(pingSound);

    this.reset();
  }

  winner() {
    if (this.player.score >= 1000) {
      prompt("Winner Winner Chicken Dinner!");
    } 
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.random() * 10 - 5;
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
      this.vx *= -1.01;
      // this.ax *= -1;
    } else if (hittop || hitbottom) {
      this.vy *= -1.01;
    }
  }

  paddleCollision(player1, player2) {
    // moving right

    // console.log("player1", player1);
    // console.log("player2", player2);

    if (this.vx > 0) {
      // collision detection for right paddle
      if (
        this.x + this.radius >= player2.x && // right edge of the ball is >= left edge of the paddle
        this.x + this.radius <= player2.x + player2.width && // right edge of the ball is <= right edge of the paddle
        (this.y >= player2.y && this.y <= player2.y + player2.height) // ball Y is >= paddle top Y and <= paddle bottom Y
      ) {
        // if true then there's a collision
        this.vx *= -1;

        this.ping.play();
        //this.player1.height -=-5 this will decrease player1s height for hitting the ball. //or change player color after hit, player1.height -=5; setTimeout(function()) {reset color,} 200
        //let player2.color = 'red' setTimeout(function()) {player2.color= playercolor;} 200;
      }
    } else {
      // moving left
      if (
        this.x - this.radius <= player1.x + player1.width &&
        this.x - this.radius >= player1.x &&
        (this.y >= player1.y && this.y <= player1.y + player1.height)
      ) {
        this.vx *= -1;
        this.ping.play();
      }
    }
  }

  goal(player) {
    player.score += 10;
     if (player.score <= 4000) {
    // player.score += 10;
    this.reset();
  } else {alert(`${player.id} wins with ${player.score} points`);
}
  }
      

  render(svg, player1, player2) {
    //need to add player 1, player 2, this colors the ball movement.
    this.x += this.vx; //+= this.ax
    this.y += this.vy;

    this.wallCollision();

    this.paddleCollision(player1, player2);

    let circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttributeNS(null, "r", this.radius);
    circle.setAttributeNS(null, "cx", this.x);
    circle.setAttributeNS(null, "cy", this.y);
    circle.setAttributeNS(null, "fill", this.color);
    svg.appendChild(circle); //append passes svg to parent.

    const rightGoal = this.x + this.radius >= this.boardWidth;
    const leftGoal = this.x - this.radius <= 0;

    if (rightGoal) {
      this.goal(player1);
      this.direction = 1;
    } else if (leftGoal) {
      this.goal(player2);
      this.direction = -1;
    }
  }
}
