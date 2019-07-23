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

  


    this.player1 = new Paddle(
      this.height, //board height
      PaddleOptions.paddleWidth,
      PaddleOptions.paddleHeight,
      PaddleOptions.boardGap,
      (this.height - PaddleOptions.paddleHeight) / 2,
    
      "#ecb939",
      KEYS.up,
      KEYS.down,
      "Hufflepuff"
    );

    this.player2 = new Paddle(
      this.height, //board height
      PaddleOptions.paddleWidth,
      PaddleOptions.paddleHeight,
      this.width - (PaddleOptions.boardGap + PaddleOptions.paddleWidth),
      (this.height - PaddleOptions.paddleHeight) / 2,
    
      "#222f5b",
      KEYS.a,
      KEYS.z,
      "Ravenclaw"
    );

    this.score1 = new Score(this.width / 2 - 90, 30, 30); //location of score board
    this.score2 = new Score(this.width / 2 + 30, 30, 30);

    this.goldenball = new Goldenball(4, this.width, this.height, "gold");
    this.ball2 = new Ball(12, this.width, this.height, "#654321");

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case KEYS.spaceBar:
          this.pause = !this.pause;
          break;
      }
    });

    this.firstScreen =  true;
  } //end of constructor


  render() {
    if (this.pause) {
      return;
    }



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
    this.ball2.render(svg, this.player1, this.player2); 

    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);
  }
}
