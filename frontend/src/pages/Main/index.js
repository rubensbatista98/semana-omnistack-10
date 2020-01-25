import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Assignment } from "@material-ui/icons";

import { MapProvider } from "../../context/MapContext";
import Map from "../../components/Map";
import FormSearch from "../../components/FormSearch";

import api from "../../services/api";
import { connect, disconnect, subscribeToNewDevs } from "../../services/socket";

import "./styles.css";

function Main() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]));
  }, [devs]);

  function setupWebsocket(latitude, longitude, techs) {
    disconnect();

    connect(latitude, longitude, techs);
  }

  async function loadDevs({ techs, latitude, longitude }) {
    const response = await api.get("/search", {
      params: {
        latitude,
        longitude,
        techs
      }
    });

    setDevs(response.data.devs);
    setupWebsocket(latitude, longitude, techs);
  }

  return (
    <main>
      <MapProvider>
        <FormSearch loadDevs={loadDevs} />
        <Map width="100%" height="100vh" devs={devs} />
      </MapProvider>

      <Link to="/register" className="action">
        <Assignment fontSize="inherit" />
      </Link>
    </main>
  );
}

export default Main;
