import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, Environment } from '@react-three/drei';

// Robot Head Model Component
const RobotHeadModel = ({ scrollY }) => {
  const { scene } = useGLTF('/src/assets/models/robohead.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      // Rotate based on scroll position
      modelRef.current.rotation.y = scrollY * 0.001;
      modelRef.current.rotation.x = scrollY * 0.0003;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      position={[3, 2, -2]}
      scale={[0.15, 0.15, 0.15]}
    />
  );
};

// Main Background Component
const RobotHeadBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="robot-head-background">
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          background: 'transparent'
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#00ffff" />
        <pointLight position={[0, 5, 0]} intensity={0.8} color="#ff00ff" />
        
        {/* Environment for better lighting */}
        <Environment preset="city" />
        
        {/* Robot Head Model */}
        <RobotHeadModel scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default RobotHeadBackground;
