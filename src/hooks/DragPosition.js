import { useState } from 'react';

function useDragPosition() {
    const grid = 16;
    const [posX, setPosX] = useState(-grid*80);
    const [posY, setPosY] = useState(-grid*120);

    const onDragMove = (e) => {
        // calculate the correct grid loc
        let newX = Math.round(e.target.x() / grid) * grid;
        let newY = Math.round(e.target.y() / grid) * grid;
        setPosX(newX);
        setPosY(newY);
        // setPosition({X:newX, Y:newY})
        // snap to the grid
        e.target.to({x:newX, y:newY});
      }

    const updateFloor = (floorDiff) => {
        console.log({floorDiff})
        console.log({posY})
        console.log(posY+floorDiff*grid)
        setPosY(posY + floorDiff * grid)
    }
    return {posX, posY, onDragMove, updateFloor}
};

export default useDragPosition;