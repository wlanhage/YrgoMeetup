import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx';
import Reg from './pages/reg.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/reg' element={<Reg/>} />
       </Routes>
     </div>
  )
}

export default App
