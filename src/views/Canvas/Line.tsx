import './Canvas.scss';
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'


function Line(props: JSX.IntrinsicElements['mesh']) {
  
  const ref = useRef<THREE.Mesh>(null!)

  return (
    <mesh 
      {...props}
      ref={ref}>
      <cylinderGeometry args={[0.1, 0.1, 4, 60]} />
      <meshStandardMaterial color={'black'} />
    </mesh>
  );
}

export default Line;
