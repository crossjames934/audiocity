function rowOfLights(frequency, index, w, h, cols) {
  const mappedFrequency = map(frequency, 0, 255, 10, 100);
  const fractionOfHeight = h / frequencySlices;
  const yPosition = h - (index + 1) * fractionOfHeight;
  fill(120, mappedFrequency / 2, mappedFrequency);
  // fill(60, mappedFrequency / 2, mappedFrequency);
  for (let i = 0; i < cols; i++) {
    const fractionOfWidth = w / cols;
    const xPosition = i * fractionOfWidth;
    const boxWidth = fractionOfWidth * 0.8;
    const boxHeight = fractionOfHeight * 0.8;
    rect(xPosition, yPosition, boxWidth, boxHeight);
  }
}
