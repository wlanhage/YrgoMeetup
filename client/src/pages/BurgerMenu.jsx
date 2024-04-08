import React from "react";
import CompanysPage from "../components/CompanysPage.jsx";
import Navbar from "../components/Navbar.jsx";
import Menu from "../components/Menu.jsx";

function burgerMenu() {
  return (
    <div>
      <Navbar />
      <Menu />
    </div>
  );
}

export default burgerMenu;
