import { SVG_NS } from "../settings";
import Ball from "./Ball";

export default class Goldenball extends Ball {
  constructor(...args) {
    super(...args);
  }

  goal(player, score) {
    player.score += 100;
    this.reset();
    console.log("player id ", player.id);
    
    if (player.score <= 500) {
      
      this.reset();
    } else {alert(`${player.id} wins the Hogwarts Quidditch Cup with ${player.score} points`);
    
 
  }
  
}
}
