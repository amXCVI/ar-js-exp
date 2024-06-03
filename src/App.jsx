// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import "aframe";
import { useEffect, useState } from "react";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

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
    <a-scene>
      <a-assets>
        <a-asset-item
          id="glbtestmodel"
          src="https://cdn.glitch.com/90a30469-f038-4054-be9c-fd1ec94a810d%2Fkitchentest.glb"
        ></a-asset-item>
      </a-assets>

      <a-entity
        id="glbtest"
        gltf-model="#glbtestmodel"
        position="0 1 -2"
      ></a-entity>
    </a-scene>

    // <div style={{ width: "100vw", height: "100dvh", background: "red" }}></div>
    // <a-scene
    //   embedded
    //   arjs
    //   renderer="logarithmicDepthBuffer: true;"
    //   vr-mode-ui="enabled: false"
    //   gesture-detector
    //   id="scene"
    // >
    //   <a-marker
    //     type="pattern"
    //     preset="custom"
    //     url="pattern/ifgi-pattern.patt"
    //     id="ifgi-marker"
    //   ></a-marker>
    //   <a-entity
    //     position="0 0 0"
    //     scale="0.5 0.5 0.5"
    //     gps-entity-place={`latitude: ${currentLocation.latitude}; longitude: ${currentLocation.longitude};`}
    //     gltf-model="/rabbit.glb"
    //   ></a-entity>
    //   <a-camera
    //     // gps-camera={`simulateLatitude: ${currentLocation.latitude}; simulateLongitude: ${currentLocation.longitude};`}
    //     gps-camera
    //     rotation-reader
    //     id="camera"
    //   />
    // </a-scene>

    // <a-scene
    //   embedded
    //   arjs
    //   // vr-mode-ui="enabled: false"
    //   // arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
    //   // device-orientation-permission-ui="enabled: false"
    // >
    //   <div
    //     style={{
    //       position: "fixed",
    //       top: 0,
    //       left: 0,
    //       right: 0,
    //       width: "100vw",
    //       background: "red",
    //       zIndex: 1,
    //       whiteSpace: "nowrap",
    //       textAlign: "center",
    //     }}
    //   >
    //     LAT: {currentLocation?.latitude}
    //     <br />
    //     LNG: {currentLocation?.longitude}
    //   </div>
    //   <a-marker preset="hiro">
    //     <a-entity
    //       position="0 0 0"
    //       scale="0.05 0.05 0.05"
    //       gltf-model="/rabbit.glb"
    //     ></a-entity>
    //   </a-marker>
    //   <a-entity camera></a-entity>
    //   {/* {currentLocation ? (
    //     <a-text
    //       value="This content will always face you."
    //       look-at="[gps-camera]"
    //       scale="120 120 120"
    //       gps-entity-place={`latitude: ${
    //         currentLocation?.latitude ?? 0
    //       }; longitude: ${currentLocation?.longitude ?? 0};`}
    //     ></a-text>
    //   ) : (
    //     <div>LOADING...</div>
    //   )}
    //   <a-camera gps-camera rotation-reader></a-camera> */}
    // </a-scene>
  );
}

export default App;
