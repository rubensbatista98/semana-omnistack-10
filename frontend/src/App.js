import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Register from "./pages/Register";

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
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            path="/register"
            component={() => (
              <Register handleAddDev={handleAddDev} devs={devs} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
