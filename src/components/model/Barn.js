import React from "react";
import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

function Barn(props) {

    const GLTFModel = ({ modelPath }) => {
        const gltf = useGLTF(modelPath, true);
        return <primitive object={gltf.scene} dispose={null} />;
    }

    // use api to affect box properties
    const [ref] = useBox(() => ({ 
        position: [1, 3.8, -5],
        rotation:[0,12,0]
    }));
    return (
        <mesh ref={ref}  scale={5}>
            <GLTFModel modelPath="/models/red_barn_pbr/scene.gltf" />
        </mesh>
    )
}

export default Barn
