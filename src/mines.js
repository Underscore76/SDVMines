import { useState, useEffect, useCallback } from 'react';
import { Stage } from 'react-konva';
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import { MinesLayer } from './components/MinesLayer';
import { DraggableLayer } from './components/DraggableLayer';
import useDragPosition from './hooks/DragPosition';
const useStyles = makeStyles(theme => ({
  drawer: {
    alignContent: 'centered'
  },
  stage: {
    backgroundColor: 'black'
  }
}));

export const MinesDrawer = () => {
  const classes = useStyles();
  const [level, setLevel] = useState(1);
  const [lastLevel, setLastLevel] = useState(1);
  const {posX, posY, onDragMove, updateFloor, moveByTileOffset} = useDragPosition();
  
  const onMouseDown = (e) => {
    console.log("onMouseDown")
    console.log({e})
    moveByTileOffset(1,0)
  }

  const onMouseUp = (e) => {
    console.log("onMouseUp")
    console.log({e})
    moveByTileOffset(0,1)
  }

  // modify the position when level changes
  useEffect(() =>{
    let levelDiff = (level - lastLevel);
    updateFloor(levelDiff);
  }, [lastLevel, level])


  // go up a floor
  const clickPrev = useCallback(() => {
    setLastLevel(level)
    if (level === 1) { return; }
    let floor = level - 1;
    
    if (floor % 10 === 0) {
      setLevel(floor-1);
    } else {
      setLevel(floor)
    }
  }, [level, setLevel])

  // go down a floor
  const clickNext = useCallback(() => {
    setLastLevel(level)
    if (level === 119) { return; }
    let floor = level + 1;

    if (floor % 10 === 0) {
      setLevel(floor+1);
    } else {
      setLevel(floor)
    }
  }, [level, setLevel])

  return (
    <div className={classes.drawer}>
      <ButtonGroup variant="contained" aria-label="contained primary button group">
        <Button onClick={clickPrev} color="secondary">Prev</Button>
        <Button disabled={true}>{level}</Button>
        <Button onClick={clickNext} color="primary">Next</Button>
      </ButtonGroup>
      
      <div className={classes.drawer}>
      <Stage width={window.innerWidth} height={window.innerHeight} className={classes.stage}>
        <MinesLayer floor={level % 40}/>
        <DraggableLayer
          posX={posX}
          posY={posY}
          onDragMove={onDragMove}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        />
      </Stage>
      </div>
    </div>
  );
}