"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Edges } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function WireframeCube() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef}>
                <boxGeometry args={[2, 2, 2]} />
                <meshBasicMaterial transparent opacity={0} />
                <Edges color="#ef4444" />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <WireframeCube />
            </Canvas>
        </div>
    );
}
