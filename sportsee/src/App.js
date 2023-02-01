import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes></Routes>
    </BrowserRouter>
  )
}

export default App
