function placeCars() {

}

// function placeLaneOfCars(options) {
//   const {yPosition, totalCars, speed} = options;
//   const fractionOfWidth = width / totalCars;
//   const xWiggleRoom = fractionOfWidth * 0.45;
//   for (let i = 0; i < totalCars; i++) {
//     const xPosition = fractionOfWidth * i;
//     const xWiggle = floor(random(-xWiggleRoom, xWiggleRoom));
//     cars.push(new Car(xPosition + xWiggle, yPosition, speed));
//   }
// }

// function frontRoadRightCars() {
//   const frontRoadRightSide = height * 0.81;
//   const totalCars = 20;
//   const fractionOfWidth = width / totalCars;
//   const xWiggleRoom = fractionOfWidth / 2;
//   const nextLaneHeight = height * 0.01;
//   for (let i = 0; i < totalCars; i++) {
//     const xPosition = fractionOfWidth * i;
//     cars.push(new Car(xPosition + getXWiggle(xWiggleRoom), frontRoadRightSide, 1));
//     cars.push(new Car(xPosition + getXWiggle(xWiggleRoom), frontRoadRightSide + nextLaneHeight, 1.3));
//   }
// }
//
// function frontRoadLeftCars() {
//   const frontRoadLeftSide = height * 0.787;
//   const totalCars = 20;
//   const fractionOfWidth = width / totalCars;
//   const xWiggleRoom = fractionOfWidth / 3;
//   const nextLaneHeight = height * 0.01;
//   for (let i = 0; i < totalCars; i++) {
//     const xWiggle = floor(random(-xWiggleRoom, xWiggleRoom));
//     const xPosition = fractionOfWidth * i + xWiggle;
//     cars.push(new Car(xPosition + getXWiggle(xWiggleRoom), frontRoadLeftSide, -3.9));
//     cars.push(new Car(xPosition + getXWiggle(xWiggleRoom), frontRoadLeftSide + nextLaneHeight, -3));
//   }
// }