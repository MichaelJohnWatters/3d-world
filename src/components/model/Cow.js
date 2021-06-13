import React from "react";
import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";

function Cow(props) {

    const GLTFModel = ({ modelPath }) => {
        const gltf = useGLTF(modelPath, true);
        return <primitive object={gltf.scene} dispose={null} />;
    }

    // use api to affect box properties
    const [ref, api] = useBox(() => ({ mass: 2, position: [0, 2, 0] }));
    return (
        <mesh ref={ref} position={[0, 2, 0]} scale={0.01} onClick={() => {
            api.velocity.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
        }} >
            <GLTFModel modelPath="/models/cow/scene.gltf" />
        </mesh>
    )
}

export default Cow
