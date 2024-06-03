import "aframe";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <a-scene
      embedded
      arjs
      renderer="logarithmicDepthBuffer: true;"
      vr-mode-ui="enabled: false"
      gesture-detector
      id="scene"
    >
      <a-marker
        type="pattern"
        preset="custom"
        url="pattern/ifgi-pattern.patt"
        id="ifgi-marker"
      ></a-marker>
      <a-entity
        position="0 0 0"
        scale="0.5 0.5 0.5"
        gps-entity-place="latitude: <lat>; longitude: <lon>;"
        gltf-model="/rabbit.glb"
      ></a-entity>
      <a-camera
        gps-camera="simulateLatitude: <lat>; simulateLongitude: <lon>;"
        rotation-reader
        id="camera"
      />
    </a-scene>
  );
}

export default App;
