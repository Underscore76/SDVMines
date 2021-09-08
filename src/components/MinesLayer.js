import { Layer, Image } from "react-konva";
import useImage from 'use-image';

export function MinesLayer(floor) {
    const FloorImage = (level) => {
        const [image] = useImage(`${process.env.PUBLIC_URL}/assets/${level}.png`);
        return <Image image={image} />;
      };
    return (
        <Layer>
            {FloorImage(floor)}
        </Layer>
    )
}