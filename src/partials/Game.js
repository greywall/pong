import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";
import Score from "./Score";
import Goldenball from "./Goldenball";

import { SVG_NS, KEYS, PaddleOptions } from "../settings";
import { CLIENT_RENEG_LIMIT } from "tls";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);

    // this.paddleWidth = 8;
    // this.paddleHeight = 56;
    // this.boardGap = 10;

    //this.gameball = false
    //this.gameball = true

    this.player1 = new Paddle(
      this.height, //board height
      PaddleOptions.paddleWidth,
      PaddleOptions.paddleHeight,
      PaddleOptions.boardGap,
      (this.height - PaddleOptions.paddleHeight) / 2,
      "red",
      KEYS.up,
      KEYS.down,
      1
    );

    this.player2 = new Paddle(
      this.height, //board height
      PaddleOptions.paddleWidth,
      PaddleOptions.paddleHeight,
      this.width - (PaddleOptions.boardGap + PaddleOptions.paddleWidth),
      (this.height - PaddleOptions.paddleHeight) / 2,
      "blue",
      KEYS.a,
      KEYS.z,
      2
    );

    this.score1 = new Score(this.width / 2 - 50, 30, 30); //location of score board
    this.score2 = new Score(this.width / 2 + 50, 30, 30);

    this.goldenball = new Goldenball(4, this.width, this.height, "gold");
    this.ball2 = new Ball(12, this.width, this.height, "brown");
    // this.ball3 = new Ball(12, this.width, this.height, "brown");
    // this.ball4 = new Ball(12, this.width, this.height, "brown");

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case KEYS.spaceBar:
          this.pause = !this.pause;
          break;
      }
    });

    // this.player1 = new Paddle(this.height, 8, 56, 10,100, '#f69d3c' );
    // this.player2 = new Paddle(this.height, 8, 56, 494,100,'#3f87a6');
  } //end of constructor

  //mega pong write method for spawning additonal balls. use an array of new ball objects and use a for.Each() to render each ball.

  render() {
    if (this.pause) {
      return;
    }

    // if (this.goldenball.goal()) {
    //   console.log("Game Over!");
    //   //enf game
    // }

    this.gameElement.innerHTML = ""; //clear the html before appending to fix the render bug
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);
    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);
    this.goldenball.render(svg, this.player1, this.player2);
    this.ball2.render(svg, this.player1, this.player2); //can call mega ball here.
    // this.ball3.render(svg, this.player1, this.player2);
    // this.ball4.render(svg, this.player1, this.player2);

    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);
  }
}
