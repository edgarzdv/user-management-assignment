import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface RotatingObjectProps {
    selectedObject: string;
}

const RotatingObject: React.FC<RotatingObjectProps> = ({ selectedObject }) => {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    const handlePointerOver = (event: any) => {
        event.object.material.color.set('blue');
    };

    const handlePointerOut = (event: any) => {
        event.object.material.color.set('orange');
    };

    const renderObject = () => {
        switch (selectedObject) {
            case 'Rectangle':
                return (
                    <mesh ref={meshRef} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
                        <boxGeometry args={[4, 2, 2]} />
                        <meshStandardMaterial color="orange" />
                    </mesh>
                );
            case 'Triangle':
                return (
                    <mesh ref={meshRef} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
                        <coneGeometry args={[2, 4, 3]} />
                        <meshStandardMaterial color="orange" />
                    </mesh>
                );
            case 'Circle':
                return (
                    <mesh ref={meshRef} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
                        <sphereGeometry args={[2, 32, 32]} />
                        <meshStandardMaterial color="orange" />
                    </mesh>
                );
            default:
                return null;
        }
    };

    return <>{renderObject()}</>;
};

export default RotatingObject;
