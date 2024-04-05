import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Reg from "./pages/Reg.jsx";
import CompanyReg from "./pages/CompanyReg.jsx";
import CompanyCard from "./pages/CompanyCard.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import LoginForm from "./components/LoginForm.jsx";
import CompanysPage from "./components/CompanysPage.jsx";
import Companys from "./pages/Companys.jsx";
import Menu from "./components/Menu.jsx";
import BurgerMenu from "./pages/BurgerMenu.jsx";
import CompanyRegForm from "./components/CompanyRegForm.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reg" element={<Reg />} />
          <Route path="/Company" element={<CompanyReg />} />
          {/* <Route path="/UserProfile" element={<UserProfile />} /> */}
          <Route path="/CompanyCard" element={<CompanyCard />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/Companys" element={<Companys />} />
          <Route path="/BurgerMenu" element={<BurgerMenu />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
