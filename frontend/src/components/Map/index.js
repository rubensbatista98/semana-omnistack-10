import React, { useState } from "react";
import MapGL from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const MAX_ZOOM = 18;
const MIN_ZOOM = 5;

const Map = ({ width, height }) => {
  const [viewport, setViewport] = useState({
    width,
    height,
    latitude: -23.6517949,
    longitude: -46.7962413,
    zoom: 15
  });

  return (
    <MapGL
      {...viewport}
      minZoom={MIN_ZOOM}
      maxZoom={MAX_ZOOM}
      mapboxApiAccessToken={TOKEN}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={viewport => setViewport({ ...viewport })}
      onResize={() => setViewport({ ...viewport, width, height })}
    ></MapGL>
  );
};

export default Map;
