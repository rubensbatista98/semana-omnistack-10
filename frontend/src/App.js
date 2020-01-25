import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Register from "./pages/Register";
import { DevProvider } from "./context/DevContext";

import "./global.css";

function App() {
  return (
    <div className="container">
      <DevProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </DevProvider>
    </div>
  );
}

export default App;
