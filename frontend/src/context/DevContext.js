import React, { useState, useEffect, createContext } from "react";

import api from "../services/api";

const DevContext = createContext();

const DevProvider = ({ children }) => {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, [devs]);

  return (
    <DevContext.Provider value={[devs, setDevs]}>
      {children}
    </DevContext.Provider>
  );
};

export { DevContext, DevProvider };
