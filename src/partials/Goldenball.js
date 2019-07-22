import { SVG_NS } from "../settings";
import Ball from "./Ball";

export default class Goldenball extends Ball {
  constructor(...args) {
    super(...args);
  }

  //   ballCollision (ball2) {
  //     if () {
  //         //collision detection
  //         if ()

  //     }

  goal(player, score) {
    player.score += 100;
    this.reset();
    console.log("player id ", player.id);
    
    if (player.score <= 500) {
      
      this.reset();
    } else {alert(`${player.id} wins with ${player.score} points`);
   
  }
  //     this.goal(player1);
  //     this.player.score = 0;
  //   } else if (leftGoal) {
  //     this.goal(player2);
  //     this.player.score = 0;
  //   }  
    
  // }
  }
    //   console.log(player.player1.player.score);

   
    // if (player.score == player2.score && player.score <= 250) {
    //   this.reset();
    // } else if (player1.score > player2.score) {
    //   console.log("Player 1 is the winner");
    // } else {
    //   console.log("Player 2 is the winner");
    // }
  
}
