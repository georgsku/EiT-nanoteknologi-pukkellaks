import './Canvas.scss';
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import Sphere from './Sphere';
import Line from './Line';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



function Scene() {
  
  return (
    <Canvas >
      <ambientLight intensity={0.9} />
      <pointLight intensity={1.12} position={[10, 10, 10]} />
      <Sphere position={[-1.2, 0, 0]}/>
      <Sphere position={[1.2, 0, 0]}/>
      <Line position={[1.2, 2.5, 0]}/>
    </Canvas>
  );
}

export default Scene;
