import { Layer, Image } from "react-konva";
import useImage from 'use-image';

export function DraggableLayer(posX, posY, onDragMove) {
    // const [image] = useImage(`${process.env.PUBLIC_URL}/assets/ladder_grid.png`);
    const [image] = useImage(`${process.env.PUBLIC_URL}/assets/LaddersNoGrid.png`);
    return (
        <Layer >
            <Image 
                image={image} 
                draggable={true}
                x={posX}
                y={posY}
                onDragMove={onDragMove}                
            />
        </Layer>
    )
}