import { useMemo } from "react";

import { GoogleMap } from "@react-google-maps/api";
function Map() {
  const center = { lat: 19, lng: -99 };
  const options = useMemo(
    () => ({
      mapId: "4de08ae003fba268",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  return (
    <div>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
        options={options}
      ></GoogleMap>
    </div>
  );
}

export default Map;
