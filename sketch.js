let tune;
let fft;
let carWidth;
let carHeight;
const frequencySlices = 16;
const slicesPerSection = 16;
const buildings = [];
const cars = [];

function preload() {
  // tune = loadSound('Ball_So_Hard.mp3');
  // tune = loadSound('Smokey_Tides_mp3.mp3');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // fft = new p5.FFT(0.3, frequencySlices);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.3, frequencySlices);
  fft.setInput(mic);
  carWidth = ceil(width * 0.002);
  carHeight = ceil(height * 0.002);
  background(0);
  noStroke();
  colorMode(HSB);
  placeBuildings();
  placeCars();
}

function draw() {
  background(0);
  const spectrum = fft.analyze();
  moonAndGround();
  showBuildings(spectrum);
  // const carBrightness = sin(frameCount / 10) * 20 + 80;
  // for (let i = 0; i < cars.length; i++) {
  //   cars[i].render(carBrightness);
  // }
  // for (let i = 0; i < buildings.length; i++) {
  //   buildings[i].showBack();
  // }
  // for (let i = 0; i < buildings.length; i++) {
  //   buildings[i].render(spectrum);
  // }
}

function showBuildings(spectrum) {
  for (let zIndex = 1; zIndex < 5; zIndex++) {
    const rowOfBuildings = buildings.filter(building => building.z === zIndex);
    for (let i = 0; i < rowOfBuildings.length; i++) {
      rowOfBuildings[i].showBack();
    }
    for (let i = 0; i < rowOfBuildings.length; i++) {
      rowOfBuildings[i].render(spectrum);
    }
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function keyPressed() {
  if (keyCode === 32) {
    if (tune.isPlaying()) {
      tune.pause();
    } else {
      tune.play();
    }
  }
  if (keyCode === 188) {
    tune.stop();
  }
}