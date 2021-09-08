import { Layer, Image } from "react-konva";
import useImage from 'use-image';

export function DraggableLayer({ posX, posY, onDragMove, onMouseDown, onMouseUp, onClick }) {
    // const [image] = useImage(`${process.env.PUBLIC_URL}/assets/ladder_grid.png`);
    const [image] = useImage(`${process.env.PUBLIC_URL}/assets/LaddersNoGrid.png`);


    const onContextMenu = (e) => {
        e.evt.preventDefault();
    }
    return (
        <Layer >
            <Image
                image={image}
                draggable={true}
                x={posX}
                y={posY}
                onDragMove={onDragMove}
                onMouseDown={onMouseDown}
                onContextMenu={onContextMenu}
                onMouseUp={onMouseUp}
                onClick={onClick}
            />
        </Layer>
    )
}