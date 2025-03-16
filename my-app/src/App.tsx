import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import viteLogo from './assets/vite.svg';
import reactLogo from './assets/react.svg';
import Create from './components/Create'; // Adjust the path as necessary
import Home from './components/Home'; // Adjust the path as necessary
import Read from './components/Read'; // Add this import
import Update from './components/Update'; // Add this import

function App() {

  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<Create />} />
    <Route path="/read/:id" element={<Read />} />
    <Route path="/update/:id" element={<Update />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
