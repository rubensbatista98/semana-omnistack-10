import React, { useState, useEffect, useContext } from "react";

import { DevContext } from "../../context/DevContext";

import api from "../../services/api";

import "./styles.css";

const FormSignIn = () => {
  const [devs, setDevs] = useContext(DevContext);

  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(error);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const newDev = { github_username, techs, latitude, longitude };

    const response = await api.post("/devs", newDev);

    setDevs([...devs, response.data]);

    setGithubUsername("");
    setTechs("");
  }

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input
          type="text"
          name="github_username"
          id="github_username"
          value={github_username}
          onChange={event => setGithubUsername(event.target.value)}
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          type="text"
          name="techs"
          id="techs"
          value={techs}
          onChange={event => setTechs(event.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="text"
            name="latitude"
            id="latitude"
            value={latitude}
            onChange={event => setLatitude(event.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="text"
            name="longitude"
            id="longitude"
            value={longitude}
            onChange={event => setLongitude(event.target.value)}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn-signin">
        Salvar
      </button>
    </form>
  );
};

export default FormSignIn;
