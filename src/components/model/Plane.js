import React from "react";
import { useCylinder, usePlane } from "@react-three/cannon";

function Plane(props) {
    const [ref] = useCylinder(() => ({
      rotation: [-Math.PI, 0, 0]
    }));
  
    return (
      <mesh rotation={[-Math.PI, 0, 0]}>
        <cylinderGeometry attach="geometry" args={[14,12,2,10]} />
        <meshLambertMaterial attach="material" color="green" />
      </mesh>
    )
  }

export default Plane
