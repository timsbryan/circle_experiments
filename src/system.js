'use strict';

import { Planet, PlanetWLine } from './planet';
import { Arc, ArcLine } from './arcPlanet';
import { Star } from './star';

export default class System {
  /**
   * 
   * @param {number} posX 
   * @param {number} posY 
   * @param {number} initDiameter 
   */
  constructor(posX, posY, initDiameter) {
    this.posX = posX;
    this.posY = posY;

    this.angle = 20;
    this.angleStep = 0.05;
    this.starCount = 500;
    this.diameter = initDiameter;
    this.radius = this.diameter / 2;

    this.planet1 = new Planet(this.radius, 0, 0, -35);
    this.planet2 = new PlanetWLine(this.radius, 0, 0, 60);
    this.planet3 = new Arc(this.radius, 0, 0, 130, true);
    this.planet4 = new ArcLine(this.radius, 0, 0, 270, true);

    /** @type {{ display: () => void; update: () => void; }[]} */
    this.stars = [];
    for (let i = 0; i < this.starCount; i++) {
      this.stars.push(new Star(0, this.radius));
    }
  }

  update() {
    this.angle += this.angleStep;
  }

  draw() {
    push();

    translate(this.posX, this.posY);
    rotate(this.angle);
    strokeWeight(2);
    stroke(255);
    noFill();
    circle(0, 0, this.diameter);

    this.planet1.draw();
    this.planet2.draw();
    this.planet3.draw();
    this.planet4.draw();

    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].display();
      this.stars[i].update();
    }

    pop();

    this.update();
  }
}