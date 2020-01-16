import React from "react";

import DevItem from "../DevItem";

import "./style.css";

const Main = ({ devs }) => (
  <main>
    <ul className="devs-list">
      {devs.map(dev => (
        <DevItem key={dev._id} dev={dev} />
      ))}
    </ul>
  </main>
);

export default Main;
