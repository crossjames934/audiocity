class Car {
  constructor(x, y, dir) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.chooseRandomHue();
    this.rndBrightnessOffset = floor(random(50));
  }

  chooseRandomHue = () => {
    this.hue = floor(random(360));
  };

  render = (brightness) => {
    const {x, y, dir, hue, rndBrightnessOffset} = this;
    fill(hue, 30, brightness + rndBrightnessOffset);
    ellipse(x, y, carWidth, carHeight);
    this.x += dir;
    if (this.isOffScreen()) {
      const goingRight = this.isGoingRight();
      this.x = goingRight ? -carWidth : width + carWidth;
      this.chooseRandomHue();
    }
  };

  isOffScreen = () => {
    const goingRight = this.isGoingRight();
    const isOffRight = this.x > width + carWidth;
    const isOffLeft = this.x + carWidth < 0;
    return (goingRight && isOffRight) || (!goingRight && isOffLeft);
  };

  isGoingRight = () => this.dir > 0;
}
//
// Car.prototype.isOffScreen = () => {
//   const goingRight = this.dir > 0;
//   const isOffRight = this.x > width + carWidth;
//   const isOffLeft = this.x + carWidth < 0;
//   return (goingRight && isOffRight) || (!goingRight && isOffLeft);
// };