import { useState, useCallback, useEffect } from "react";
import { Layer, Image } from "react-konva";
import useImage from 'use-image';

export function DraggableLayer(position, onDragMove) {
    const [image] = useImage(`/assets/ladder_grid.png`);

    return (
        <Layer >
            <Image 
                image={image} 
                draggable={true}
                x={position.X}
                y={position.Y}
                onDragMove={onDragMove}                
            />
        </Layer>
    )
}