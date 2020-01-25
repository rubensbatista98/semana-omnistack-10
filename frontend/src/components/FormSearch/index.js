import React, { useState, useContext } from "react";
import { MyLocation } from "@material-ui/icons";

import { MapContext } from "../../context/MapContext";

import "./styles.css";

const FormSearch = ({ loadDevs }) => {
  const [viewport] = useContext(MapContext);
  const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const { latitude, longitude } = viewport;

    loadDevs({ techs: search, latitude, longitude });
  }

  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Buscar devs por techs..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <button type="submit" className="btn-search">
        <MyLocation fontSize="inherit" />
      </button>
    </form>
  );
};

export default FormSearch;
