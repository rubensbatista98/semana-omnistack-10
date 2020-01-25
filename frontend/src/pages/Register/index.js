import React from "react";

import SidebarApp from "../../components/SidebarApp";
import Main from "../../components/Main";

function Register({ handleAddDev, devs }) {
  return (
    <>
      <SidebarApp handleAddDev={handleAddDev} />

      <Main devs={devs} />
    </>
  );
}

export default Register;
