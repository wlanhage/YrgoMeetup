import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Reg from "./pages/Reg.jsx";
import CompanyReg from "./pages/CompanyReg.jsx";
import CompanyCard from "./pages/CompanyCard.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Login from "./pages/Login.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import CompanysPage from "./components/CompanysPage.jsx";
import Companys from "./pages/Companys.jsx";
import Menu from "./components/Menu.jsx";
import BurgerMenu from "./pages/BurgerMenu.jsx";
import CompanyRegForm from "./components/CompanyRegForm.jsx";
import CookiePopup from "./components/CookiePopup.jsx";
import CompanyCardDesign from "./components/CompanyCardDesign.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Reg />} />
          <Route path="/Company" element={<CompanyReg />} />
          <Route path="/CompanyCardDesign" element={<CompanyCardDesign />} />
          <Route path="/Login" element={<Login/>} /> 
          <Route path="/UserDashboard" element={<UserProfilePage/>} />
          <Route path="/CompanyCard" element={<CompanyCard />} /> 
          <Route path="/Companys" element={<Companys />} />
          <Route path="/BurgerMenu" element={<BurgerMenu />} />
          <Route path="/CookiePopup" element={<CookiePopup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
