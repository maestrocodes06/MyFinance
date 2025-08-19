import React from 'react'
import Navbar from "./components/Navbar.jsx"
import { Routes, Route } from "react-router-dom"; 
import { Dashboard, Portfolio, Market, Reports, Notification, Profile, Settings } from "./components/pages"

const App = () => {
  return (
    <div className="flex">
      <Navbar/>
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Market" element={<Market />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
