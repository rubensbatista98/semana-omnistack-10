import React, { useState, useEffect } from "react";

import SidebarApp from "./components/SidebarApp";
import Main from "./components/Main";

import api from "./services/api";

import "./global.css";
import "./App.css";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, [devs]);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <SidebarApp handleAddDev={handleAddDev} />

      <Main devs={devs} />
    </div>
  );
}

export default App;
