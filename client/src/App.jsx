import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Reg from "./pages/Register.jsx";
import CompanyReg from "./pages/CompanyReg.jsx";
import CompanyCard from "./pages/CompanyCard.jsx";
import UserProfile from "./pages/UserCreateProfile.jsx";
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
import UserCreateProfile from "./pages/UserCreateProfile.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Company" element={<CompanyReg />} />
          <Route path="/CompanyCardDesign" element={<CompanyCardDesign />} />
          <Route path="/Login" element={<Login/>} /> 
          <Route path="/UserDashboard" element={<UserDashboard/>} />
          <Route path="/CompanyCard" element={<CompanyCard />} /> 
          <Route path="/Companys" element={<Companys />} />
          <Route path="/BurgerMenu" element={<BurgerMenu />} />
          <Route path="/CookiePopup" element={<CookiePopup />} />
          <Route path="/UserCreateProfile" element={<UserCreateProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
