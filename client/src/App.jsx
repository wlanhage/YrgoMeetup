import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Reg from "./pages/Reg.jsx";
import CompanyReg from "./pages/CompanyReg.jsx";
import CompanyCardDesign from "./pages/CompanyCardDesign.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import LoginForm from "./components/LoginForm.jsx";


function App() {
  
  return (
    <>
      <div className="App">
      
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/Reg" element={<Reg />} />
          <Route path="/Company" element={<CompanyReg />} />
          {/* <Route path="/UserProfile" element={<UserProfile />} /> */}
          <Route path="/CompanyCardDesign" element={<CompanyCardDesign />} />
          <Route path="/LoginForm" element={<LoginForm />} /> 
        </Routes>
        
      </div>
    </>
  );
}

export default App;
