import React, { useState } from "react";
import { MyLocation } from "@material-ui/icons";

import "./styles.css";

const FormSearch = () => {
  const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
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
