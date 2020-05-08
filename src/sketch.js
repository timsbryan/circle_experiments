'use strict';

import 'p5';
import System from './system';

  let system;

  window.setup = function() {
    createCanvas(1200, 800);
    angleMode(DEGREES);

    system = new System(width / 2, height / 2, 320);
  }

  window.draw = function() {
    background(10, 18, 25);

    system.draw();
  }
