import React, { useState, createContext } from "react";

const MapContext = createContext();

const MapProvider = ({ children }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: -23.6517949,
    longitude: -46.7962413,
    zoom: 15
  });

  return (
    <MapContext.Provider value={[viewport, setViewport]}>
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapProvider };
