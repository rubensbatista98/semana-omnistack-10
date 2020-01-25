import React, { useState } from "react";
import MapGL, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./styles.css";

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const MAX_ZOOM = 18;
const MIN_ZOOM = 5;

const devs = [
  {
    _id: 2,
    location: {
      coordinates: [-46.801004000000006, -23.649491899999997]
    },
    avatar_url: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4",
    name: "Diego Fernandes",
    github_username: "diego3g",
    bio: "Alguma coisa legal",
    techs: ["ReactJS", "NodeJS"]
  }
];

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
  );
};

export default Map;
