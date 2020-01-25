import React from "react";

import "./style.css";

const DevItem = ({ dev }) => (
  <li className="dev-item">
    <header>
      <img src={dev.avatar_url} alt={`Avatar de ${dev.name}`} />

      <div className="dev-info">
        <strong className="name">{dev.name}</strong>
        <span className="techs">{dev.techs.join(", ")}</span>
      </div>
    </header>

    <p className="bio"> {dev.bio}</p>

    <a href={`https://github.com/${dev.github_username}`} className="action">
      Acessar perfil no GitHub
    </a>
  </li>
);

export default DevItem;
