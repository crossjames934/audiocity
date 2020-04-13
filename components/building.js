class Building {
  constructor(x, zIndex) {
    const minWidth = width * 0.03;
    const minHeight = height * 0.1;
    const yMargin = height * 0.2;
    const yOffset = height * (0.02 * zIndex);
    this.hue = floor(random(0, 360));
    this.x = x;
    this.y = yMargin + zIndex * yOffset;
    this.z = zIndex;
    this.w = minWidth + (zIndex / 3) * minWidth;
    // this.w = minWidth * zIndex;
    this.h = minHeight + (zIndex / 3) * minHeight;
    // this.h = minHeight * zIndex;
    this.cols = 4;
    this.chooseColumnNumber();
  }

  chooseColumnNumber = () => {
    this.cols = floor(random(4, 7));
  };

  render = (spectrum) => {
    this.show(spectrum);
    this.move();
    this.checkIfResetNeeded();
  };

  show = (spectrum) => {
    const {x, y, w, h, cols} = this;
    this.restOfBuilding();
    this.frontOfBuilding();
    gridOfLights(spectrum, x, y, w, h, cols);
  };

  frontOfBuilding = () => {
    const {x, y, w, h} = this;
    fill(300, 10, 50);
    rect(x, y, w, h);
  };

  restOfBuilding = () => {
    const {x, y, w, h, z, hue} = this;
    const yBackOfRoof = 0 - (h * (0.1 - (5 - z) / 100));
    const xFromCenter = x - width / 2;
    const skewDenominator = 13 - (z * 1.2);
    const skew = xFromCenter / skewDenominator;
    const centralSkewFactor = w * 0.2;
    const topRightCorner = w - centralSkewFactor - skew;
    const topLeftCorner = centralSkewFactor - skew;
    fill(hue, 20, 70);
    push();
    translate(x, y);
    beginShape();
    // Bottom Left
    vertex(0, 0);
    // Bottom Right
    vertex(w, 0);
    // Top Right
    vertex(topRightCorner, yBackOfRoof);
    // Top Left
    vertex(topLeftCorner, yBackOfRoof);
    endShape(CLOSE);
    // If both top corners are inside the bottom corners we don't see the sides
    // If top left corner is more left than bottom left, show left side
    const bottomFarOffset = h * 0.2;
    if (topLeftCorner < 0) {
      fill(hue, 20, 50);
      beginShape();
      vertex(topLeftCorner, yBackOfRoof);
      vertex(0, 0);
      vertex(0, h);
      vertex(topLeftCorner, h + yBackOfRoof - bottomFarOffset);
      endShape(CLOSE);
    }
    // Same as above, but for the right corner
    if (topRightCorner > w) {
      fill(hue, 20, 40);
      beginShape();
      vertex(topRightCorner, yBackOfRoof);
      vertex(w, 0);
      vertex(w, h);
      vertex(topRightCorner, h + yBackOfRoof - bottomFarOffset);
      endShape(CLOSE);
    }
    pop();
  };

  move = () => {
    this.x -= this.z;
  };

  checkIfResetNeeded = () => {
    if (this.isOffScreen()) this.reset();
  };

  reset = () => {
    this.x = width + this.w * 1.5;
    this.chooseColumnNumber();
  };

  isOffScreen = () => {
    return this.x < 0 - this.w * 2.5;
  };
}