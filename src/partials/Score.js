import { SVG_NS } from "../settings";
import Ball from "./Ball";
import Goldenball from "./Goldenball";

export default class Score {
  constructor(x, y, size) {
    this.x = x; //location of display score
    this.y = y; //location of the display score
    this.size = size; //font-size
  }

  render(svg, score) {
    let text = document.createElementNS(SVG_NS, "text");

    text.setAttributeNS(null, "x", this.x);
    text.setAttributeNS(null, "y", this.y);
    text.setAttributeNS(null, "font-family", '"silkscreen Web", monotype');
    text.setAttributeNS(null, "font-size", this.size);
    text.setAttributeNS(null, "fill", "white");
    text.textContent = score;
    svg.appendChild(text);

    // set attirtubes
    //append score
  }
}
