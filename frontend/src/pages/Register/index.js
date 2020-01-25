import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Room } from "@material-ui/icons";

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

      <Link to="/" className="action">
        <Room fontSize="inherit" />
      </Link>
    </section>
  );
}

export default Register;
