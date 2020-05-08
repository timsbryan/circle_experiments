'use strict';

import { Planet } from './planet';

export class ArcPlanet extends Planet {
  /**
   * 
   * @param {number} parentR 
   * @param {number} parentX 
   * @param {number} parentY 
   * @param {number} phase 
   * @param {boolean} hasEllipse 
   */
  constructor(parentR, parentX, parentY, phase, hasEllipse) {
    super(parentR, parentX, parentY, phase, hasEllipse);

    this.hasEllipse = hasEllipse;

    this.planetSize = this.parentR / 8;
    this.lineR1 = this.lineRadius - this.planetSize / 2;
    this.lineR2 = this.parentR;
    this.lineDx1 = this.lineR1 * cos(this.phase);
    this.lineDy1 = this.lineR1 * sin(this.phase);
    this.lineDx2 = this.lineR2 * cos(this.phase);
    this.lineDy2 = this.lineR2 * sin(this.phase);
  }

  drawEllipse() {
    circle(this.parentX + this.lineDx1,
           this.parentY + this.lineDy1,
           this.planetSize);
  }
  
  drawArc() {
    arc(this.parentX + this.lineDx1,
        this.parentY + this.lineDy1 - (this.planetSize / 2),
        this.planetSize,
        this.planetSize,
        this.phase - 90,
        this.phase + 90);
  }

  drawLine() {
    line(this.parentX + this.lineDx2,
         this.parentY + this.lineDy2,
         this.parentX + this.lineDx1,
         this.parentY + this.lineDy1);
  }
}

export class Arc extends ArcPlanet {
  /**
   * 
   * @param {number} parentR 
   * @param {number} parentX 
   * @param {number} parentY 
   * @param {number} phase 
   * @param {boolean} hasEllipse
   */
  constructor(parentR, parentX, parentY, phase, hasEllipse) {
    super(parentR, parentX, parentY, phase, hasEllipse);
  }

  draw() {
    super.drawArc();
  }
}

export class ArcLine extends ArcPlanet {
  /**
   * 
   * @param {number} parentR 
   * @param {number} parentX 
   * @param {number} parentY 
   * @param {number} phase 
   * @param {boolean} hasEllipse
   */
  constructor(parentR, parentX, parentY, phase, hasEllipse) {
    super(parentR, parentX, parentY, phase, hasEllipse);
    
    this.planetSize = this.parentR / 4;
  }

  draw() {
    push();
    // fill(255);
    strokeCap(SQUARE);
    super.drawArc();
    pop();
    super.drawEllipse();
    super.drawLine();
  }
}