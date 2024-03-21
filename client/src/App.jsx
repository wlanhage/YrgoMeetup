
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx';
import Reg from './pages/reg.jsx';
import CompanyReg from './pages/CompanyReg.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (

    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );

    <div className="App">
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/reg' element={<Reg/>} />
         <Route path='/Company' element={<CompanyReg/>} />
       </Routes>
     </div>
  )

}

export default App;
