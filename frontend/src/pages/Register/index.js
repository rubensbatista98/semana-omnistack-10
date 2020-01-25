import React from "react";

import FormSignIn from "../../components/FormSignIn";
import Main from "../../components/Main";

import "./styles.css";

function Register({ handleAddDev, devs }) {
  return (
    <section className="register-section">
      <aside className="sidebar">
        <strong className="title">Cadastrar</strong>

        <FormSignIn onSubmit={handleAddDev} />
      </aside>

      <Main devs={devs} />
    </section>

    // <>
    //   <SidebarApp handleAddDev={handleAddDev} />

    //   <Main devs={devs} />
    // </>
  );
}

export default Register;
