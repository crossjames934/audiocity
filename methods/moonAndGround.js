const highestRoadYMultiplier = 0.37;
const higherRoadYMultiplier = 0.46;
const lowerRoadYMultiplier = 0.6;
const lowestRoadYMultiplier = 0.78;

function moonAndGround() {
  fill(60, 10, 80);
  ellipse(width / 2, height * 0.3, width * 0.3, width * 0.3);
  fill(200, 5, 10);
  rect(-1, height * 0.27, width+2, height * 0.75 + 1);
  fill(0, 0, 0);
  rect(-1, height * highestRoadYMultiplier, width + 2, height * 0.02);
  rect(-1, height * higherRoadYMultiplier, width + 2, height * 0.03);
  rect(-1, height * lowerRoadYMultiplier, width + 2, height * 0.04);
  rect(-1, height * lowestRoadYMultiplier, width + 2, height * 0.05);
}