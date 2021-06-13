import React, { useRef, useState } from "react";
import { useFrame } from '@react-three/fiber'
import { useCylinder } from "@react-three/cannon";


function Grass(props) {
  const [ref] = useCylinder(() => ({
    rotation: [0,0,0],
    position:[0,-.39,0]
  }));

  return (
    <mesh rotation={[0,0,0]} ref={ref}>
      <cylinderGeometry attach="geometry" args={[9, 9, 1,8]} />
      <meshLambertMaterial attach="material" color="green" />
    </mesh>
  )
}


export default Grass
