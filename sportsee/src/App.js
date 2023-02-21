import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Home from './pages/Home'
import User from './pages/User'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <SideBar />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/user/:id" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
