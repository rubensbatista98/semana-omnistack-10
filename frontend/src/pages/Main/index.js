import React from "react";
import { Link } from "react-router-dom";
import { Assignment } from "@material-ui/icons";

import Map from "../../components/Map";

import "./styles.css";

function Main() {
  return (
    <main>
      <Map width="100%" height="100vh" />

      <Link to="/register" className="action">
        <Assignment fontSize="inherit" />
      </Link>
    </main>
  );
}

export default Main;
