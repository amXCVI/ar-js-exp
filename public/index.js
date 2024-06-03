window.onload = () => {
  let testEntitiesAdded = false;

  alert(
    "If testing the lat/lon manual input on a mobile device, please turn off your GPS to avoid the real location being detected."
  );

  const el = document.getElementById("gps-camera-id");

  if (!el) {
    const posDisplay = document.getElementById("position-display");

    posDisplay.textContent = "NOT FOUND CAMERA";
  } else {
    el.addEventListener("gps-camera-update-position", (e) => {
      // eslint-disable-next-line no-constant-condition
      if (true) {
        alert(
          `Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`
        );

        const entity = document.getElementById("rabbit-entity");
        const posDisplay = document.getElementById("position-display");

        if (entity && posDisplay) {
          entity.setAttribute("gps-entity-place", {
            latitude: e.detail.position.latitude + 0.0001,
            longitude: e.detail.position.longitude + 0.0001,
          });

          posDisplay.textContent = JSON.stringify({
            latitude: e.detail.position.latitude + 0.0001,
            longitude: e.detail.position.longitude + 0.0001,
          });

          testEntitiesAdded = true;
        }
      }
    });
  }
};
