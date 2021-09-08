import { useState, useEffect, useCallback } from 'react';
import { Stage } from 'react-konva';
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import { MinesLayer } from './components/MinesLayer';
import { DraggableLayer } from './components/DraggableLayer';

const useStyles = makeStyles(theme => ({
  drawer: {
    alignContent: 'centered'
  },
  stage: {
    backgroundColor: 'black'
  }
}));

export const MinesDrawer = () => {
  const grid = 16;
  const classes = useStyles();
  const [level, setLevel] = useState(1);
  const [position, setPosition] = useState({X:-grid*80,Y:-grid*120});
  const [lastLevel, setLastLevel] = useState(1);

  const minesLayer = useCallback(() => {
    let floor = level % 40;
    return MinesLayer(floor);
  }, [level])

  // callback when moving the ladder layer
  const onDragMove = (e) => {
    // calculate the correct grid loc
    let newX = Math.round(e.target.x() / grid) * grid;
    let newY = Math.round(e.target.y() / grid) * grid;
    setPosition({X:newX,Y:newY})
    // snap to the grid
    e.target.to({x:newX, y:newY});
  }
  
  // modify the position when level changes
  useEffect(() => {
    let levelDiff = (level - lastLevel) * grid;
    setPosition({X:position.X, Y:position.Y+levelDiff})
  }, [lastLevel, level, setPosition])

  // go up a floor
  const clickPrev = useCallback(() => {
    setLastLevel(level)
    if (level == 1) { return; }
    let floor = level - 1;
    
    if (floor % 10 == 0) {
      setLevel(floor-1);
    } else {
      setLevel(floor)
    }
  }, [level, setLevel])

  // go down a floor
  const clickNext = useCallback(() => {
    setLastLevel(level)
    if (level == 119) { return; }
    let floor = level + 1;

    if (floor % 10 == 0) {
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
        {minesLayer()}
        {DraggableLayer(position, onDragMove)}
      </Stage>
      </div>
    </div>
  );
}