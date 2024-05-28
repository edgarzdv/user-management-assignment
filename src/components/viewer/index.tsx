import React from 'react';
import { Canvas } from '@react-three/fiber';
import RotatingObject from '../rotatingObject';

interface ViewerProps {
    selectedObject: string;
}

const Viewer: React.FC<ViewerProps> = ({ selectedObject }) => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <RotatingObject selectedObject={selectedObject} />
        </Canvas>
    );
};

export default Viewer;
