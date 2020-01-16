import React, { useState, useEffect } from "react";

import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [devs, setDevs] = useState([]);
  const [githubUsername, setGithubUsername] = useState("");
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

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, [devs]);

  async function handleAddDev(event) {
    event.preventDefault();

    const response = await api.post("/devs", {
      github_username: githubUsername,
      techs,
      latitude,
      longitude
    });

    setGithubUsername("");
    setTechs("");

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside className="sidebar-app">
        <strong className="title">Cadastrar</strong>

        <form className="form-signin" onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              type="text"
              name="github_username"
              id="github_username"
              value={githubUsername}
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
      </aside>

      <main>
        <ul className="devs-list">
          {devs.map(dev => (
            <li className="dev-item" key={dev._id}>
              <header>
                <img src={dev.avatar_url} alt={`Avatar do ${dev.name}`} />

                <div className="dev-info">
                  <strong className="name">{dev.name}</strong>
                  <span className="techs">{dev.techs.join(", ")}</span>
                </div>
              </header>

              <p className="bio"> {dev.bio}</p>

              <a
                href={`https://github.com/${dev.github_username}`}
                className="action"
              >
                Acessar perfil no GitHub
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
