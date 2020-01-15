import React from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  return (
    <div id="app">
      <aside className="sidebar-app">
        <strong className="title">Cadastrar</strong>

        <form className="form-signin">
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              type="text"
              name="github_username"
              id="github_username"
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit" className="btn-signin">
            Salvar
          </button>
        </form>
      </aside>

      <main>
        <ul className="devs-list">
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
                alt="Imagem de Diego Fernandes"
              />

              <div className="dev-info">
                <strong className="name">Diego Fernandes</strong>
                <span className="techs">ReactJS, NodeJS, React Native</span>
              </div>
            </header>

            <p className="bio">
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de
              desenvolvimento web e mobile.
            </p>

            <a href="https://github.com/diego3g" className="action">
              Acessar perfil no GitHub
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
                alt="Imagem de Diego Fernandes"
              />

              <div className="dev-info">
                <strong className="name">Diego Fernandes</strong>
                <span className="techs">ReactJS, NodeJS, React Native</span>
              </div>
            </header>

            <p className="bio">
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de
              desenvolvimento web e mobile.
            </p>

            <a href="https://github.com/diego3g" className="action">
              Acessar perfil no GitHub
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
                alt="Imagem de Diego Fernandes"
              />

              <div className="dev-info">
                <strong className="name">Diego Fernandes</strong>
                <span className="techs">ReactJS, NodeJS, React Native</span>
              </div>
            </header>

            <p className="bio">
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de
              desenvolvimento web e mobile.
            </p>

            <a href="https://github.com/diego3g" className="action">
              Acessar perfil no GitHub
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
                alt="Imagem de Diego Fernandes"
              />

              <div className="dev-info">
                <strong className="name">Diego Fernandes</strong>
                <span className="techs">ReactJS, NodeJS, React Native</span>
              </div>
            </header>

            <p className="bio">
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de
              desenvolvimento web e mobile.
            </p>

            <a href="https://github.com/diego3g" className="action">
              Acessar perfil no GitHub
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
