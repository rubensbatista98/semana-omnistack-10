import React, { useContext } from "react";

import FormSignIn from "../../components/FormSignIn";
import DevItem from "../../components/DevItem";
import { DevContext } from "../../context/DevContext";

import "./styles.css";

function Register() {
  const [devs] = useContext(DevContext);

  return (
    <section className="register-section">
      <aside className="sidebar">
        <strong className="title">Cadastrar</strong>

        <FormSignIn />
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
