import './App.css'

// importing react-router-dom 
import { Routes, Route } from "react-router-dom";

import { Home, About, Contact, Login, Register, NotFound } from "./pages";
import { InstDashboard } from "./inst"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />

        {/* inst routes */}
        <Route path="/inst/dashboard" element={<InstDashboard />} />



        {/* notfound page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
