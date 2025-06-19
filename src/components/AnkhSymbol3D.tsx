import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { MeshDistortMaterial } from '@react-three/drei';

const AnkhGeometry = () => {
  const meshRef = useRef<Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
      meshRef.current.scale.setScalar(breathe);
    }
  });

  return (
    <group ref={meshRef}>
      <mesh position={[0, 1.5, 0]}>
        <torusGeometry args={[0.6, 0.15, 32, 64]} />
        <MeshDistortMaterial
          color="#7f9cff"
          emissive="#4f46e5"
          emissiveIntensity={0.6}
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
          speed={2}
          distort={0.3}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 3, 0.3]} />
        <MeshDistortMaterial
          color="#7f9cff"
          emissive="#4f46e5"
          emissiveIntensity={0.6}
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
          speed={2}
          distort={0.3}
        />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 0.3, 0.3]} />
        <MeshDistortMaterial
          color="#7f9cff"
          emissive="#4f46e5"
          emissiveIntensity={0.6}
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
          speed={2}
          distort={0.3}
        />
      </mesh>
    </group>
  );
};

const AnkhSymbol3D = () => {
  return (
    <div className="relative w-48 h-48 mx-auto glow-text ethereal-text">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} color="#cbd5ff" />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#7f9cff" />
        <pointLight position={[0, 0, 5]} intensity={1.2} color="#60a5fa" />
        <AnkhGeometry />
      </Canvas>
    </div>
  );
};

export default AnkhSymbol3D;