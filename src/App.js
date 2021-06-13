import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import { OrbitControls, Stars } from "@react-three/drei";
import "./styles.css";

// Import Model Components
import Grass from './components/model/Grass';
import Box from './components/model/Box';
import Plane from './components/model/Plane';
import Cow from './components/model/Cow';
import Barn from './components/model/Barn';

// Import Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar.js';
import Footer from './components/Footer.js';

export default function App() {
  // Canvas only contain the react-three-fiber elements
  return (
    <>
      <NavigationBar />
      <div className="canvas">
        <Canvas >
          <Suspense fallback={null} >
            <OrbitControls />
            <Stars />
            <ambientLight intensity={1} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Physics>
              <Barn/>
              <Cow />
              <Plane />
            </Physics>
          </Suspense>
        </Canvas>
      </div>
      <Footer />
    </>
  );
}
