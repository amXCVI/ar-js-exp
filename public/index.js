window.onload = () => {
  let testEntitiesAdded = false;
  alert(
    "If testing the lat/lon manual input on a mobile device, please turn off your GPS to avoid the real location being detected."
  );
  const el = document.querySelector("[gps-new-camera]");
  el.addEventListener("gps-camera-update-position", (e) => {
    if (!testEntitiesAdded) {
      alert(
        `Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`
      );
      // Add four boxes to the north (red), south (yellow), west (blue)
      // and east (red) of the initial GPS position

      const entity = document.getElementById("rabbit-entity");

      if (entity) {
        entity.setAttribute("gps-entity-place", {
          latitude: e.detail.position.latitude + 0.0001,
          longitude: e.detail.position.longitude + 0.0001,
        });
      }
    }
    testEntitiesAdded = true;
  });
};
