function placeBuildings() {
  placeRowOfBuildings(20, 1);
  placeRowOfBuildings(14, 2);
  placeRowOfBuildings(10, 3);
  placeRowOfBuildings(8, 4);
}

function placeRowOfBuildings(buildingCount, zIndex) {
  for (let i = 0; i < buildingCount; i++) {
    const xDist = width / buildingCount;
    buildings.push(new Building(xDist * i, zIndex));
  }
}

function placeBuildingsOld() {
  // Place buildings with higher zIndex (second argument) last
  buildings.push(new Building(0));
  buildings.push(new Building(width * 0.125, 1));
  buildings.push(new Building(width * 0.25, 1));
  buildings.push(new Building(width * 0.375, 1));
  buildings.push(new Building(width * 0.5, 1));
  buildings.push(new Building(width * 0.625, 1));
  buildings.push(new Building(width * 0.75, 1));
  buildings.push(new Building(width * 0.875, 1));

  buildings.push(new Building(0, 2));
  buildings.push(new Building(width * 0.1, 2));
  buildings.push(new Building(width * 0.25, 2));
  buildings.push(new Building(width * 0.4, 2));
  buildings.push(new Building(width * 0.55, 2));
  buildings.push(new Building(width * 0.7, 2));
  buildings.push(new Building(width * 0.85, 2));

  buildings.push(new Building(0, 3));
  buildings.push(new Building(width * 0.2, 3));
  buildings.push(new Building(width * 0.4, 3));
  buildings.push(new Building(width * 0.6, 3));
  buildings.push(new Building(width * 0.8, 3));
  buildings.push(new Building(width, 3));

  buildings.push(new Building(width * 0.3, 4));
  buildings.push(new Building(width * 0.6, 4));
  buildings.push(new Building(width * 0.9, 4));
  buildings.push(new Building(width * 1.1, 4));
}