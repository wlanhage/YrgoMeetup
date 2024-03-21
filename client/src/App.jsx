import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Reg from "./pages/reg.jsx";
import CompanyReg from "./pages/CompanyReg.jsx";

import axios from 'axios'
axios.get('http://localhost:3000/visitors')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/Company" element={<CompanyReg />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
