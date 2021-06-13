import React from "react";
import { useBox } from "@react-three/cannon";

function Box(props) {
  // use api to affect box properties
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));

  return (
    <mesh ref={ref} onClick={() => {
      api.velocity.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
    }} position={[0, 2, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

export default Box
