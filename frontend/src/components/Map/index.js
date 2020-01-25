import React, { useContext } from "react";
import MapGL, { Marker } from "react-map-gl";
import { Add, Remove } from "@material-ui/icons";

import { MapContext } from "../../context/MapContext";

import "mapbox-gl/dist/mapbox-gl.css";
import "./styles.css";

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const MAX_ZOOM = 18;
const MIN_ZOOM = 5;

const Map = ({ width, height, devs }) => {
  const [viewport, setViewport] = useContext(MapContext);

  function zoomIn() {
    const { zoom } = viewport;

    if (zoom < MAX_ZOOM) {
      const newZoom = zoom + 1;

      setViewport(prev => ({ ...prev, zoom: newZoom }));
    }
  }

  function zoomOut() {
    const { zoom } = viewport;

    if (zoom > MIN_ZOOM) {
      const newZoom = zoom - 1;

      setViewport(prev => ({ ...prev, zoom: newZoom }));
    }
  }

  return (
    <>
      <MapGL
        {...viewport}
        minZoom={MIN_ZOOM}
        maxZoom={MAX_ZOOM}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        onViewportChange={viewport => setViewport({ ...viewport })}
        onResize={() => setViewport({ ...viewport, width, height })}
      >
        {devs.map(dev => (
          <Marker
            key={dev._id}
            longitude={dev.location.coordinates[0]}
            latitude={dev.location.coordinates[1]}
            className="dev-marker"
          >
            <img
              onClick={e => e.target.parentNode.classList.toggle("-show")}
              className="avatar"
              src={dev.avatar_url}
              alt={`Imagem de ${dev.name}`}
            />

            <div className="dev-infos">
              <a
                href={`https://github.com/${dev.github_username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="name">{dev.name}</p>
                <p className="bio">{dev.bio}</p>
                <p className="techs">{dev.techs.join(", ")}</p>
              </a>
            </div>
          </Marker>
        ))}
      </MapGL>

      <div className="zoom-container">
        <button type="button" onClick={zoomIn}>
          <Add fontSize="inherit" />
        </button>

        <button type="button" onClick={zoomOut}>
          <Remove fontSize="inherit" />
        </button>
      </div>
    </>
  );
};

export default Map;
