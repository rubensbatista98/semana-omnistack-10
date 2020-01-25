import React from "react";

import FormSignIn from "../../components/FormSignIn";
import DevItem from "../../components/DevItem";

import "./styles.css";

function Register({ handleAddDev, devs }) {
  return (
    <section className="register-section">
      <aside className="sidebar">
        <strong className="title">Cadastrar</strong>

        <FormSignIn onSubmit={handleAddDev} />
      </aside>

      <section className="devs-section">
        <ul className="devs-list">
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Register;
