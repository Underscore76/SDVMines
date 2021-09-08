import { useState } from "react";

function useDragPosition() {
  const grid = 16;
  const tileStartX = 0;
  const tileStartY = -20; // so we can scroll down without a ton of hassle
  const [posX, setPosX] = useState(grid * tileStartX);
  const [posY, setPosY] = useState(grid * tileStartY);

  const moveByTileOffset = (x, y) => {
    setPosX(posX + x * grid);
    setPosY(posY + y * grid);
  };
  const onDragMove = (e) => {
    // calculate the correct grid loc
    let newX = Math.round(e.target.x() / grid) * grid;
    let newY = Math.round(e.target.y() / grid) * grid;
    setPosX(newX);
    setPosY(newY);

    // snap to the grid
    e.target.to({ x: newX, y: newY });
  };

  const updateFloor = (floorDiff) => {
    // going down floors (positive diff) moves the grid up
    setPosY(posY - floorDiff * grid);
  };
  return { posX, posY, onDragMove, updateFloor, moveByTileOffset };
}

export default useDragPosition;
