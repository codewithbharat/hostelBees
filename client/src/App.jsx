import './App.css'
import { Routes, Route } from "react-router-dom";

import { Home, About, Contact, Login, Register, NotFound } from "./pages";
import { InstDashboard, InstHostel, InstStudents, InstProfile } from "./inst"


function App() {

  return (
    <div className="App">
      <Routes>

        {/* normal routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />

        {/* inst routes */}
        <Route path="/inst/dashboard" element={<InstDashboard />} />
        <Route path="/inst/hostels" element={<InstHostel />} />
        <Route path='/inst/students' element={<InstStudents />} />
        <Route path='/inst/profile' element={<InstProfile />} />


        {/* notfound page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
