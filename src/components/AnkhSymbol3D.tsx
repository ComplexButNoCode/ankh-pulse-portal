
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group } from 'three';

const AnkhGeometry = () => {
  const meshRef = useRef<Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotação suave e fluida
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      
      // Movimento de respiração (scale)
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
      meshRef.current.scale.setScalar(breathe);
    }
  });

  return (
    <group ref={meshRef}>
      {/* Círculo superior da cruz ANKH */}
      <mesh position={[0, 1.5, 0]}>
        <torusGeometry args={[0.6, 0.15, 16, 32]} />
        <meshStandardMaterial 
          color="#7f9cff" 
          emissive="#4f46e5" 
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Haste vertical */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 3, 0.3]} />
        <meshStandardMaterial 
          color="#7f9cff" 
          emissive="#4f46e5" 
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Haste horizontal */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 0.3, 0.3]} />
        <meshStandardMaterial 
          color="#7f9cff" 
          emissive="#4f46e5" 
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

const AnkhSymbol3D = () => {
  return (
    <div className="w-48 h-48 mx-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        {/* Iluminação */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          color="#ffffff"
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.5}
          color="#7f9cff"
        />
        
        {/* Componente ANKH */}
        <AnkhGeometry />
      </Canvas>
    </div>
  );
};

export default AnkhSymbol3D;
