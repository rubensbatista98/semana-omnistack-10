import React from "react";

import FormSignIn from "../FormSignIn";

import "./style.css";

const SidebarApp = ({ handleAddDev }) => (
  <aside className="sidebar-app">
    <strong className="title">Cadastrar</strong>

    <FormSignIn onSubmit={handleAddDev} />
  </aside>
);

export default SidebarApp;
