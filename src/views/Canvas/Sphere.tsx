import './Canvas.scss';
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'


function Sphere(props: JSX.IntrinsicElements['mesh']) {
  
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if(ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh 
      {...props}
      ref={ref}>
      <sphereGeometry args={[1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}

export default Sphere;
