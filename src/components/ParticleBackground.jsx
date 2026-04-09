import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 1. THIS IS THE LOGIC (Must stay inside Canvas)
function ParticleField() {
  const meshRef = useRef();
  const count = 1000;

  // Create the data for the particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        t: Math.random() * 100,
        factor: 20 + Math.random() * 100,
        speed: 0.01 + Math.random() / 200,
        xFactor: -50 + Math.random() * 100,
        yFactor: -50 + Math.random() * 100,
        zFactor: -50 + Math.random() * 100,
      });
    }
    return temp;
  }, [count]);

  // The Animation Loop
  useFrame((state) => {
    if (!meshRef.current) return;
    
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      particle.t += speed / 2;
      const curT = particle.t;
      
      const dummy = new THREE.Object3D();
      dummy.position.set(
        xFactor + Math.cos(curT / 10) * factor,
        yFactor + Math.sin(curT / 10) * factor,
        zFactor + Math.cos(curT / 10) * factor
      );
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#00F5FF" transparent opacity={0.3} />
    </instancedMesh>
  );
}

// 2. THIS IS THE WORLD (The wrapper)
export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0A0A0F] pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 50], fov: 75 }}
        gl={{ antialias: false, alpha: true }} // Performance boost
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}