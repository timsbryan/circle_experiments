'use strict';

export class Star {
  /**
   * 
   * @param {number} dist 
   * @param {number} radius 
   */
  constructor(dist, radius) {
    this.dist = dist + random(-(radius / 10), radius / 10);

    this.initAngle = random(TWO_PI);
    this.angle = this.initAngle;
    this.angleSpeed = random(0.007, 0.01);
    this.x = sin(this.initAngle) * (radius  + this.dist);
    this.y = cos(this.initAngle) * (radius + this.dist);

    this.circAlpha = random(0, 255);
    this.circAlpha = 255;
  }

  update() {
    this.angle += this.angleSpeed;
  }

  display() {
    push();
    stroke(255, this.circAlpha);
    noStroke();
    fill(255, this.circAlpha);

    rotate(degrees(this.angle));
    circle(this.x, this.y, 2);
    pop();
  }
}