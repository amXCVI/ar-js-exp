// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import "aframe";
import { useEffect, useState } from "react";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

function App() {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      (err) => console.log(err)
    );
  }, []);

  return (
    // <div style={{ width: "100vw", height: "100dvh", background: "red" }}></div>
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
        gps-entity-place={`latitude: ${currentLocation.latitude}; longitude: ${currentLocation.longitude};`}
        gltf-model="/rabbit.glb"
      ></a-entity>
      <a-camera
        // gps-camera={`simulateLatitude: ${currentLocation.latitude}; simulateLongitude: ${currentLocation.longitude};`}
        gps-camera
        rotation-reader
        id="camera"
      />
    </a-scene>
  );
}

export default App;
