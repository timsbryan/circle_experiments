'use strict';

export class Planet {
  /**
   * 
   * @param {number} parentR 
   * @param {number} parentX 
   * @param {number} parentY 
   * @param {number} phase 
   */
  constructor(parentR, parentX, parentY, phase) {
    this.parentR = parentR;
    this.parentX = parentX;
    this.parentY = parentY;
    this.phase = phase;

    this.planetSize = this.parentR / 8;
    this.lineRadius = this.parentR * random(1.3, 2.5);
    this.lineDistX = this.lineRadius * cos(this.phase);
    this.lineDistY = this.lineRadius * sin(this.phase);
  }

  draw() {
    ellipse(
      this.parentX + this.lineDistX,
      this.parentY + this.lineDistY,
      this.planetSize,
      this.planetSize
    );

  }
}

export class PlanetWLine extends Planet {
  /**
   * 
   * @param {number} parentR 
   * @param {number} parentX 
   * @param {number} parentY 
   * @param {number} phase 
   */
  constructor(parentR, parentX, parentY, phase) {
    super(parentR, parentX, parentY, phase);

    this.planetSize = this.parentR / 4;
    this.lineR1 = this.lineRadius - this.planetSize / 2;
    this.lineR2 = this.parentR;
    this.lineDx1 = this.lineR1 * cos(this.phase);
    this.lineDy1 = this.lineR1 * sin(this.phase);
    this.lineDx2 = this.lineR2 * cos(this.phase);
    this.lineDy2 = this.lineR2 * sin(this.phase);
  }

  draw() {
    push();

    strokeWeight(2);
    stroke(255);
    noFill();

    ellipse(
      this.parentX + this.lineDistX,
      this.parentY + this.lineDistY,
      this.planetSize,
      this.planetSize
    );

    stroke(255);

    line(
      this.parentX + this.lineDx2,
      this.parentY + this.lineDy2,
      this.parentX + this.lineDx1,
      this.parentY + this.lineDy1
    );

    pop();
  }
}