function gridOfLights(spectrum, x, y, w, h, cols) {
  push();
  translate(x + w * 0.02, y + h * 0.01);
  spectrum.forEach((frequency, index) => {
    rowOfLights(frequency, index, w, h, cols);
  });
  pop();
}